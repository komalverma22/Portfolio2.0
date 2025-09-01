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
    githubUrl: "https://github.com/komalverma22/cv-Genie",
    liveUrl: "https://cvgeniee.vercel.app/",
    technologies: ["Next.js", "NextAuth.js", "Tailwind","PostgreSQL","Prisma",  "Express", "PDF-lib", "Figma"],
    category: "web"
  },
  {
    id: 2,
    title: "LinkNest",
    description: "LinkNest lets you upload media, convert formats, and generate instant shareable links with optional expiration.",
    image: "/LinkNest.png",
    githubUrl: "https://github.com/komalverma22/LinkNest",
    liveUrl: "https://link-nest-one.vercel.app/",
    technologies: ["React", "TypeScript", "Tailwind", "Node.js","Express","Prisma","Cloudinary", "PostgreSQL", "FFmpeg","Sharp"],
    category: "web"
  },
  {
    id: 3,
    title: "BookReader",
    description: "A simple yet clean website where users can read books online. It offers a smooth reading experience and lets users save their favorite books. Currently, it’s a work in progress.",
    image: "/BookReader.png",
    githubUrl: "https://github.com/komalverma22/bookReader",
    liveUrl: "https://github.com/komalverma22/bookReader",
    technologies: ["React",  "PDF.js", "Local Storage", "Tailwind"],
    category: "web"
  },
  {
    id: 4,
    title: "Quantam-Coffee",
    description: "Quantum Coffee was my first website — a fully responsive design that works smoothly across all devices.",
    image: "/quantam-coffee.jpg",
    githubUrl: "https://github.com/komalverma22/Quantam-Coffee",
    liveUrl: "https://quantamcoffee.netlify.app/",
    technologies: ["HTML", "CSS", "JavaScript"],
    category: "web"
  },
  {
    id: 5,
    title: "DCRUST-ODC",
    description: "Developed a dynamic website for DCRUST’s open-source community showcasing events, contributors, and projects.",
    image: "/dcrust-odc-landing.jpg",
    githubUrl: "https://github.com/komalverma22/dcrust-odc",
    liveUrl: "https://github.com/komalverma22/dcrust-odc",
    technologies: ["React", "TypeScript", "Tailwind", "Three.js"],
    category: "mobile"
  },
  // {
  //   id: 6,
  //   title: "CodeSnap",
  //   description: "A developer tool for creating beautiful code screenshots with syntax highlighting and customizable themes.",
  //   image: "/api/placeholder/400/300",
  //   githubUrl: "https://github.com/example/codesnap",
  //   liveUrl: "https://codesnap.example.com",
  //   technologies: ["Electron", "Monaco Editor", "Canvas API", "File System", "Theme Engine"],
  //   category: "desktop"
  // }
];

// Helper function to get projects by category
export const getProjectsByCategory = (category: string) => {
  return projectsData.filter(project => project.category === category);
};

// Helper function to get featured projects (first 3)
export const getFeaturedProjects = () => {
  return projectsData.slice(0, 6);
};