import PageWheel from "./components/PageWheel";
import WheelIndicator from "./components/WheelIndicator";
import { getPages } from "./lib/utils";

export const App = () => {
  const pages = getPages();

  return (
    <>
      <PageWheel pages={pages} />
      <WheelIndicator pages={pages} />
    </>
  );
};
