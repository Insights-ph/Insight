import React, { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import {
  Card,
  CardDeck,
  Container,
  Form,
  Image,
  Jumbotron,
  Table,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { activities, cardData } from "../MockData/Courses";
import { useAuth } from "../Context/AuthContext";
import { Icon, InlineIcon } from "@iconify/react";
import profileIcon from "@iconify-icons/gg/profile";
import ScrollMenu from "react-horizontal-scrolling-menu";
import ProfImg from "../Images/profile.jpg";

export default function Profile() {
  const { currentUser, logout } = useAuth();
  const [status, setStatus] = useState("ongoing");
  console.log(currentUser);

  function merge(a, b, prop) {
    let map = new Map(b.map((o) => [o[prop], o]));
    return a.reduce((acc, o) => {
      let match = map.get(o[prop]);
      return match ? acc.concat({ ...o, ...match }) : acc;
    }, []);
  }

  const selectedActivities = merge(activities, cardData, "courseId");

  let cardItems = selectedActivities.slice(0, 10).map((card) => (
    <Card
      className="shadow h-100 p-0 m-0"
      style={{ width: "9rem" }}
      key={card.courseId}
    >
      <Link to={`/courses/${card.courseId}`}>
        <Card.Body className="d-flex flex-column p-2 text-theme-background">
          <Card.Text className="mt-1 mb-2">
            <small>{card.status.toUpperCase()}</small>
          </Card.Text>
          <h6 className="font-weight-bold ">{card.title}</h6>
        </Card.Body>
      </Link>
    </Card>
  ));

  return (
    <div className="position-relative ">
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
          className="text-white d-flex align-items-left justify-content-between bg-theme-background m-0"
          style={{
            borderRadius: "0",
          }}
        >
          <div className="d-flex">
            <div
              style={{
                borderRadius: "50%",
                maxWidth: "5rem",
                maxHeight: "5rem",
              }}
              className="d-flex align-items-center justify-content-center shadow bg-theme-accent-mid mr-1"
            >
              {currentUser.photoURL ? (
                <img src={currentUser.photoURL} alt="User display" />
              ) : (
                <Icon icon={profileIcon} style={{ fontSize: "100px" }} />
              )}
            </div>
            <div className="d-flex flex-column justify-content-center ">
              <p className="m-0 p-0 text-left font-weight-bold">
                {currentUser.user.displayName}
              </p>
              <p className="m-0 p-0 text-left">{currentUser.user.email}</p>
            </div>
          </div>
          <div
            className="d-flex align-items-center text-right text-theme-accent-mid btn"
            onClick={logout}
          >
            Sign out
          </div>
        </Jumbotron>
        <Container
          className="p-4"
          style={{
            backgroundImage: `url(${ProfImg})`,
          }}
        >
          <div className="bg-theme-foreground rounded-lg  p-2 shadow">
            <Table className="text-left bg-theme-foreground p-1 m-0">
              <thead>
                <tr>
                  <th className="font-weight-bold p-1">Personal details</th>
                </tr>
                <tr>
                  <th className="font-weight-normal p-1">
                    <b>Name: </b>
                    {`${currentUser.user.displayName}`}
                  </th>
                </tr>
                <tr>
                  <th className="font-weight-normal p-1">
                    <b>Email: </b>
                    {`${currentUser.user.email}`}
                  </th>
                </tr>
                <tr>
                  <th className="font-weight-normal p-1">
                    <b>Contact Number: </b>
                    {`${
                      currentUser.user.phoneNumber
                        ? currentUser.user.phoneNumber
                        : "not provided"
                    }`}
                  </th>
                </tr>
                <tr>
                  <th className="font-weight-normal p-1">
                    <b>Location:</b> MANILA
                  </th>
                </tr>
                <tr>
                  <th className="font-weight-normal p-1">
                    <b>About me</b>
                    <br /> Nulla dapibus, est sit amet ullamcorper accumsan,
                    odio turpis vestibulum mi, eu suscipit elit quam nec quam.{" "}
                  </th>
                </tr>
              </thead>
            </Table>
          </div>
        </Container>

        <Container>
          <div className="d-flex flex-column h-100">
            <h5 className="mt-3 ml-3 mb-3 text-left font-weight-bold">
              Activity list
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
        </Container>
      </div>
      <Footer />
    </div>
  );
}
