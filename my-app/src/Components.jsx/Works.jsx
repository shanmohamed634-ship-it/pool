import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaSwimmingPool, FaBroom } from "react-icons/fa";
import { MdOutlineWaterDrop } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Features = () => {
  const navigate = useNavigate();

  const gotoSpecialization = () => {
    navigate("/specialization");
  };

  return (
    <div>
      {/* TITLE SECTION */}
      <Container className="text-center my-5">
        <h3 className="text-info fw-semibold mb-1">Features Services</h3>
        <h2 className="fw-bold">Expert Swimming Pool</h2>
      </Container>

      {/* FEATURE CARDS */}
      <Container className="my-4">
        <Row>
          {/* SPECIALIZATION CARD */}
          <Col md={4} className="mb-4">
            <Card
              className="text-center p-4 border-0 shadow-sm"
              onClick={gotoSpecialization}
              style={{ cursor: "pointer" }}
            >
              <div className="bg-light rounded-circle mx-auto p-3 mb-3">
               
              
              <Link to="/specialization"><FaSwimmingPool size={40} className="text-info" /></Link>
                 </div>
              <h5 className="fw-bold">OUR SPECIALIZATION</h5>
              <p className="text-muted">Click to view details.</p>
            </Card>
          </Col>

          {/* SECOND CARD */}
          <Col md={4} className="mb-4">
            <Card className="text-center p-4 border-0 shadow-sm">
              <div className="bg-light rounded-circle mx-auto p-3 mb-3">
                <MdOutlineWaterDrop size={40} className="text-info" />
              </div>
              <h5 className="fw-bold">WATERPROOFING SERVICES</h5>
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </Card>
          </Col>

          {/* THIRD CARD */}
          <Col md={4} className="mb-4">
            <Card className="text-center p-4 border-0 shadow-sm">
              <div className="bg-light rounded-circle mx-auto p-3 mb-3">
                <FaBroom size={40} className="text-info" />
              </div>
              <h5 className="fw-bold">Drain & Clean</h5>
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Features;
