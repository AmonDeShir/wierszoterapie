import styled from "@emotion/styled";
import image from "../images/author.webp"
import { AboutMeText } from "../data/about-me";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Content = styled.div`
  display: flex;
  align-items: flex-end;
  width: 50%;
  min-height: 100vh;

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

const Image = styled.img`
  width: auto;
  height: 80%;
  max-height: 80vmin;

  @media (max-height: 400px) and (orientation:landscape) {
    height: 90%;
    max-height: 85vmin;
  }
`;

const Description = styled.div`
  font-size: 2.6rem;
  font-family: ${({ theme }) => theme.fonts.text};
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
  text-align: center;
  padding-bottom: 1rem;
  margin-bottom: auto;

  @media (max-width: 1000px) {
    padding: 1rem 0rem;
  }
`;

const Text = styled.div`
  text-align: justify;
  margin-bottom: auto;
  font-size: 2.7rem;
  padding: 2.5rem 0;

  @media (max-width: 1000px) {
    padding-top: 0rem;
  }
`;

export const AboutMe = () => (
  <Container id="about-me">
    <Content>
      <Image src={image} />

      <Description>
        <Title>O mnie</Title>
        <Text><AboutMeText/></Text>
      </Description>
    </Content>
  </Container>
);