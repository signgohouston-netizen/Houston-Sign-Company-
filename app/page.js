import Hero from '@/components/Hero';
import Trust from '@/components/Trust';
import Stats from '@/components/Stats';
import Clients from '@/components/Clients';
import Credentials from '@/components/Credentials';
import Services from '@/components/Services';
import NationwideBand from '@/components/NationwideBand';
import Features from '@/components/Features';
import Industries from '@/components/Industries';
import Portfolio from '@/components/Portfolio';
import OwnersBand from '@/components/OwnersBand';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import Faq from '@/components/Faq';
import CtaBanner from '@/components/CtaBanner';
import Contact from '@/components/Contact';
import { homeFaqs } from '@/lib/faqs';

export default function Home() {
  return (
    <div className="home">
      <Hero />
      <Trust />
      <Stats />
      <Credentials />
      <Clients />
      <Services />
      <NationwideBand />
      <Features />
      <Industries />
      <Portfolio />
      <OwnersBand />
      <Process />
      <Testimonials />
      <Faq items={homeFaqs} heading="Frequently Asked Questions" />
      <CtaBanner />
      <Contact />
    </div>
  );
}
