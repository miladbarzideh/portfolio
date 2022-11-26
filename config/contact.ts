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
  twitter: '',
  site: 'https://miladbarzideh.com',
  calendly: 'https://www.linkedin.com/in/milad-barzideh',
  links: {
    github: 'https://github.com/miladbarzideh',
    linkedin: 'https://www.linkedin.com/in/milad-barzideh',
    twitter: '',
    youtube: '',
    email: 'mailto:barzidehmilad@gmail.com',
    buymeacoffee: '',
  },
};
