import { PropsWithChildren } from "react";
import { Container, TextContainer } from "./hero.styles";
import { Text } from "../text/text";
import { Image } from "../image/image";
import { WithTitle } from "../with-title/with-title";

type Props = PropsWithChildren<{
  image: string,
  title: string,
}>

export const Hero = ({ image, title, children }: Props) => (
  <Container>
      <Image width="88rem" height="124rem" src={image} />

      <TextContainer>
        <WithTitle title={title}>
          <Text align="justify">
            {children}
          </Text>
        </WithTitle>
      </TextContainer>

  </Container>
);