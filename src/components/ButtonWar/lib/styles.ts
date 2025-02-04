import {
  BUTTONS_COLUMNS_COUNT,
  BUTTONS_ROWS_COUNT,
} from "./../../../lib/constants";
import { Info } from "lucide-react";
import styled from "styled-components";

export const ButtonWarWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  text-align: center;

  gap: 50px;
`;

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

  :hover {
    color: #17a2b8;
  }
`;

export const ButtonsWrapper = styled.div`
  display: grid;

  grid-template-columns: repeat(${BUTTONS_COLUMNS_COUNT}, 1fr);
  grid-template-rows: repeat(${BUTTONS_ROWS_COUNT}, 1fr);

  grid-gap: 10px;
`;

export const ButtonsRowsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  gap: 10px;
`;

export const ButtonsColumnsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  gap: 10px;
`;
