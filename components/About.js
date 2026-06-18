import { bg } from '@/lib/bg';

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container about__grid">
        <div className="about__media">
          <div
            className="about__img"
            style={bg('https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=900&q=80')}
          />
          <div className="about__badge">
            <strong>The Sign</strong>
            <span>Professionals</span>
          </div>
        </div>
        <div className="about__text">
          <span className="section-head__tag">Welcome to Sign Go</span>
          <h2>Signs Done Right, On Time &amp; On Budget</h2>
          <p>
            Sign Go is a full-service sign company proudly serving Houston and the surrounding Harris
            County area. From small businesses and restaurants to schools, churches, and large
            organizations, we help brands stand out with high-quality signage that gets noticed.
          </p>
          <p>
            Our team handles everything in-house — from the first sketch to the final install — so your
            project stays consistent, on schedule, and on budget. We sweat the details so your sign
            looks great and lasts for years.
          </p>
          <ul className="checklist">
            <li>Complete signage provider — design to installation</li>
            <li>Experienced, in-house design &amp; production team</li>
            <li>Durable materials built for Texas weather</li>
            <li>Local Houston service with fast turnaround</li>
          </ul>
          <a href="#contact" className="btn btn--primary">Request a Free Consultation</a>
        </div>
      </div>
    </section>
  );
}
