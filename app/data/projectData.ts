export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  githubUrl: string;
  liveUrl: string;
  technologies: string[];
  category: 'web' | 'mobile' | 'desktop';
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Cv-Genie",
    description: "CV-Genie is a smart, user-friendly resume builder that creates polished CVs in minutes with clean templates, easy customization, and instant downloads.",
    image: "/cv-genie.png",
    githubUrl: "https://github.com/example/cv-genie",
    liveUrl: "https://cv-genie.example.com",
    technologies: ["React", "Node.js", "MongoDB", "Express", "PDF-lib", "Tailwind"],
    category: "web"
  },
  {
    id: 2,
    title: "LinkNest",
    description: "LinkNest lets you upload media, convert formats, and generate instant shareable links with optional expiration.",
    image: "/LinkNest.png",
    githubUrl: "https://github.com/example/linknest",
    liveUrl: "https://linknest.example.com",
    technologies: ["Next.js", "TypeScript", "AWS S3", "Prisma", "PostgreSQL", "FFmpeg"],
    category: "web"
  },
  {
    id: 3,
    title: "BookReader",
    description: "A simple yet clean website where users can read books online. It gives a smooth reading experience and helps users save their favorite books.",
    image: "/BookReader.png",
    githubUrl: "https://github.com/example/bookreader",
    liveUrl: "https://bookreader.example.com",
    technologies: ["React", "Firebase", "PDF.js", "Local Storage", "CSS3", "Responsive"],
    category: "web"
  },
  {
    id: 4,
    title: "TaskFlow",
    description: "A comprehensive project management tool with real-time collaboration, file sharing, and progress tracking for teams.",
    image: "/api/placeholder/400/300",
    githubUrl: "https://github.com/example/taskflow",
    liveUrl: "https://taskflow.example.com",
    technologies: ["Vue.js", "Nuxt.js", "Socket.io", "Redis", "MySQL", "Docker"],
    category: "web"
  },
  {
    id: 5,
    title: "WeatherWise",
    description: "A beautiful weather application with detailed forecasts, interactive maps, and personalized weather alerts.",
    image: "/api/placeholder/400/300",
    githubUrl: "https://github.com/example/weatherwise",
    liveUrl: "https://weatherwise.example.com",
    technologies: ["React Native", "TypeScript", "OpenWeather API", "Redux", "AsyncStorage"],
    category: "mobile"
  },
  {
    id: 6,
    title: "CodeSnap",
    description: "A developer tool for creating beautiful code screenshots with syntax highlighting and customizable themes.",
    image: "/api/placeholder/400/300",
    githubUrl: "https://github.com/example/codesnap",
    liveUrl: "https://codesnap.example.com",
    technologies: ["Electron", "Monaco Editor", "Canvas API", "File System", "Theme Engine"],
    category: "desktop"
  }
];

// Helper function to get projects by category
export const getProjectsByCategory = (category: string) => {
  return projectsData.filter(project => project.category === category);
};

// Helper function to get featured projects (first 3)
export const getFeaturedProjects = () => {
  return projectsData.slice(0, 3);
};