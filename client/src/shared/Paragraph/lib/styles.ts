import styled from "styled-components";
import { TParagraphTypes } from "./types";

export const StyledParagraph = styled.p<{
  size?: number;
  weight?: number;
  type?: TParagraphTypes;
}>`
  font-size: ${({ size }) => `${size}px`};

  font-weight: ${({ weight }) => weight};

  color: ${({ type, theme }) => (type ? theme[type].text : theme.primary.text)};
`;
