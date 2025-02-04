import { uniqueId } from "lodash";
import { createEvent, createStore } from "effector";
import { IWindowsCloneStore, IWindowTab } from "./types";

export const $windowsClone = createStore<IWindowsCloneStore>({
  tabs: [],
  activeTabId: undefined,
});

export const changeWindowsCloneStore =
  createEvent<Partial<IWindowsCloneStore>>();
export const addTab = createEvent<IWindowTab>();
export const removeTab = createEvent<{ id: number | string }>();
export const resetTabs = createEvent();

$windowsClone
  .on(addTab, (state, payload) => {
    const alreadyInUsed =
      state?.tabs?.filter((tab) => tab?.name === payload?.name).length > 0;

    if (!alreadyInUsed) {
      const newId = uniqueId();

      return {
        ...state,
        tabs: [...state.tabs, { ...payload, id: newId }],
        activeTabId: newId,
      };
    }

    return state;
  })
  .on(removeTab, (state, { id }) => {
    return {
      ...state,
      tabs: state.tabs.filter((tab) => tab.id !== id),
    };
  })
  .on(changeWindowsCloneStore, (state, payload) => {
    return {
      ...state,
      ...payload,
    };
  })
  .reset(resetTabs);
