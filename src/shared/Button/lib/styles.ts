import { Button } from "antd";
import styled from "styled-components";

export const StyledButton = styled(Button)<{
  width?: number;
  height?: number;
  isActive?: boolean;
}>`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};

  cursor: pointer;

  border: 1px solid #afafaf;

  border-radius: 8px;

  &:hover {
    background-color: ${({ isActive }) => {
      if (isActive) {
        return "#17a2b8";
      }

      return "inherit";
    }} !important;
  }

  background-color: ${({ isActive }) => {
    if (isActive) {
      return "#17a2b8";
    }
  }} !important;
`;
