import { PropsWithChildren } from "react";
import { Container } from "./with-nav.styles";
import { NavBar, NavProps } from "../nav/nav";

type Props = PropsWithChildren<NavProps>;

export const WithNavigation = ({children, ...props}: Props ) => (
  <Container>
    <NavBar {...props} />
    {children}
  </Container>
);