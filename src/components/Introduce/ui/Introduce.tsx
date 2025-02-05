import Paragraph from "@/shared/Paragraph";
import { IntroduceWrapper } from "../lib/styles";

export const Introduce = () => {
  return (
    <IntroduceWrapper>
      <Paragraph text="Меня зовут Самсонов Владислав" size={48} weight={900} />
      <Paragraph text="Я - фронтенд разработчик" size={36} weight={900} />
      <Paragraph
        text="Ниже покажу какой :)"
        size={36}
        weight={900}
        type="secondary"
      />
    </IntroduceWrapper>
  );
};
