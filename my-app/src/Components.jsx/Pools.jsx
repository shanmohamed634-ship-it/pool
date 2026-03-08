// import React, { useState } from "react";
// import { Card, Row, Col, Pagination, Container } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Link } from "react-router-dom";
// import img from "../image/iru homes.jpeg";
// import img1 from "../image/ira nature.jpeg";
// import img2 from "../image/paruthur.jpeg";
// import img3 from "../image/othukkungal.jpeg";
// import img4 from "../image/chemmad.jpeg";
// import img5 from "../image/chemmankadavu.jpeg";
// import img6 from "../image/thunjan paramb.jpeg";
// import img7 from "../image/areekal.jpeg";
// import img8 from "../image/panayi.jpeg";
// import img9 from "../image/vengara.jpeg";
// import img10 from "../image/manjeri2.jpeg";
// import img11 from "../image/zaitoon.jpeg";
// import img12 from "../image/akhss kottor.jpeg";
// import img13 from "../image/kodakkallu.jpeg";
// import img14 from "../image/cherumukku.jpeg";
// import img15 from "../image/athiramada.jpeg";
// import img16 from "../image/vengara2.jpeg";
// import img17 from "../image/westkodur.jpeg";
// import img18 from "../image/klari moochikkal.jpeg";
// import img20 from "../image/eranature.jpeg";
// import img22 from "../image/karekkad.jpeg";
// import img23 from "../image/coffee county.jpeg";
// import img26 from "../image/kottakkal 2.jpeg";

// const PoolProjects = () => {
//   const poolsData = [
//     { id: 1, title: "IRU HOMES", location: "WAYANAD", image: img },
//     { id: 2, title: "ERA NATURE", location: "PERINTHALMANNA", image: img1 },
//     { id: 3, title: "PARUTHUR", location: "PALAKKAD", image: img2 },
//     { id: 4, title: "OTHUKUNGAL", location: "OTHUKUNGAL", image: img3 },
//     { id: 5, title: "MAK INDOOR POOL", location: "CHEMMAD", image: img4 },
//     { id: 6, title: "CHEMMANKADAVU", location: "MALAPPURAM", image: img5 },
//     { id: 7, title: "THUNJAN PARAMBU", location: "TIRUR", image: img6 },
//     { id: 8, title: "AREEKAL", location: "KOTTAKKAL", image: img7 },
//     { id: 9, title: "PANAYI", location: "MANJERI", image: img8 },
//     { id: 10, title: "VENGARA", location: "VENGARA", image: img9 },
//     { id: 11, title: "MANJERI", location: "MANJERI", image: img10 },
//     { id: 12, title: "ZAITHOON", location: "INTERNATIONAL SCHOOL", image: img11 },
//     { id: 13, title: "AKMHSS KOTTOOR", location: "KOTTAKKAL", image: img12 },
//     { id: 14, title: "KODAKKALLU", location: "KAKKAD", image: img13 },
//     { id: 15, title: "CHERUMUKKU", location: "CHEMMED", image: img14 },
//     { id: 16, title: "ATHIRMADA", location: "PUTHANATHANI", image: img15 },
//     { id: 17, title: "VENGARA", location: "VENGARA", image: img16 },
//     { id: 18, title: "WEST KODUR", location: "MALAPPURAM", image: img17 },
//     { id: 19, title: "KLARI MOOCHIKKAL", location: "KOTTAKKAL", image: img18 },
//     { id: 21, title: "ERA NATURE", location: "PERINTHALMANNA", image: img20 },
//     { id: 23, title: "KAREKKAD", location: "KADAPUZHA", image: img22 },
//     { id: 24, title: "COFFEE COUNTY RETREAT", location: "WAYANAD", image: img23 },
//     { id: 27, title: "KOTTAKKAL PROJECT", location: "KOTTAKKAL", image: img26 },
//   ];

//   /* ---------- PAGINATION ---------- */
//   const itemsPerPage = 24; // 6 cards × 4 rows = 24 cards per page
//   const [currentPage, setCurrentPage] = useState(1);

//   const indexOfLast = currentPage * itemsPerPage;
//   const indexOfFirst = indexOfLast - itemsPerPage;
//   const currentItems = poolsData.slice(indexOfFirst, indexOfLast);

