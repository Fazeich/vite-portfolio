import { StyledInfoIcon, TitleWrapper } from "@/lib/styles";
import Paragraph from "@/shared/Paragraph";
import { Tooltip } from "antd";
import { StyledTooltipWrapper } from "../../lib/styles";

export const WindowsCloneTitle = () => {
  return (
    <TitleWrapper style={{ marginTop: 30 }}>
      <Paragraph text="Копия Windows" weight={900} size={48} />
      <Tooltip
        title={
          <StyledTooltipWrapper>
            <Paragraph
              text="Тут название говорит само за себя."
              type="additional"
            />
            <Paragraph
              text="Без сервера, но сложный интерфейс"
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
