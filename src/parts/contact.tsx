import { PropsWithChildren } from "react";
import { Part } from "../components/part/part";
import { Title } from "../components/title/title";

export const Contact = ({children}: PropsWithChildren) => (
  <Part id="contact">
    {children}
    <Title>Contact</Title>
  </Part>
);