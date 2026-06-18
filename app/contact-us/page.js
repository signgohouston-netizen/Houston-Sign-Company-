import PageHero from '@/components/PageHero';
import Contact from '@/components/Contact';

export const metadata = {
  title: 'Contact Us — Free Quote',
  description:
    'Contact Sign Go for a free quote on custom signs, wraps, and graphics in Houston. Call 281-814-1111, email Info@signgotx.com, or visit 9900 Wilcrest Dr, Houston, TX 77099.',
};

export default function Page() {
  return (
    <>
      <PageHero
        title="Contact Us"
        sub="Have a question or ready to start? We’d love to hear from you."
        img="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1400&q=80"
      />
      <Contact />
    </>
  );
}
