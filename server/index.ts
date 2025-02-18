import buttonWarRoute from "./routes/button-war.route";
import http from "http";
import express from "express";
import { changeActiveButton } from "./lib/utils";
import { PORT, SECRET_PORTFOLIO_ID } from "./lib/constants";
import mongoose from "mongoose";
import Portfolio from "./lib/models/Portfolio/Portfolio";
import WebSocket from "ws";
import { BASE_URL } from "./lib/endpoints";
import { EConnectionEvent } from "./lib/types";

const app = express();
const server = http.createServer(app);

app.use(express.json());

app.use((_, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use(BASE_URL, buttonWarRoute);

const webSocketServer = new WebSocket.Server({ server });

const dispatchEvent = async (message, ws) => {
  const json = JSON.parse(message);

  switch (json?.event) {
    case EConnectionEvent.ChangeBtn: {
      const portfolio = await Portfolio.findById(SECRET_PORTFOLIO_ID);

      const { rowIdx, colIdx } = json?.payload;

      const newActiveButtons = changeActiveButton({
        rowIdx,
        colIdx,
        activeButtons: portfolio?.buttonsWar?.activeButtons,
      });

      console.log(newActiveButtons);

      const newPortfolio = await Portfolio.findByIdAndUpdate(
        SECRET_PORTFOLIO_ID,
        {
          buttonsWar: {
            activeButtons: newActiveButtons,
          },
        }
      );

      webSocketServer.clients.forEach((client) => {
        client.send(
          JSON.stringify({
            event: EConnectionEvent.ChangeBtn,
            data: newPortfolio?.buttonsWar?.activeButtons,
          })
        );
      });

      break;
    }
    default:
      ws.send(new Error("Некорректный запрос").message);

      break;
  }
};

webSocketServer.on("connection", (ws) => {
  ws.on("message", (m) => dispatchEvent(m, ws));

  ws.on("error", (e) => ws.send("Ошибка"));
});

const mongoDb =
  "mongodb+srv://admin:g0fucky0ursel4@portfolio.iuara.mongodb.net/?retryWrites=true&w=majority&appName=portfolio";

const start = async () => {
  await mongoose
    .connect(mongoDb)
    .then(() => {
      server.listen(PORT, () => console.log(`Сервер запущен на порте ${PORT}`));
    })
    .catch((err) => {
      console.error(err);
    });
};

start();
