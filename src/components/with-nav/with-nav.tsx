import { PropsWithChildren, useEffect, useLayoutEffect, useRef } from "react";
import { Container } from "./with-nav.styles";
import { NavBar, NavProps } from "../nav/nav";

type Props = PropsWithChildren<{ id?: string } & NavProps>;

export const WithNavigation = ({children, id, ...props}: Props ) => (
  <Container id={id}>
    <NavBar {...props} />

    <Container>
      {children}
    </Container>
  </Container>
);