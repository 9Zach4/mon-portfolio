const logotext = "Page D'accueil";
const myName = "Zacharie TOKOTO";
const meta = {
    title: "Zacharie TOKOTO | Portfolio - Développeur Web",
    description: "Mon portfolio de développeur web.",
};

const introdata = {
    title: "Zacharie TOKOTO",
    animated: {
        first: "Bienvenue sur mon porte-folio !"
    },
    description:"Je viens de terminer ma formation de développeur web. Animé par une passion pour l'informatique, je cherche à relever de nouveaux défis captivants !"
};


const dataabout = {
    title: "Présentation",
    aboutme: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
};
const worktimeline = [{
        jobtitle: "Example 1",
        where: "Google",
        date: "2023",
    },
    {
        jobtitle: "Example 2",
        where: "Micosoft",
        date: "2022",
    },
    {
        jobtitle: "Example 3",
        where: "Meta",
        date: "2021",
    },
];

const skills = [{
        name: "Python",
    },
    
    {
        name: "C",
    },
    
    {
        name: "Java",
    },
    
    {
        name: "Bash",
    },

    {
        name: "Powershell",
    },

    {
        name: "Reverse Engineering",
    },

    {
        name: "Web-Exploitation",
    },

    {
        name: "Network Exploitation",
    },
];

const dataportfolio = [
    {    
        id : 1,   
        img: "https://live.staticflickr.com/65535/53115162387_d570f231e3_c_d.jpg",
        description: "Booki, agence de voyage : C'est mon tout premier projet, l'objectif était d'intégrer la maquette du site web en HTML et CSS.",
        link: "#",
        language: "HTML/CSS",
    },

    {   
        id : 2,
        img: "https://live.staticflickr.com/65535/53116329064_5f29a9f7e8_c_d.jpg" ,
        description: " Portfolio de Nina Carducci : Ce projet a été réalisé dans le cadre de ma formation de développeur web. Il m'a permis de découvrir le SEO et le référencement sur les moteurs de recherches.",
        link: "#",
      
        language: "SEO",
    },

    {   
        id : 3,
        img: "https://live.staticflickr.com/65535/53115450972_0e5825dc52_c_d.jpg",
        description: " Mon vieux grimoire : Il s'agit du mon premier projet de developpement en back-end. J'ai pu y découvrir Node.Js et Express.Js, ainsi que la création d'une API REST. 'Mon vieux grmoire' permet à ses utilisateurs de s'enregistrer, ajouter les livres qu'ils souhaitent et les noter. ",
        link: "#",
        language: "Node.Js",
    },

    {   
        id : 4, 
        img: "https://live.staticflickr.com/65535/53115450882_04d217b41e_c_d.jpg",
        description: "Portfolio de Sophie Bluel : Ce 2ème projet de ma formation était poour moi l'occasion de découvrir Javascript vanilla et de me familiariser avec, afin de réaliser un site web dynamique. ",
        link: "#",
        language: "Javascript",
    },

    {   
        id : 5,
        img: "https://live.staticflickr.com/65535/53116751920_2982c76e26_w_d.jpg",
        description: "Kasa, location immobilière : Projet réalisé avec le framework React.Js. L'objectif était de réaliser un site de location immobilière, en utilisant l'API de Kasa. j'ai pu également me familiariser avec SCSS et SASS et le développement de composants",
        link: "#",
        language: "React.Js",
    },
];

const buttonsGallery = [ {
    name: "Tous",
    value: "all"
  },
  {
    name: "HTML/CSS",
    value: "html/css"
  },
  {
    name: "SEO",
    value: "seo"
  },
  {
    name: "Node.js",
    value: "node.js"
  },
  {
    name: "Javascript",
    value: "javascript"
  },
    {
    name: "React.js",
    value: "react.js"
    },

];



const contactConfig = {
    YOUR_EMAIL: "test@test.com",
    description: "Looking forward to hearing from you!",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "SERVICE_ID",
    YOUR_TEMPLATE_ID: "TEMPLATE_ID",
    YOUR_USER_ID: "USER_ID (PUBLIC_KEY)",
};

const socialprofils = {
    github: "https://github.com/",
    linkedin: "https://linkedin.com/",
};
export {
    meta,
    myName,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
    buttonsGallery,
};