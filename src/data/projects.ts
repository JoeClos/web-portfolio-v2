import type { Project } from "../types/Project";
import { ProjectCategory } from "../types/Project";

export const projects: Project[] = [
  {
    title: "Course Hub",
    category: ProjectCategory.FullStack,
    description:
      "Dynamic application designed for seamless course subscription management. It enables learners to browse available courses, subscribe/unsubscribe with a single click, and manage personalized course lists.",
    imageUrl: "/assets/projects-img/course-hub.png",
    techStack: ["MongoDB", "Express", "React", "NodeJs", "MUI-Material"],
    liveLink: "https://coursehubui.netlify.app/",
    codeLink: "https://github.com/JoeClos/coursehub",
  },
  {
    title: "Photography Portfolio",
    category: ProjectCategory.Frontend,
    description:
      "Inspired by my love for visual storytelling, I designed this sleek portfolio to showcase my sister's photography work in a clean, expressive way. The experience is minimalist yet artistic, with a touch of personality in every transition. Built using React, TypeScript, and Sass, this was both a design exploration and a technical challenge in responsive styling.",
    imageUrl: "/assets/projects-img/landing-page.png",
    techStack: ["React", "Typescript", "Sass"],
    liveLink: "https://photography-portfolio-five-gamma.vercel.app/",
    codeLink: "https://github.com/JoeClos/photography-portfolio",
  },
  {
    title: "TriviaQuest",
    category: ProjectCategory.Frontend,
    description:
      "I wanted to build something fun — so I turned trivia into an interactive challenge. TriviaQuest pulls questions from an external API, lets users choose categories and difficulty levels, and adds a sprinkle of design magic with Tailwind CSS. It's simple, engaging, and a joy to make — especially as my first experiment combining logic with playful UI.",
    imageUrl: "/assets/projects-img/trivia.png",
    techStack: ["React", "Typescript", "Tailwind"],
    liveLink: "https://triviaquest.netlify.app/",
    codeLink: "https://github.com/JoeClos/TriviaQuest",
  },
  {
    title: "OsTu App - Virittämö",
    category: ProjectCategory.FullStack,
    description:
      "In a real-world collaborative setting, I joined a development team to enhance this client-facing application. My focus? Turning static mock data into real-time API connections and reshaping the layout to meet actual client demands. I worked closely with Figma designs to ensure every change stayed true to the vision — and learned a lot about adapting fast in a live dev environment.",
    imageUrl: "/assets/projects-img/saukko.jpg",
    techStack: ["MERN Stack"],
    liveLink: "",
    codeLink: "",
  },
  {
    title: "Homeless Academy - Virittämö",
    category: ProjectCategory.CMS,
    description:
      "This project taught me more than just code. I stepped in to manage integrations (Contentful CMS, EmailJS), deployment, and documentation. I took the lead in preparing the app for public launch — from refining backend content to handling domain setup and improving the existing documentation. It's a reminder that thoughtful tech can support meaningful missions.",
    imageUrl: "/assets/projects-img/ha.png",
    techStack: ["React", "Contentful - CMS", "EmailJs", "Tailwind"],
    liveLink: "",
    codeLink: "",
  },
  {
    title: "Helsinki City Bikes",
    category: ProjectCategory.FullStack,
    description:
      "Built for Solita's dev academy pre-assignment, this full-stack app maps and manages Helsinki's city bike stations. With an interactive map, real-time station info, and a custom Leaflet integration, it reflects my ability to combine geospatial data, clean UI, and fast APIs. Though functional, I'm planning future enhancements to improve mobile responsiveness.",
    imageUrl: "/assets/projects-img/hsl.png",
    techStack: [
      "React",
      "MongoDB",
      "Express",
      "Node.js",
      "Leaflet",
      "Material UI",
    ],
    liveLink: "https://hsl-ui.netlify.app/",
    codeLink: "https://github.com/JoeClos/hsl",
  },
  {
    title: "The Movie DB",
    category: ProjectCategory.FullStack,
    description:
      "A movie lover's weekend project — I used the TMDB API to fetch and display films currently playing in theatres.  Work in progress with new features planned.",
    imageUrl: "/assets/projects-img/movie_db.png",
    techStack: ["React", "Node.js", "Express", "Bootstrap"],
    liveLink: "https://mdb-q81s.onrender.com/",
    codeLink: "https://github.com/JoeClos/TMDB-movies",
  },
  {
    title: "Tabular Data from SPARQL",
    category: ProjectCategory.FullStack,
    description:
      "A team collaboration project that challenged me to work with SPARQL and Wikimedia Commons. We built a tool that fetches live query results and lets users preview and upload tabular data directly. It was my first time working with linked open data — and it gave me a new perspective on semantic web tools and real-world data handling.",
    imageUrl: "/assets/projects-img/tabular-data.png",
    techStack: ["React", "Node.js", "Express", "Font Awesome"],
    liveLink:
      "https://tabular-data-from-sparql.netlify.app/?SELECT%20%3Fwikipedia...",
    codeLink: "https://github.com/JoeClos/listeria-bot",
  },
  {
    title: "Seven Wonders",
    category: ProjectCategory.UIUX,
    description:
      "My first portfolio project — a static site that invites you to explore the Seven Wonders of the World. I designed the logo in Adobe XD, tweaked visuals in Photoshop, and animated cloud overlays for an immersive feel. It's a love letter to beautiful destinations and where my passion for digital storytelling truly began.",
    imageUrl: "/assets/projects-img/seven_wonders.png",
    techStack: ["HTML5", "CSS", "Bootstrap", "JavaScript"],
    liveLink: "https://joeclos.github.io/projet-2/",
    codeLink: "https://github.com/JoeClos/projet-2",
  },
];
