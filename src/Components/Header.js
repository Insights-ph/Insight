import { Navbar } from "react-bootstrap";
import { Icon } from "@iconify/react";
import profileIcon from "@iconify-icons/gg/profile";
import Logo from "../Images/icon-128x128.png";
import { useLocation } from "react-router-dom";

export default function Header() {
  const { pathname } = useLocation();

  return (
    <Navbar
      fixed="top"
      className="position-fixed bg-white d-flex justify-content-between"
      expand="lg"
      style={{ height: "60px" }}
    >
      <Navbar.Brand
        href="/dashboard"
        className="text-theme-accent-dark font-weight-bold"
      >
        {pathname === "/explore" ? (
          <h5 className="text-theme-background font-weight-bold m-0 p-0">Explore and Discover</h5>
        ) : (
          <img src={Logo} alt="Logo" width="100px" />
        )}
      </Navbar.Brand>
      <Icon icon={profileIcon} style={{ fontSize: "32px" }} />
    </Navbar>
  );
}
