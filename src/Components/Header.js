import { Navbar } from "react-bootstrap";
import { Icon } from "@iconify/react";
import arrowLeftOutlined from "@iconify-icons/ant-design/arrow-left-outlined";
import profileIcon from "@iconify-icons/gg/profile";
import Logo from "../Images/icon-128x128.png";
import { Link, useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";

export default function Header() {
  const { pathname } = useLocation();
  const history = useHistory();

  return (
    <Navbar
      fixed="top"
      className="position-fixed bg-white d-flex justify-content-between"
      expand="lg"
      style={{ height: "60px" }}
    >
      <Navbar.Brand className="text-theme-accent-dark font-weight-bold">
        {pathname === "/explore" ? (
          <h5 className="text-theme-background font-weight-bold m-0 p-0">
            Explore and Discover
          </h5>
        ) : pathname === "/profile" ? (
          <div onClick={history.goBack}>
            <Icon
              className="text-theme-background font-weight-bold"
              icon={arrowLeftOutlined}
            />
          </div>
        ) : (
          <Link to="/dashboard">
            <img src={Logo} alt="Logo" width="100px" />
          </Link>
        )}
      </Navbar.Brand>
      {pathname === "/profile" ? (
        <img src={Logo} alt="Logo" width="100px" />
      ) : (
        <Link to="/profile" className="text-theme-background">
          <Icon icon={profileIcon} style={{ fontSize: "32px" }} />
        </Link>
      )}
    </Navbar>
  );
}
