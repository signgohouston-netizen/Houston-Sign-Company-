import ServicePage from '@/components/ServicePage';
import { services } from '@/lib/services';

const data = services['vinyl-signs'];

export const metadata = {
  title: 'Vinyl Signs & Graphics in Houston, TX',
  description:
    'Custom vinyl signs in Houston — banners, decals, vinyl lettering, wall graphics & murals, window film, and floor graphics. Fast turnaround. Call 281-814-1111.',
};

export default function Page() {
  return <ServicePage data={data} />;
}
