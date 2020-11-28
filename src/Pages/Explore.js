import React from "react";
import {
  Button,
  Card,
  Carousel,
  Container,
  Form,
  FormControl,
  InputGroup,
} from "react-bootstrap";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import ScrollMenu from "react-horizontal-scrolling-menu";
import { InlineIcon } from "@iconify/react";
import starOutlined from "@iconify-icons/ant-design/star-outlined";
import peopleIcon from "@iconify-icons/bi/people";
import { cardData } from "../MockData/Courses";
import { useAuth } from "../Context/AuthContext";
import searchOutlined from "@iconify-icons/ant-design/search-outlined";
import { Icon } from "@iconify/react";

export default function Explore() {
  const { currentUser } = useAuth();
  console.log(currentUser);

  let cardItems = cardData.slice(0, 10).map((card) => (
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
        <div>
          <Form className="d-flex mt-1 mx-3">
            <InputGroup style={{ zIndex: 0, position: "relative" }}>
              <Form.Control
                className="border-theme-accent-mid text-background font-weight-bold"
                placeholder="Search topics and courses"
                style={{
                  borderWidth: "2px",
                  borderRadius: "25px 0 0  25px"
                }}
              />
              <Form.Control
                as={Button}
                variant="outline-theme-accent-mid"
                className="bg-theme-accent-mid text-white p-0 m-0"
                style={{
                  maxWidth: "50px",
                  borderWidth: "2px 2px 2px 0px",
                  borderRadius: "0 25px 25px 0"
                }}
              >
                <Icon icon={searchOutlined}  style={{ fontSize: "25px" }} />
              </Form.Control>
            </InputGroup>
          </Form>
        </div>
        <div className="d-flex flex-column h-100">
          <h5 className="mt-3 ml-3 mb-3 text-left font-weight-bold">
            Popular Courses
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
        <div className="d-flex flex-column h-100">
          <h5 className="mt-3 ml-3 mb-3 text-left font-weight-bold">
            Filipino Related Courses
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
      </div>
      <Footer />
    </Container>
  );
}
