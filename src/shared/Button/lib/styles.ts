import styled from "styled-components";

export const StyledButton = styled.button<{
  width?: number;
  height?: number;
  isActive?: boolean;
}>`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};

  cursor: pointer;

  border: 1px solid #afafaf;

  border-radius: 8px;

  transition: background-color 0.25s ease-in-out;

  &:hover {
    background-color: ${({ isActive }) => {
      if (isActive) {
        return "#17a2b8";
      }

      return "#dedede";
    }};
  }

  background-color: ${({ isActive }) => {
    if (isActive) {
      return "#17a2b8";
    }
  }};
`;
