import { Maybe, Tuple } from '../types';
import { Stack } from './stack';

export type Link = {
  web?: string;
  android?: string;
  ios?: string;
  credential?: string;
};

export const defaultDimensions: Tuple<number> = [450, 220];

export interface Accomplishment {
  title: string;
  slug: string;
  website: string;
  banner: string;
  description: string;
  shortDescription?: string;
  repository: Maybe<string>;
  stack: Stack[];
  dimensions?: Tuple<number>; // Tuple of [height, width]
  screenshots: string[];
  link: Link;
}

export const accomplishments: Accomplishment[] = [
  {
    title: 'Object-Oriented Design',
    slug: 'oopdesign',
    banner: '/static/accomplishments/oopdesign/banner.png',
    website: '',
    description:
      'This course takes Java beginners to the next level by covering object-oriented analysis and design. You will discover how to create modular, flexible, and reusable software, by applying object-oriented design principles and guidelines. And, you will be able to communicate these designs in a visual notation known as Unified Modelling Language (UML).',
    shortDescription: 'object-oriented analysis and design',
    repository: '',
    stack: [Stack.oopdesign, Stack.uml],
    dimensions: [360, 640],
    screenshots: [],
    link: {
      credential: 'https://coursera.org/share/ffcf5dc7bb07c894c450d35821f8717c',
    },
  },
];
