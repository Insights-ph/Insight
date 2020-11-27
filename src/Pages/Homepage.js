import React from "react";
import {
  Card,
  Carousel,
} from "react-bootstrap";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import ScrollMenu from "react-horizontal-scrolling-menu";
import { InlineIcon } from "@iconify/react";
import starOutlined from "@iconify-icons/ant-design/star-outlined";
import peopleIcon from "@iconify-icons/bi/people";

const carouselData = [
  {
    imgUrl: "https://picsum.photos/seed/a/300/200",
    title: "Introduction to Laboratory Aparatus",
    slug: "1",
  },
  {
    imgUrl: "https://picsum.photos/seed/b/300/200",
    title: "Kultura at Pagkakakilanlan",
    slug: "2",
  },
  {
    imgUrl: "https://picsum.photos/seed/c/300/200",
    title: "Title 3",
    slug: "3",
  },
  {
    imgUrl: "https://picsum.photos/seed/d/300/200",
    title: "Title 4",
    slug: "4",
  },
  {
    imgUrl: "https://picsum.photos/seed/e/300/200",
    title: "Title 5",
    slug: "5",
  },
];

const cardData = [
  {
    imgUrl: "https://picsum.photos/seed/f/300/200",
    title: "Introduction to Baybayin",
    author: "DepEd Laguna",
    authorID: "1",
    rating: "4.3",
    enrolled: "901",
    slug: "5",
  },
  {
    imgUrl: "https://picsum.photos/seed/g/300/200",
    title: "Kultura at Pagkakakilanlan",
    author: "DepEd Laguna",
    authorID: "1",
    rating: "4.5",
    enrolled: "1902",
    slug: "6",
  },
  {
    imgUrl: "https://picsum.photos/seed/h/300/200",
    title: "Chemistry Laboratory",
    author: "DepEd Laguna",
    authorID: "1",
    rating: "4.5",
    enrolled: "1902",
    slug: "7",
  },
  {
    imgUrl: "https://picsum.photos/seed/i/300/200",
    title: "Digital Signals Processing Laboratory",
    author: "DepEd Laguna",
    authorID: "1",
    rating: "4.5",
    enrolled: "1902",
    slug: "7",
  },
];

export default function Homepage() {
  let carouselItems = carouselData.map((data) => (
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
        <Link to={`/${data.slug}`} className="text-white">
          <h5>{data.title}</h5>
        </Link>
      </Carousel.Caption>
    </Carousel.Item>
  ));

  let cardItems = cardData.map((card) => (
    <Card
      key={card.slug}
      className="mr-4 shadow mb-4 h-100"
      style={{ width: "10rem", borderRadius: 0 }}
    >
      <Card.Img
        variant="top"
        src={card.imgUrl}
        loading="lazy"
        width={200}
        length={200}
        style={{ borderRadius: 0 }}
      />
      <Card.Body className="d-flex flex-column p-2">
        <h6 className="font-weight-bold font">{card.title}</h6>
        <Card.Text className="mt-auto">
          <small>{card.author.toUpperCase()}</small>
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
        <Carousel
          controls={false}
          interval={null}
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
            innerWrapperClass="pl-3 d-flex align-items-stretch"
            itemClass="d-flex flex-column"
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
    </div>
  );
}
