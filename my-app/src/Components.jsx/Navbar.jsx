import React from "react";
import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";

import logo from "../image/logo.jpg"; // your logo

export default function HomePage() {
  return (
    <div>
      {/* ================= TOP BAR ================= */}
      <div className="bg-info text-white py-2">
        <Container className="d-flex justify-content-between align-items-center">
          {/* LEFT INFO */}
          <div className="d-flex gap-4">
            <span>📍 West Kodur, Malappuram, Kerala</span>
            <span>📅 Thursday Mar 27, 2024</span>
            <span>✉️ kpmpools@gmail.com</span>
          </div>

          {/* RIGHT INSTAGRAM BUTTON */}
          <a
            href="https://www.instagram.com/kpmpools"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-btn"
            
          >
            <FaInstagram className="instagram-icon" />
            <span>Follow on Instagram</span>
          </a>
        </Container>
      </div>

      {/* ================= NAVBAR ================= */}
      <Navbar expand="lg" className="bg-white shadow-sm py-2">
        <Container>
          {/* LOGO + TITLE */}
          <Navbar.Brand
            href="#home"
            className="d-flex align-items-center gap-2"
            style={{ textDecoration: "none" }}
          >
            <img
              src={logo}
              alt="KPM Logo"
              style={{
                width: "55px",
                height: "55px",
                objectFit: "contain",
              }}
            />

            <div className="d-flex flex-column">
              <h1
                className="m-0 fw-bold"
                style={{
                  fontSize: "40px",
                  color: "#002B5B",
                  lineHeight: "1",
                }}
              >
                KPM
              </h1>

              <span
                style={{
                  fontSize: "12px",
                  fontWeight: "600",
                  letterSpacing: "0.5px",
                  color: "#000",
                }}
              >
                POOLS & BUILDING CONSULTANCY
              </span>
            </div>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            {/* MENU */}
            <Nav className="mx-auto gap-2 align-items-center">
              <Nav.Link as={Link} to="/home">Home</Nav.Link>
              <Nav.Link as={Link} to="/about us">About us</Nav.Link>

              <NavDropdown title="Services" id="services-dropdown">
                <NavDropdown.Item as={Link} to="/pools">
                  pools works
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/ponds">
                  ponds works
                </NavDropdown.Item>
                <NavDropdown.Item  as={Link} to="/cement">
                  cements works
                </NavDropdown.Item>
              </NavDropdown>

              {/* <NavDropdown title="Pages" id="pages-dropdown">
                <NavDropdown.Item href="#p1">Page 1</NavDropdown.Item>
                <NavDropdown.Item href="#p2">Page 2</NavDropdown.Item>
              </NavDropdown> */}

              {/* <Nav.Link href="#news">News</Nav.Link> */}
              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>
            </Nav>

            {/* CTA BUTTON */}
            <Button variant="info" className="text-white px-4 py-2">
              Get A Quote
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
