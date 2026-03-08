// import React, { useState } from "react";
// import { Card, Row, Col, Pagination } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Link } from "react-router-dom";

// /* ---------- IMAGES ---------- */
// import img27 from "../image/era nature.jpeg";
// import img28 from "../image/thujan tirur.jpeg";
// import img29 from "../image/panniyannur.jpeg";
// import img30 from "../image/era.jpeg";
// import img31 from "../image/manjeri2.jpeg";
// import img32 from "../image/chemmad.jpeg";
// import img33 from "../image/delicia.jpeg";
// import img34 from "../image/othukkungal.jpeg";
// import img35 from "../image/unity.jpeg";
// import img36 from "../image/delicia2.jpeg";
// import img37 from "../image/aryavaidya.jpeg";
// import img38 from "../image/kottakkal 2.jpeg";
// import img39 from "../image/iritty.jpeg";
// import img40 from "../image/munduparamba.jpeg";

// const PondsArts = () => {
//   /* ---------- DATA ---------- */
//   const poolsData = [
//     { id: 28, image: img27, title: "IRA NATURE", location: "PERINTHALMANNA" },
//     { id: 29, image: img28, title: "THUNJAN PARAMBU", location: "TIRUR" },
//     { id: 30, image: img29, title: "PANNIYANNUR", location: "THALASSERY" },
//     { id: 31, image: img30, title: "ERA NATURE", location: "PERINTHALMANNA" },
//     { id: 32, image: img31, title: "MANJERI PROJECT", location: "MANJERI" },
//     { id: 33, image: img32, title: "CHEMMEAD PROJECT", location: "CHEMMEAD" },
//     { id: 34, image: img33, title: "DELICIA RESTAURANT", location: "MONGAM" },
//     { id: 35, image: img34, title: "OTHUKKUNGAL", location: "OTHUKKUNGAL" },
//     { id: 36, image: img35, title: "UNITY COLLEGE", location: "MANJERI" },
//     { id: 37, image: img36, title: "DELICIA RESTAURANT", location: "MONGAM" },
//     { id: 38, image: img37, title: "ARYAVAIDYA SALA", location: "KOTTAKKAL" },
//     { id: 39, image: img38, title: "KOTTAKKAL PROJECT", location: "KOTTAKKAL" },
//     { id: 40, image: img39, title: "IRITTY", location: "KANNUR" },
//     { id: 41, image: img40, title: "MUNDUPARAMBA", location: "MALAPPURAM" },
//   ];

//   /* ---------- PAGINATION ---------- */
//   const itemsPerPage = 12;
//   const [currentPage, setCurrentPage] = useState(1);

//   const indexOfLast = currentPage * itemsPerPage;
//   const indexOfFirst = indexOfLast - itemsPerPage;
//   const currentItems = poolsData.slice(indexOfFirst, indexOfLast);

//   const totalPages = Math.ceil(poolsData.length / itemsPerPage);

 
//   const handlePageChange = (page) => {
//     setCurrentPage(page); // ❌ no scrollTo (page won't jump)
//   };

//   return (
//     <div
//       style={{
//         background: "#003B6D",
//         minHeight: "100vh",
//         padding: "3rem 0",
//       }}
//     >
//       <div className="container">
//         {/* ---------- HEADER ---------- */}
//         <div className="text-center mb-5">
//           <h1
//             style={{
//               fontSize: "3rem",
//               fontWeight: 700,
//               color: "#fff",
//               marginTop: "4rem",
//             }}
//           >
//             Pond & Arts Projects
//           </h1>
//         </div>

//         {/* ---------- CARDS GRID ---------- */}
//         <Row className="g-4">
//           {currentItems.map((place) => (
//             <Col key={place.id} lg={3} md={4} sm={6}>
//               <Card
//                 className="h-100 border-0 shadow-sm"
//                 style={{
//                   borderRadius: "16px",
//                   overflow: "hidden",
//                   transition: "0.3s",
//                   cursor: "pointer",
//                   backgroundColor: "#fff",
//                 }}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.transform = "translateY(-8px)";
//                   e.currentTarget.style.boxShadow =
//                     "0 12px 24px rgba(0,0,0,0.15)";
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.transform = "translateY(0)";
//                   e.currentTarget.style.boxShadow =
//                     "0 2px 8px rgba(0,0,0,0.1)";
//                 }}
//               >
//                 <Card.Img
//                   src={place.image}
//                   style={{ height: "220px", objectFit: "cover" }}
//                 />

//                 <Card.Body style={{ padding: "1.25rem" }}>
//                   <h5
//                     style={{
//                       fontWeight: 700,
//                       whiteSpace: "nowrap",
//                       overflow: "hidden",
//                       textOverflow: "ellipsis",
//                     }}
//                   >
//                     {place.title}
//                   </h5>

//                   <p
//                     style={{
//                       color: "#6c757d",
//                       fontSize: "0.9rem",
//                       whiteSpace: "nowrap",
//                       overflow: "hidden",
//                       textOverflow: "ellipsis",
//                     }}
//                   >
//                     <strong>Location:</strong> {place.location}
//                   </p>

//                   <Link
//                     to={`/details/${place.id}`}
//                     style={{
//                       backgroundColor: "#0dcaf0",
//                       borderRadius: "8px",
//                       padding: "10px 0",
//                       color: "white",
//                       textAlign: "center",
//                       display: "block",
//                       fontWeight: 600,
//                       textDecoration: "none",
//                     }}
//                   >
//                     View Details
//                   </Link>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>

//         {/* ---------- PAGINATION ---------- */}
//         <div className="d-flex justify-content-center mt-5">
//           <Pagination>
//             <Pagination.Prev
//               disabled={currentPage === 1}
//               onClick={() => handlePageChange(currentPage - 1)}
//             />