//   const totalPages = Math.ceil(poolsData.length / itemsPerPage);

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   return (
//     <Container fluid className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
//       {/* Header */}
//       <Row>
//         <Col>
//           <h1 className="text-center mb-5 fw-bold" style={{ color: "#0056b3" }}>
//             Pools Projects
//           </h1>
//         </Col>
//       </Row>

//       {/* Cards */}
//       <Row xs={1} sm={2} md={3} lg={6} className="g-4 px-3">
//         {currentItems.map((place) => (
//           <Col key={place.id}>
//             <Card className="h-100 shadow-sm pool-card">
//               <Card.Img
//                 variant="top"
//                 src={place.image}
//                 alt={place.title}
//                 style={{ 
//                   height: "200px", 
//                   objectFit: "cover" 
//                 }}
//               />
//               <Card.Body className="d-flex flex-column">
//                 <Card.Title className="text-primary fw-bold">
//                   {place.title}
//                 </Card.Title>
//                 <Card.Text className="text-muted mb-3">
//                   <strong>Location:</strong> {place.location}
//                 </Card.Text>
//                 <Link
//                   to={`/poolproject/${place.id}`}
//                   className="btn btn-primary mt-auto"
//                   style={{ textDecoration: "none" }}
//                 >
//                   View Details
//                 </Link>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>

//       {/* Pagination */}
//       <Row className="mt-5">
//         <Col className="d-flex justify-content-center">
//           <Pagination>
//             <Pagination.Prev
//               disabled={currentPage === 1}
//               onClick={() => handlePageChange(currentPage - 1)}
//             />
//             {[...Array(totalPages)].map((_, i) => (
//               <Pagination.Item
//                 key={i + 1}
//                 active={i + 1 === currentPage}
//                 onClick={() => handlePageChange(i + 1)}
//               >
//                 {i + 1}
//               </Pagination.Item>
//             ))}
//             <Pagination.Next
//               disabled={currentPage === totalPages}
//               onClick={() => handlePageChange(currentPage + 1)}
//             />
//           </Pagination>
//         </Col>
//       </Row>

//       {/* CSS for hover effect */}
//       <style>{`
//         .pool-card {
//           transition: transform 0.3s ease, box-shadow 0.3s ease;
//           border-radius: 8px;
//           overflow: hidden;
//         }
        
//         .pool-card:hover {
//           transform: translateY(-10px);
//           box-shadow: 0 10px 25px rgba(0, 86, 179, 0.3) !important;
//         }

//         .pool-card img {
//           transition: transform 0.3s ease;
//         }

//         .pool-card:hover img {
//           transform: scale(1.05);
//         }

//         .btn-primary {
//           background-color: #0056b3;
//           border-color: #0056b3;
//           transition: all 0.3s ease;
//         }

//         .btn-primary:hover {
//           background-color: #004494;
//           border-color: #004494;
//           transform: scale(1.02);
//         }
//       `}</style>
//     </Container>
//   );
// };

// export default PoolProjects;



import React, { useState } from "react";
import { Card, Row, Col, Pagination, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import img from "../image/iru homes.jpeg";
import img1 from "../image/ira nature.jpeg";
import img2 from "../image/paruthur.jpeg";
import img3 from "../image/othukkungal.jpeg";
import img4 from "../image/chemmad.jpeg";
import img5 from "../image/chemmankadavu.jpeg";
import img6 from "../image/thunjan paramb.jpeg";
import img7 from "../image/areekal.jpeg";
import img8 from "../image/panayi.jpeg";
import img9 from "../image/vengara.jpeg";
import img10 from "../image/manjeri2.jpeg";
import img11 from "../image/zaitoon.jpeg";
import img12 from "../image/akhss kottor.jpeg";
import img13 from "../image/kodakkallu.jpeg";
import img14 from "../image/cherumukku.jpeg";
import img15 from "../image/athiramada.jpeg";
import img16 from "../image/vengara2.jpeg";
import img17 from "../image/westkodur.jpeg";
import img18 from "../image/klari moochikkal.jpeg";
import img20 from "../image/eranature.jpeg";
import img22 from "../image/karekkad.jpeg";
import img23 from "../image/coffee county.jpeg";
import img26 from "../image/kottakkal 2.jpeg";

const PoolProjects = () => {
  const poolsData = [
    { id: 1, title: "IRU HOMES", location: "WAYANAD", image: img },
    { id: 2, title: "ERA NATURE", location: "PERINTHALMANNA", image: img1 },
    { id: 3, title: "PARUTHUR", location: "PALAKKAD", image: img2 },
    { id: 4, title: "OTHUKUNGAL", location: "OTHUKUNGAL", image: img3 },
    { id: 5, title: "MAK INDOOR POOL", location: "CHEMMAD", image: img4 },
    { id: 6, title: "CHEMMANKADAVU", location: "MALAPPURAM", image: img5 },
    { id: 7, title: "THUNJAN PARAMBU", location: "TIRUR", image: img6 },
    { id: 8, title: "AREEKAL", location: "KOTTAKKAL", image: img7 },
    { id: 9, title: "PANAYI", location: "MANJERI", image: img8 },
    { id: 10, title: "VENGARA", location: "VENGARA", image: img9 },
    { id: 11, title: "MANJERI", location: "MANJERI", image: img10 },
    { id: 12, title: "ZAITHOON", location: "INTERNATIONAL SCHOOL", image: img11 },
    { id: 13, title: "AKMHSS KOTTOOR", location: "KOTTAKKAL", image: img12 },
    { id: 14, title: "KODAKKALLU", location: "KAKKAD", image: img13 },
    { id: 15, title: "CHERUMUKKU", location: "CHEMMED", image: img14 },
    { id: 16, title: "ATHIRMADA", location: "PUTHANATHANI", image: img15 },
    { id: 17, title: "VENGARA", location: "VENGARA", image: img16 },
    { id: 18, title: "WEST KODUR", location: "MALAPPURAM", image: img17 },
    { id: 19, title: "KLARI MOOCHIKKAL", location: "KOTTAKKAL", image: img18 },
    { id: 21, title: "ERA NATURE", location: "PERINTHALMANNA", image: img20 },
    { id: 23, title: "KAREKKAD", location: "KADAPUZHA", image: img22 },
    { id: 24, title: "COFFEE COUNTY RETREAT", location: "WAYANAD", image: img23 },
    { id: 27, title: "KOTTAKKAL PROJECT", location: "KOTTAKKAL", image: img26 },
  ];

  /* ---------- PAGINATION ---------- */
  const itemsPerPage = 15; // 5 cards × 3 rows = 15 cards per page
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentItems = poolsData.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(poolsData.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Container fluid className="py-5" style={{ backgroundColor: "#f0f4f8" }}>
      {/* Header */}
      <Row>
        <Col>
          <h1 className="text-center mb-5 fw-bold" style={{ color: "#2c5f8d", fontSize: "2.5rem" }}>
            Swimming Pool Projects
          </h1>
        </Col>
      </Row>

      {/* Cards - 5 per row on desktop */}
      <Row xs={1} sm={2} md={3} lg={5} className="g-4 px-3">
        {currentItems.map((place) => (
          <Col key={place.id}>
            <Card className="h-100 shadow pool-card border-0">
              <div className="image-wrapper">
                <Card.Img
                  variant="top"
                  src={place.image}
                  alt={place.title}
                  style={{ 
                    height: "220px", 
                    objectFit: "cover" 
                  }}
                />
              </div>
              <Card.Body className="d-flex flex-column p-3">
                <Card.Title className="fw-bold mb-2" style={{ color: "#2c5f8d", fontSize: "1.1rem" }}>
                  {place.title}
                </Card.Title>
                <Card.Text className="text-muted mb-3" style={{ fontSize: "0.9rem" }}>
                  <i className="bi bi-geo-alt-fill me-1"></i>
                  <strong>Location:</strong> {place.location}
                </Card.Text>
                <Link
                                    to={`/details/${place.id}`}
                                    className="btn-view-details"
                                    style={{
                                      backgroundColor: "#0dcaf0",
                                      borderRadius: "8px",
                                      padding: "10px 0",
                                      color: "white",
                                      textAlign: "center",
                                      display: "block",
                                      fontWeight: 600,
                                      textDecoration: "none",
                                      transition: "all 0.3s ease",
                                    }}
                                  >
                                    View Details
                                  </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Pagination */}
      <Row className="mt-5">
        <Col className="d-flex justify-content-center">
          <Pagination size="lg">
            <Pagination.Prev
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
            />
            {[...Array(totalPages)].map((_, i) => (
              <Pagination.Item
                key={i + 1}
                active={i + 1 === currentPage}
                onClick={() => handlePageChange(i + 1)}
              >
                {i + 1}
              </Pagination.Item>
            ))}
            <Pagination.Next
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
            />
          </Pagination>
        </Col>
      </Row>

      {/* Enhanced CSS */}
      <style>{`
        .pool-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: 12px;
          overflow: hidden;
          background: white;
        }
        
        .pool-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 15px 40px rgba(44, 95, 141, 0.25) !important;
        }

        .image-wrapper {
          overflow: hidden;
          position: relative;
        }

        .pool-card img {
          transition: transform 0.4s ease;
        }

        .pool-card:hover img {
          transform: scale(1.1);
        }

        .btn-custom {
          background: linear-gradient(135deg, #2c5f8d 0%, #1a3f5f 100%);
          border: none;
          color: white;
          padding: 10px 20px;
          border-radius: 8px;
          font-weight: 600;
          transition: all 0.3s ease;
          text-align: center;
        }

        .btn-custom:hover {
          background: linear-gradient(135deg, #1a3f5f 0%, #0f2a3f 100%);
          transform: scale(1.05);
          color: white;
          box-shadow: 0 5px 15px rgba(44, 95, 141, 0.3);
        }

        .pagination {
          gap: 5px;
        }

        .pagination .page-link {
          border-radius: 8px;
          border: 2px solid #2c5f8d;
          color: #2c5f8d;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .pagination .page-item.active .page-link {
          background-color: #2c5f8d;
          border-color: #2c5f8d;
        }

        .pagination .page-link:hover {
          background-color: #2c5f8d;
          color: white;
          transform: scale(1.1);
        }

        .pagination .page-item.disabled .page-link {
          background-color: #e9ecef;
          border-color: #dee2e6;
        }
      `}</style>
    </Container>
  );
};

export default PoolProjects;