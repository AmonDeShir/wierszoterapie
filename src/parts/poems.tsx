import { PoemData, PoemReader } from "../components/poem-reader/poem-reader";
import { KodRTG, KsiazkiNaPolkach, PiwoniePokrzywy } from "../data/poems";
import styled from "@emotion/styled";

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

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  @media (max-width: 1000px) {
    padding: 0px;
  }
`;

export const Poems = () => (
  <Container id="poems">    
    <PoemReader
      poems={poems}
    />
  </Container>
);