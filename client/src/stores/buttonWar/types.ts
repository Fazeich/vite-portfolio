export interface IButtonWarStore {
  activeButtons: TActiveButtons;
}

export type TActiveButtons = boolean[][];

export interface IChangeActiveButtonParams {
  colIdx: number;
  rowIdx: number;
}
