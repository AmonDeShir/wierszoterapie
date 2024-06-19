import { PropsWithChildren, useRef, useState } from "react";
import { Author, Container, Dedication, Description, Icon, MobileIcons, PoemContainer, Text, Title } from "./poem-reader.styles";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import gsap from "gsap";
import styled from "@emotion/styled";
import React from "react";

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

const Poem = ({poem}: { poem: PoemData }) => (
  <div key={poem.title}>
    <Author>{poem.author}</Author>
    <Title>{poem.title}</Title>
    <Dedication>{poem.dedication}</Dedication>

    <Text align="left">
      {poem.text}
    </Text>

    <Description>
      {poem.date}
    </Description>
  </div>
);

export const PoemReader = ({ poems }: Props) => {
  const [selected, setSelected] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const decrement = () => {
    console.log("before", window.scrollY);

    gsap.timeline()
      .to(ref.current, { opacity: 0, duration: 0.25 })
      .call(() => setSelected(selected => (selected - 1) < 0 ? poems.length - 1 : selected - 1))
      .to(ref.current, { opacity: 1, duration: 0.25 })
      .call(() =>     console.log("after", window.scrollY)    )
  }
  
  const increment = () => {
    gsap.timeline()
      .to(ref.current, { opacity: 0, duration: 0.25 })
      .call(() => setSelected(selected => (selected + 1) >= poems.length ? 0 : selected + 1))
      .to(ref.current, { opacity: 1, duration: 0.25 })
      .call(() => console.log(window.innerHeight));
  }

  const PCIcons = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    bottom: 0px;
    right: 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 25vw;

    @media (max-width: 1000px) {
      padding: 0 15vw;
    }

    @media (max-width: 800px) {
      padding: 0 10vw;
    }
  `;

  return (
    <Container>
      <PCIcons>
        <Icon>
          <FaChevronLeft color="#333" size="100%" onClick={decrement} />
        </Icon>

        <Icon>
          <FaChevronRight color="#333" size="100%" onClick={increment} />
        </Icon>

      </PCIcons>
      
      <PoemContainer ref={ref}>
        <Poem poem={poems[selected]} />

        <MobileIcons>
          <Icon mobile>
            <FaChevronLeft color="#333" size="100%" onClick={decrement} />
          </Icon>

          <Icon mobile>
            <FaChevronRight color="#333" size="100%" onClick={increment} />
          </Icon>
        </MobileIcons>
      </PoemContainer>
    </Container>
  );
};