export type LegalData = {
  company: string;
  managingDirectors: string[];
  registerCourt: string;
  registerNumber: string;
  vatId: string;
  address: {
    street: string;
    postalCode: string;
    city: string;
  };
  phone: string | null;
  email: string;
  domain: string;
};

export const legalData: LegalData = {
  company: 'Novax Digital GmbH',
  managingDirectors: ['Philipp Polley', 'Christoph Pfad'],
  registerCourt: 'Amtsgericht Hannover',
  registerNumber: 'HRB 220589',
  vatId: 'DE335613731',
  address: {
    street: 'Schierholzstr. 27',
    postalCode: '30655',
    city: 'Hannover',
  },
  phone: '0511-9012188-1',
  email: 'hello@novax-digital.de',
  domain: 'https://novax-digital.de',
};

export const mailtoHref = `mailto:${legalData.email}`;
