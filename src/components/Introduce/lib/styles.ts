import styled from "styled-components";

export const IntroduceWrapper = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  text-align: center;

  gap: 30px;

  background-color: ${({ theme }) => theme.secondary.background};

  .smooth_text {
    @keyframes smooth {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    animation: smooth 3s normal;
  }
`;
