import React, { useEffect } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Login() {
  useEffect(() => {
    document.title = "Login | Insight";
  }, []);

  return (
    <Container
      className="d-flex flex-column justify-content-around"
      style={{ maxWidth: "400px", minHeight: "100vh" }}
    >
      <h1 className="mb-2 text-center">INSIGHT</h1>
      <Form>
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
  );
}