import styled from "styled-components";
import { TParagraphTypes } from "./types";

export const StyledParagraph = styled.p<{
  size?: number;
  weight?: number;
  type?: TParagraphTypes;
}>`
  font-size: ${({ size }) => `${size}px`};

  font-weight: ${({ weight }) => `${weight}px`};

  color: ${({ type }) => {
    switch (type) {
      case "primary":
        return "#000000";
      case "secondary":
        return "#969696";
      case "accent":
        return "#17a2b8";
      default:
        return "#000000";
    }
  }};
`;
