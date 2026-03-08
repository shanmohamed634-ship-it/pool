//    import React, { useState } from "react";
// import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

// export default function LoginPage() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(`Logged in with Email: ${email}`);
//   };

//   return (
//     <div style={styles.bg}>
//       <Container>
//         <Row className="justify-content-center">
//           <Col md={5}>
//             <Card style={styles.card}>
//               <Card.Body>
//                 <h3 className="text-center mb-4" style={styles.title}>
//                   Login
//                 </h3>

//                 <Form onSubmit={handleSubmit}>
//                   {/* Email */}
//                   <Form.Group className="mb-3">
//                     <Form.Label>Email</Form.Label>
//                     <Form.Control
//                       type="email"
//                       placeholder="Enter email"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                       required
//                     />
//                   </Form.Group>

//                   {/* Password */}
//                   <Form.Group className="mb-3">
//                     <Form.Label>Password</Form.Label>
//                     <Form.Control
//                       type="password"
//                       placeholder="Enter password"
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                       required
//                     />
//                   </Form.Group>

//                   <Button
//                     type="submit"
//                     className="w-100"
//                     style={styles.button}
//                   >
//                     Login
//                   </Button>
//                 </Form>
//               </Card.Body>
//             </Card>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// }

// // ⭐ Inline CSS
// const styles = {
//   bg: {
//     height: "100vh",
//     display: "flex",
//     alignItems: "center",
//     background: "linear-gradient(135deg, #00c6ff, #0072ff)",
//   },
//   card: {
//     padding: "20px",
//     borderRadius: "15px",
//     boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
//   },
//   title: {
//     fontWeight: "bold",
//     color: "#0072ff",
//   },
//   button: {
//     backgroundColor: "#0072ff",
//     border: "none",
//     padding: "10px",
//     fontSize: "18px",
//     fontWeight: "bold",
//   },
// };

  
// export default Login