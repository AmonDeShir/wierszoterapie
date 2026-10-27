import "@fontsource/source-serif-4";
import "@fontsource/mitr";
import "../../styles/global.css";
import { PropsWithChildren } from "react";

export const Page = ({ children }: PropsWithChildren) => {
  return <main>{children}</main>;
};
