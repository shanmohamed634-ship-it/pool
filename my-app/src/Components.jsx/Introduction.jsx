import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function IntroductionSection() {
  // ALL CSS INSIDE ONE FILE
  const styles = {
      section: {
      background: "#0E4B78",
      padding: "70px 0",
      color: "white",
    },
    iconBox: {
      width: "60px",
      height: "60px",
      background: "rgba(255,255,255,0.2)",
      borderRadius: "15px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginRight: "12px",
    },
    title: {
      fontSize: "42px",
      fontWeight: "700",
      margin: 0,
    },
    card: {
      background: "rgba(255,255,255,0.10)",
      border: "1px solid rgba(255,255,255,0.20)",
      backdropFilter: "blur(10px)",
      padding: "40px",
      borderRadius: "20px",
      textAlign: "center",
    },
    text: {
      fontSize: "18px",
      marginBottom: "20px",
      lineHeight: "1.7",
      color:"white"
      
    },
  };

  return (
    <section style={styles.section}>
      <Container>
        {/* Title Row */}
        <Row className="mb-5">
          <Col className="d-flex align-items-center">
            <div style={styles.iconBox}>
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <h1 style={styles.title}>INTRODUCTION</h1>
          </Col>
        </Row>

        {/* Card Content */}
        <Row className="justify-content-center">
          <Col md={10}>
            <Card style={styles.card}>
              <p style={styles.text}>
                With over <strong>5 years of experience</strong> in the pool
                construction industry, we take pride in being a trusted name
                across <strong>South India</strong>. Our expertise has been
                showcased through <strong>50+ successful pool projects</strong>,
                ranging from residential retreats to commercial masterpieces.
              </p>

              <p style={styles.text}>
                At our core, we believe that every pool should blend
                functionality with elegance. Our team not only delivers quality
                construction but also{" "}
                <strong>
                  provides expert guidance to architects and designers
                </strong>
                , ensuring that every pool we build is a perfect combination of
                innovation, safety and aesthetic appeal.
              </p>

              <p style={{ ...styles.text, marginBottom: 0 }}>
                From concept to completion, we are committed to crafting pools
                that reflect our clients' dreams built with precision, passion,
                and professionalism.
              </p>
            </Card>

          </Col>
        </Row>
      </Container>
    </section>
  );
}
