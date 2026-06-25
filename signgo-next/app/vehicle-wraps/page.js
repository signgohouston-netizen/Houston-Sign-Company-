import ServicePage from '@/components/ServicePage';
import { services } from '@/lib/services';

const data = services['vehicle-wraps'];

export const metadata = {
  title: 'Vehicle Wraps in Houston, TX | Sign Go',
  description:
    'Commercial vehicle wraps in Houston — full & partial wraps, fleet branding, truck, van & trailer wraps, vehicle lettering and decals. Design, production & installation. Call 281-814-1111.',
};

export default function Page() {
  return <ServicePage data={data} />;
}
