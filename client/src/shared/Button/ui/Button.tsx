import React, { FC } from "react";
import { StyledButton } from "../lib/styles";
import { ButtonProps } from "antd";

interface IProps extends ButtonProps {
  width?: number;
  height?: number;
  isActive?: boolean;
  children?: React.ReactNode;
}

export const Button: FC<IProps> = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};
