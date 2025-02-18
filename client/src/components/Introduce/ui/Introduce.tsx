import Paragraph from "@/shared/Paragraph";
import { IntroduceWrapper } from "../lib/styles";

export const Introduce = () => {
  return (
    <IntroduceWrapper>
      <Paragraph
        className="smooth_text"
        text="Меня зовут Самсонов Владислав"
        size={48}
        weight={800}
      />

      <Paragraph
        className="smooth_text"
        text="Я - Frontend разработчик"
        size={36}
        weight={500}
      />
    </IntroduceWrapper>
  );
};
