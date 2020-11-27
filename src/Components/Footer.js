import { Navbar } from "react-bootstrap";
import { Icon } from "@iconify/react";
import homeOutlined from "@iconify-icons/ant-design/home-outlined";
import searchOutlined from "@iconify-icons/ant-design/search-outlined";
import bxBookOpen from "@iconify-icons/bx/bx-book-open";
import bxCog from "@iconify-icons/bx/bx-cog";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    // boxShadow: "0 5px 6px 2px inset"
    <Navbar
      fixed="bottom"
      className="position-fixed text-center bg-theme-foreground mx-auto d-flex justify-content-around "
      expand="lg"
      style={{ height: "75px" }}
    >
      <NavLink
        to="/dashboard"
        activeClassName="text-theme-accent-dark"
        className="text-theme-background"
      >
        <Icon icon={homeOutlined} style={{ fontSize: "32px" }} />
        <br />
        <small className="font-weight-bold">Home</small>
      </NavLink>
      <NavLink
        to="/explore"
        activeClassName="text-theme-accent-dark"
        className="text-theme-background"
      >
        <Icon icon={searchOutlined} style={{ fontSize: "32px" }} />
        <br />
        <small className="font-weight-bold">Explore</small>
      </NavLink>
      <NavLink
        to="/courses"
        activeClassName="text-theme-accent-dark"
        className="text-theme-background"
      >
        <Icon icon={bxBookOpen} style={{ fontSize: "32px" }} />
        <br />
        <small className="font-weight-bold">My Courses</small>
      </NavLink>
      <NavLink
        to="/settings"
        activeClassName="text-theme-accent-dark"
        className="text-theme-background"
      >
        <Icon icon={bxCog} style={{ fontSize: "32px" }} />
        <br />
        <small className="font-weight-bold">Settings</small>
      </NavLink>
    </Navbar>
  );
}
