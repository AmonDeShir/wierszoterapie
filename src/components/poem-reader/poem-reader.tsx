import { PropsWithChildren } from "react";
import { Author, Container, Description, PoemContainer, Title } from "./poem-reader.styles";
import { Text } from "../text/text";

export type PoemData = {
  text: JSX.Element,
  title?: string,
  author?: string,
  date?: string,
  dedication?: string,
}

type Props = PropsWithChildren<{
  selected: number,
  poems: PoemData[],
}>

export const PoemReader = ({ poems, selected }: Props) => (
  <Container>
      <PoemContainer>
        <Author>{poems[selected].author}</Author>
        <Title>{poems[selected].title}</Title>
        <Text align="left">
          {poems[selected].text}
        </Text>
        <Description>
          {poems[selected].date}
        </Description>
      </PoemContainer>
  </Container>
);