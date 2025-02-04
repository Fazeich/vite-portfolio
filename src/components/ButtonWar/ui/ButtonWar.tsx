import {
  ButtonsColumnsWrapper,
  ButtonsRowsWrapper,
  ButtonsWrapper,
  ButtonWarWrapper,
  StyledInfoIcon,
  TitleWrapper,
} from "../lib/styles";
import Button from "@/shared/Button";
import { useUnit } from "effector-react";
import { $buttonWar, changeActiveButtons } from "@/stores/buttonWar/buttonWar";
import { BUTTONS_COLUMNS_COUNT, BUTTONS_ROWS_COUNT } from "@/lib/constants";
import Paragraph from "@/shared/Paragraph";

export const ButtonWar = () => {
  const { activeButtons } = useUnit($buttonWar);

  return (
    <ButtonWarWrapper>
      <TitleWrapper>
        <Paragraph text="Кнопочная битва" weight={900} size={48} />
        <StyledInfoIcon />
      </TitleWrapper>

      <ButtonsWrapper>
        {/* <ButtonsRowsWrapper> */}
        {Array(BUTTONS_ROWS_COUNT)
          .fill(null)
          .map((_, rowIdx) => {
            return Array(BUTTONS_COLUMNS_COUNT)
              .fill(null)
              .map((_, colIdx) => {
                return (
                  <Button
                    width={35}
                    height={35}
                    onClick={() => changeActiveButtons({ rowIdx, colIdx })}
                    isActive={activeButtons[rowIdx][colIdx]}
                    key={`${rowIdx}_${colIdx}`}
                  />
                );
              });
            // return <ButtonsColumnsWrapper></ButtonsColumnsWrapper>;
          })}
        {/* </ButtonsRowsWrapper> */}
      </ButtonsWrapper>
    </ButtonWarWrapper>
  );
};
