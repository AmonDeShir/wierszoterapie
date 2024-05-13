import { PropsWithChildren } from "react";
import { Part, PartProps } from "../components/part/part";
import { PoemData, PoemReader } from "../components/poem-reader/poem-reader";
import { PiwoniePokrzywy, Powrot, ZapisujePoetke } from "../data/poems";

const poems: PoemData[] = [
  {
    text: <PiwoniePokrzywy />,
    title: "Piwonie i pokrzywy",
    author: "Patrycja Purgał",
    date: "",
    dedication: "",
  },
  {
    text: <Powrot />,
    title: "Powrót",
    author: "Patrycja Purgał",
    date: "Legnica, lipiec 2023",
    dedication: "",
  },
  {
    text: <ZapisujePoetke />,
    title: "Zapisuję poetkę",
    author: "Patrycja Purgał",
    date: "",
    dedication: "Krystynie Miłobędzkiej",
  },

]

export const Poems = ({children, hasNav }: PropsWithChildren<PartProps>) => (
  <Part hasNav={hasNav}>
    {children}
    
    <PoemReader
      poems={poems}
    />
  </Part>
);