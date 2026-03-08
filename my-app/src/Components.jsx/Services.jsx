import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Services.css";

import bgImage from "../image/bg.2.jpeg"; // Only ONE bgImage

export default function Servicesection() {
  return (
    <section
      className="hero-section"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Container>
        <Row>
          <Col md={8}>
            <p className="hero-subtitle">Features Services</p>
            <h1 className="hero-title">
              Need High Quality Cleaning & <br /> Maintenance Services?
            </h1>
          </Col>

          <Col
            md={4}
            className="d-flex justify-content-md-end justify-content-center align-items-center mt-3 mt-md-0"
          >
            <Button className="hero-btn">Get A Quout →</Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

