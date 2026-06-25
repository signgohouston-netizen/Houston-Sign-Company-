import ServicePage from '@/components/ServicePage';
import { services } from '@/lib/services';

const data = services['custom-signs'];

export const metadata = {
  title: 'Custom Signs in Houston, TX | Sign Go',
  description:
    'Custom signs in Houston — acrylic, metal, LED & lighted signs, digital signs, dimensional logos, and full storefront packages. Design, production & installation. Call 281-814-1111.',
};

export default function Page() {
  return <ServicePage data={data} />;
}
