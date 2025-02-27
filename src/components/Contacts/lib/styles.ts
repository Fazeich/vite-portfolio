import styled from "styled-components";

export const ContactsWrapper = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;

  text-align: center;

  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.accent.background};

  gap: 20px;
`;

export const SocialNetworkWrapper = styled.div`
  display: flex;
  align-items: center;

  gap: 10px;
`;
