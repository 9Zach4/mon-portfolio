const logotext = "Page D'accueil";
const myName = "Zacharie TOKOTO";
const meta = {
    title: "Zacharie TOKOTO | Portfolio - Développeur Web",
    description: "Mon portfolio de développeur web.",
};

const introdata = {
    title: "Zacharie TOKOTO",
    animated: {
        first: "Bienvenue sur mon portfolio !"
    },
    description:"Je viens de terminer ma formation de développeur web. Animé par une passion pour l'informatique, je cherche à relever de nouveaux défis captivants !"
};

const dataabout = {
    title: "Présentation",
    aboutme: "Après avoir fini mes études à la Sorbonne, puis enchaîné quelques petits boulots dans la grande distribution et la restauration, j'ai décidé de changer de cap et de m'orienter vers le domaine de l'informatique afin de devenir développeur fullstack. J'ai donc intégré la formation de développeur web grâce à OpenClassrooms, qui m'a permis d'acquérir les compétences nécessaires pour devenir développeur web. En mettant à profit toutes mes connaissances acquises, je suis enthousiaste à l'idée de relever de nouveaux défis et de réaliser plein de projets concrets !",
};
const worktimeline = [{
        jobtitle: "Bac STI2D",
        where: "Lycée Louis Armand",
        date: "2018",
    },
    {
        jobtitle: "Licence Science du Langage",
        where: "Université Paris Sorbonne",
        date: "2018-2022",
    },
    {
        jobtitle: "Formation Développeur Web",
        where: "OpenClassrooms",
        date: "2023",
    },

    {
        jobtitle: "Bachelor Spécialisation Développement",
        where: "Sup de Vinci",
        date: "2023-2024",

    },
];

const dataportfolio = [
    {    
        id : 1,   
        img: "https://live.staticflickr.com/65535/53115162387_d570f231e3_c_d.jpg",
        title: " 'Booki', agence de voyage ",
        link: "https://9zach4.github.io/P2/",
        githubLink: "https://github.com/9Zach4/P2",
        language: "HTML/CSS",
        description: "Booki est un site web d'agence de voyage. Il a été réalisé dans le cadre de ma formation de développeur web. L'objectif de ce projet était d'intégrer la maquette provenant de figma exclusivement en HTML et CSS. Durant le développement, le plus grand obstacle a été de rendre le site responsive.",
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
        description: "Ce Projet m'a permis de mettre en pratique mes connaissances en SEO. J'ai pu améliorer le référencement du site de Nina Carducci, une photographe professionnelle. J'ai également pu mettre en place des outils d'analyse de performance comme Google Analytics et LightHouse. Le plus grand obstacle a été de trouver des mots-clés pertinents pour améliorer le référencement du site.",
        link: "https://9zach4.github.io/P5/",
        githubLink: "https://github.com/9Zach4/P5",
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
        link: "https://github.com/9Zach4/P7",
        githubLink: "https://github.com/9Zach4/P7",
        description: "C'est ma première expérience en back-end, j'ai pu mettre en place un serveur Node.Js avec Express et Mongo-DB. J'ai également pu mettre en place un système d'authentification avec JsonWebToken. Mon vieux grimoire est un site qui permet aux utilisateurs d'ajouter des livres qu'ils souhaitent puis de les noter, les modifier ou les supprimer.",
        language: "Node.Js",
        tags: [
            "Node.Js",
            "Express",
            "Mongo-DB",
            "Mongoose",
            "API",
        ],
        tech:"Back-end",
    },

    {   
        id : 2, 
        img: "https://live.staticflickr.com/65535/53115450882_04d217b41e_c_d.jpg",
        title: "Portfolio de Sophie Bluel",
        link: "https://9zach4.github.io/P3/",
        githubLink: "https://github.com/9Zach4/P3",
        language: "Javascript",
        tags:[
            "Javascript",
            "HTML",
            "CSS",
        ],
        description: " Ce projet m'a permi de découvrir Javascript. Afin de le rendre le site dynamique J'ai pu mettre en place un système de filtre pour trier les projets par catégorie. Le plus grand obstacle sur cette réalisation aura été de comprendre la logique et la syntaxe de javascript, que j'ai pu surmonter en retravaillant la ou j'avais des lacunes.",
        tech:"Front-end",
    },

    {   
        id : 5,
        img: "https://live.staticflickr.com/65535/53116751920_2982c76e26_w_d.jpg",
        title: "'Kasa', location immobilière",
        description: "Kasa est un site web de location immobilière. Il a été réalisé dans le cadre de ma formation de développeur web. L'objectif de ce projet était de réaliser un site web dynamique en utilisant React.Js, au cours de ce projet j'ai pu me familiariser avec la notion et le développement des composants fonctionnels, ainsi que la notion de state et de props.",
        link: "https://9zach4.github.io/P6/",
        githubLink: "https://github.com/9Zach4/P6",
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
        link: "https://trello.com/invite/b/Jjh92BgU/ATTI1ee713e4d240267c0b8bb55b5354820fB52E6E10/kanban",
        githubLink: "https://github.com/9Zach4/P4",
        language: "Trello",
        description: " Ce projet m'a permis de mettre en pratique mes connaissances en gestion de projet. J'ai pu mettre en place un tableau de bord Trello afin de gérer le projet. J'ai également pu mettre en place une méthode agile afin de gérer le projet de manière efficace, le tout présenté sous forme de kanban. Le plus grand obstacle a été de gérer le projet en équipe et de mettre en place une méthode de travail efficace.",
        tags:[
            "Trello",
            "Kanban",
            "Scrum",
            "Méthode agile",
            "Gestion de projet",
        ],
        tech:"Agile",
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