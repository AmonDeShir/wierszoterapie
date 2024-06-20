import { PoemData, PoemReader } from "../components/poem-reader/poem-reader";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  @media (max-width: 1000px) {
    padding: 0px;
  }
`;

type Props = {
  poems: PoemData[]
};

export const Poems = ({ poems }: Props) => (
  <Container id="poems">    
    <PoemReader
      poems={poems}
    />
  </Container>
);