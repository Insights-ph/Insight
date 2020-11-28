import React, { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import {
  Card,
  CardDeck,
  Col,
  Container,
  Form,
  Image,
  Jumbotron,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { cardData } from "../MockData/Courses";
import { useAuth } from "../Context/AuthContext";

const cardItems = [
  {
    imgUrl: "https://picsum.photos/seed/a/200/300",
    title: "Grade 9 Science Lecture",
    instructor: "Mr. John Rivera",
    text:
      "In this course, you will examine the very atoms that make up all matter on Earth, discover how electricity has been harnessed to operate machinery, uncover how our body tissues grow and regenerate, and explore the far-off stars and planets of our galaxy.",
    progress: 90,
    tags: [],
  },
  {
    imgUrl: "https://picsum.photos/seed/b/200/300",
    title: "Grade 9 Science Laboratory",
    instructor: "Mr. Rane Villanueva",
    text:
      "In this course, you will examine the very atoms that make up all matter on Earth, discover how electricity has been harnessed to operate machinery, uncover how our body tissues grow and regenerate, and explore the far-off stars and planets of our galaxy.",
    progress: 76,
    tags: ["VR/AR"],
  },
];

export default function MyCourses() {
  const { currentUser } = useAuth();
  const [status, setStatus] = useState("ongoing");

  const enrolledCourses = cardData.reduce((acc, course) => {
    const enrolled = currentUser.coursesEnrolled.find(
      ({ courseId }) => course.slug === courseId
    );
    if (enrolled) acc.push({ ...enrolled, ...course });
    return acc;
  }, []);

  const selectedCourses =
    status === "all"
      ? enrolledCourses
      : enrolledCourses.filter(
          (course) => course.status.toLowerCase() === status.toLowerCase()
        );

  const cards = selectedCourses.map((card) => (
    <div class="d-flex flex-row w-100 mb-4 shadow" key={card.slug}>
      <Image
        src={card.imgUrl}
        className="p-0 mt-2 mb-2 ml-2 mr-0 flex-shrink-1"
        style={{ width: "90px", objectFit: "cover" }}
      />
      <Container className="text-justify flex-grow-1 w-100 p-2 my-auto ">
        <Link to={`/courses/${card.slug}`} className="text-theme-background">
          <h6 className="font-weight-bold mb-0 text-left">{card.title}</h6>
          <p className="mb-1 font-weight-bold" style={{ fontSize: "0.8rem" }}>
            {card.name}
          </p>
          <p
            className="mb-1"
            style={{ fontSize: "0.8rem", lineHeight: "0.9rem" }}
          >
            {card.description}
          </p>
        </Link>
        <div
          style={{ fontSize: "0.9rem" }}
          className="font-weight-bold text-right"
        >
          {card.tags.map((tag) => (
            <span className="text-theme-accent-dark">
              {tag}&nbsp;&nbsp;&nbsp;
            </span>
          ))}
          <span className="text-theme-accent-light">{`PROGRESS: ${card.progress}%`}</span>
        </div>
        <p
          className="mb-0 text-right"
          style={{ fontSize: "0.6rem", lineHeight: "0.9rem" }}
        >
          STATUS: {card.status.toUpperCase()}
        </p>
      </Container>
    </div>
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
          <Form className="mb-4">
            <Form.Group controlId="exampleForm.SelectCustom">
              <Form.Control
                as="select"
                className="bg-theme-foreground shadow text-theme-background font-weight-bold"
                custom
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="ongoing">Ongoing</option>
                <option value="taken">Taken</option>
                <option value="unenrolled">Unenrolled</option>
                <option value="all">All</option>
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
