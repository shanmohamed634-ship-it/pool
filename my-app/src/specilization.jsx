import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Specialization = () => {
  const specializations = [
    "Pool Structural Work (10 Years Warranty)",
    "Pool Filtration (also in existing Pools)",
    "Pool Civil Works",
    "Pool MEP Works",
    "Pool Designing Works",
    "Pool Drawings",
    "Pool Renovation",
    "Pool Maintenance (AMC)",
    "Pool Chemicals Sales",
    "Pool Accessories Sales",
    "Pool Tiles Sales",
    "Fish Pond",
    "Salt Pools",
    "Water Features and Fountains",
    "Water Proofing",
  ];
           
  return (
    <div
      style={{
        backgroundColor: "#f4f1ed",
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.85), rgba(255,255,255,0.85))",
        minHeight: "100vh",
        padding: "5rem 0",
      }}
    >
      <Container>
        <Row>
          <Col lg={8} md={10}>
            {/* ---------- TITLE ---------- */}
            <div className="d-flex align-items-center mb-4">
              <div
                style={{
                  width: "40px",
                  height: "30px",
                  backgroundColor: "#0b5d7c",
                  borderRadius: "12px",
                  marginRight: "15px",
                }}
              ></div>
              <h2
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "700",
                  color: "#0b5d7c",
                  letterSpacing: "1px",
                }}
              >
                OUR SPECIALIZATION
              </h2>
            </div>

            {/* ---------- LIST ---------- */}
            <ul style={{ listStyle: "none", paddingLeft: "0" }}>
              {specializations.map((item, index) => (
                <li
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    marginBottom: "1rem",
                    fontSize: "1.05rem",
                    color: "#0b5d7c",
                    fontWeight: "500",
                  }}
                >
                  <span
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      border: "2px solid #0b5d7c",
                      marginRight: "15px",
                      marginTop: "8px",
                      flexShrink: 0,
                    }}
                  ></span>
                  {item}
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
     
    </div>
  );
};

export default Specialization;

