import { ButtonsWrapper, ButtonWarWrapper } from "../lib/styles";
import Button from "@/shared/Button";
import { useUnit } from "effector-react";
import { $buttonWar, changeActiveButtons } from "@/stores/buttonWar/buttonWar";
import { BUTTONS_COLUMNS_COUNT, BUTTONS_ROWS_COUNT } from "@/lib/constants";
import { ButtonWarTitle } from "./ButtonWarTitle";

export const ButtonWar = () => {
  const { activeButtons } = useUnit($buttonWar);

  return (
    <ButtonWarWrapper>
      <ButtonWarTitle />

      <ButtonsWrapper>
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
          })}
      </ButtonsWrapper>
    </ButtonWarWrapper>
  );
};
