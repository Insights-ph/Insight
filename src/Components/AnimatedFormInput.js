import { motion } from "framer-motion";
import React, { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import FormInput from "./FormInput";

const variants = {
  initial: {
    x: 10,
    y: 40,
    color: "#182628",
  },
  animate: {
    x: 0,
    y: 0,
    color: "#65ccb8",
  },
};

export default function AnimatedFormInput({
  label,
  name,
  setMessage,
  setError,
  setUser,
  user,
  required = undefined,
  ...rest
}) {
  const [isEmpty, setIsEmpty] = useState(true);
  const [isFocused, setIsFocused] = useState(false);
  const [showPass, setShowPass] = useState(false);

  const handleChange = (e) => {
    setMessage("");
    setError("");
    setUser({ ...user, [e.target.name]: e.target.value });
    e.target.value.length === 0 ? setIsEmpty(true) : setIsEmpty(false);
  };

  return (
    <>
      {name !== "password" && name !== "confPassword" ? (
        <>
          <motion.label
            style={{ pointerEvents: "none" }}
            variants={variants}
            initial="initial"
            animate={!isEmpty || isFocused ? "animate" : "initial"}
            type="label"
            className="font-weight-bold"
            htmlFor={name}
          >
            {label}
          </motion.label>
          <FormInput
            {...rest}
            name={name}
            onChange={handleChange}
            onFocus={(e) => setIsFocused(true)}
            onBlur={(e) => setIsFocused(false)}
            required={true | required}
          />
        </>
      ) : (
        <>
          <motion.label
            style={{ zIndex: 5, position: "relative", pointerEvents: "none" }}
            variants={variants}
            initial="initial"
            animate={!isEmpty || isFocused ? "animate" : "initial"}
            type="label"
            className="font-weight-bold"
            htmlFor={name}
          >
            {label}
          </motion.label>
          <InputGroup style={{ zIndex: 0, position: "relative" }}>
            <FormInput
              style={{ zIndex: 20 }}
              {...rest}
              name={name}
              type={showPass ? "text" : "password"}
              onChange={handleChange}
              onFocus={(e) => setIsFocused(true)}
              onBlur={(e) => setIsFocused(false)}
              required={true | required}
            />
            <Form.Control
              as={Button}
              variant="outline-theme-accent-light"
              className="bg-white text-theme-accent-light"
              onClick={(e) => {
                e.preventDefault();
                setShowPass(!showPass);
              }}
              style={{
                maxWidth: "80px",
                borderWidth: "0 0 2px",
              }}
            >
              {showPass ? "HIDE" : "SHOW"}
            </Form.Control>
          </InputGroup>
        </>
      )}
    </>
  );
}
