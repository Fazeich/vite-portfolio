import styled from "styled-components";

export const SnakeWrapper = styled.div`
  width: 100vw;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px 1fr;

  align-items: center;

  justify-content: center;
`;

export const StyledCanvas = styled.canvas`
  border: 1px solid ${({ theme }) => theme.additional.background};
`;
