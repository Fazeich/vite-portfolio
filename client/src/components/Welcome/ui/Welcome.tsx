import React, { useRef, useState } from "react";
import { BouncingArrow, WelcomeWrapper } from "../lib/styles";
import Paragraph from "@/shared/Paragraph";
import { useUnit } from "effector-react";
import { $pageWheel, changePageWheel } from "@/stores/pageWheel/pageWheel";
import { IS_MOBILE } from "@/lib/constants";

export const Welcome = () => {
  const { isAnimating } = useUnit($pageWheel);

  const handleChangePage = () => {
    if (!isAnimating) {
      changePageWheel({ currentPage: 1, isAnimating: true });
    }
  };

  return (
    <WelcomeWrapper>
      <Paragraph
        className="smooth_text"
        text="Привет!"
        style={{
          fontSize: IS_MOBILE ? "15vw" : "10vw",
        }}
        weight={500}
      />

      <BouncingArrow onClick={handleChangePage} />
    </WelcomeWrapper>
  );
};
