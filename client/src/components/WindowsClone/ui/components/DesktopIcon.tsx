import Paragraph from "@/shared/Paragraph";
import React, { FC, HTMLAttributes } from "react";
import { DesktopIconWrapper } from "../../lib/styles";

interface IProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  title: string;
}

export const DesktopIcon: FC<IProps> = ({ children, title, ...params }) => {
  return (
    <DesktopIconWrapper {...params}>
      {children} <Paragraph text={title} size={14} />
    </DesktopIconWrapper>
  );
};
