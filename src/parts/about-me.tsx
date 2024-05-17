import { PropsWithChildren } from "react";
import { Part, PartProps } from "../components/part/part";
import { Title } from "../components/title/title";
import { Hero } from "../components/hero/hero";

import bmc from "../images/bmc-full-logo.svg"
import author from "../images/author.webp"
import { Button, Button3, Button4 } from "../components/button/button";

export const AboutMe = ({children, hasNav }: PropsWithChildren<PartProps>) => (
  <Part hasNav={hasNav}>
    {children}
    <Hero image={author} title="O mnie" align="justify" imageAlign="bottom" >
      Jestem absolwentką Uniwersytetu Ekonomicznego w Poznaniu oraz studiów podyplomowych „Teksty współczesnej kultury" w Instytucie Literatury Polskiej Uniwersytetu Warszawskiego. Dla literatury porzuciłam pracę naukową w dziedzinie ekonomii. Zawodowo, jako ekonomistka, zajmuję się analizami rynku. Doraźnie redaguję teksty poetyckie i użytkowe. Jestem związana z trzema miastami: Legnicą, Poznaniem oraz Warszawą. W wolnych chwilach tańczę tango argentyńskie. „Wierszoterapie" to mój debiut książkowy. W przygotowaniu kolejna książka poetycka.
      <br/>
      <br/>
      Jeśli podoba Ci się moja twórczość, możesz mnie wesprzeć dobrowolną wpłatą w serwisie buycoffe.to, którą przeznaczę na kolejną książkę poetycką.
      <Button4>
        <img src={bmc} style={{width: "25rem"}}  />
      </Button4>
    </Hero>
  </Part>
);