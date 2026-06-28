import { site } from '@/lib/site';

// Trust badges: years in business, BBB accreditation, and Google rating.
// The Google badge only renders once you add real numbers/links in lib/site.js,
// so nothing inaccurate is ever shown.
export default function Credentials() {
  const star = (
    <svg viewBox="0 0 24 24" className="cred__star"><path d="M12 2l2.39 4.84L20 7.6l-3.8 3.7L17.1 16 12 13.4 6.9 16l.9-4.7L4 7.6l5.61-.76L12 2z" /></svg>
  );

  return (
    <section className="creds">
      <div className="container creds__row">
        <div className="cred">
          <strong>{site.yearsInBusiness}+ Years</strong>
          <span>In business since {site.founded}</span>
        </div>

        {site.bbbAccredited && (
          <a
            className="cred cred--link"
            href={site.bbbUrl || undefined}
            target={site.bbbUrl ? '_blank' : undefined}
            rel="noopener noreferrer"
          >
            <strong>BBB Accredited</strong>
            <span>Better Business Bureau</span>
          </a>
        )}

        {site.googleRating ? (
          <a
            className="cred cred--google"
            href={site.googleReviewsUrl || undefined}
            target={site.googleReviewsUrl ? '_blank' : undefined}
            rel="noopener noreferrer"
          >
            <strong>{star} {site.googleRating} on Google</strong>
            <span>{site.googleReviewCount ? `${site.googleReviewCount} reviews` : 'Google Business Profile'}</span>
          </a>
        ) : (
          site.googleReviewsUrl && (
            <a className="cred cred--google" href={site.googleReviewsUrl} target="_blank" rel="noopener noreferrer">
              <strong>{star} Rated on Google</strong>
              <span>Read our reviews</span>
            </a>
          )
        )}
      </div>
    </section>
  );
}
