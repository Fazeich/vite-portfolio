export const changeActiveButton = ({
  rowIdx,
  colIdx,
  activeButtons,
}): boolean[][] => {
  const newActiveButtons = activeButtons?.map((arr) => [...arr]);

  newActiveButtons[rowIdx][colIdx] = !newActiveButtons[rowIdx][colIdx];

  return newActiveButtons;
};
