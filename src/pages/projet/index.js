import React, { useEffect, useState } from "react";
import { useParams,useNavigate  } from 'react-router-dom';
import {dataportfolio }from '../../content_option.js';
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Row, Col, Container } from "react-bootstrap";
import { meta } from "../../content_option";
import "./style.css";



export const ProjectDetail = (props) => { 
    
    
    const { id } = useParams(); 

    const navigate = useNavigate();

    const  [projectSelected, setProjectSelected] = useState(null);

    useEffect(() => {
        const project = dataportfolio.find(data => data.id === parseInt(id));
        setProjectSelected(project);
        
        if (!project) {
            navigate ('/');
          } else {
            setProjectSelected(project);
          }
    }, [id, navigate]);

    if (!projectSelected) {
        return <div>Loading...</div>;
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
                <h1 className="display-4 mb-4">{projectSelected.title}</h1>
                <hr className="t_border my-4 ml-0 text-left" />
                </Col>
                </Row>
                <Row className="sec_sp">
    <Col lg="5" className="d-flex align-items-center">
        <div className="project-image-container">
            <img src={projectSelected.img} alt={projectSelected.title} className=
            {projectSelected.id === 4 ? 'special-image' : 'project-image'}
            />
        </div>
    </Col>
    <Col lg="7" className="d-flex align-items-center">
      <div className="project-description__wrapper">
        <div className="project-description">
            <p>{projectSelected.description}</p>
        </div>
        <div className="project-tags">
            <ul className="project-tags__list">
                {projectSelected.tags.map((tag, i) => {
                    return (
                        <li key={i}>{tag}</li>
                    )
                })}
            </ul>
        </div>
      </div>
    </Col>
</Row>

       </Container>
        </HelmetProvider>
        
    )
    }   
      
 
 


  

export default ProjectDetail;