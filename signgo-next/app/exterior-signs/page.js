import ServicePage from '@/components/ServicePage';
import { services } from '@/lib/services';

const data = services['exterior-signs'];

export const metadata = {
  title: 'Outdoor & Exterior Signs in Houston, TX | Sign Go',
  description:
    'Outdoor signs in Houston — channel letters, monument signs, pylon & pole signs, storefront, cabinet, and illuminated signs. Design, production & installation. Call 281-814-1111.',
};

export default function Page() {
  return <ServicePage data={data} />;
}
