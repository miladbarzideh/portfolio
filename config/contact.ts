export enum ContactType {
  github = 'github',
  linkedin = 'linkedin',
  twitter = 'twitter',
  youtube = 'youtube',
  email = 'email',
  buymeacoffee = 'buymeacoffee',
}

export interface Contact {
  twitter: string;
  site: string;
  calendly?: string;
  links: Record<ContactType, string>;
}

export const contact: Contact = {
  twitter: '@mimbe15',
  site: 'https://mimbe.vercel.app',
  calendly: 'https://www.linkedin.com/in/milad-barzideh-b2870868',
  links: {
    github: 'https://github.com/miladbarzideh',
    linkedin: 'https://www.linkedin.com/in/milad-barzideh-b2870868',
    twitter: 'https://twitter.com/mimbe15',
    youtube: '',
    email: 'mailto:barzidehmilad@gmail.com',
    buymeacoffee: '',
  },
};
