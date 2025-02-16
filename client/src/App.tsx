import { notification } from "antd";
import PageWheel from "./components/PageWheel";
import WheelIndicator from "./components/WheelIndicator";
import { getPages } from "./lib/utils";

export const App = () => {
  const pages = getPages();
  const [_, contextHolder] = notification.useNotification();

  return (
    <>
      {contextHolder}

      <PageWheel pages={pages} />
      <WheelIndicator pages={pages} />
    </>
  );
};
