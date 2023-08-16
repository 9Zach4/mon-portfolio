import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import {useState} from 'react';

 
export const Portfolio = () => {

  const [ currentFilter, setCurrentFilter ] = useState('all');
  
  
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
            <div className="filter-buttons">
            <button 
               id = "button_h"
               className={`ac_btn btn ${currentFilter === "all" ? "selected" : ""}`}
               onClick={() => setCurrentFilter("all")}> Tous
     
    
    <div className="ring one"></div>
    <div className="ring two"></div>
    <div className="ring three"></div>
  
</button>

    <button
      id = "button_h"
      className={`ac_btn btn ${currentFilter === "HTML/CSS" ? "active" : ""}`}
      onClick={() => setCurrentFilter("HTML/CSS")}> HTML/CSS
      
      <div className="ring one"></div>
      <div className="ring two"></div>
      <div className="ring three"></div>


    </button>

    <button 
      id = "button_h"
      className= {`ac_btn btn ${currentFilter === "Javascript" ? "active" : ""}`}
      onClick={() => setCurrentFilter("Javascript")}> Javascript

      <div className="ring one"></div>
      <div className="ring two"></div>
      <div className="ring three"></div>

    </button>

    <button
      id = "button_h"
      className= {`ac_btn btn ${currentFilter === "React.Js" ? "active" : ""}`}
      onClick={() => setCurrentFilter("React.Js")}> React.js 

       <div className="ring one"></div>
       <div className="ring two"></div>
       <div className="ring three"></div>
    </button>

    <button
      id = "button_h"
      className= {`ac_btn btn ${currentFilter === "Node.Js" ? "active" : ""}`}
      onClick={() => setCurrentFilter("Node.Js")}> Node.Js

       <div className="ring one"></div>
       <div className="ring two"></div>
       <div className="ring three"></div>
    </button>

    <button 
      id = "button_h"
      className= {`ac_btn btn ${currentFilter === "SEO" ? "active" : ""}`}
      onClick={() => setCurrentFilter("SEO")}> SEO

        <div className="ring one"></div>
        <div className="ring two"></div>
        <div className="ring three"></div>
    </button>

  </div>
   </Col>
        
        </Row>
        <div className="mb-5 po_items_ho">
  {dataportfolio.map((data, i) => {
    if (currentFilter === "all" || currentFilter === data.language) {
      return (
        <div key={i} className="po_item">
          <img src={data.img} alt="Image de mon projet" />
          <div className="content">
            <p>{data.description}</p> 
            <a href={data.link}>Lien vers le projet</a>
          </div>
        </div>
      );
    }
    return null; // Don't render if it doesn't match the current filter
  })}
</div>
      </Container>
    </HelmetProvider>
  );
};
