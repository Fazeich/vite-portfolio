import { notification } from "antd";

export enum EConnectionEvent {
  ChangeBtn = "change-button",
}

export interface IWsSend {
  event: EConnectionEvent;
  data: any;
}

export const useWs = () => {
  const ws = new WebSocket("ws://localhost:3010");

  const [notif] = notification.useNotification();

  ws.onopen = () => {
    notif.success({ message: "Соединение установлено" });
  };

  ws.onclose = (e) => {
    notif.success({ message: "Соединение закрыто" });
  };

  ws.onerror = () => {
    notif.error({ message: "Соединение разорвано" });
  };

  const wsSend = ({ data, event }: IWsSend) => {
    if (!ws.readyState) {
      setTimeout(() => {
        wsSend({ data, event });
      }, 100);
    } else {
      ws.send(JSON.stringify({ event, payload: data }));
    }
  };

  return {
    ws,
    wsSend,
  };
};
