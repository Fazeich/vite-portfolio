import Contacts from "@/components/Contacts";
import Introduce from "@/components/Introduce";
import Welcome from "@/components/Welcome";
import { PageWrapper } from "@/lib/styles";

export const Main = () => {
  return (
    <PageWrapper>
      <Welcome />
      <Introduce />
      <Contacts />
    </PageWrapper>
  );
};
