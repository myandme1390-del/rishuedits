import { Project, VideoProject, Exhibition } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'THUMBNAIL DESIGNS',
    category: '',
    imageUrl: 'https://i.ibb.co/ym6Cmn8g/nothing-thumb.jpg',
    description: 'Crafting high-click-through-rate visuals for digital creators.',
    size: 'large'
  },
  {
    id: '2',
    title: 'IG POST DESIGNS',
    category: '',
    imageUrl: 'https://i.ibb.co/2YqMKV7d/INFIARC.jpg',
    description: 'Explore The EYE CATCHY , Neat and Clean post which attract Audience',
    size: 'medium'
  }
];

export const VIDEO_PROJECTS: VideoProject[] = [
  {
    id: 'v1',
    title: 'TECH VIDEO',
    thumbnailUrl: 'https://i.ibb.co/N6KXQ1TJ/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/W2uSEhGFeeg?autoplay=1&mute=1&loop=1&playlist=W2uSEhGFeeg&controls=0&showinfo=0&rel=0&iv_load_policy=3&start=0&end=30',
    externalUrl: 'https://youtu.be/W2uSEhGFeeg?si=tdg7pILxt4jXs_ou',
    duration: '0:45',
    category: 'Motion Design',
    tags: ['Dynamic', 'LONG FORM', 'REVIEW']
  },
  {
    id: 'v2',
    title: 'Cinematic Reel',
    thumbnailUrl: 'https://i.ibb.co/bgcPTj97/Screenshot-2026-02-06-203336.png',
    videoUrl: 'https://drive.google.com/uc?export=download&id=1j6J9T_JMyqIdPRwOnEZ5rttmhKeuWPMO',
    externalUrl: 'https://drive.google.com/file/d/1j6J9T_JMyqIdPRwOnEZ5rttmhKeuWPMO/view?usp=sharing',
    duration: '1:20',
    category: 'Cinematic Edit',
    tags: ['Mobile', 'Vertical', 'Portrait'],
    aspectRatio: 'aspect-[9/16]'
  },
  {
    id: 'v3',
    title: 'Google Animation',
    thumbnailUrl: 'https://i.ibb.co/TMrjwGSK/Screenshot-2026-02-06-213223.png',
    externalUrl: 'https://drive.google.com/file/d/1BIicykIcqhZJgSMfhvTiek3ex7JcHDuq/view?usp=sharing',
    duration: '0:30',
    category: 'Animation',
    tags: ['ANIMATION', 'LONG FORM', 'CINEMATIC'],
    aspectRatio: 'aspect-video'
  },
  {
    id: 'v4',
    title: 'Cinematic Portrait',
    thumbnailUrl: 'https://i.ibb.co/VWDLQcWs/Screenshot-2026-02-06-203203.png',
    externalUrl: 'https://drive.google.com/file/d/1sPOjXqXAJu2Pz3LHfI53fnUj6nhY0DYK/view?usp=sharing',
    duration: '1:05',
    category: 'Commercial',
    tags: ['Fashion', 'Elegant', 'Soft'],
    aspectRatio: 'aspect-[9/16]'
  }
];

// Added EXHIBITIONS constant to resolve import error in Exhibitions.tsx
export const EXHIBITIONS: Exhibition[] = [
  {
    id: 'e1',
    index: '01',
    title: 'Visual Symphony',
    location: 'London Art House',
    date: 'OCT 2024'
  },
  {
    id: 'e2',
    index: '02',
    title: 'The Digital Frontier',
    location: 'NYC Modern Gallery',
    date: 'DEC 2024'
  },
  {
    id: 'e3',
    index: '03',
    title: 'Motion & Emotion',
    location: 'Tokyo Creative Hub',
    date: 'FEB 2025'
  }
];