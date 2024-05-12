import { Center, Container, Link } from "./nav.styles";

export type NavProps = {
  active: string,
  pages: ([string, string])[];
  sticky?: boolean
}

export const NavBar = ({ pages, active, sticky }: NavProps) => {
  return (
    <Container>
      <Center>
        {pages.map(page => (
          <Link 
            key={page[1]} 
            to={page[1]}
            active={active == page[1]}
            text={page[0]}
          >
            {page[0]}
          </Link>
        ))}
      </Center>
    </Container>
  );
}