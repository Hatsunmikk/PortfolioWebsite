
// Uses images from public/projects/...

export const projects = [
  {
    name: "Flair Store",
    description:
      "A responsive e-commerce frontend built with React and TailwindCSS, focused on a smooth browsing and shopping experience across devices.",
    githubLink: "https://github.com/Hatsunmikk/Flair-Store", 
    projectLink: "https://flair-store-beige.vercel.app/", 
    tech: ["React", "TailwindCSS", "React Router", "Jest", "React Testing Library"],
    // these files exist in public/projects/
    photo: [
      "/projects/Project1_1.jpg",
      "/projects/Project1_2.jpg",
      "/projects/Project1_3.jpg",
    ],
  },
  {
    name: "Workflow Graph Builder (React Flow)",
    description:
      "An interactive workflow visualizer built using React Flow that allows users to create, connect, and manipulate nodes dynamically. Implemented drag-and-drop positioning, zoom/pan controls, and custom node components with efficient state handling for smooth real-time interactions.",
    githubLink: "https://github.com/Hatsunmikk/ainyx-reactflow-canvas", 
    projectLink: "https://ainyx-reactflow-canvas-eh4q92zbf.vercel.app/",
    tech: ["React", "React Flow", "JavaScript", "CSS", "State Management"],
    photo: ["/projects/Project2_1.jpg",
             "/projects/Project2_2.jpg",
             "/projects/Project2_3.jpg",
    ], 
  },
  {
    name: "Rock–Paper–Scissors",
    description:
      "A mini-game focused on DOM manipulation, game state handling, and visual feedback.",
    githubLink: "https://github.com/Hatsunmikk/rock-paper-scissors", 
    projectLink: "https://hatsunmikk.github.io/rock-paper-scissors/",
    tech: ["HTML", "CSS", "JavaScript", "DOM"],
    photo: ["/projects/Project3_1.jpg"], // only one image right now
  },
];
