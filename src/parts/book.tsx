import { PropsWithChildren } from "react";
import { Part, PartProps } from "../components/part/part";
import { Title } from "../components/title/title";
import book from "../images/book.webp";
import { Hero } from "../components/hero/hero";
import { Wierszoterapie } from "../data/wierszoterapie";
import { Button, Button2, Button3 } from "../components/button/button";

export const Book = ({ children, hasNav }: PropsWithChildren<PartProps>) => (
  <Part hasNav={hasNav}>
    {children}
      <Hero title={"Wierszoterapie"} image={book}>
        <Wierszoterapie />
        <Button href="https://ostrogi.eu/ksiazki/wierszoterapie/">Kup książkę</Button>
      </Hero>
  </Part>
);