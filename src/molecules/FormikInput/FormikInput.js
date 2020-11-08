import React from "react";
import { useField } from "formik";
import styled from "styled-components";
import { Box, Text, Error } from "../../atoms";

export const InputFieldBase = styled(Box)`
  position: relative;
  width: 100%;
  display: grid;
  align-items: center;
  margin: 0 0 25px 0;
  gap: 10px;
  label {
    font-size: 1.2rem;
    text-align: left;
  }
  input {
    padding: 10px 5px;
    border: 2px solid;
    border-color: #e0e0e0;
    outline: none;
    width: 100%;
    border-radius: 6px;
  }
`;

export const FormikInput = ({ name, label, ...props }) => {
  const [field, meta] = useField({ name });
  const error = meta.touched && meta.error;

  return (
    <InputFieldBase>
      <Text as="label" color="gray.700">
        {label}
      </Text>
      <input {...field} name={name} {...props} />
      {error && <Error text={error} />}
    </InputFieldBase>
  );
};
