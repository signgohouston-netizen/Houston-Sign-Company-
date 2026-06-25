import Anthropic from '@anthropic-ai/sdk';
import { MODEL, SYSTEM_PROMPT, SEND_TOOL } from '@/lib/assistant';

// Run as a Node serverless function on Vercel.
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const MAX_MESSAGES = 24; // cap conversation length (abuse/cost guard)
const MAX_CHARS = 4000; // cap per-message length

function extractText(message) {
  return (message.content || [])
    .filter((b) => b.type === 'text')
    .map((b) => b.text)
    .join('\n')
    .trim();
}

// Forward a captured lead to the owner via Formspree (same service as the
// contact form). Set SIGNGO_FORMSPREE_ID in your environment to enable email.
async function sendLead(input) {
  const id = process.env.SIGNGO_FORMSPREE_ID;
  if (!id) return { ok: false, reason: 'not_configured' };
  try {
    const res = await fetch(`https://formspree.io/f/${id}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        _subject: `New website chat lead — ${input.name || 'Visitor'}`,
        name: input.name || '',
        phone: input.phone || '',
        email: input.email || '',
        message: input.summary || '',
        source: 'AI Assistant (website chat)',
      }),
    });
    return { ok: res.ok };
  } catch {
    return { ok: false, reason: 'error' };
  }
}

// Validate and normalize the messages coming from the browser.
function cleanMessages(raw) {
  if (!Array.isArray(raw)) return null;
  const msgs = raw
    .filter((m) => m && (m.role === 'user' || m.role === 'assistant') && typeof m.content === 'string')
    .slice(-MAX_MESSAGES)
    .map((m) => ({ role: m.role, content: m.content.slice(0, MAX_CHARS) }));
  if (!msgs.length || msgs[msgs.length - 1].role !== 'user') return null;
  return msgs;
}

export async function POST(req) {
  const FALLBACK =
    "Sorry — I'm having trouble right now. Please call us at 281-814-1111 or use the contact form and we'll get right back to you.";

  if (!process.env.ANTHROPIC_API_KEY) {
    return Response.json({ reply: FALLBACK, error: true });
  }

  let messages;
  try {
    const body = await req.json();
    messages = cleanMessages(body.messages);
  } catch {
    messages = null;
  }
  if (!messages) {
    return Response.json({ reply: 'Please type a message and try again.', error: true });
  }

  const client = new Anthropic();

  try {
    const first = await client.messages.create({
      model: MODEL,
      max_tokens: 700,
      system: SYSTEM_PROMPT,
      tools: [SEND_TOOL],
      messages,
    });

    // If the model decided to forward a lead, run the tool, then ask it to reply.
    if (first.stop_reason === 'tool_use') {
      const toolUse = first.content.find((b) => b.type === 'tool_use');
      const result = await sendLead(toolUse.input || {});

      const followup = await client.messages.create({
        model: MODEL,
        max_tokens: 400,
        system: SYSTEM_PROMPT,
        tools: [SEND_TOOL],
        messages: [
          ...messages,
          { role: 'assistant', content: first.content },
          {
            role: 'user',
            content: [
              {
                type: 'tool_result',
                tool_use_id: toolUse.id,
                content: result.ok
                  ? 'The visitor details were sent to the Sign Go team successfully.'
                  : 'The details could not be emailed automatically — ask the visitor to call 281-814-1111 to be sure it reaches the team.',
                is_error: !result.ok,
              },
            ],
          },
        ],
      });

      return Response.json({ reply: extractText(followup) || FALLBACK, sent: result.ok });
    }

    return Response.json({ reply: extractText(first) || FALLBACK });
  } catch (err) {
    return Response.json({ reply: FALLBACK, error: true });
  }
}
