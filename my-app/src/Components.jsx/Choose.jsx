import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaCrown, FaChartLine } from "react-icons/fa";
import img from "../image/faanu.jpeg"

const WhyChoose = () => {
  return (
    <div
      style={{
        backgroundColor: "#003B6D",
        color: "white",
        paddingTop: "60px",
        paddingBottom: "60px",
      }}
    >
      <Container>
        <Row className="align-items-center ">
          
          {/* LEFT SIDE */}
          <Col md={6}>
            <p className="text-info mb-1" style={{color:"#fff"}}>Why Choose</p>
            <h2 className="fw-bold mb-4" style={{color:"#2da8b8"}}>Why Choose KPM POOLS</h2>

            <p style={{ opacity: 0.8 }}>
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Maecenas
              turpis magna eu dolor nibh, non sed fau. Cras varius proin amet 
              vehicula magna...
            </p>

            {/* Feature 1 */}
            <div className="d-flex mt-4">
              <div className="me-3 bg-light p-3 rounded">
                <FaCrown size={30} className="text-info" />
              </div>
              <div>
                <h5 className="fw-bold">Quality Services</h5>
                <p className="mb-0" style={{ opacity: 0.8 }}>
                  Semper egetuis kelly for tellus urna area condition.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="d-flex mt-4">
              <div className="me-3 bg-light p-3 rounded">
                <FaChartLine size={30} className="text-info" />
              </div>
              <div>
                <h5 className="fw-bold">Affordable Pricing</h5>
                <p className="mb-0" style={{ opacity: 0.8 }}>
                  Semper egetuis kelly for tellus urna area condition.
                </p>
              </div>
            </div>
          </Col>

          {/* RIGHT SIDE IMAGE */}
          <Col md={6} className="mt-4 mt-md-0">
            <img
              src={img}
              alt="Pool Kid"
              className="img-fluid rounded shadow"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WhyChoose;
