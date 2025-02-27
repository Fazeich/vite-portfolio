import { createEvent, createStore, combine } from "effector";
import { generateFood, isCollision } from "./utils";
import {
  INITIAL_DIRECTION,
  INITIAL_SNAKE,
  INITIAL_SPEED,
  SPEED_SHIFT,
} from "./constants";
import { IPos } from "./types";

export const moveSnake = createEvent();
export const changeDirection = createEvent<{ x: number; y: number }>();
export const restartGame = createEvent();

const $snake = createStore<IPos[]>(INITIAL_SNAKE);
const $direction = createStore<IPos>(INITIAL_DIRECTION);
const $food = createStore<IPos>(generateFood());
const $speed = createStore<number>(INITIAL_SPEED);

export const $snakeGame = combine({
  snake: $snake,
  direction: $direction,
  food: $food,
  speed: $speed,
});

$snake.on(moveSnake, (snake) => {
  const { direction, food } = $snakeGame.getState();
  const newHead = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };

  if (isCollision(newHead, snake)) return INITIAL_SNAKE;

  const newSnake = [newHead, ...snake];
  if (newHead.x === food.x && newHead.y === food.y) return newSnake;

  newSnake.pop();
  return newSnake;
});

$direction.on(changeDirection, (current, next) =>
  current.x + next.x === 0 && current.y + next.y === 0 ? current : next
);

$food.on($snake, (food, snake) =>
  snake[0].x === food.x && snake[0].y === food.y ? generateFood(snake) : food
);

$speed.on($snake, (speed, snake) => {
  const { food } = $snakeGame.getState();

  if (snake[0].x === food.x && snake[0].y === food.y) {
    return speed - SPEED_SHIFT;
  }

  if (snake === INITIAL_SNAKE) {
    return INITIAL_SPEED;
  }

  return speed;
});
