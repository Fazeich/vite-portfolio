import { StyledInfoIcon, TitleWrapper } from "@/lib/styles";
import Paragraph from "@/shared/Paragraph";
import { Tooltip } from "antd";
import { StyledTooltipWrapper } from "../lib/styles";

export const ButtonWarTitle = () => {
  return (
    <TitleWrapper>
      <Paragraph text="Кнопковая война" weight={900} size={48} />

      <Tooltip
        title={
          <StyledTooltipWrapper>
            <Paragraph
              text="Этот блок основан на технологии Websocket."
              type="additional"
            />
            <Paragraph
              text="Это означает, что если Вы кликните на кнопку то изменения увидят все сразу же"
              type="additional"
            />
          </StyledTooltipWrapper>
        }
      >
        <StyledInfoIcon />
      </Tooltip>
    </TitleWrapper>
  );
};
