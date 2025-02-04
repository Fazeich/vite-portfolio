import { TPage } from "@/components/PageWheel/lib/types";
import { FC } from "react";
import { StyledIndicator, WheelIndicatorWrapper } from "../lib/styles";
import { useUnit } from "effector-react";
import { $pageWheel, changePageWheel } from "@/stores/pageWheel/pageWheel";

interface IProps {
  pages: TPage[];
}

export const WheelIndicator: FC<IProps> = ({ pages }) => {
  const { currentPage, isAnimating } = useUnit($pageWheel);

  const handleChangePage = (pageIdx: number) => {
    if (!isAnimating) {
      changePageWheel({ currentPage: pageIdx, isAnimating: true });
    }
  };

  return (
    <WheelIndicatorWrapper>
      {pages.map(({ id }, index) => {
        return (
          <StyledIndicator
            key={id}
            isActive={index === currentPage}
            onClick={() => handleChangePage(index)}
          />
        );
      })}
    </WheelIndicatorWrapper>
  );
};
