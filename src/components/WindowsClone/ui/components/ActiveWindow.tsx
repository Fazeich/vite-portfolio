import {
  $windowsClone,
  changeWindowsCloneStore,
  removeTab,
  resetTabs,
} from "@/stores/windowsClone/windowsClone";
import { useUnit } from "effector-react";
import {
  ActiveWindowWrapper,
  CloseTabWrapper,
  ControllerWrap,
  StyledTab,
  TabsWrapper,
  WindowControllersBlock,
  WindowControllerWrapper,
} from "../../lib/styles";
import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Minus,
  RotateCw,
  Square,
  X,
} from "lucide-react";
import Paragraph from "@/shared/Paragraph";

export const ActiveWindow = () => {
  const { tabs, activeTabId } = useUnit($windowsClone);

  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const isActiveWindow = tabs.length > 0;

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).closest(".window-controls")) {
      return;
    }

    setIsDragging(true);

    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const closeTab = (tabId: string | number) => {
    if (tabId) {
      removeTab({ id: tabId });
    }
  };

  return (
    <ActiveWindowWrapper
      style={{
        left: position.x,
        top: position.y,
      }}
      isActive={isActiveWindow}
    >
      <WindowControllerWrapper
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        style={{
          cursor: isDragging ? "grabbing" : "grab",
        }}
      >
        <WindowControllersBlock>
          <ChevronLeft width={16} height={16} />
          <ChevronRight width={16} height={16} />
          <RotateCw width={16} height={16} />
        </WindowControllersBlock>
        <WindowControllersBlock>
          <ControllerWrap>
            <Minus width={16} height={16} enableBackground={"asd"} />
          </ControllerWrap>
          <ControllerWrap>
            <Square width={16} height={16} />
          </ControllerWrap>
          <ControllerWrap onClick={() => resetTabs()}>
            <X width={16} height={16} />
          </ControllerWrap>
        </WindowControllersBlock>
      </WindowControllerWrapper>

      <TabsWrapper>
        {tabs?.map((tab) => {
          return (
            <StyledTab
              key={tab?.id}
              isActive={activeTabId === tab?.id}
              onClick={() => changeWindowsCloneStore({ activeTabId: tab?.id })}
            >
              <Paragraph text={tab?.name} />

              <CloseTabWrapper>
                <X width={12} height={12} onClick={() => closeTab(tab?.id)} />
              </CloseTabWrapper>
            </StyledTab>
          );
        })}
      </TabsWrapper>
    </ActiveWindowWrapper>
  );
};
