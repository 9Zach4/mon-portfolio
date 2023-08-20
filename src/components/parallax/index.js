import  js from "../../assets/images/js.png";
import html from "../../assets/images/html-5.png";
import css from "../../assets/images/css-3.png";
import react from "../../assets/images/react-2.png";
import node from "../../assets/images/nodejs.png";
import postman from "../../assets/images/postman.png";
import sass from "../../assets/images/sass.png";
import vsCode from "../../assets/images/visual-studio-code.png";
import git from "../../assets/images/git-bash.png";
import React from "react";
import "./style.css";

export default function MyComponent () { // logo tech dnas le parallax
  return (
    <div className="wrapper__logo">

        <img src={js} alt="logo javascript" />
        <img src={html} alt="logo html" />
        <img src={css} alt="logo css"/>
        <img src={react} alt="logo react"/>
        <img src={node} alt="logo node"/>     
        <img src={sass} alt="logo sass"/>
        <img src={postman} alt="logo postman"/>
        <img src={vsCode} alt="logo vsCode"/>
        <img src={git} alt="logo git"/>
      
    </div>
  );
}

  
  //<a href="https://www.flaticon.com/fr/icones-gratuites/javascript" title="javascript icônes">Javascript icônes créées par Freepik - Flaticon</a>
  //<a href="https://www.flaticon.com/fr/icones-gratuites/html-5" title="html 5 icônes">Html 5 icônes créées par Freepik - Flaticon</a>
  //<a href="https://www.flaticon.com/fr/icones-gratuites/css-3" title="css 3 icônes">Css 3 icônes créées par Freepik - Flaticon</a>
