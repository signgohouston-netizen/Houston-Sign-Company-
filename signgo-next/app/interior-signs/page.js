import ServicePage from '@/components/ServicePage';
import { services } from '@/lib/services';

const data = services['interior-signs'];

export const metadata = {
  title: 'Indoor Signs in Houston, TX',
  description:
    'Custom indoor signs in Houston — lobby & reception signs, dimensional letters, wall graphics, wayfinding, ADA & office signs. Design, production & installation. Call 281-814-1111.',
};

export default function Page() {
  return <ServicePage data={data} />;
}
