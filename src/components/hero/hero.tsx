import { PropsWithChildren, useEffect, useRef } from "react";
import { Container, Image, ImageContainer, TextContainer } from "./hero.styles";
import { Text } from "../text/text";
import { WithTitle } from "../with-title/with-title";
import { Animation } from "../part/animations";
import gsap from "gsap";

type Props = PropsWithChildren<{
  image: string,
  title: string,
  align?: "center" | "justify",
  imageAlign?: "center" | "top" | "bottom",
  imageWidth?: string,
  beforeShow?: boolean, 
  enter?: Animation,
}>

export const Hero = ({ image, title, align = "justify", imageAlign = "center", enter, children }: Props) => {

  return (
    <Container>
      <ImageContainer>
        <Image src={image} imageAlign={imageAlign}/>
      </ImageContainer>

        <TextContainer imageWidth="80rem" >
          <WithTitle title={title}>
            <Text align={align}>
              {children}
            </Text>
          </WithTitle>
        </TextContainer>
    </Container>
  );
}