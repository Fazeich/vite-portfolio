import { changeDirection, moveSnake } from "@/stores/snake/snake";
import { SNAKE_KEYS } from "./constants";

export const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key in SNAKE_KEYS) changeDirection(SNAKE_KEYS[e.key]);
};
