import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import "./Customer.css";

export default function TestimonialSection() {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState("");
  const [reviews, setReviews] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !comment || rating === 0) return;

    setReviews([
      {
        name,
        rating,
        comment,
      },
      ...reviews,
    ]);

    setName("");
    setComment("");
    setRating(0);
    setHover(0);
  };

  return (
    <section className="testimonial-section py-5">
      <Container>
        <Row className="justify-content-center">
          <Col md={7}>
            {/* REVIEW FORM */}
            <div className="review-card">
              <h4 className="text-center mb-3">Leave a Review</h4>

              {/* NAME */}
              <Form.Control
                type="text"
                placeholder="Enter your name"
                className="modern-input mb-3"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              {/* STARS */}
              <div className="modern-stars text-center mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={`modern-star ${
                      star <= (hover || rating) ? "active" : ""
                    }`}
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHover(star)}
                    onMouseLeave={() => setHover(0)}
                  >
                    ★
                  </span>
                ))}
              </div>

              {/* COMMENT */}
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Share your experience"
                className="modern-textarea"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />

              <div className="text-center mt-3">
                <Button className="modern-btn" onClick={handleSubmit}>
                  Submit Review
                </Button>
              </div>
            </div>

            {/* SCROLLABLE REVIEWS */}
            {reviews.length > 0 && (
              <div className="scroll-review-wrapper mt-4">
                {reviews.map((r, i) => (
                  <div key={i} className="modern-review">
                    <div className="review-header">
                      <strong className="review-name">{r.name}</strong>
                      <div className="review-stars">
                        {Array.from({ length: r.rating }).map((_, idx) => (
                          <span key={idx}>★</span>
                        ))}
                      </div>
                    </div>
                    <p>{r.comment}</p>
                  </div>
                ))}
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
}
