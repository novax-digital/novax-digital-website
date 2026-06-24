export type Project = {
  title: string;
  slug: string;
  url: string;
  category: string;
  description: string;
  tags: string[];
  cta: string;
  logo: string;
  logoAlt: string;
  accent: 'cyan' | 'violet' | 'mint' | 'amber';
};

export const projects: Project[] = [
  {
    title: 'Erfolg Buddies',
    slug: 'erfolg-buddies',
    url: 'https://erfolg-buddies.de/',
    category: 'Digitalagentur',
    description:
      '360 Grad Digitalagentur fuer Websites, WebApps, Online-Marketing, Recruiting, Employer Branding, SEO, Ads, Social Media und digitale Sichtbarkeit.',
    tags: ['Webdesign', 'WebApps', 'SEO', 'Ads', 'Recruiting', 'Employer Branding', 'Content'],
    cta: 'Erfolg Buddies ansehen',
    logo: '/assets/logos/erfolg-buddies.webp',
    logoAlt: 'Erfolg Buddies Logo',
    accent: 'cyan',
  },
  {
    title: 'Deutsche Pflegeentwicklung',
    slug: 'deutsche-pflegeentwicklung',
    url: 'https://deutsche-pflegeentwicklung.de/',
    category: 'Pflege / Foerderung / Personal',
    description:
      'Digitale Beratungs- und Umsetzungloesungen fuer Pflegeeinrichtungen mit Fokus auf Foerderberatung, Arbeitgeberaufbau, Personalgewinnung und digitale Prozesse.',
    tags: ['Pflege', 'Foerderung', 'Personal', 'Arbeitgebermarke', 'Beratung'],
    cta: 'DPE ansehen',
    logo: '/assets/logos/dpe-1024x683.webp',
    logoAlt: 'Deutsche Pflegeentwicklung Logo',
    accent: 'mint',
  },
  {
    title: 'Schulung Immobilienmakler',
    slug: 'schulung-immobilienmakler',
    url: 'https://schulung-immobilienmakler.de/',
    category: 'E-Learning / Schulungsportal',
    description:
      'Digitales Schulungsportal fuer Immobilienmakler und Darlehensvermittler zur flexiblen Online-Weiterbildung und Erfuellung gesetzlicher Weiterbildungspflichten.',
    tags: ['E-Learning', 'Portal', 'Immobilien', 'Weiterbildung', 'Zertifikat'],
    cta: 'Schulung ansehen',
    logo: '/assets/logos/schulungimmo-1024x683.webp',
    logoAlt: 'Schulung Immobilienmakler Logo',
    accent: 'violet',
  },
  {
    title: 'Passflow',
    slug: 'passflow',
    url: 'https://passflow.de/',
    category: 'SaaS / Security Tool',
    description:
      'Tool zum sicheren Teilen von Passwoertern, Dateien und vertraulichen Informationen ueber verschluesselte Links mit Ablauf- und Zugriffskontrolle.',
    tags: ['SaaS', 'Security', 'Verschluesselung', 'Passwort-Transfer', 'Teams'],
    cta: 'Passflow ansehen',
    logo: '/assets/logos/passflow-1024x683.webp',
    logoAlt: 'Passflow Logo',
    accent: 'amber',
  },
];
