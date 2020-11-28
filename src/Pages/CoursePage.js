import React from "react";
import { useParams } from "react-router-dom";

import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Container } from "react-bootstrap";

import { cardData } from "../MockData/Courses";

export default function CoursePage() {
  const { courseId } = useParams();

  const selectedCourse = cardData.filter(
    (item) => item.slug === courseId.toString()
  )[0];

  console.log(selectedCourse);

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
        <h1>{selectedCourse.title}</h1>
        <p>{selectedCourse.description}</p>
      </div>
      <Footer />
    </Container>
  );
}
