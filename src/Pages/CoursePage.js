import React from "react";
import { useParams } from "react-router-dom";
import { InlineIcon } from "@iconify/react";
import downOutlined from "@iconify-icons/ant-design/down-outlined";

import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Accordion, Card, Container } from "react-bootstrap";

import { cardData } from "../MockData/Courses";

const lessons = [
  {
    key: 1,
    title: "Laboratory Fundamentals",
    content:
      "lorem ipsum dolor sit amet asd asd asd qwe qwe qwe asd asd placeholder text here asd asd asd qwe qwe qwe ",
  },
  {
    key: 2,
    title: "Common Laboratory Apparatuses",
    content:
      "lorem ipsum dolor sit amet asd asd asd qwe qwe qwe asd asd placeholder text here asd asd asd qwe qwe qwe ",
  },
  {
    key: 3,
    title: "Advanced Laboratory Apparatuses",
    content:
      "lorem ipsum dolor sit amet asd asd asd qwe qwe qwe asd asd placeholder text here asd asd asd qwe qwe qwe ",
  },
];

export default function CoursePage() {
  const { courseId } = useParams();

  const selectedCourse = cardData.filter(
    (item) => item.courseId === courseId.toString()
  )[0];

  console.log(selectedCourse)

  let lessonAccordion = lessons.map((lesson) => (
    <Card>
      <Accordion.Toggle
        as={Card.Header}
        eventKey={lesson.key}
        className="text-left bg-theme-accent-light d-flex align-items-center justify-content-between font-weight-bold"
      >
        {lesson.title} <InlineIcon icon={downOutlined} />
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={lesson.key} className="text-justify">
        <Card.Body>{lesson.content}</Card.Body>
      </Accordion.Collapse>
    </Card>
  ));

  return (
    <Container fluid="md" className="position-relative mx-auto p-0">
      <Header />
      <div
        className="text-center"
        style={{
          minHeight: "100vh",
          paddingTop: "60px",
          paddingBottom: "75px",
        }}
      >
        <Card
          className="bg-dark text-white"
          style={{ borderRadius: 0, outline: "none" }}
        >
          <Card.Img
            src={selectedCourse.imgUrl}
            alt={selectedCourse.title}
            style={{
              borderRadius: 0,
              filter: "brightness(65%)",
              maxHeight: "50vh",
              objectFit: "cover",
            }}
          />
          <Card.ImgOverlay className="d-flex flex-column h-100 align-items-start justify-content-center text-left">
            <h4>{selectedCourse.title.toUpperCase()}</h4>
            <p className="m-0">{selectedCourse.name}</p>
          </Card.ImgOverlay>
        </Card>
        <Container fluid="md" className="m-0 p-3 text-justify">
          <h5 className="text-left font-weight-bold">About Course</h5>
          <hr />
          <p>{selectedCourse.description}</p>
          <hr />
        </Container>
        <Container fluid="md" className="m-0 pl-3 pr-3 pt-0 pb-3 text-justify">
          <h5 className="text-left font-weight-bold">Lessons</h5>
        </Container>
        <Accordion defaultActiveKey="0">{lessonAccordion}</Accordion>
      </div>
      <Footer />
    </Container>
  );
}
