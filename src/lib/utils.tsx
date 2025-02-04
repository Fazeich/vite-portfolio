import { TPage } from "@/components/PageWheel/lib/types";
import Welcome from "@/components/Welcome";
import { uniqueId } from "lodash";

export const getPages = () => {
  const pages: TPage[] = [
    {
      settings: { background: "#dddddd" },
      id: uniqueId(),
      children: <Welcome />,
    },
    {
      settings: { background: "#cccccc" },
      id: uniqueId(),
      children: <div>2</div>,
    },
    {
      settings: { background: "#aaaaaa" },
      id: uniqueId(),
      children: <div>3</div>,
    },
  ];

  return pages;
};
