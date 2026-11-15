import heroLunarImage from '../assets/images/hero_lunar_descent_archive_1794764457414.jpg';
import kidsStudyImage from '../assets/images/kids_lucy_storybook_study_1794764458533.jpg';
import museumStudyImage from '../assets/images/museum_3d_archive_study_1794764459390.jpg';

export interface PlatformGateway {
  id: 'kids' | 'museum';
  index: string;
  name: string;
  audience: string;
  summary: string;
  url: string;
  hostLabel: string;
  actionLabel: string;
  image: string;
  imageAlt: string;
}

export interface TeamCredit {
  id: string;
  name: string;
  role: string;
  handle?: string;
  githubUrl?: string;
}

export const HERO_MEDIA = {
  src: heroLunarImage,
  alt: 'Lunar module descent stage resting on pale gray lunar regolith against black sky',
};

export const PLATFORMS: PlatformGateway[] = [
  {
    id: 'kids',
    index: '01',
    name: "Kids' Edition",
    audience: 'For young explorers',
    summary:
      'A guided journey with Lucy the squirrel astronaut across 3D Moon and Mars globes, short mission stories, and a space quiz.',
    url: 'https://dinknesh-kids.netlify.app',
    hostLabel: 'dinknesh-kids.netlify.app',
    actionLabel: 'Launch site',
    image: kidsStudyImage,
    imageAlt: 'Handcrafted miniature lunar lander model beside a celestial globe',
  },
  {
    id: 'museum',
    index: '02',
    name: "Adults' Edition",
    audience: 'For adults & enthusiasts',
    summary:
      'An atmospheric deep-space exhibition built around interactive NASA 3D spacecraft models on the Moon and Mars.',
    url: 'https://dinknesh-lucy-museum.netlify.app',
    hostLabel: 'dinknesh-lucy-museum.netlify.app',
    actionLabel: 'Launch site',
    image: museumStudyImage,
    imageAlt: 'Scale Mars rover model on a dark slate plinth under directional lighting',
  },
];

export const TEAM_CREDITS: TeamCredit[] = [
  {
    id: 'biniyam',
    name: 'Biniyam Demeke Dawit',
    role: 'Frontend & 3D Web',
    handle: '@biniyamdmk',
    githubUrl: 'https://github.com/biniyamdmk',
  },
  {
    id: 'abdulaziz',
    name: 'Abdulaziz Ali Seid',
    role: 'Full-Stack Developer',
    handle: '@CodeWith-Aziz',
    githubUrl: 'https://github.com/CodeWith-Aziz',
  },
  {
    id: 'hawlet',
    name: 'Hawlet Romedan Yesuf',
    role: 'Story & Educational Design',
    handle: '@Hawli-geeeeez',
    githubUrl: 'https://github.com/Hawli-geeeeez',
  },
  {
    id: 'atnasia',
    name: 'Atnasia Fisseha Ayalew',
    role: 'Project Lead, Research & Content Curation',
    handle: '@atnasiaf',
    githubUrl: 'https://github.com/atnasiaf',
  },
];
