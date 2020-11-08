import React from "react";
import styled from "styled-components";
import {
  layout,
  color,
  space,
  typography,
  fontSize,
  border,
} from "styled-system";
import { Box } from "../Box";
import { Text } from "../Text";

export const Container = styled(Box)`
  cursor: pointer;
  position: relative;
  white-space: nowrap;
  color: white;
  padding: 15px 20px;
  background: #f8be00;
  border: 0;
  font-weight: 600;
  border-radius: 10px;
  ${layout}
  ${color}
  ${typography}
  ${space}
  ${fontSize}
  ${border}
`;

export const Button = ({ title, disabled, children, ...rest }) => {
  return (
    <Container as="button" {...rest} disabled={disabled} overflow="hidden">
      {title ? <Text fontSize="16px">{title}</Text> : children}
    </Container>
  );
};
