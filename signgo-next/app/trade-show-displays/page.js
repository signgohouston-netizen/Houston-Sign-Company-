import ServicePage from '@/components/ServicePage';
import { services } from '@/lib/services';

const data = services['trade-show-displays'];

export const metadata = {
  title: 'Trade Show Displays & Booths in Houston, TX | Sign Go',
  description:
    'Trade show displays in Houston — retractable banners, printed backdrops, custom table covers, table top displays, booths and exhibits. Design, production & installation. Call 281-814-1111.',
};

export default function Page() {
  return <ServicePage data={data} />;
}
