import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",     // <-- Added phone number here
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message Sent!
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Message: ${formData.message}`);
  };

  return (
    <div style={styles.bg}>
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <Card style={styles.card}>
              <Card.Body>
                <h2 className="text-center mb-4" style={styles.title}>
                  Contact Us
                </h2>

                <Form onSubmit={handleSubmit}>
                  
                  {/* Name */}
                  <Form.Group className="mb-3">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  {/* Email */}
                  <Form.Group className="mb-3">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter your email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  {/* Phone Number */}
                  <Form.Group className="mb-3">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type="tel"
                      placeholder="Enter your contact number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  {/* Message */}
                  <Form.Group className="mb-3">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      placeholder="Write your message..."
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Button type="submit" className="w-100" style={styles.button}>
                    Send Message
                  </Button>
                </Form>

              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

const styles = {
  bg: {
    background: "#f0f8ff",
    minHeight: "100vh",
    paddingTop: "60px",
  },
  card: {
    padding: "25px",
    borderRadius: "15px",
    boxShadow: "0 5px 20px rgba(0,0,0,0.15)",
  },
  title: {
    fontWeight: "bold",
    color: "#1d9dc7",
  },
  button: {
    backgroundColor: "#1d9dc7",
    border: "none",
    padding: "12px",
    fontSize: "18px",
    fontWeight: "bold",
  },
};
