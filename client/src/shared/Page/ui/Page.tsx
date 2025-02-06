import React, { FC, HTMLAttributes } from "react";
import { PageWrapper } from "../lib/styles";
import { IPageSettings } from "../lib/types";

interface IProps extends Omit<HTMLAttributes<HTMLDivElement>, "id"> {
  children?: React.ReactNode;
  settings?: IPageSettings;
  index: number;
  currentPage: number;
}

export const Page: FC<IProps> = ({
  children,
  settings,
  index,
  currentPage,
  ...divAttr
}) => {
  return (
    <PageWrapper
      style={settings}
      index={index}
      currentPage={currentPage}
      {...divAttr}
    >
      {children}
    </PageWrapper>
  );
};
