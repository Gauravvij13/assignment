import React from "react";
import { Text } from "../Text";

export const Error = ({ text }) => {
  return (
    <Text
      as="span"
      variant="small"
      color="red"
      fontSize="12px"
      position="absolute"
      bottom={{ xs: -15 }}
      left="0px"
    >
      {text}
    </Text>
  );
};
