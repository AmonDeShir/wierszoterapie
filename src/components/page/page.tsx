import "@fontsource/source-serif-4"
import "@fontsource/mitr"
import { Global, ThemeProvider } from "@emotion/react";
import { theme } from "./theme";
import { global } from "./global";
import { PropsWithChildren } from "react";


export const Page = ({ children }: PropsWithChildren) => {
  return (
    <main>
      <Global styles={global} />
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </main>
  );
}