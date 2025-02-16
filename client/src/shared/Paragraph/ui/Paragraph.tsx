import { FC, HTMLAttributes } from "react";
import { StyledParagraph } from "../lib/styles";
import { TParagraphTypes } from "../lib/types";

interface IProps extends Partial<HTMLAttributes<HTMLParagraphElement>> {
  text?: string;
  weight?: number;
  size?: number;
  type?: TParagraphTypes;
}

export const Paragraph: FC<IProps> = ({ text, ...params }) => {
  return <StyledParagraph {...params}>{text}</StyledParagraph>;
};
