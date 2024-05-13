import { forwardRef } from "react";
import { Center, Container, Link } from "./nav.styles";

export type NavProps = {
  selected: string,
  useLinks?: boolean,
  pages: ([string, string, number])[];
}

export const NavBar = forwardRef<HTMLDivElement, NavProps>(({ pages, selected, useLinks = false }, ref) => {
  const handleClick = (e: React.MouseEvent, target: [string, string, number]) => {
    if (useLinks) {
      return;
    }

    let top = document.querySelector(target[1])?.getBoundingClientRect().top ?? 0;

    e.preventDefault();
    window.history.pushState(target[0], target[0], `/${target[1]}`);
    window.scrollTo({behavior: "smooth", top });
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