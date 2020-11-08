import React from "react";
import styled from "styled-components";
import { Box, Text } from "../../atoms";

export const InputFieldBase = styled(Box)`
  position: relative;
  width: 100%;
  display: grid;
  align-items: center;
  margin: 0 0 25px 0;
  gap: 10px;
  label {
    font-size: 14px;
    text-align: left;
  }
  input {
    padding: 10px 5px;
    border: 2px solid;
    border-color: #e0e0e0;
    outline: none;
    width: 95%;
    border-radius: 6px;
  }
`;

export const UrlInput = ({ label, handleChange, ...props }) => {
  return (
    <InputFieldBase>
      <Text as="label" color="gray.700">
        {label}
      </Text>
      <input onChange={handleChange} {...props} />
    </InputFieldBase>
  );
};
