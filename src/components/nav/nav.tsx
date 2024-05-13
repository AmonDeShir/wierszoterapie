import { forwardRef } from "react";
import { Center, Container, Link } from "./nav.styles";

export type NavProps = {
  selected: string,
  useLinks?: boolean,
  pages: ([string, string, number])[];
  goToPage?: (page: number) => void;
}

export const NavBar = forwardRef<HTMLDivElement, NavProps>(({ pages, selected, useLinks = false, goToPage }, ref) => {
  const handleClick = (e: React.MouseEvent, target: [string, string, number]) => {
    if (useLinks) {
      return;
    }
    
    e.preventDefault();
    
    if (goToPage) {
      goToPage(target[2])
    }
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