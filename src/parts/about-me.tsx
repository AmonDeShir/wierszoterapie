import { PropsWithChildren } from "react";
import { Part } from "../components/part/part";
import { Title } from "../components/title/title";

export const AboutMe = ({children}: PropsWithChildren) => (
  <Part id="about-me">
    {children}
    <Title>About Me</Title>
  </Part>
);