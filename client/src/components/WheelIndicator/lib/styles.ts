import styled from "styled-components";

export const WheelIndicatorWrapper = styled.div`
  position: fixed;

  top: 5px;

  left: 50%;
  transform: translateX(-50%);

  display: flex;
  align-items: center;
  gap: 2px;
`;

export const StyledIndicator = styled.button<{ isActive: boolean }>`
  width: 8px;
  height: 8px;

  transition: all 0.3s;

  border-radius: 40%;
  border: 1px solid black;

  cursor: pointer;

  ${({ isActive }) => {
    if (isActive) {
      return `
        width: 16px;
        background: black;
        `;
    }

    return `
      background: inherit;
      background: #bbbbbb;
    `;
  }}
`;
