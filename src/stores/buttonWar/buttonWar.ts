import { BUTTONS_COLUMNS_COUNT, BUTTONS_ROWS_COUNT } from "@/lib/constants";
import { createEvent, createStore } from "effector";
import { cloneDeep } from "lodash";

export const $buttonWar = createStore({
  activeButtons: Array(BUTTONS_ROWS_COUNT)
    .fill(null)
    .map(() => Array(BUTTONS_COLUMNS_COUNT).fill(false)),
});

export const changeActiveButtons = createEvent<{
  rowIdx: number;
  colIdx: number;
}>();

$buttonWar.on(changeActiveButtons, (state, { rowIdx, colIdx }) => {
  if (rowIdx && colIdx) {
    const newActiveButtons = cloneDeep(state.activeButtons);
    newActiveButtons[rowIdx][colIdx] = !newActiveButtons[rowIdx][colIdx];

    return {
      ...state,
      activeButtons: newActiveButtons,
    };
  }
});
