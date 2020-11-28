import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  Form,
  Image,
  Alert,
  InputGroup,
} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import Logo from "../Images/icon-512x512.png";
import FormInput from "../Components/FormInput";

export default function Signup() {
  const history = useHistory();

  const [user, setUser] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    confPassword: "",
  });
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [showPass2, setShowPass2] = useState(false);

  const onChange = (e) => {
    setMessage("");
    setError("");
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    document.title = "Signup | Insight";
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user.password !== user.confPassword) {
      return setError("Passwords do not match");
    }

    console.log(user);
    //Authentication codes here

    // history.push("/login");
  };

  return (
    <Container
      className="d-flex text-center align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <Form
        onSubmit={handleSubmit}
        className="d-flex flex-column justify-content-around"
        style={{ maxWidth: "400px", minHeight: "90vh" }}
      >
        <Image fluid src={Logo} className="mt-3" />
        <div>
          {error ? <Alert variant="danger">{error}</Alert> : null}
          <Form.Group className="text-left">
            <Form.Label>FIRST NAME</Form.Label>
            <FormInput
              type="text"
              required
              placeholder="Juan"
              name="firstName"
              onChange={onChange}
            />
          </Form.Group>
          <Form.Group className="text-left">
            <Form.Label>LAST NAME</Form.Label>
            <FormInput
              type="text"
              required
              placeholder="De La Cruz"
              name="lastName"
              onChange={onChange}
            />
          </Form.Group>
          <Form.Group className="text-left">
            <Form.Label>EMAIL</Form.Label>
            <FormInput
              type="email"
              required
              placeholder="email@domain.com"
              name="email"
              onChange={onChange}
            />
          </Form.Group>
          <Form.Group className="text-left">
            <Form.Label className="text-left">PASSWORD</Form.Label>
            <InputGroup>
              <FormInput
                type={showPass ? "text" : "password"}
                required
                placeholder="**********"
                name="password"
                onChange={onChange}
                inline
              />
              <Form.Control
                as={Button}
                variant="outline-theme-accent-light"
                className="bg-theme-foreground text-theme-accent-light"
                onClick={(e) => {
                  e.preventDefault();
                  setShowPass(!showPass);
                }}
                style={{
                  maxWidth: "80px",
                  borderWidth: "0 0 3px",
                }}
              >
                {showPass ? "HIDE" : "SHOW"}
              </Form.Control>
            </InputGroup>
          </Form.Group>
          <Form.Group className="text-left">
            <Form.Label className="text-left">CONFIRM PASSWORD</Form.Label>
            <InputGroup>
              <FormInput
                type={showPass2 ? "text" : "password"}
                required
                placeholder="**********"
                name="confPassword"
                onChange={onChange}
                inline
              />
              <Form.Control
                as={Button}
                variant="outline-theme-accent-light"
                className="bg-theme-foreground text-theme-accent-light"
                onClick={(e) => {
                  e.preventDefault();
                  setShowPass2(!showPass2);
                }}
                style={{
                  maxWidth: "80px",
                  borderWidth: "0 0 3px",
                }}
              >
                {showPass2 ? "HIDE" : "SHOW"}
              </Form.Control>
            </InputGroup>
          </Form.Group>
        </div>
        <div>
          <Button
            style={{ maxWidth: "250px" }}
            type="submit"
            variant="theme-accent-light"
            size="lg"
            className="text-theme-foreground w-100 mb-3"
          >
            REGISTER
          </Button>
          <p>
            Already have an account?&nbsp;
            <Link to="/" className="text-theme-accent-mid">
              Login
            </Link>
          </p>
        </div>
      </Form>
    </Container>
  );
}
