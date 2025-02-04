import Page from "@/shared/Page";
import { FC, useEffect, useRef, useState } from "react";
import { PageWheelWrapper } from "../lib/styles";
import { TPage } from "../lib/types";

interface IProps {
  pages: TPage[];
}

export const PageWheel: FC<IProps> = ({ pages }) => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const lastScrollTime = useRef(null);
  const scrollDelay = 1250;

  const handleWheel = (e: WheelEvent) => {
    e.preventDefault();

    const now = Date.now();

    if (now - lastScrollTime.current < scrollDelay || isAnimating) return;

    lastScrollTime.current = now;

    if (e.deltaY > 0 && currentPage < pages.length - 1) {
      setIsAnimating(true);

      setCurrentPage((prev) => prev + 1);
    } else if (e.deltaY < 0 && currentPage > 0) {
      setIsAnimating(true);

      setCurrentPage((prev) => prev - 1);
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
            index={index}
            currentPage={currentPage}
            onTransitionEnd={() => setIsAnimating(false)}
          />
        );
      })}
    </PageWheelWrapper>
  );
};
