import { PropsWithChildren } from "react";
import { Part, PartProps } from "../components/part/part";
import { Title } from "../components/title/title";
import { PoemData, PoemReader } from "../components/poem-reader/poem-reader";
import { LaMuseeDeLHomme, Lucyfer } from "../data/poems";

const poems: PoemData[] = [
  {
    text: <Lucyfer />,
    author: "Tadeusz Miciński",
    date: "1931",
    dedication: "",
    title: "Lucyfer"
  },
  {
    text: <LaMuseeDeLHomme />,
    author: "Tymoteusz Karpowicz",
    date: "Warszawa 2001",
    dedication: "",
    title: "La musée de l’homme"
  }
]

export const Poems = ({children, hasNav }: PropsWithChildren<PartProps>) => (
  <Part hasNav={hasNav}>
    {children}
    
    <PoemReader
      poems={poems}
    />
  </Part>
);