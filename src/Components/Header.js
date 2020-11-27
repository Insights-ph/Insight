import { Navbar } from "react-bootstrap";
import { Icon } from "@iconify/react";
import profileIcon from "@iconify-icons/gg/profile";

export default function Header() {
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
        INSIGHT.PH
      </Navbar.Brand>
      <Icon icon={profileIcon} style={{ fontSize: "32px" }} />
    </Navbar>
  );
}
