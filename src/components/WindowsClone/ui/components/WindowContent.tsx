import Link from "@/shared/Link";
import Paragraph from "@/shared/Paragraph";
import { EWindowTabs, IWindowTab } from "@/stores/windowsClone/types";
import { FC } from "react";
import {
  ActiveContentWrapper,
  LinkWrapper,
  WindowWrapper,
} from "../../lib/styles";

interface IProps {
  activeTab?: IWindowTab;
}

export const WindowContent: FC<IProps> = ({ activeTab }) => {
  const ActiveContent = () => {
    switch (activeTab?.type) {
      case EWindowTabs.Folder:
        return (
          <WindowWrapper>
            <LinkWrapper>
              <Paragraph text="Если ты всё ещё здесь, то можешь заглянуть на мой" />
              <Link
                text="ТГ канал"
                href="https://t.me/sou1_c0de"
                target="_blank"
              />
              <Paragraph text=":)" />
            </LinkWrapper>
          </WindowWrapper>
        );
      case EWindowTabs.Notes:
        return (
          <WindowWrapper>
            <Paragraph text="Ты думаешь, что надо полностью копировать Windows?" />
          </WindowWrapper>
        );
      case EWindowTabs.Settings:
        return (
          <WindowWrapper>
            <div>
              <Paragraph text="Вот какие настройки сюда нужно добавить?" />
              <Paragraph text=" Самое сложное уже было сделано :)" />
            </div>
          </WindowWrapper>
        );
    }
  };

  return (
    <ActiveContentWrapper>
      <ActiveContent />
    </ActiveContentWrapper>
  );
};
