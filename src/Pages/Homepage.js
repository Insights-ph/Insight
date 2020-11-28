import React from "react";
import { Card, Carousel, Container } from "react-bootstrap";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import ScrollMenu from "react-horizontal-scrolling-menu";
import { InlineIcon } from "@iconify/react";
import starOutlined from "@iconify-icons/ant-design/star-outlined";
import peopleIcon from "@iconify-icons/bi/people";
import { cardData } from "../MockData/Courses";

export default function Homepage() {
  let carouselItems = cardData.map((data) => (
    <Carousel.Item key={data.slug}>
      <img
        loading="lazy"
        width={300}
        length={200}
        className="d-block w-100"
        alt={data.title}
        src={data.imgUrl}
        style={{ filter: "brightness(65%)", maxHeight: "50vh" }}
      />
      <Carousel.Caption
        className="d-flex flex-column justify-content-center"
        style={{ height: "90%" }}
      >
        <Link to={`/courses/${data.slug}`} className="text-white">
          <h5>{data.title}</h5>
        </Link>
      </Carousel.Caption>
    </Carousel.Item>
  ));

  let cardItems = cardData.map((card) => (
    <Card
      className="shadow h-100 p-0 m-0"
      style={{ width: "10rem", borderRadius: 0 }}
      key={card.slug}
    >
      <Link to={`/courses/${card.slug}`}>
        <Card.Img
          variant="top"
          src={card.imgUrl}
          loading="lazy"
          width={200}
          length={200}
          style={{ borderRadius: 0 }}
        />
        <Card.Body className="d-flex flex-column p-2 text-theme-background">
          <h6 className="font-weight-bold ">{card.title}</h6>
          <Card.Text className="mt-auto">
            <small>{card.name.toUpperCase()}</small>
            <br />
            <InlineIcon icon={starOutlined} />
            &nbsp;
            <small>{card.rating}</small>
            <br />
            <InlineIcon icon={peopleIcon} />
            &nbsp;
            <small>{card.enrolled}</small>
          </Card.Text>
        </Card.Body>
      </Link>
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
        <Carousel
          controls={false}
          interval={5000}
          style={{ maxHeight: "50vh" }}
        >
          {carouselItems}
        </Carousel>
        <div className="d-flex flex-column h-100">
          <h5 className="mt-3 ml-3 mb-3 text-left font-weight-bold">
            Recommended Courses
          </h5>
          <ScrollMenu
            data={cardItems}
            alignCenter={false}
            hideArrows
            dragging
            innerWrapperClass="pl-3 d-flex align-items-stretch "
            itemClass="pr-5 pb-4 cursor-default"
          />
        </div>

        {/* <h1>Homepage</h1>
        <ButtonGroup>
          <Button variant="theme-accent-dark">theme-accent-dark</Button>
          <Button variant="theme-accent-mid">theme-accent-mid</Button>
          <Button variant="theme-accent-light">theme-accent-light</Button>
        </ButtonGroup>
        <p>Lorem ipsum</p> */}
      </div>
      <Footer />
    </Container>
  );
}
