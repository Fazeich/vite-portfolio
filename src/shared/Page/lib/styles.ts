import styled from "styled-components";

export const PageWrapper = styled.div<{ index: number; currentPage: number }>`
  height: 100vh;
  width: 100vw;

  position: fixed;

  transition: transform 1s ease-in-out;

  transform: ${({ index, currentPage }) => {
    if (index > currentPage) {
      return "translateY(100vh)";
    }

    if (index === currentPage) {
      return "translateY(0px)";
    }

    if (index < currentPage) {
      return "translateY(-100vh)";
    }
  }};
`;
