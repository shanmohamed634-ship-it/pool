// import React from "react";
// import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

// export default function HomePage() {
//   return (
//     <div>
//       {/* Top Bar */}
//       <div className="bg-info text-white py-2">
//         <Container className="d-flex justify-content-between">
//           <div className="d-flex gap-4">
//             <span>📍 257 Gold Street, Brooklyn, New York</span>
//             <span>📅 Thursday Mar 27, 2024</span>
//             <span>✉️ emaple@gmail.com</span>
//           </div>
//           <div className="d-flex gap-3">
//             <span>Follow on:</span>
//             <i className="bi bi-facebook"></i>
//             <i className="bi bi-twitter"></i>
//             <i className="bi bi-instagram"></i>
//           </div>
//         </Container>
//       </div>

//       {/* Navbar */}
//       <Navbar expand="lg" className="bg-white shadow-sm py-3">
//         <Container>
//           <Navbar.Brand href="#home" className="fw-bold fs-3 text-info">
//             Pools
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="mx-auto gap-3">
//               <Nav.Link href="#home">Home</Nav.Link>
//               <Nav.Link href="#about">About</Nav.Link>
//               <NavDropdown title="Services" id="services-dropdown">
//                 <NavDropdown.Item href="#action1">Service 1</NavDropdown.Item>
//                 <NavDropdown.Item href="#action2">Service 2</NavDropdown.Item>
//               </NavDropdown>
//               <NavDropdown title="Pages" id="pages-dropdown">
//                 <NavDropdown.Item href="#p1">Page 1</NavDropdown.Item>
//                 <NavDropdown.Item href="#p2">Page 2</NavDropdown.Item>
//               </NavDropdown>
//               <Nav.Link href="#news">News</Nav.Link>
//               <Nav.Link href="#contacts">Contacts</Nav.Link>
//             </Nav>
//             <Button variant="info" className="text-white px-4">
//               Get A Quote
//             </Button>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>

//       {/* Hero Section */}
//       <div
//         className="text-white d-flex align-items-center"
//         style={{
//           backgroundImage:
//             "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=60')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           height: "85vh",
//         }}
//       >
//         <Container>
//           <div className="col-md-6">
//             <h1 className="fw-bold display-4">We work with pool services & renovation</h1>
//             <p className="fs-5 mt-3">Professional pool building, cleaning & repairing services.</p>
//             <Button variant="light" size="lg" className="mt-3 px-5 py-2">
//               Explore More →
//             </Button>
//           </div>
//         </Container>
//       </div>
//     </div>
//   );
// }
