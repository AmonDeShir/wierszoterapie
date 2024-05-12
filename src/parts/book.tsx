import { PropsWithChildren } from "react";
import { Part, PartProps } from "../components/part/part";
import { Title } from "../components/title/title";
import book from "../images/book.webp";
import { Hero } from "../components/hero/hero";
import { Wierszoterapie } from "../data/wierszoterapie";

export const Book = ({ children, hasNav }: PropsWithChildren<PartProps>) => (
  <Part id="book" hasNav={hasNav}>
    {children}
      <Hero title={"Wierszoterapie"} image={book}>
        <Wierszoterapie />
      </Hero>
  </Part>
);