import Link from 'next/link';
import { notFound } from 'next/navigation';
import CtaBanner from '@/components/CtaBanner';
import { site } from '@/lib/site';
import { posts, getPost, postsByDate, formatDate } from '@/lib/blog';

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const post = getPost(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}/` },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      images: [{ url: post.cover, alt: post.coverAlt }],
      publishedTime: post.date,
    },
  };
}

export default function BlogPost({ params }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const more = postsByDate.filter((p) => p.slug !== post.slug).slice(0, 3);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: `${site.url}${post.cover}`,
    datePublished: post.date,
    author: { '@type': 'Organization', name: site.name },
    publisher: { '@type': 'Organization', name: site.name, logo: { '@type': 'ImageObject', url: `${site.url}/assets/logo.png` } },
    mainEntityOfPage: `${site.url}/blog/${post.slug}/`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <article className="post">
        <div className="container post__inner">
          <p className="crumbs">
            <Link href="/">Home</Link> <span>/</span> <Link href="/blog">Blog</Link> <span>/</span> {post.title}
          </p>
          <span className="section-head__tag">{formatDate(post.date)} • {post.readMins} min read</span>
          <h1 className="post__title">{post.title}</h1>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="post__cover" src={post.cover} alt={post.coverAlt} />

          <div className="post__body">
            {post.sections.map((s, i) => (
              <div key={i}>
                {s.h && <h2>{s.h}</h2>}
                {s.p && s.p.map((para, j) => <p key={j}>{para}</p>)}
                {s.ul && (
                  <ul>
                    {s.ul.map((li, k) => <li key={k}>{li}</li>)}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <div className="post__cta">
            <Link href="/contact-us" className="btn btn--primary">Get a Free Quote</Link>
            <a href={site.phoneHref} className="btn btn--blue">Call {site.phone}</a>
          </div>
        </div>
      </article>

      <section className="svc-types" style={{ paddingTop: '20px' }}>
        <div className="container">
          <div className="section-head">
            <span className="section-head__tag">Keep Reading</span>
            <h2>More From the Blog</h2>
          </div>
          <div className="blog__grid">
            {more.map((p) => (
              <Link className="blog-card" href={`/blog/${p.slug}`} key={p.slug}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="blog-card__img" src={p.cover} alt={p.coverAlt} loading="lazy" />
                <div className="blog-card__body">
                  <span className="blog-card__meta">{formatDate(p.date)}</span>
                  <h3>{p.title}</h3>
                  <span className="svc-type__link">Read article →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
