import { PropsWithChildren } from "react";
import { Container, Image, ImageContainer, TextContainer } from "./hero.styles";
import { Text } from "../text/text";
import { WithTitle } from "../with-title/with-title";

type Props = PropsWithChildren<{
  image: string,
  title: string,
  align?: "center" | "justify",
  imageAlign?: "center" | "top" | "bottom",
  imageWidth?: string,
}>

export const Hero = ({ image, title, align = "justify", imageAlign = "center", imageWidth="50vh", children }: Props) => (
  <Container>
    <ImageContainer height="100%" width={imageWidth} >
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