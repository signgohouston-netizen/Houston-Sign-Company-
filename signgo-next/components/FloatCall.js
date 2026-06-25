import { site } from '@/lib/site';
import { PhoneIcon } from '@/lib/icons';

export default function FloatCall() {
  return (
    <a href={site.phoneHref} className="float-call" aria-label="Call Sign Go">
      <PhoneIcon />
    </a>
  );
}
