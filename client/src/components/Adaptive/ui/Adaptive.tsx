import Paragraph from "@/shared/Paragraph";
import {
  AdaptiveWrapper,
  FlexContainer,
  FloatingWrap,
  LargeCard,
  MediumCard,
  SmallCard,
  StyledTitle,
} from "../lib/styles";
import { AdaptiveTitle } from "./components/AdaptiveTitle";
import { ResizableBlock } from "./components/ResizableBlock";

export const Adaptive = () => {
  return (
    <AdaptiveWrapper>
      <AdaptiveTitle />
      <FloatingWrap>
        <ResizableBlock>
          <LargeCard>
            <Paragraph text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident molestiae beatae architecto repellat a nulla deserunt perspiciatis fugiat! Tempore sed aliquam ipsum voluptatum quos officiis repellendus, quo eaque? Quas exercitationem tenetur rerum. Natus excepturi nisi a amet, alias nesciunt quo enim sapiente repudiandae provident laborum numquam. Eaque autem facilis ut." />
          </LargeCard>
          <FlexContainer>
            <MediumCard>
              <StyledTitle text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident molestiae beatae architecto repellat a nulla deserunt perspiciatis fugiat!" />
            </MediumCard>
            <MediumCard>
              <StyledTitle text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident molestiae beatae architecto repellat a nulla deserunt perspiciatis fugiat!" />
            </MediumCard>
          </FlexContainer>
          <FlexContainer>
            <SmallCard>
              <StyledTitle text="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
            </SmallCard>
            <SmallCard>
              <StyledTitle text="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
            </SmallCard>
            <SmallCard>
              <StyledTitle text="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
            </SmallCard>
          </FlexContainer>
        </ResizableBlock>
      </FloatingWrap>
    </AdaptiveWrapper>
  );
};
