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
    background: "#eeeeee",
    link: "#969696",
  },
  secondary: {
    text: "#969696",
    background: "#cccccc",
    link: "",
  },
  accent: {
    text: "#17a2b8",
    background: "#ffffff",
    link: "",
  },
  additional: {
    text: "#ffffff",
    background: "#000000",
    link: "",
  },
};
