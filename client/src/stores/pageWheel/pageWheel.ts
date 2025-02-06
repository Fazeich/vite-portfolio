import { createEvent, createStore } from "effector";
import { IPageWheelStore } from "./types";

export const $pageWheel = createStore<IPageWheelStore>({
  currentPage: 0,
  isAnimating: false,
});

export const changePageWheel = createEvent<Partial<IPageWheelStore>>();

$pageWheel.on(changePageWheel, (state, payload) => {
  return {
    ...state,
    ...payload,
  };
});
