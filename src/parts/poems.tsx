import { PropsWithChildren } from "react";
import { Part, PartProps } from "../components/part/part";
import { PoemData, PoemReader } from "../components/poem-reader/poem-reader";
import { KodRTG, KsiazkiNaPolkach, PiwoniePokrzywy, ProblemyOddychaniem } from "../data/poems";

const poems: PoemData[] = [
  {
    text: <PiwoniePokrzywy />,
    title: "Piwonie i pokrzywy",
    author: "Patrycja Purgał",
    date: "",
    dedication: "",
  },
  {
    text: <KsiazkiNaPolkach />,
    title: "Książki na półkach",
    author: "Patrycja Purgał",
    date: "",
    dedication: "",
  },
  {
    text: <KodRTG />,
    title: "Kod RTG 6790#",
    author: "Patrycja Purgał",
    date: "",
    dedication: "",
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