import { Introduce } from "@/components/Introduce/ui/Introduce";
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
      children: <Introduce />,
    },
    {
      settings: { background: "#aaaaaa" },
      id: uniqueId(),
      children: <div>3</div>,
    },
  ];

  return pages;
};
