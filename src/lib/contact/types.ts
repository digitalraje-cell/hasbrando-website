export type ContactFormPayload = {
  name: string;
  email: string;
  phone: string;
  business: string;
  websiteUrl: string;
  services: string;
  revenue: string;
  challenge: string;
  message: string;
};

export type ContactApiBody = ContactFormPayload & {
  /** Honeypot — must be empty */
  fax?: string;
};
