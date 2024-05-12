import { PropsWithChildren } from "react";
import { Part, PartProps } from "../components/part/part";
import { Title } from "../components/title/title";

export const Poems = ({children, hasNav }: PropsWithChildren<PartProps>) => (
  <Part id="poems" hasNav={hasNav}>
    {children}
    <Title>Poems</Title>
  </Part>
);