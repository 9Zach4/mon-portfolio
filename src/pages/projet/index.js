import React from 'react';
import { useParams } from 'react-router-dom';
import {dataportfolio }from '../../content_option.js';
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Row, Col, Container } from "react-bootstrap";
import { meta } from "../../content_option";
import "./style.css";



export const ProjetDetail = () => { 
    
    
    const { id } = useParams(); 
    const project = dataportfolio.find(data => data.id === parseInt(id));
    console.log(project);


if (!project) {
    return <div>Projet non trouvé</div>;
  }



    return (
        <HelmetProvider>
             <Container className="About-header">
        <Helmet>
         <meta charSet="utf-8" />
         <title> Projets | {meta.title}</title>
         <meta name="description" content={meta.description} />
          </Helmet>
                 <Row className="mb-5 mt-3 pt-md-3">
              <Col lg="8">
                <h1 className="display-4 mb-4">titre</h1>
                <hr className="t_border my-4 ml-0 text-left" />
                </Col>
                </Row>
                <Row className="sec_sp">
                <Col lg="5">
                <h3 className="color_sec py-4">image</h3>
                </Col>
                <Col lg="7" className="d-flex align-items-center">
                <div>
                <p>description</p>
                </div>
                </Col>
                </Row>



    
       </Container>
        </HelmetProvider>
        
    )
    }   
      
 
 


  

export default ProjetDetail;