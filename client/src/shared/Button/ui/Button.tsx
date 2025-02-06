import React, { FC, HTMLAttributes } from "react";
import { StyledButton } from "../lib/styles";

interface IProps extends HTMLAttributes<HTMLButtonElement> {
  width?: number;
  height?: number;
  isActive?: boolean;
  children?: React.ReactNode;
}

export const Button: FC<IProps> = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};
