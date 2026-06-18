import Hero from '@/components/Hero';
import Trust from '@/components/Trust';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import OwnersBand from '@/components/OwnersBand';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import CtaBanner from '@/components/CtaBanner';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <div className="home">
      <Hero />
      <Trust />
      <Services />
      <Portfolio />
      <OwnersBand />
      <Process />
      <Testimonials />
      <CtaBanner />
      <Contact />
    </div>
  );
}
