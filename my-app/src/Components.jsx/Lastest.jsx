import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import img from "../image/areekal.jpeg"
import img1 from "../image/kodakkallu.jpeg"
import img2 from "../image/vengara.jpeg"
export default function NewsSection() {
  const articles = [
    {
      img:img,
      title: "Make Your Pool Energy Efficient And Eco-friendly",
    },
    {
      img: img1,
      title: "Make Your Pool Energy Efficient And Eco-friendly",
    },
    {
      img:img2,
      title: "Make Your Pool Energy Efficient And Eco-friendly",
    },
  ];

  return (
    <section style={{ padding: "60px 0" }}>
      <Container>

        {/* Top small subtitle */}
        <p
          style={{
            textAlign: "center",
            color: "#7aaec4",
            marginBottom: "5px",
            fontSize: "18px",
          }}
        >
          Our Articles Latest
        </p>

        {/* Main title */}
        <h2
          style={{
            textAlign: "center",
            fontWeight: "700",
            marginBottom: "40px",
          }}
        >
          News And Articles Latest
        </h2>

        {/* Article cards */}
        <Row>
          {articles.map((item, i) => (
            <Col md={4} className="mb-4" key={i}>
              <Card style={{ border: "none" }}>
                <Card.Img
                  variant="top"
                  src={item.img}
                  style={{ height: "230px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title style={{ fontSize: "20px", fontWeight: "600" }}>
                    {item.title}
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

      </Container>
    </section>
  );
}
