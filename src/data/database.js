
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
        }
    ],
    skills: ["React", "TailwindCSS", "DOM", "Git", "UI/UX Design", "Node.js",],
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
            description: "A practice blogsite built with react + vite, tailwindcss...",
            image: `${import.meta.env.BASE_URL}Screenshot (79)(1).png`,
            github: "https://github.com/koechy77/Blogs-Site",
            demoUrl: "https://koechy77.github.io/Blogs-Site/",
        }
    ]


};

export default database