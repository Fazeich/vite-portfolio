import { IPageSettings } from "@/shared/Page/lib/types";

export type TPage = {
  settings?: IPageSettings;
  id?: number | string;
  children?: React.ReactNode;
};
