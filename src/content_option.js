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
    aboutme: "Après avoir fini mes études à la Sorbonne, puis enchaîné quelques petits boulots dans la grande distribution et la restauration, j'ai décidé de changer de cap et de m'orienter vers le domaine de l'informatique afin de devenir développeur fullstack. J'ai donc intégré la formation de développeur web grâce à OpenClassrooms, qui m'a permis d'acquérir les compétences nécessaires pour devenir développeur web. En mettant à profit toutes mes connaissances acquises, je suis enthousiaste à l'idée de relever de nouveaux défis et de réaliser plein de projets concrets !",
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

const dataportfolio = [
    {    
        id : 1,   
        img: "https://live.staticflickr.com/65535/53115162387_d570f231e3_c_d.jpg",
        title: " 'Booki', agence de voyage ",
        link: "#",
        githubLink: "",
        language: "HTML/CSS",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        tags:[
            "HTML",
            "CSS",
            "Intégration",
            "Responsive",
            "Figma"
        ],
        tech:"Front-end",
    },

    {   
        id : 4,
        img: "https://live.staticflickr.com/65535/53126435528_18b1ab1013_c_d.jpg" ,
        title: "Portfolio de Nina Carducci",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        link: "#",
        githubLink: "",
        language: "SEO",
        tags:[
            "SEO",
            "Référencement",
            "Google Analytics",
            "LightHouse",
            "Debug",
        ],
        tech:"SEO",
    },

    {   
        id : 6,
        img: "https://live.staticflickr.com/65535/53115450972_0e5825dc52_c_d.jpg",
        title: " Mon vieux grimoire ",
        link: "#",
        githubLink: "",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        language: "Node.Js",
        tags: [
            "Node.Js",
            "Express",
            "MongoDB",
            "Mongoose",
            "API",
        ],
        tech:"Back-end",
    },

    {   
        id : 2, 
        img: "https://live.staticflickr.com/65535/53115450882_04d217b41e_c_d.jpg",
        title: "Portfolio de Sophie Bluel",
        link: "#",
        githubLink: "",
        language: "Javascript",
        tags:[
            "Javascript",
            "HTML",
            "CSS",
            "API",
        ],
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        tech:"Front-end",
    },

    {   
        id : 5,
        img: "https://live.staticflickr.com/65535/53116751920_2982c76e26_w_d.jpg",
        title: "'Kasa', location immobilière",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        link: "#",
        githubLink: "",
        language: "React.Js",
        tags: [
            "React.Js",
            "Routing",
            "Sass",   
        ],
        tech:"Front-end",
    },

    {
        id : 3,
        img:"https://live.staticflickr.com/65535/53126071704_d3146bf5f9_c_d.jpg",
        title: " 'Menu Maker', By Qwenta",
        link: "#",
        githubLink: "",
        language: "Trello",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        tags:[
            "Trello",
            "Kanban",
            "Scrum",
            "Méthode agile",
            "Gestion de projet",
        ],
        tech:"Gestion de projet",
    }
];






const socialprofils = {
    github: "https://github.com/9Zach4",
    linkedin: "https://www.linkedin.com/in/zacharie-tokoto-b33589180/",
};

export {
    meta,
    myName,
    dataabout,
    dataportfolio,
    worktimeline,
    introdata,
    socialprofils,
    logotext,
    
};