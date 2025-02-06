import { WindowsCloneWrapper } from "../lib/styles";
import { ActiveWindow } from "./components/ActiveWindow";
import { WindowsCloneTitle } from "./components/WindowsCloneTitle";
import { WindowsWindow } from "./components/WindowsWindow";

export const WindowsClone = () => {
  return (
    <WindowsCloneWrapper>
      <WindowsCloneTitle />
      <WindowsWindow />
      <ActiveWindow />
    </WindowsCloneWrapper>
  );
};
