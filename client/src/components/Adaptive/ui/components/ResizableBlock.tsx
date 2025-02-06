import React, { FC, useState } from "react";
import {
  ContentWrapper,
  GripWrapper,
  ResizableWrapper,
} from "../../lib/styles";
import { Grip } from "lucide-react";

interface IProps {
  children?: React.ReactNode;
}

export const ResizableBlock: FC<IProps> = ({ children }) => {
  const [width, setWidth] = useState<number>(900);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startWidth, setStartWidth] = useState(0);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);

    setStartWidth(e.clientX - width);
  };
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging && e.clientX - startWidth > 420) {
      setWidth(e.clientX - startWidth);
    }
  };
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <ResizableWrapper>
      <ContentWrapper width={width}>{children}</ContentWrapper>
      <GripWrapper
        style={{ cursor: isDragging ? "grabbing" : "grab" }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <Grip />
      </GripWrapper>
    </ResizableWrapper>
  );
};
