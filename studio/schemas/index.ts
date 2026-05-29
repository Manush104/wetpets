import { product } from './product';
import { contactInfo } from './contactInfo';
import { specialOffer } from './specialOffer';
import { service } from './service';
import { review } from './review';
import { faq } from './faq';
import { heroSection } from './heroSection';
import { aboutSection } from './aboutSection';
import { siteSettings } from './siteSettings';
import { pageSeo } from './pageSeo';

export const schemaTypes = [
  // Content
  product,
  specialOffer,
  service,
  review,
  faq,

  // Singletons (one document each)
  contactInfo,
  heroSection,
  aboutSection,
  siteSettings,

  // SEO
  pageSeo,
];
