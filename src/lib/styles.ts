import { IS_MOBILE } from "@/lib/constants";
import { Info } from "lucide-react";
import styled from "styled-components";

export const TitleWrapper = styled.div`
  display: flex;
  align-items: baseline;

  gap: 10px;

  @media (width <= 600px) {
    gap: 5px;
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledInfoIcon = styled(Info)`
  cursor: pointer;

  &:hover {
    color: #17a2b8;
  }
`;

export const PageWrapper = styled.div`
  width: 100%;

  margin-top: ${() => {
    if (IS_MOBILE) {
      return 0;
    }

    return "75px";
  }};

  overflow-x: hidden;
`;
