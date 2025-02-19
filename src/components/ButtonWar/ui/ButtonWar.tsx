import { ButtonsWrapper, ButtonWarWrapper } from "../lib/styles";
import Button from "@/shared/Button";
import {
  BUTTONS_COLUMNS_COUNT,
  BUTTONS_ROWS_COUNT,
  IS_MOBILE,
} from "@/lib/constants";
import { ButtonWarTitle } from "./ButtonWarTitle";
import { EConnectionEvent, useWs } from "@/lib/api";
import { useEffect, useLayoutEffect, useState } from "react";
import {
  $buttonWar,
  fetchActiveButtons,
  setActiveButtons,
} from "@/stores/buttonWar/buttonWar";
import { useUnit } from "effector-react";
import { IChangeActiveButtonParams } from "@/stores/buttonWar/types";
import { Spin } from "antd";
import InWorkMobile from "@/shared/InWorkMobile";

export const ButtonWar = () => {
  const { activeButtons } = useUnit($buttonWar);
  const [localActiveButtons, setLocalActiveButtons] = useState(activeButtons);
  const { ws, wsSend } = useWs();

  const isFetchingActiveButtons = useUnit(fetchActiveButtons.pending);

  const isLoadingButton = isFetchingActiveButtons;

  const changeActiveButtons = ({
    rowIdx,
    colIdx,
  }: IChangeActiveButtonParams) => {
    setLocalActiveButtons((prev) => {
      const newActiveButtons = prev?.map((arr) => [...arr]);

      newActiveButtons[rowIdx][colIdx] = !newActiveButtons[rowIdx][colIdx];

      return newActiveButtons;
    });

    // changeActiveButton({ rowIdx, colIdx });

    wsSend({ event: EConnectionEvent.ChangeBtn, data: { rowIdx, colIdx } });
  };

  ws.onmessage = (e) => {
    const data = JSON.parse(e.data);

    if (data.event === EConnectionEvent.ChangeBtn) {
      setActiveButtons(data?.data);
    }
  };

  useLayoutEffect(() => {
    fetchActiveButtons();
  }, []);

  useEffect(() => {
    if (!isFetchingActiveButtons && activeButtons?.length > 0) {
      setLocalActiveButtons(activeButtons);
    }
  }, [isFetchingActiveButtons]);

  if (isFetchingActiveButtons) {
    return <Spin />;
  }

  return (
    <ButtonWarWrapper>
      <ButtonWarTitle />

      {IS_MOBILE ? (
        <InWorkMobile />
      ) : (
        <ButtonsWrapper>
          {Array(BUTTONS_ROWS_COUNT)
            .fill(false)
            .map((_, rowIdx) => {
              return Array(BUTTONS_COLUMNS_COUNT)
                .fill(false)
                .map((_, colIdx) => {
                  return (
                    <Button
                      width={35}
                      height={35}
                      onClick={() => changeActiveButtons({ rowIdx, colIdx })}
                      isActive={localActiveButtons?.[rowIdx]?.[colIdx]}
                      key={`${rowIdx}_${colIdx}`}
                      disabled={isLoadingButton}
                    />
                  );
                });
            })}
        </ButtonsWrapper>
      )}
    </ButtonWarWrapper>
  );
};
