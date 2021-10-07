import React from "react";
import { useEffect } from "react";
import { Container, Col, Form, Button, FormControl } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { useFormik } from "formik";

import * as yup from "yup";

const Registration = ({ location, registration, setRegistration }) => {
  const validationSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    username: yup.string().required("username is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .matches(
        "^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$",
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ),
    confirmPassword: yup
      .string()
      .required()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  });

  const { values, handleChange, handleSubmit, errors, touched } = useFormik({
    initialValues: {
      name: "",
      surname: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values));
      setRegistration(values);
    },
    validationSchema: validationSchema,
  });

  const formCkeck = () => {
    if (
      values.name.length > 2 &&
      values.surname.length > 2 &&
      values.email.length > 2 &&
      values.password.length > 7 &&
      values.confirmPassword.length > 7
    ) {
      return true;
    }
  };
  useEffect(() => {
    formCkeck();
  }, [
    values.name,
    values.surname,
    values.email,
    values.password,
    values.confirmPassword,
  ]);

  console.log({ touched });
  return (
    location.pathname !== "/home" && (
      <Container>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            value={values.name}
            name="name"
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Surname</Form.Label>
          <Form.Control
            value={values.surname}
            name="surname"
            onChange={handleChange}
            placeholder="Enter your surname"
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            isInvalid={errors.email}
            value={values.email}
            name="email"
            onChange={handleChange}
            placeholder="Enter email"
          />
          <FormControl.Feedback type={errors.email ? "invalid" : "valid"}>
            {errors.email}
          </FormControl.Feedback>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="Password"
            isInvalid={errors.password}
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
            name="password"
          />
          <FormControl.Feedback type={errors.password ? "invalid" : "valid"}>
            {errors.password}
          </FormControl.Feedback>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="Password"
            isInvalid={errors.confirmPassword}
            placeholder="confirm your password"
            value={values.confirmPassword}
            onChange={handleChange}
            name="confirmPassword"
          />
          <FormControl.Feedback
            type={errors.confirmPassword ? "invalid" : "valid"}
          >
            {errors.confirmPassword}
          </FormControl.Feedback>
        </Form.Group>
        <Button
          variant="primary"
          onClick={() => handleSubmit()}
          disabled={!formCkeck()}
        >
          Submit
        </Button>
      </Container>
    )
  );
};

export default withRouter(Registration);
