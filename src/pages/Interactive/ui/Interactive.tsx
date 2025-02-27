import Adaptive from "@/components/Adaptive";
import Snake from "@/components/Snake";
import WindowsClone from "@/components/WindowsClone";
import { PageWrapper } from "@/lib/styles";

export const Interactive = () => {
  return (
    <PageWrapper>
      <Snake />

      <WindowsClone />

      <Adaptive />
    </PageWrapper>
  );
};
