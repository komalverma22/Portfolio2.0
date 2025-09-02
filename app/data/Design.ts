// data/designData.ts
export interface Design {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  image: string;
  description: string;
  category: 'UI Design' | 'Hero Section' | 'Landing Page' | 'Mobile App' | 'Web Design';
}

export const designData: Design[] = [
  {
    id: '1',
    title: 'MomentsOfLife/1',
    subtitle: 'From Their Lens',
    year: '2025',
    image: '/design-1.jpg', // Replace with your actual image paths
    description: 'A personal photography project capturing candid moments and emotions through artistic lens work.',
    category: 'UI Design'
  },
  {
    id: '2',
    title: 'GenesisGV80',
    subtitle: 'UI Design | Hero Section',
    year: '2025',
    image: '/design-2.jpg',
    description: 'A personal UI concept for the Genesis GV80, one of my first hero section designs, created to explore layout, structure, and luxury design themes.',
    category: 'Hero Section'
  },
  {
    id: '3',
    title: 'MinimalVest',
    subtitle: 'UI Design | Hero Section',
    year: '2025',
    image: '/design-3.jpg',
    description: 'A minimalist approach to investment platform design focusing on simplicity and user experience.',
    category: 'Hero Section'
  },
  {
    id: '4',
    title: 'Portfolio V2',
    subtitle: 'Personal Website',
    year: '2025',
    image: '/design-4.jpg',
    description: 'Second iteration of my personal portfolio showcasing clean design and smooth interactions.',
    category: 'Landing Page'
  },
  {
    id: '5',
    title: 'EcoTrack',
    subtitle: 'Mobile App Design',
    year: '2025',
    image: '/design-5.jpg',
    description: 'Environmental tracking app designed to help users monitor their carbon footprint.',
    category: 'Mobile App'
  },
  {
    id: '6',
    title: 'TechFlow',
    subtitle: 'Dashboard Design',
    year: '2025',
    image: '/design-6.jpg',
    description: 'Modern dashboard interface for tech workflow management and team collaboration.',
    category: 'Web Design'
  }
];

export const getFeaturedDesigns = (): Design[] => {
  return designData;
};