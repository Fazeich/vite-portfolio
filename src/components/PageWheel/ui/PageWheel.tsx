import Page from "@/shared/Page";
import { FC, useEffect, useRef, useState } from "react";
import { PageWheelWrapper } from "../lib/styles";
import { TPage } from "../lib/types";
import { $pageWheel, changePageWheel } from "@/stores/pageWheel/pageWheel";
import { useUnit } from "effector-react";
import { SCROLL_DELAY } from "@/lib/constants";

interface IProps {
  pages: TPage[];
}

export const PageWheel: FC<IProps> = ({ pages }) => {
  const { currentPage, isAnimating } = useUnit($pageWheel);
  const containerRef = useRef<HTMLDivElement>(null);
  const lastScrollTime = useRef(null);

  const handleWheel = (e: WheelEvent) => {
    e.preventDefault();

    const now = Date.now();

    if (now - lastScrollTime.current < SCROLL_DELAY || isAnimating) return;

    lastScrollTime.current = now;

    if (e.deltaY > 0 && currentPage < pages.length - 1) {
      changePageWheel({ currentPage: currentPage + 1, isAnimating: true });
    } else if (e.deltaY < 0 && currentPage > 0) {
      changePageWheel({ currentPage: currentPage - 1, isAnimating: false });
    }
  };

  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      container.addEventListener("wheel", handleWheel);
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel);
      }
    };
  }, [currentPage, isAnimating]);

  return (
    <PageWheelWrapper ref={containerRef}>
      {pages.map((page, index) => {
        return (
          <Page
            {...page}
            key={page?.id}
            index={index}
            currentPage={currentPage}
            onTransitionEnd={() => changePageWheel({ isAnimating: false })}
          />
        );
      })}
    </PageWheelWrapper>
  );
};
