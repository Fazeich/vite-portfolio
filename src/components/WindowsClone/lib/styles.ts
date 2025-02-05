import styled from "styled-components";

export const WindowsCloneWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: space-between;
`;

export const WindowsWindowWrapper = styled.div`
  width: 100%;
  height: 85%;

  border-top: 2px solid #aaaaaa;

  padding: 20px;

  display: flex;
  align-items: flex-start;

  flex-wrap: wrap;

  gap: 20px;
`;

export const DesktopIconWrapper = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  width: fit-content;

  padding: 5px;

  cursor: pointer;

  border-radius: 5px;

  max-width: 85px;

  text-align: center;

  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }
`;

export const ActiveWindowWrapper = styled.div<{ isActive?: boolean }>`
  position: fixed;
  user-select: none;

  background-color: rgba(255, 255, 255, 0.95);

  box-shadow: 0 10px 15px -3px #aaaaaa;
  border-radius: 8px;

  transition: visibility 0.2s ease-in-out, transform 0.2s ease-in-out,
    opacity 0.2s ease-in-out;

  ${({ isActive }) => {
    if (isActive) {
      return `
        transform: scale(1);
        visibility: visible;
        opacity: 1;
      `;
    }

    return `
      transform: scale(0.95);
      visibility: hidden;
      opacity: 0;
    `;
  }}

  min-width: 600px;
  min-height: 400px;
`;

export const WindowControllerWrapper = styled.div`
  height: 40px;

  display: flex;

  align-items: center;
  justify-content: space-between;

  padding: 0 0.5rem;

  border-bottom: 1px solid #cccccc;
`;

export const WindowControllersBlock = styled.div`
  display: flex;
  align-items: center;

  gap: 8px;
`;

export const ControllerWrap = styled.div`
  cursor: pointer;

  padding: 0.5rem;

  border-radius: 0.375rem;

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

export const TabsWrapper = styled.div`
  height: 40px;

  display: flex;
  align-items: center;

  border-bottom: 1px solid #cccccc;
  background-color: #eeeeee;
`;

export const StyledTab = styled.div<{ isActive?: boolean }>`
  display: flex;
  height: 100%;

  cursor: pointer;

  align-items: center;
  justify-content: space-between;

  gap: 10px;

  padding: 0 10px;

  border-right: 1px solid #cccccc;

  background-color: ${({ isActive }) => (isActive ? "#ffffff" : "#eeeeee")};
`;

export const CloseTabWrapper = styled.div`
  border-radius: 50%;

  width: 15px;
  height: 15px;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  align-items: center;

  gap: 5px;
`;

export const ActiveContentWrapper = styled.div`
  padding: 0.5rem;
`;
