import Welcome from "@/components/Welcome";
import Introduce from "@/components/Introduce";
import ButtonWar from "@/components/ButtonWar";
import WindowsClone from "@/components/WindowsClone";
import { TPage } from "@/components/PageWheel/lib/types";
import { uniqueId } from "lodash";
import Contacts from "@/components/Contacts";
import Adaptive from "@/components/Adaptive";

export const getPages = () => {
  const pages: TPage[] = [
    {
      settings: { background: "#eeeeee" },
      id: uniqueId(),
      children: <Welcome />,
    },
    {
      settings: { background: "#dedede" },
      id: uniqueId(),
      children: <Introduce />,
    },
    {
      settings: { background: "#eeeeee" },
      id: uniqueId(),
      children: <ButtonWar />,
    },
    {
      settings: { background: "#dedede" },
      id: uniqueId(),
      children: <WindowsClone />,
    },
    {
      settings: { background: "#eeeeee" },
      id: uniqueId(),
      children: <Adaptive />,
    },
    {
      settings: { background: "#dedede" },
      id: uniqueId(),
      children: <Contacts />,
    },
  ];

  return pages;
};
