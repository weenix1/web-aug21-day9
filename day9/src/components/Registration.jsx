import React from "react";

import { Container, Col, Form, Button, FormControl } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { useFormik } from "formik";

import * as yup from "yup";

const Registration = ({ location, registration, setRegistration }) => {
  const validationSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    username: yup.string().required("username is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().min(8, "Too short").required("Password is required"),
    confirmPassword: yup
      .string()
      .min(8, "Too short")
      .required("confirmPassword is required"),
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
    },
    validationSchema: validationSchema,
  });

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
          <Form.Label>Comfirm Password</Form.Label>
          <Form.Control
            isInvalid={errors.confirmPassword}
            placeholder="comfirmPassword"
            value={values.confirmPassword}
            onChange={handleChange}
            name="comfirmPassword"
          />
        </Form.Group>
        <Button variant="primary" onClick={() => handleSubmit()}>
          Submit
        </Button>
      </Container>
    )
  );
};

export default withRouter(Registration);
