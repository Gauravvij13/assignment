import React from "react";
import * as yup from "yup";
import { Form, Formik } from "formik";

import { Button, Flex } from "../../atoms";
import { FormikInput } from "../../molecules/FormikInput";

const loginValidationSchema = yup.object().shape({
  username: yup.string().email("Email invalid").required("Email is required"),
  password: yup.string().required("Password is required"),
});

const defaultValues = {
  username: "",
  password: "",
};

export const LoginForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={defaultValues}
      onSubmit={onSubmit}
      validationSchema={loginValidationSchema}
    >
      {() => (
        <Form>
          <FormikInput label="Email" name="username" />
          <FormikInput label="Password" name="password" type="password" />
          <Flex mt="-10px" justifyContent="center">
            <Button mt="20px" width="40%" type="submit">
              Login
            </Button>
          </Flex>
        </Form>
      )}
    </Formik>
  );
};
