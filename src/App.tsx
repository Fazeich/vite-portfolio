import PageWheel from "./components/PageWheel";
import { getPages } from "./lib/utils";

export const App = () => {
  const pages = getPages();

  return <PageWheel pages={pages} />;
};
