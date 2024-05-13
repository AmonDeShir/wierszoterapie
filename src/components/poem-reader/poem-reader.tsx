import { PropsWithChildren, useRef, useState } from "react";
import { Author, Container, Description, Icon, PoemContainer, Title } from "./poem-reader.styles";
import { Text } from "../text/text";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import gsap from "gsap";

export type PoemData = {
  text: JSX.Element,
  title?: string,
  author?: string,
  date?: string,
  dedication?: string,
}

type Props = PropsWithChildren<{
  poems: PoemData[],
}>

export const PoemReader = ({ poems }: Props) => {
  const [selected, setSelected] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const decrement = () => {
    gsap.timeline()
      .to(ref.current, { opacity: 0, duration: 0.25 })
      .call(() => setSelected(selected => (selected - 1) < 0 ? poems.length - 1 : selected - 1))
      .to(ref.current, { opacity: 1, duration: 0.25 })
  }
  
  const increment = () => {
    gsap.timeline()
      .to(ref.current, { opacity: 0, duration: 0.25 })
      .call(() => setSelected(selected => (selected + 1) >= poems.length ? 0 : selected + 1))
      .to(ref.current, { opacity: 1, duration: 0.25 })
  }
  
  return (
    <Container>
        <Icon>
          <FaChevronLeft color="#333" size="4rem" onClick={decrement} />
        </Icon>

        <PoemContainer ref={ref}>
          <Author>{poems[selected].author}</Author>
          <Title>{poems[selected].title}</Title>
          <Text align="left">
            {poems[selected].text}
          </Text>
          <Description>
            {poems[selected].date}
          </Description>
        </PoemContainer>

        <Icon>
          <FaChevronRight color="#333" size="4rem" onClick={increment} />
        </Icon>
    </Container>
  );
};