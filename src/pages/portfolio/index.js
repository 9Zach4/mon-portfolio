import React, { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import FilterButtons from "../../components/filter";
import "./style.css";

export const Portfolio = () => {
  const [currentFilter, setCurrentFilter] = useState("all");

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
            <h1 className="display-4 mb-4"> Portfolio </h1>
            <hr className="t_border my-4 ml-0 text-left" />

            <FilterButtons
              currentFilter={currentFilter}
              setCurrentFilter={setCurrentFilter}
            />
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
            return null;
          })}
        </div>
      </Container>
    </HelmetProvider>
  );
};
