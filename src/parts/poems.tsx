import { PropsWithChildren } from "react";
import { Part, PartProps } from "../components/part/part";
import { Title } from "../components/title/title";
import { PoemData, PoemReader } from "../components/poem-reader/poem-reader";
import { Lucyfer } from "../data/poems";

const poems: PoemData[] = [
  {
    text: <Lucyfer />,
    author: "Tadeusz Miciński",
    date: "1931",
    dedication: "Amon",
    title: "Lucyfer"
  }
]

export const Poems = ({children, hasNav }: PropsWithChildren<PartProps>) => (
  <Part id="poems" hasNav={hasNav}>
    {children}
    
    <PoemReader
      selected={0}
      poems={poems}
    />
  </Part>
);