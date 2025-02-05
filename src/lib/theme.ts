export interface ITheme {
  primary: IThemeSection;
  secondary: IThemeSection;
  accent: IThemeSection;
  additional: IThemeSection;
}

export interface IThemeSection {
  text: string;
  background: string;
  link: string;
}

export const LIGHT_THEME: ITheme = {
  primary: {
    text: "#000000",
    background: "",
    link: "",
  },
  secondary: {
    text: "#969696",
    background: "",
    link: "",
  },
  accent: {
    text: "#17a2b8",
    background: "",
    link: "",
  },
  additional: {
    text: "#ffffff",
    background: "",
    link: "",
  },
};
