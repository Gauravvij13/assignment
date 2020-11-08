import styled from "styled-components";
import {
  color,
  layout,
  grid,
  space,
  position,
  background,
  border,
  shadow,
  typography,
  flexbox,
} from "styled-system";

export const Box = styled.div`
  position: relative;
  ${space}
  ${color}
  ${layout}
  ${background}
  ${position}
  ${grid}
  ${border}
  ${flexbox}
  ${shadow}
  ${typography}
`;
