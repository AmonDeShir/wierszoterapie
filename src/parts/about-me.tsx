import { PropsWithChildren } from "react";
import { Part, PartProps } from "../components/part/part";
import { Title } from "../components/title/title";
import { Hero } from "../components/hero/hero";

import author from "../images/author.webp"

export const AboutMe = ({children, hasNav }: PropsWithChildren<PartProps>) => (
  <Part id="about-me" hasNav={hasNav}>
    {children}
    <Hero image={author} title="O Mnie" align="justify" imageAlign="bottom" >
      Poetka, ekonomistka. Absolwentka Uniwersytetu Ekonomicznego w Poznaniu oraz studiów podyplomowych „Teksty współczesnej kultury" w Instytucie Literatury Polskiej Uniwersytetu Warszawskiego. Dla literatury porzuciła pracę naukową w dziedzinie ekonomii. Zawodowo zajmuje się analizami rynku, doraźnie redakcją tekstów poetyckich i użytkowych. Związana z trzema miastami: Legnicą, Poznaniem oraz Warszawą. W wolnych chwilach tańczy tango argentyńskie. „Wierszo-terapie" to jej debiut książkowy.
    </Hero>
  </Part>
);