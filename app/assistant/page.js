import PageHero from '@/components/PageHero';
import ChatAssistant from '@/components/ChatAssistant';

export const metadata = {
  title: 'AI Assistant — Ask Sign Go Anything',
  description:
    'Chat with the Sign Go AI assistant — get instant answers about signs, LED displays, vehicle wraps, pricing, and service areas, or request a free quote 24/7.',
  alternates: { canonical: '/assistant/' },
};

export default function AssistantPage() {
  return (
    <>
      <PageHero
        title="AI Assistant"
        sub="Instant answers • Free quotes • Available 24/7"
        img="/media_assets/led/led-indoor-video-wall.jpg"
      />

      <section className="assistant">
        <div className="container assistant__inner">
          <div className="section-head">
            <span className="section-head__tag">Ask Us Anything</span>
            <h2>Chat With the Sign Go Assistant</h2>
            <p>
              Get quick answers about our signs, services, and service areas — or share your project
              and we&apos;ll send your details straight to our team for a free quote.
            </p>
          </div>
          <ChatAssistant />
        </div>
      </section>
    </>
  );
}
