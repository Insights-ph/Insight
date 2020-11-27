import React from "react";
import {
  Button,
  ButtonGroup,
  Container,
  Form,
  Card,
  Input,
} from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Login() {
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
          style={{ minWidth: "200px" }}
          type="submit"
          variant="theme-accent-mid"
          className="text-theme-foreground"
        >
          Login
        </Button>
      </Form>
      <p>
        Don't have an account? <Link to="/signup">Signup</Link>
      </p>
    </Container>
  );
}
