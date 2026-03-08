
import React, { useState } from "react";
import { Card, Row, Col, Pagination } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

import img41 from "../image/era cement.jpeg"
import img42 from "../image/cement.jpeg"
import img43 from "../image/puthuparambu.jpeg"
const CementArts = () => {
  const poolsData = [
 {
      id: 42,
      image: img41,
      title: 'ERA NATURE',
      location: 'PERITHALMANNA'
    },
    {
      id: 43,
      image: img42,
      title: 'ERA NATURE',
      location: 'KOCHI'
    },
    {
      id: 44,
      image: img43,
      title: 'PUTHUPARAMBU',
      location: 'KOTTAKKAL'
    },
    // {
    //   id: 4,
    //   image: 'https://images.unsplash.com/photo-1551918120-9739cb430c6d?w=600&h=500&fit=crop',
    //   title: 'LAKE VIEW',
    //   location: 'THEKKADY'
    // }
  ];

  /* ---------- PAGINATION ---------- */
  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentItems = poolsData.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(poolsData.length / itemsPerPage);

 
  const handlePageChange = (page) => {
    setCurrentPage(page); // ❌ no scrollTo (page won't jump)
  };
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #f8f9fa 0%, #e9f5f0 100%)",
        minHeight: "100vh",
        padding: "3rem 0",
      }}
    >
      <div className="container">

        {/* Header */}
        <div className="text-center mb-5">
         <h1
  style={{
    fontSize: "3rem",
    fontWeight: "700",
    color: "#052c65",
    marginTop: "4rem",
  }}
>
  Cement & Arts Projects
</h1>

        </div>

        {/* Cards Grid */}
        <Row className="g-4">
          {poolsData.map((place) => (
            <Col key={place.id} lg={3} md={4} sm={6}>
              <Card
                className="h-100 border-0 shadow-sm"
                style={{
                  borderRadius: "16px",
                  overflow: "hidden",
                  transition: "0.3s",
                  cursor: "pointer",
                  backgroundColor: "#fff",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 24px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 2px 8px rgba(0,0,0,0.1)";
                }}
              >
                <Card.Img
                  src={place.image}
                  style={{
                    height: "220px",
                    objectFit: "cover",
                  }}
                />

                <Card.Body style={{ padding: "1.25rem" }}>

                  {/* Title (Single Line) */}
                  <h5
                    style={{
                      fontWeight: "700",
                      marginBottom: "0.5rem",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {place.title}
                  </h5>

                  {/* Location (Single Line) */}
                  <p
                    style={{
                      color: "#6c757d",
                      marginBottom: "1rem",
                      fontSize: "0.9rem",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    <strong>Location:</strong> {place.location}
                  </p>

                  {/* Standard Button */}
                 <Link
  to={`/details/${place.id}`}
  className="w-100"
  style={{
    backgroundColor: "#0dcaf0",
    borderRadius: "8px",
    padding: "10px 0",
    color: "white",
    textAlign: "center",
    display: "block",
    fontWeight: "600",
    textDecoration: "none",   // <<< REMOVE UNDERLINE
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
        <div className="d-flex justify-content-center mt-5">
          <Pagination>
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
      </div>
    </div>
  );
};

export default CementArts;