import { AnchorHTMLAttributes, FC, HTMLAttributes } from "react";
import { StyledLink } from "../lib/styles";

interface IProps extends AnchorHTMLAttributes<any> {
  text: string;
  size?: number;
  weight?: number;
}

export const Link: FC<IProps> = ({ text, ...props }) => {
  return <StyledLink {...props}>{text}</StyledLink>;
};
