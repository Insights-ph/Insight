import React, { useEffect } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

export default function Login() {
  const history = useHistory();

  useEffect(() => {
    document.title = "Login | Insight";
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    //Authentication codes here

    history.push("/");
  };

  return (
    <Container
      className="d-flex text-center align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <Container
        className="d-flex flex-column justify-content-around"
        style={{ maxWidth: "400px", minHeight: "100vh" }}
      >
        <h1 className="mb-2 text-center">INSIGHT</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="text-left">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="email@domain.com" />
          </Form.Group>
          <Form.Group className="text-left">
            <Form.Label className="text-left">Password</Form.Label>
            <Form.Control type="password" placeholder="**********" />
          </Form.Group>
          <Button
            style={{ maxWidth: "200px" }}
            type="submit"
            variant="theme-accent-mid"
            className="text-theme-foreground w-100"
          >
            Login
          </Button>
        </Form>
        <p>
          Don't have an account?&nbsp;
          <Link to="/signup" className="text-theme-accent-mid">
            Signup
          </Link>
        </p>
      </Container>
    </Container>
  );
}
