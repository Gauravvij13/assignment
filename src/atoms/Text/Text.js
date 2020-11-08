import React, { forwardRef } from "react";
import { Box } from "../Box";

export const Text = forwardRef(({ as, children, values, ...rest }, ref) => {
  return (
    <Box as={as} ref={ref} {...rest}>
      {children}
    </Box>
  );
});
Text.defaultProps = {
  as: "div",
  children: "",
};
