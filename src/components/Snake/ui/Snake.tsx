import { SnakeWrapper } from "../lib/styles";
import Paragraph from "@/shared/Paragraph";
import { PlayGround } from "../components/PlayGround";
import { IS_MOBILE } from "@/lib/constants";
import InWorkMobile from "@/shared/InWorkMobile";

export const Snake = () => {
  return (
    <SnakeWrapper>
      <Paragraph
        text="Змейка"
        weight={900}
        size={48}
        style={{ textAlign: "center" }}
      />

      {IS_MOBILE ? <InWorkMobile /> : <PlayGround />}
    </SnakeWrapper>
  );
};
