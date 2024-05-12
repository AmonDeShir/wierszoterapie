import { Theme } from "@emotion/react";


declare module '@emotion/react' {
  export interface Theme {
    colors: {
      text: string,
      dark: string,
      primary: string,
      secondary: string,
    },
    fonts: {
      text: string,
      ui: string,
    },
  }
}

export const theme: Theme = {
  colors: {
    text: "#333",
    dark: "#333",
    primary: "#DF0036",
    secondary: "#fff"
  },
  fonts: {
    text: "Source Serif 4",
    ui: "Mitr",
  },
}