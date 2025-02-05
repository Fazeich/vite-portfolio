import styled from "styled-components";

export const StyledLink = styled.a<{ size?: number; weight?: number }>`
  cursor: pointer;
  text-decoration: none;

  color: #0940d6;

  font-size: ${({ size }) => `${size}px`};
  font-weight: ${({ weight }) => `${weight}px`};

  :hover {
    color: "#17a2b8";
  }
`;
