// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import hostingerLogo from "./assets/tech_logo/hostinger.png"
import vercelLogo from "./assets/tech_logo/vercel.png"
import typescriptLogo from "./assets/tech_logo/typescript.png"

// Education Section Logo's
import MMMHS from "./assets/Education logo/MMMHS.jpeg";
import UCC from "./assets/Education logo/Udhna.png";
import SUMAN from "./assets/Education logo/SUMAN.jpeg";

// Project
import Sundown from "./assets/Work/Sundown.png";
import Institute from "./assets/Work/Institute.png";
import Cinema from "./assets/Work/JP.png";
import obys from "./assets/Work/obysss.png";
import uber from "./assets/Work/Uber-Clone.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
      { name: "Typescript", logo: typescriptLogo}
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "Hostinger", logo: hostingerLogo },
      { name : "Vercel", logo: vercelLogo }
    ],
  },
];

export const education = [
  {
    id: 0,
    img: UCC,
    school: "Udhna Academy College, Surat",
    date: "Jul 2023 - Apr 2026",
    grade: "First Class | CGPA : 6.79 ",
    
    desc: "Successfully completed my Bachelor of Computer Applications (BCA) with a focus on web development, programming, and database systems. Gained hands-on experience by building real-world projects and developing practical problem-solving and software engineering skills.",
    degree: "Bachelor of Computer Applications (BCA)",
},

  {
    id: 1,
    img: MMMHS, // apni school ki image ka path
    school: "Maa Jasjeet Jee Vidyalaya",
    date: "Jun 2022 - Mar 2023",
    grade: "69.45% Percentile",
    desc: "I completed my Class 12th in Arts stream from Maa Jasjeet Jee Vidyalaya, under the Gujarat Secondary and Higher Secondary Education Board (GSEB), where I studied subjects like Psychology, Geography, and Economics and other more Subjects.",
    degree: "12th Grade (Arts - GSEB Board)",
  },
  {
    id: 2,
    img: SUMAN,
    school: "Suman High School No.6",
    date: "Jun 2019 - Apr 2020",
    grade: "92.05% Percentile",
    desc: "I completed my Class 10th education from Suman High School No.6 under the Gujarat Secondary and Higher Secondary Education Board (GSEB), where I studied Science, Maths, Social Science and other more Subjects.",
    degree: "10th Grade (GSEB Board)",
  },
];

export const projects = [
  {
    id: 0,
    title: "Smart Institute - Academy Management Web App",
    description:
      "Smart Institute is a full-stack web application, developed using the MERN stack (MongoDB, Express.js, React.js, Node.js). A comprehensive web application designed to streamline and centralize the administrative, financial, and academic workflows of educational institutions, this platform bridges the gap between administrators, staff, and students by providing dedicated portals and automated management tools With dynamic RESTful APIs and MongoDB integration using Mongoose, the app supports full CRUD operations. It features user authentication, clean UI, and real-time form handling to replicate a real-world experience.",
    image: Institute,
    tags: [
      "React.js",
      "CSS",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "RESTful API",
    ],
    github: "https://github.com/jayeshpatil2804/smart-academy-management-system.git",
    webapp: "https://smartinstituteonline.com/",
  },
  {
    id: 1,
    title: "JPCinemax Ticket Booking System - Full-Stack Web Application",
    description:
      "JPCinemax is a full-stack web application, developed using Angular and Node.js/Express. A comprehensive ticket booking platform designed to streamline the complete ticketing lifecycle from movie selection to checkout, this system bridges the gap between cinema administrators and moviegoers by providing dedicated portals and interactive seat selection tools. With dynamic RESTful APIs and robust database integration, the app supports full CRUD operations for managing cinemas, movies, and daily shows. It features secure role-based authentication, a dynamic UI, and real-time payment and booking handling to replicate a real-world multiplex experience.",
    image: Cinema,
    tags: [
      "MEAN Stack/Full-Stack",
      "Angular",
      "Node.js",
      "Express.js",
      "MongoDB",
      "RESTful API",
      "Mongoose",
    ],
    github: "https://github.com/jayeshpatil2804/JPCinemax-movie-ticket-booking-system.git",
    webapp: "",
  },
 /* {
    id: 3,
    title: "Obys Agency",
    description:
      "This project is a clone of Obys Agency website built with HTML, CSS, JavaScript, and GSAP. It showcases advanced frontend animations and transitions, inspired by modern creative portfolio websites.",
    image: obys,
    tags: ["HTML", "CSS", "JavaScript", "GSAP"],
    github: "https://github.com/rehansari02/Obys-Agency.git",
    webapp: "https://obys-agency-clone-ar.netlify.app/",
  },
  {
    id: 4,
    title: "Uber Clone",
    description:
      "A full-stack ride-booking web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It allows users to book rides with real-time pickup and destination selection, fare estimation, and secure authentication. The application also includes payment integration for seamless transactions and a powerful admin panel to manage users, rides, and system operations. Designed with a responsive and user-friendly interface, this project demonstrates end-to-end full-stack development and real-world application architecture.",
    image: uber,
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "Payment Integration",
      "Admin Panel",
      "REST API",
    ],
    github: "",
    webapp: "https://uber-clone-ur.vercel.app/",
  }*/
];

export const experiences = [
  {
    id: 0,
    role: "MERN Stack Developer Internship",
    company: "PRITHONTECH (STADMA)",
    logo: "https://prithontech.com/logo-removebg.png",
    date: "Nov 2025 - Apr 2026",
    description:
      "Working as a MERN Stack Developer Intern, building responsive, modern web applications. Collaborating with the team to translate designs into functional, high-performance websites using React.js, Tailwind CSS, Node.js, and MongoDB.",
    skills: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS"],
  }
];
