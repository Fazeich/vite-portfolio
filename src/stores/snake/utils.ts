import { GRID_SIZE } from "@/lib/constants";

export const generateFood = (snake = []) => {
  let food;
  do {
    food = {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE),
    };
  } while (snake.some(({ x, y }) => x === food.x && y === food.y));
  return food;
};

export const isCollision = (head, snake) => {
  return (
    head.x < 0 ||
    head.y < 0 ||
    head.x >= GRID_SIZE ||
    head.y >= GRID_SIZE ||
    snake.some(({ x, y }) => x === head.x && y === head.y)
  );
};
