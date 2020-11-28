import React, { useEffect, useState } from "react";
import { Button, Container, Form, Image, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import Logo from "../Images/icon-512x512.png";
import { useAuth } from "../Context/AuthContext";

import AnimatedFormInput from "../Components/AnimatedFormInput";

export default function Signup() {
  const history = useHistory();
  const { register } = useAuth();

  const [user, setUser] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    confPassword: "",
  });
  const [error, setError] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [showPass2, setShowPass2] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.title = "Signup | Insight";
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (user.password !== user.confPassword) {
      return setError("Passwords do not match");
    }

    //Authentication codes here
    try {
      setError("");
      setLoading(true);
      await register(user);
      history.push("/dashboard");
    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
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
            <AnimatedFormInput
              label="FIRST NAME"
              type="text"
              required
              name="firstName"
              setUser={setUser}
              setError={setError}
              setLoading={setLoading}
              user={user}
            />
          </Form.Group>
          <Form.Group className="text-left">
            <AnimatedFormInput
              label="LAST NAME"
              type="text"
              required
              name="lastName"
              setUser={setUser}
              setError={setError}
              setLoading={setLoading}
              user={user}
            />
          </Form.Group>
          <Form.Group className="text-left">
            <AnimatedFormInput
              label="EMAIL"
              type="email"
              required
              name="email"
              setUser={setUser}
              setError={setError}
              setLoading={setLoading}
              user={user}
            />
          </Form.Group>
          <Form.Group className="text-left">
            <AnimatedFormInput
              label="PASSWORD"
              type={showPass ? "text" : "password"}
              required
              name="password"
              setUser={setUser}
              setError={setError}
              setLoading={setLoading}
              user={user}
            />
          </Form.Group>
          <Form.Group className="text-left">
            <AnimatedFormInput
              label="CONFIRM PASSWORD"
              type={showPass2 ? "text" : "password"}
              required
              name="confPassword"
              setUser={setUser}
              setError={setError}
              setLoading={setLoading}
              user={user}
            />
          </Form.Group>
        </div>
        <div>
          <Button
            disabled={loading}
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
