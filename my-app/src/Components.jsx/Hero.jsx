import React from "react";
import img1 from "../image/bg.jpg.jpeg";
import { Button, Container } from "react-bootstrap";
import { FaWhatsapp } from "react-icons/fa";

const Hero = () => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(
          rgba(0,0,0,0.55),
          rgba(0,0,0,0.55)
        ), url(${img1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "85vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Container>
        <div className="col-lg-6 col-md-8">
          <h1 className="fw-bold display-5 mb-3 text-white">
            Professional Pool Services & Renovation
          </h1>

          <p className="fs-5 mb-4 text-light">
            Years of experience in pool construction, maintenance, and complete
            renovation solutions.
          </p>

          <Button
            variant="light"
            size="lg"
            className="px-4 py-2 fw-semibold"
          >
            Explore More →
          </Button>
        </div>
      </Container>

      {/* WhatsApp Floating Button */}
      <div
        onClick={() =>
          window.open("https://wa.me/9605885404", "_blank")
        }
        style={{
          position: "fixed",
          bottom: "25px",
          right: "25px",
          width: "60px",
          height: "60px",
          backgroundColor: "#25D366",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          boxShadow: "0 6px 18px rgba(0,0,0,0.35)",
          zIndex: 1000,
        }}
      >
        <FaWhatsapp color="#fff" size={32} />
      </div>
    </div>
  );
};

export default Hero;
