import { forwardRef, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { Center, Container, Link } from "./nav.styles";
import { useWindowSize } from "../../hooks/use-window-size";

export type NavProps = {
  active: string,
  pages: ([string, string, number])[];
}

export const NavBar = forwardRef<HTMLDivElement, NavProps>(({ pages, active }, ref) => {
  const [_, height] = useWindowSize();

  const handleClick = (e: React.MouseEvent, target: [string, string, number]) => {
    e.preventDefault();
    window.history.pushState(target[0], target[0], `/${target[1]}`);
    window.scrollTo({behavior: "smooth", top: height * target[2] });
  } 

  return (
    <Container ref={ref}>
      <Center>
        {pages.map(page => (
          <Link
            key={page[1]} 
            to={page[1]}
            active={active == page[1]}
            text={page[0]}
            onClick={(e) => handleClick(e, page)}
          >
            {page[0]}
          </Link>
        ))}
      </Center>
    </Container>
  );
});