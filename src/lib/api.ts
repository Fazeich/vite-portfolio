export enum EConnectionEvent {
  ChangeBtn = "change-button",
}

export interface IWsSend {
  event: EConnectionEvent;
  data: any;
}

export const useWs = () => {
  const ws = new WebSocket("wss://81.177.223.127:3010");

  ws.onopen = () => {};

  ws.onclose = (e) => {};

  ws.onerror = () => {};

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
