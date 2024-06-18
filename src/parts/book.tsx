import styled from "@emotion/styled";
import image from "../images/book.webp"
import { Wierszoterapie } from "../data/wierszoterapie";
import { Button } from "../components/button/button";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10vmin 0;

  @media (max-width: 1000px) {
    padding: 0px;
  }
`;

const Image = styled.img`
  width: 50%;
  height: auto;
  max-width: 70vmin;

  @media (max-width: 1000px) {
    margin-bottom: 10rem;
  }
`;

const Content = styled.div`
  height: 80%;
  width: 45%;
  display: flex;
  align-items: flex-start;
  max-width: 1500px;

  @media (max-width: 1800px) {
    width: 50%;
  }

  @media (max-width: 1600px) {
    width: 60%;
  }


  @media (max-width: 1300px) {
    width: 80%;
  }

  @media (max-width: 1000px) {
    padding: 0 5px;
    flex-direction: column;
    align-items: center;
  }
`;

const Description = styled.div`
  font-size: 2.6rem;
  font-family: ${({ theme }) => theme.fonts.text};
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-direction: column;
  min-height: 70vh;
  padding-left: 5rem;

  @media (max-width: 1000px) {
    min-height: 0px;
  }
`;

const Title = styled.div`
  font-size: 4rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.ui};
  text-align: left;
  padding-bottom: 1rem;
  margin-bottom: auto;
`;

const Text = styled.div`
  text-align: justify;
  margin-bottom: auto;
  font-size: 2.7rem;

  @media (max-width: 1000px) {
    padding: 2.5rem 0;
  }
`;

const Author = styled.div`
  font-size: 2.6rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.dark};
  font-family: ${({ theme }) => theme.fonts.text};
  text-align: left;
`;

const Buttons = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-content: flex-start;
  align-items: center;
  padding-top: 1rem;
`;

export const Book = () => (
  <Container>
    <Content>
      <Image src={image} />
      <Description>
        <Author>Patrycja Purgał</Author>
        <Title>Wierszoterapie</Title>
        <Text><Wierszoterapie/></Text>
        
        <Buttons>
          <div>
            <Button bigger>Zamów książkę z dedykacją</Button>
          </div>
        </Buttons>
        
      </Description>
    </Content>
  </Container>
);