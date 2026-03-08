import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";

// ----- Import Images -----
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
import img41 from "../image/era cement.jpeg";
import img42 from "../image/cement.jpeg";
import img43 from "../image/puthuparambu.jpeg";

const ViewDetails = () => {
  const { id } = useParams();

  // ----- DATA -----
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
    { id: 28, image: img27, title: "IRA NATURE", location: "PERINTHALMANNA" },
    { id: 29, image: img28, title: "THUNJAN PARAMBU", location: "TIRUR" },
    { id: 30, image: img29, title: "PANNIYANNUR", location: "THALASSERY" },
    { id: 31, image: img30, title: "ERA NATURE", location: "PERINTHALMANNA" },
    { id: 32, image: img31, title: "MANJERI PROJECT", location: "MANJERI" },
    { id: 33, image: img32, title: "CHEMMEAD PROJECT", location: "CHEMMEAD" },
    { id: 34, image: img33, title: "DELICIA RESTAURANT", location: "MONGAM" },
    { id: 35, image: img34, title: "OTHUKKUNGAL ", location: "OTHUKKUNGAL" },
    { id: 36, image: img35, title: "UNITY COLLEGE", location: "MANJERI" },
    { id: 37, image: img36, title: "DELICIA RESTAURANT", location: "MONGAM" },
    { id: 38, image: img37, title: "ARYAVAIYA SALA", location: "KOTTAKKAL" },
    { id: 39, image: img38, title: "KOTTAKKAL PROJECT", location: "KOTTAKKAL" },
    { id: 40, image: img39, title: "IRITTY", location: "KANNUR" },
    { id: 41, image: img40, title: "MUNDUPARAMBA", location: "MALAPPURAM" },
    { id: 42, image: img41, title: "ERA NATURE", location: "PERITHALMANNA" },
    { id: 43, image: img42, title: "ERA NATURE", location: "KOCHI" },
    { id: 44, image: img43, title: "PUTHUPARAMBU", location: "KOTTAKKAL" },
  ];

  const pond = poolsData.find((item) => item.id === Number(id));

  if (!pond) return <h2 style={{ textAlign: "center" }}>Not Found</h2>;

  return (
    <Container style={{ paddingTop: "40px", paddingBottom: "40px" }}>
      <Row>
        {/* LEFT SIDE DETAILS */}
        <Col md={6}>
          <h2 style={{ fontWeight: "700", marginBottom: "10px" }}>
            {pond.title}
          </h2>

          <p style={{ fontSize: "18px", color: "#555" }}>
            <strong>Location: </strong> {pond.location}
          </p>

          <Card style={{ padding: "20px", marginTop: "20px", borderRadius: "12px" }}>
            <h5>Project Overview</h5>
            <p style={{ marginTop: "10px", color: "#444" }}>
              This project features a stunning modern pool design with premium
              materials, elegant finishing, and a peaceful environment. Perfect
              for residential or commercial use.
            </p>

            <p style={{ color: "#444" }}>
              ✔ High quality construction <br />
              ✔ Premium materials used <br />
              ✔ Designed for durability and elegance
            </p>
          </Card>
        </Col>

        {/* RIGHT SIDE IMAGE */}
        <Col md={6}>
          <img
            src={pond.image}
            alt={pond.title}
            style={{
              width: "100%",
              height: "420px",
              objectFit: "cover",
              borderRadius: "12px",
              boxShadow: "0px 4px 15px rgba(0,0,0,0.2)",
            }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default ViewDetails;

