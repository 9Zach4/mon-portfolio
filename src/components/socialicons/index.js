import React from "react";
import "./style.css";
import {
  FaGithub,
  FaLinkedin,

} from "react-icons/fa";
import { socialprofils } from "../../content_option";

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul>
       
        {socialprofils.github && ( // social icons
          <li>
            <a href={socialprofils.github}target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </li>
        )}
        {socialprofils.linkedin && ( // social icons
          <li>
            <a href={socialprofils.linkedin}target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </li>
        )}
          
      </ul>
      <p>Follow Me</p>
    </div>
  );
};
