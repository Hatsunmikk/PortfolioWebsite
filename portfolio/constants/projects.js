
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
    name: "Calculator",
    description:
      "A browser-based calculator with keyboard support and a clean, responsive layout.",
    githubLink: "https://github.com/Hatsunmikk/calculator", 
    projectLink: "https://hatsunmikk.github.io/calculator/",
    tech: ["HTML", "CSS", "JavaScript"],
    photo: ["/projects/Project2_1.jpg"], // only one image right now
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
