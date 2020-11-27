import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  Form,
  Image,
  InputGroup,
} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import FormInput from "../Components/FormInput";

import Logo from "../Images/icon-512x512.png";

export default function Login() {
  const history = useHistory();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [showPass, setShowPass] = useState(false);

  useEffect(() => {
    document.title = "Login | Insight";
  }, []);

  const onChange = (e) => {
    setMessage("");
    setError("");
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //Authentication codes here

    console.log(user);
    // history.push("/");
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
          <Form.Group className="text-left">
            <Form.Label className="font-weight-bold">EMAIL</Form.Label>
            <FormInput
              type="email"
              required
              placeholder="email@domain.com"
              name="email"
              onChange={onChange}
            />
          </Form.Group>
          <Form.Group className="text-left">
            <Form.Label className="font-weight-bold">PASSWORD</Form.Label>
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
                variant="theme-accent-light"
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
          <Form.Group className="d-flex justify-content-between">
            <Form.Check inline type="checkbox" label="Keep me logged in" />
            <span>
              <Link to="/forgot-password" className="text-theme-accent-mid">
                Forgot Password?
              </Link>
            </span>
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
            LOGIN
          </Button>
          <p>
            Don't have an account?&nbsp;
            <Link to="/register" className="text-theme-accent-mid">
              Signup
            </Link>
          </p>
        </div>
      </Form>
    </Container>
  );
}
