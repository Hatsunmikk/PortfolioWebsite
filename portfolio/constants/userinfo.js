//PLEASE FOLLOW THE FORMAT OF THIS FILE.

import { faGithubAlt, faLinkedinIn, } from "@fortawesome/free-brands-svg-icons"

export const userinfo = {
    logoText: "Debosmita Banerjee", //This text is visible on your navbar and footer like your logo.
    contact: {
        email: 'debos2003@gmail.com', //It is always a good idea to mention your email on your website. Good platform to communicate.
        phone: '', //Phone number is optional, if you dont want it, consider leaving it blank .
        countrycode: '+91' //It is advisable to add the country code incase you mention your contact number.
    },
    socials: [
        //For aesthetics, it is advisable for you to mention upto 4 social media links only. Fill in the links.
        //more icons are imported above, use as you like them.
        { type: 'Github', link: 'https://github.com/Hatsunmikk', icon: faGithubAlt },
        { type: 'Linkedin', link: 'https://www.linkedin.com/in/debosmitabanerjee', icon: faLinkedinIn },
        
    ],
    greeting: {
        //this text goes on your landing page
        title: "Hi, I’m Debosmita - aspiring Software Engineer & Web Developer.",
        subtitle: ""
    },
    capabilities: [
        //this text goes on your home page in table format.
        //For aesthetics, it is advisable for you to mention upto 4 catgeories links only.
        //For aesthetics, it is advisable for you to keep similar number of skills in each category
        {
            category: "Programming Languages", // eg.frontend, backend, devops etc
            skills: ["JavaScript", "C", "Java", "HTML5", "CSS3"] //eg. react, html, python etc.
        },
        {
            category: "Frameworks & Libraries",
            skills: ["React", "Next.js (basics)", "Chakra UI", "TailwindCSS"]
        },
        {
            category: "Tools & Practices",
            skills: ["Git & GitHub",
        "Responsive Web Design",
        "DOM Manipulation",
        "Unit Testing (Jest, React Testing Library)",]
        },
        {
            category: "Professional Skills",
            skills: ["Problem Solving & Debugging",
        "Technical Communication",
        "Time Management",
        "Teamwork & Coordination",]
        },
    ],
    about: {
        //this text goes at the bottom of your home page.
        content: `I’m a CS student focused on building responsive, user-friendly web applications. I enjoy working with modern frontend tools while strengthening my foundations in CS, algorithms, and software design.

I value clean code, good UX, and creating products that feel intuitive and purposeful. I’m currently exploring backend, full-stack development and improving my problem-solving skills through projects and continuous learning.

Beyond tech, you can find me exploring different genres of music and updating my Spotify playlists, playing Valorant or working out - be it climbing, calisthenics or perfecting my badminton smash.
`.trim(),
        resume: "/resume.pdf" //link your resume here. it can be drive link or any other link
    },
    education: {
        visible: false, //set this to false if you want to omit this section
        educationList: [
            {
                time: 'May - Oct 2020', //timespan
                title: 'Degree name', //eg. BTech in Compuster Engineering
                organization: 'School Name', //eg. VJTI, Mumbai
                description: 'Lorem ipsum dolor sit amet consectetur' //eg. secured a cgpa of 9.25 in all sems appeared in so far
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
        visible: true, //set this to false if you want to omit this section
        experienceList: [
            {
                company: 'Independent Projects', //company name eg.Microsoft
                companylogo: '', //companylogo
                position: 'Frontend Developer', //post you held eg.Senior SDE
                time: '2023 - Present', //timespan
                description: 'Building responsive interfaces with HTML, CSS, JavaScript, React, and UI libraries; practising version control, debugging, and testing through personal projects.' //eg. spearheaded the graphics team in designing SASS product UIs
            },
            
        ],
    },
    blogs: {
        //set this to false if you want to omit this section
        visible: false,
    },
}

export const headings = {
    //you can customise all the headings here.
    workHomePage: 'Projects',
    capabilities: 'Skills',
    about: 'About Me',
    education: 'Education',
    experience: 'Experience',
    blogs: 'Blog',
    contact: 'Contact Me',
}

export const ctaTexts = {
    //you can customise all the cta texts here.
    landingCTA: 'View my work',
    workCTA: 'View All Projects',
    capabCTA: 'Get in Touch',
    educationCTA: 'About Me',
    resumeCTA: 'Download Resume',
    submitBTN: 'Send Message'
}