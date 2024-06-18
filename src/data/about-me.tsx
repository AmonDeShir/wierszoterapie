import styled from "@emotion/styled"

const Link = styled.a`
  text-decoration: underline ${({theme}) => theme.colors.primary};
  color: ${({theme}) => theme.colors.primary};
  font-size: 2.7rem;
`;

export const AboutMeText = () => (
  <p>
    Jestem absolwentką Uniwersytetu Ekonomicznego w Poznaniu oraz studiów podyplomowych „Teksty współczesnej kultury" w Instytucie Literatury Polskiej Uniwersytetu Warszawskiego. Dla literatury porzuciłam pracę naukową w dziedzinie ekonomii. Zawodowo, jako ekonomistka, zajmuję się analizami rynku. Doraźnie redaguję teksty poetyckie i użytkowe. Jestem związana z trzema miastami: Legnicą, Poznaniem oraz Warszawą. W wolnych chwilach tańczę tango argentyńskie. „Wierszoterapie" to mój debiut książkowy. W przygotowaniu kolejna książka poetycka.<br/><br/>
    Jeżeli podoba Ci się moja twórczość, cenisz poezję, zapraszam do polubienia i obserwowania <Link target="_blank" href="https://www.facebook.com/profile.php?id=61558898596972">mojego profilu autorskiego</Link> na Facebooku.
  </p>
)