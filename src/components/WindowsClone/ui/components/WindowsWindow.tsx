import { WindowsWindowWrapper } from "../../lib/styles";
import { DesktopIcon } from "./DesktopIcon";
import { Ban, Folder, NotebookText, Settings } from "lucide-react";
import { addTab } from "@/stores/windowsClone/windowsClone";
import { EWindowTabs, EWindowTabsNames } from "@/stores/windowsClone/types";

export const WindowsWindow = () => {
  return (
    <WindowsWindowWrapper>
      <DesktopIcon
        title={EWindowTabsNames.Notes}
        onClick={() => {
          addTab({ type: EWindowTabs.Notes, name: EWindowTabsNames.Notes });
        }}
      >
        <NotebookText width={50} height={50} color="#72c59e" />
      </DesktopIcon>
      <DesktopIcon
        title={EWindowTabsNames.Folder}
        onClick={() =>
          addTab({ type: EWindowTabs.Folder, name: EWindowTabsNames.Folder })
        }
      >
        <Folder width={50} height={50} color="#dab641" />
      </DesktopIcon>
      <DesktopIcon
        title={EWindowTabsNames.Settings}
        onClick={() =>
          addTab({
            type: EWindowTabs.Settings,
            name: EWindowTabsNames.Settings,
          })
        }
      >
        <Settings width={50} height={50} color="#8f8f8f" />
      </DesktopIcon>
      <DesktopIcon
        title={EWindowTabsNames.Ban}
        onClick={() => {
          alert("Я же сказал не открывать!");
        }}
      >
        <Ban width={50} height={50} color="#c72828" />
      </DesktopIcon>
    </WindowsWindowWrapper>
  );
};
