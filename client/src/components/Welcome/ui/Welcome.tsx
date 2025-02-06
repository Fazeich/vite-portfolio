import React from "react";
import { BouncingArrow, WelcomeWrapper } from "../lib/styles";
import Paragraph from "@/shared/Paragraph";
import { useUnit } from "effector-react";
import { $pageWheel, changePageWheel } from "@/stores/pageWheel/pageWheel";

export const Welcome = () => {
  const { isAnimating } = useUnit($pageWheel);

  const handleChangePage = () => {
    if (!isAnimating) {
      changePageWheel({ currentPage: 1, isAnimating: true });
    }
  };

  return (
    <WelcomeWrapper>
      <Paragraph text="Привет!" size={56} weight={900} />
      <Paragraph text="Давай познакомимся" size={36} />

      <BouncingArrow onClick={handleChangePage} />
    </WelcomeWrapper>
  );
};
