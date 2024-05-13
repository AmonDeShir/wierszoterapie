import { forwardRef, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { Center, Container, Link } from "./nav.styles";
import { useWindowSize } from "../../hooks/use-window-size";

export type NavProps = {
  selected: string,
  useLinks?: boolean,
  pages: ([string, string, number])[];
}

export const NavBar = forwardRef<HTMLDivElement, NavProps>(({ pages, selected, useLinks = false }, ref) => {
  const [_, height] = useWindowSize();

  const handleClick = (e: React.MouseEvent, target: [string, string, number]) => {
    if (useLinks) {
      return;
    }

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
            selected={selected == page[1]}
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