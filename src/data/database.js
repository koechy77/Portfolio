import css from "../assets/tech/css.svg";
import express from "../assets/tech/express.svg";
import git from "../assets/tech/git.svg";
import github from "../assets/tech/github.svg";
import html5 from "../assets/tech/html5.svg";
import javascript from "../assets/tech/javascript.svg";
import mongodb from "../assets/tech/mongodb.svg";
import nodejs from "../assets/tech/nodejs.svg";
import postman from "../assets/tech/postman.svg";
import react from "../assets/tech/react.svg";
import redis from "../assets/tech/redis.svg";
import tailwind from "../assets/tech/tailwind.svg";
import vercel from "../assets/tech/vercel.svg";
import vite from "../assets/tech/vite.svg";
import postgresql from "../assets/tech/postgresql.svg";

const database = {
  header: {
    name: "ONYEM CHIDERA KINGSLEY",
    tagline: "Web Developer",
    backgroundImage: null,
  },
  experiences: [
    {
      company: "SkillBoost",
      role: "Web Developer-intern",
      years: "2026",
    },
  ],
  skills: ["React", "TailwindCSS", "DOM", "Git", "UI/UX Design", "Node.js"],
  contact: {
    email: "help.aurevra@gmail.com",
    phone: "+234 816 252 2106",
    linkedin: "https://www.linkedin.com/in/chidera-onyem-449b74272/",
    github: "https://github.com/koechy77",
  },
  about: {
    title: "About Me",
    description: `My name's Kingsley. I'm passionate about creating modern digital experiences,
                Aside being a web developer, I'm currently an Applied Math undergraduate, and a pro Forex, Crypto, Stock
                Trader; exploring the financial markets and the world of Mathematics.
                I consider myself to be Divergent.`,
    image: `${import.meta.env.BASE_URL}media/IMG_4039.jpg`,
  },
  projects: [
    {
      id: 1,
      title: "Blog Site",
      description:
        "A practice blogsite",
      image: `${import.meta.env.BASE_URL}Screenshot (79)(1).png`,
      github: "https://github.com/koechy77/Blogs-Site",
      demoUrl: "https://koechy77.github.io/Blogs-Site/",
      tech: [
        { name: "React", logo: react },
        { name: "TailwindCSS", logo: tailwind },
        { name: "Vite", logo: vite },
      ],
    },
  ],
};

export default database;

export const services = [
  {
    title: "Full-Stack Development",
    description:
      "Build scalable, responsive web applications from frontend to backend using modern technologies like React, Node.js, Express, and MongoDB.",
  },
  {
    title: "Frontend Development",
    description:
      "Create fast, responsive, and user-friendly interfaces that deliver a seamless experience across desktop, tablet, and mobile devices.",
  },
  {
    title: "Backend Development",
    description:
      "Develop secure and efficient REST APIs, manage databases, implement authentication, and build robust server-side functionality.",
  },
  {
    title: "Deployment & Maintenance",
    description:
      "Deploy web applications, fix bugs, improve performance, and provide ongoing updates to keep websites running smoothly.",
  },
];

export const techStack = [
  { name: "HTML5", logo: html5 },
  { name: "CSS3", logo: css },
  { name: "JavaScript", logo: javascript },
  { name: "React", logo: react },
  { name: "TailwindCSS", logo: tailwind },
  { name: "Vite", logo: vite },
  { name: "Node.js", logo: nodejs },
  { name: "Express", logo: express },
  { name: "MongoDB", logo: mongodb },
  { name: "Git", logo: git },
  { name: "GitHub", logo: github },
  { name: "Postman", logo: postman },
  { name: "Vercel", logo: vercel },
  { name: "Redis", logo: redis },
  { name: "PostgreSQL", logo: postgresql },
];

export const experiences = [
  {
    role: "Frontend Developer Intern",
    company: "SkillBoost LTD",
    description:
      "Turned ideas into responsive, interactive web experiences by building clean interfaces and reusable components with modern frontend technologies.",
    tech: [
      {
        name: "HTML",
        logo: html5
      },
      {
        name: "CSS",
        logo: css
      },
      {
        name: "JavaScript",
        logo: javascript,
      },
      {
        name: "Tailwind CSS",
        logo: tailwind,
      },
      {
        name: "React",
        logo: react,
      },
    ],
  },

  {
    role: "Backend Developer Intern",
    company: "SkillBoost LTD",
    description:
      "Built the systems behind web applications by developing RESTful APIs, working with databases, and creating reliable server-side functionality.",
    tech: [
      {
        name: "Node.js",
        logo: nodejs,
      },
      {
        name: "Express.js",
        logo: express,
      },
      {
        name: "MongoDB",
        logo: mongodb,
      },
    ],
  },
];
