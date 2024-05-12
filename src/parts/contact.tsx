import { PropsWithChildren } from "react";
import { Part, PartProps } from "../components/part/part";
import { Title } from "../components/title/title";

export const Contact = ({children, hasNav }: PropsWithChildren<PartProps>) => (
  <Part id="contact" hasNav={hasNav}>
    {children}
    <Title>Contact</Title>
  </Part>
);