import React from "react";
import { Form } from "react-bootstrap";

export default function FormInput({ ...rest }) {
  return (
    <>
      <Form.Control
        {...rest}
        className="border-theme-accent-light text-background font-weight-bold"
        style={{
          borderWidth: "0 0 2px 0"
        }}
      />
    </>
  );
}