//             {[...Array(totalPages)].map((_, i) => (
//               <Pagination.Item
//                 key={i}
//                 active={currentPage === i + 1}
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
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PondsArts;


import React, { useState } from "react";
import { Card, Row, Col, Pagination, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

/* ---------- IMAGES ---------- */
import img27 from "../image/era nature.jpeg";
import img28 from "../image/thujan tirur.jpeg";
import img29 from "../image/panniyannur.jpeg";
import img30 from "../image/era.jpeg";
import img31 from "../image/manjeri2.jpeg";
import img32 from "../image/chemmad.jpeg";
import img33 from "../image/delicia.jpeg";
import img34 from "../image/othukkungal.jpeg";
import img35 from "../image/unity.jpeg";
import img36 from "../image/delicia2.jpeg";
import img37 from "../image/aryavaidya.jpeg";
import img38 from "../image/kottakkal 2.jpeg";
import img39 from "../image/iritty.jpeg";
import img40 from "../image/munduparamba.jpeg";

const PondsArts = () => {
  /* ---------- DATA ---------- */
  const poolsData = [
    { id: 28, image: img27, title: "IRA NATURE", location: "PERINTHALMANNA" },
    { id: 29, image: img28, title: "THUNJAN PARAMBU", location: "TIRUR" },
    { id: 30, image: img29, title: "PANNIYANNUR", location: "THALASSERY" },
    { id: 31, image: img30, title: "ERA NATURE", location: "PERINTHALMANNA" },
    { id: 32, image: img31, title: "MANJERI PROJECT", location: "MANJERI" },
    { id: 33, image: img32, title: "CHEMMEAD PROJECT", location: "CHEMMEAD" },
    { id: 34, image: img33, title: "DELICIA RESTAURANT", location: "MONGAM" },
    { id: 35, image: img34, title: "OTHUKKUNGAL", location: "OTHUKKUNGAL" },
    { id: 36, image: img35, title: "UNITY COLLEGE", location: "MANJERI" },
    { id: 37, image: img36, title: "DELICIA RESTAURANT", location: "MONGAM" },
    { id: 38, image: img37, title: "ARYAVAIDYA SALA", location: "KOTTAKKAL" },
    { id: 39, image: img38, title: "KOTTAKKAL PROJECT", location: "KOTTAKKAL" },
    { id: 40, image: img39, title: "IRITTY", location: "KANNUR" },
    { id: 41, image: img40, title: "MUNDUPARAMBA", location: "MALAPPURAM" },
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
    <div
      style={{
        background: "#003B6D",
        minHeight: "100vh",
        padding: "3rem 0",
      }}
    >
      <Container fluid className="px-4">
        {/* ---------- HEADER ---------- */}
        <div className="text-center mb-5">
          <h1
            style={{
              fontSize: "3rem",
              fontWeight: 700,
              color: "#fff",
              marginTop: "4rem",
            }}
          >
            Pond & Arts Projects
          </h1>
        </div>

        {/* ---------- CARDS GRID - 5 per row ---------- */}
        <Row xs={1} sm={2} md={3} lg={5} className="g-4">
          {currentItems.map((place) => (
            <Col key={place.id}>
              <Card
                className="h-100 border-0 shadow-sm pond-card"
                style={{
                  borderRadius: "16px",
                  overflow: "hidden",
                  backgroundColor: "#fff",
                }}
              >
                <div className="image-wrapper">
                  <Card.Img
                    src={place.image}
                    alt={place.title}
                    style={{ height: "220px", objectFit: "cover" }}
                  />
                </div>

                <Card.Body style={{ padding: "1.25rem" }}>
                  <h5
                    style={{
                      fontWeight: 700,
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {place.title}
                  </h5>

                  <p
                    style={{
                      color: "#6c757d",
                      fontSize: "0.9rem",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      marginBottom: "1rem",
                    }}
                  >
                    <strong>Location:</strong> {place.location}
                  </p>

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

        {/* ---------- PAGINATION ---------- */}
        <div className="d-flex justify-content-center mt-5">
          <Pagination size="lg">
            <Pagination.Prev
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
            />

            {[...Array(totalPages)].map((_, i) => (
              <Pagination.Item
                key={i}
                active={currentPage === i + 1}
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
        </div>
      </Container>

      {/* ---------- ENHANCED CSS ---------- */}
      <style>{`
        .pond-card {
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .pond-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2) !important;
        }

        .image-wrapper {
          overflow: hidden;
          position: relative;
        }

        .pond-card:hover .image-wrapper img {
          transform: scale(1.1);
        }

        .pond-card img {
          transition: transform 0.4s ease;
        }

        .btn-view-details:hover {
          background-color: #0bb5d6 !important;
          transform: scale(1.02);
          box-shadow: 0 4px 12px rgba(13, 202, 240, 0.4);
        }

        .pagination {
          gap: 8px;
        }

        .pagination .page-link {
          border-radius: 10px;
          border: 2px solid #fff;
          color: #fff;
          background-color: transparent;
          font-weight: 600;
          padding: 10px 16px;
          transition: all 0.3s ease;
        }

        .pagination .page-item.active .page-link {
          background-color: #0dcaf0;
          border-color: #0dcaf0;
          color: #003B6D;
        }

        .pagination .page-link:hover {
          background-color: #101719;
          border-color: #0dcaf0;
          color: #003B6D;
          transform: scale(1.1);
        }

        .pagination .page-item.disabled .page-link {
          background-color: rgba(255, 255, 255, 0.2);
          border-color: rgba(255, 255, 255, 0.3);
          color: rgba(255, 255, 255, 0.5);
        }
      `}</style>
    </div>
  );
};

export default PondsArts;