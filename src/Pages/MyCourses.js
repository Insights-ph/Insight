import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import {
  Card,
  CardDeck,
  Col,
  Container,
  Form,
  Jumbotron,
  Row,
} from "react-bootstrap";

const cardItems = [
  {
    imgUrl: "https://picsum.photos/seed/a/300/200",
    title: "Grade 9 Science Lecture",
    instructor: "Mr. John Rivera",
    text:
      "In this course, you will examine the very atoms that make up all matter on Earth, discover how electricity has been harnessed to operate machinery, uncover how our body tissues grow and regenerate, and explore the far-off stars and planets of our galaxy.",
    progress: 90,
    tags: [],
  },
  {
    imgUrl: "https://picsum.photos/seed/a/300/200",
    title: "Grade 9 Science Laboratory",
    instructor: "Mr. Rane Villanueva",
    text:
      "In this course, you will examine the very atoms that make up all matter on Earth, discover how electricity has been harnessed to operate machinery, uncover how our body tissues grow and regenerate, and explore the far-off stars and planets of our galaxy.",
    progress: 76,
    tags: ["VR/AR"],
  },
];

export default function MyCourses() {
  const cards = cardItems.map((card) => (
    <Card>
      <Row>
        <Col md={4}>
          <Card.Img variant="top" src={card.imgUrl} />
        </Col>
        <Col md={8}>
          <Card.Body>
            <Card.Title>{card.title}</Card.Title>
            <Card.Text>{card.instructor}</Card.Text>
            <Card.Text>{card.text}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">{`PROGRESS: ${card.progress}%`}</small>
          </Card.Footer>
        </Col>
      </Row>
    </Card>
  ));

  return (
    <div className="position-relative">
      <Header />
      <div
        className="text-center"
        style={{
          minHeight: "100vh",
          paddingTop: "60px",
          paddingBottom: "75px",
        }}
      >
        <Jumbotron
          className="text-white d-flex align-items-left justify-content-around"
          style={{
            borderRadius: "0",
            background: "linear-gradient(to bottom, #3b945e, #65ccb8, #65ccb8)",
          }}
        >
          <span
            style={{
              border: "5px solid ",
              borderRadius: "50%",
              minWidth: "5rem",
              minHeight: "5rem",
            }}
            className="d-flex align-items-center justify-content-center"
          >
            <h1 className="m-0 p-0">4</h1>
          </span>
          <h4 className="d-flex align-items-center">
            CURRENTLY ENROLLED COURSES
          </h4>
        </Jumbotron>
        <Container>
          <Form>
            <Form.Group controlId="exampleForm.SelectCustom">
              <Form.Control
                as="select"
                className="bg-theme-foreground shadow text-theme-background font-weight-bold"
                custom
              >
                <option>Ongoing</option>
                <option>Completed</option>
                <option>Incomplete</option>
              </Form.Control>
            </Form.Group>
          </Form>

          <CardDeck>{cards}</CardDeck>
        </Container>
      </div>
      <Footer />
    </div>
  );
}
