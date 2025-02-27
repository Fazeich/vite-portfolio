import { useCallback, useEffect, useRef } from "react";
import { useUnit } from "effector-react";
import { $snakeGame, moveSnake } from "@/stores/snake/snake";
import { GRID_SIZE } from "@/lib/constants";
import { handleKeyDown } from "../lib/utils";
import { StyledCanvas } from "../lib/styles";

const TILE_SIZE = 20;

export const PlayGround = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const { snake, food, speed } = useUnit($snakeGame);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "green";

    snake.forEach(({ x, y }) =>
      ctx.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE)
    );

    ctx.fillStyle = "red";

    ctx.fillRect(food.x * TILE_SIZE, food.y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
  }, [snake, food]);

  useEffect(() => {
    let timeoutId;

    const loop = () => {
      moveSnake();

      timeoutId = setTimeout(loop, speed);
    };

    timeoutId = setTimeout(loop, speed);

    return () => clearTimeout(timeoutId);
  }, [speed]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div>
      <StyledCanvas
        ref={canvasRef}
        width={GRID_SIZE * TILE_SIZE}
        height={GRID_SIZE * TILE_SIZE}
      />
    </div>
  );
};
