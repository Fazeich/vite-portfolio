import { BUTTONS_COLUMNS_COUNT, BUTTONS_ROWS_COUNT } from "@/lib/constants";
import { createEffect, createEvent, createStore } from "effector";
import {
  IButtonWarStore,
  IChangeActiveButtonParams,
  TActiveButtons,
} from "./types";
import { ENDPOINTS } from "@/lib/endpoints";
import axios from "axios";

export const $buttonWar = createStore<IButtonWarStore>({
  activeButtons: Array(BUTTONS_ROWS_COUNT)
    .fill(false)
    .map(() => Array(BUTTONS_COLUMNS_COUNT).fill(false)),
});

export const changeActiveButtons = createEvent<{
  rowIdx: number;
  colIdx: number;
}>();

export const setActiveButtons = createEvent<TActiveButtons>();

export const fetchActiveButtons = createEffect({
  handler: async () => {
    try {
      const { data } = await axios.get<{ data: TActiveButtons }>(
        ENDPOINTS.buttonWar.get
      );

      return data?.data;
    } catch (err) {
      console.error(new Error(err));

      return [];
    }
  },
});

$buttonWar
  .on(setActiveButtons, (state, payload) => {
    return {
      ...state,
      activeButtons: payload,
    };
  })
  .on(fetchActiveButtons.doneData, (state, payload) => {
    return {
      ...state,
      activeButtons: payload,
    };
  });
