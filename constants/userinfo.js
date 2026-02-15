

import { faGithubAlt, faLinkedinIn, } from "@fortawesome/free-brands-svg-icons"

export const userinfo = {
    logoText: "Debosmita Banerjee", 
    contact: {
        email: 'debos2003@gmail.com', 
        phone: '', 
        countrycode: '+91' 
    },
    socials: [
        
        { type: 'Github', link: 'https://github.com/Hatsunmikk', icon: faGithubAlt },
        { type: 'Linkedin', link: 'https://www.linkedin.com/in/debosmitabanerjee', icon: faLinkedinIn },
        
    ],
    greeting: {
        
        title: "Hi, I’m Debosmita - aspiring Software Engineer & Web Developer.",
        subtitle: ""
    },
    capabilities: [
        
        {
            category: "Programming Languages", 
            skills: ["JavaScript", "C", "Java", "HTML5", "CSS3", "Go (basics)", "C++"] 
        },
        {
            category: "Frameworks & Libraries",
            skills: ["React", "Next.js (basics)", "ReactFlow", "Chakra UI", "TailwindCSS"]
        },
        {
            category: "Tools & Development Practices",
            skills: ["Git & GitHub",
        "Responsive Web Design",
        "DOM Manipulation",
        "Unit Testing (Jest, React Testing Library)",
         "Debugging & Dependency Management",
        "Deployment (Vercel, GitHub Pages)",
    ]
        },
        {
            category: "Professional Skills",
            skills: ["Problem Solving & Debugging",
        "Technical Communication",
        "Adaptability",
        "Time Management",
        "Teamwork & Coordination",]
        },
    ],
    about: {
        
        content: `I’m a CS student focused on building responsive, user-friendly web applications. I enjoy working with modern frontend tools while strengthening my foundations in CS, algorithms, and software design.

I value clean code, good UX, and creating products that feel intuitive and purposeful. I’m currently exploring backend, full-stack development and improving my problem-solving skills through projects and continuous learning.

Beyond tech, you can find me exploring different genres of music and updating my Spotify playlists, playing Valorant or working out - be it climbing, calisthenics or perfecting my badminton smash.
`.trim(),
        resume: "/resume.pdf" 
    },
    education: {
        visible: false, //set to false to omit this section
        educationList: [
            {
                time: 'May - Oct 2020', //timespan
                title: 'Degree name', 
                organization: 'School Name', 
                description: 'Lorem ipsum dolor sit amet consectetur' 
            },
            {
                time: 'May - Oct 2020',
                title: 'Degree name',
                organization: 'School Name',
                description: 'Lorem ipsum dolor sit amet consectetur'
            },
            {
                time: 'May - Oct 2020',
                title: 'Degree name',
                organization: 'School Name',
                description: 'Lorem ipsum dolor sit amet consectetur'
            },
        ],
    },
    experience: {
        visible: true, 
        experienceList: [
            {
                company: 'Independent Projects', 
                companylogo: '', 
                position: 'Software Developer (Personal Projects)', 
                time: '2023 - Present', //timespan
                description: 'Designing and developing responsive web applications and software tools using React, Next.js, JavaScript, and modern UI frameworks. Gaining hands-on experience in debugging, testing, version control, UI/UX design, and deploying production-ready projects.' //eg. spearheaded the graphics team in designing SASS product UIs
            },
            
        ],
    },
    blogs: {
        
        visible: false,
    },
}

export const headings = {
    
    workHomePage: 'Projects',
    capabilities: 'Skills',
    about: 'About Me',
    education: 'Education',
    experience: 'Experience',
    blogs: 'Blog',
    contact: 'Contact Me',
}

export const ctaTexts = {
    
    landingCTA: 'View my work',
    workCTA: 'View All Projects',
    capabCTA: 'Get in Touch',
    educationCTA: 'About Me',
    resumeCTA: 'Download Resume',
    submitBTN: 'Send Message'
}