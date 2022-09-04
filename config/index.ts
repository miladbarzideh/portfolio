import { contact, Contact } from './contact';
import { Accomplishment, accomplishments } from './accomplishments';

interface Config {
  contact: Contact;
  accomplishments: Accomplishment[];
}

const config: Config = {
  contact,
  accomplishments: accomplishments,
};

export const POSTS_PER_PAGE = 10;

export default config;
