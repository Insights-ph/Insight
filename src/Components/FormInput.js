import React from "react";
import { Form } from "react-bootstrap";

export default function FormInput({ ...rest }) {
  return (
    <>
      <Form.Control
        {...rest}
        className="bg-theme-foreground border-theme-accent-light"
        style={{
          borderWidth: "0 0 3px 0"
        }}
      />
    </>
  );
}
