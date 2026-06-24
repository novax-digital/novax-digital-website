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
  // TODO: Finale Impressumsadresse juristisch/geschaeftlich pruefen.
  address: {
    street: 'Schierholzstr. 27',
    postalCode: '30655',
    city: 'Hannover',
  },
  // TODO: Finale zentrale Novax-Telefonnummer ergaenzen, falls vorhanden.
  phone: null,
  email: 'info@novax-digital.de', // TODO: Finale zentrale Novax-E-Mail pruefen.
  domain: 'https://novax-digital.de',
};

export const mailtoHref = `mailto:${legalData.email}`;
