import { PropsWithChildren } from "react";
import { Part } from "../components/part/part";
import { Title } from "../components/title/title";

export const Poems = ({children}: PropsWithChildren) => (
  <Part id="poems">
    {children}
    <Title>Poems</Title>
  </Part>
);