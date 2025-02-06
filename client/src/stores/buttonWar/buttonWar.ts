import { BUTTONS_COLUMNS_COUNT, BUTTONS_ROWS_COUNT } from "@/lib/constants";
import { createEvent, createStore } from "effector";
import { IButtonWarStore } from "./types";

export const $buttonWar = createStore<IButtonWarStore>({
  activeButtons: Array(BUTTONS_ROWS_COUNT)
    .fill(null)
    .map(() => Array(BUTTONS_COLUMNS_COUNT).fill(false)),
});

export const changeActiveButtons = createEvent<{
  rowIdx: number;
  colIdx: number;
}>();

$buttonWar.on(changeActiveButtons, (state, { rowIdx, colIdx }) => {
  if (rowIdx >= 0 && colIdx >= 0) {
    const newActiveButtons = state.activeButtons.map((r) => [...r]);

    newActiveButtons[rowIdx][colIdx] = !newActiveButtons[rowIdx][colIdx];

    return {
      ...state,
      activeButtons: newActiveButtons,
    };
  }
});
