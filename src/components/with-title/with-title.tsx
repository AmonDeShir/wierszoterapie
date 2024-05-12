import { PropsWithChildren } from "react";
import { Container } from "./with-titile.styles";
import { Title } from "../title/title";

type Props = PropsWithChildren<{
  title: string;
}>;

export const WithTitle = ({children,title}: Props ) => (
  <Container>
    <Title>{title}</Title>
    {children}
  </Container>
);