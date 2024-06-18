import styled from "@emotion/styled";
import  { Link as GatsbyLink }from "gatsby";

export const Container = styled.nav`
  height: 14rem;
  width: 100%;
  top: 10px;
  position: sticky;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.colors.secondary};

  @media (max-width: 1000px) {
    padding: 0 5px;
    position: static;
  }

  @media (max-width: 1000px) or (max-height: 500px) {
    height: 28rem;
  }
`;

export const Center = styled.div`
  width: 45%;
  display: flex;
  justify-content: space-between;
`;

export type LinkProps = {
  selected?: boolean;
  text: string;
}

export const Link = styled(GatsbyLink)<LinkProps>`
  text-decoration: none;
  position: relative;
  color: transparent;
  font-family: ${({theme}) => theme.fonts.ui};
  font-weight: 500;
  font-size: 3rem;
  letter-spacing: 0.25em;
  text-decoration: none;
  text-align: center;
  white-space: nowrap;

  @media (max-width: 400px) or (max-height: 400px) {
    letter-spacing: 0em;
  }

  &::before {
    position: absolute;    
    content: "${({text}) => text}";
    will-change: font-size;
    transition: color 0.25s, font-size 0.25s;
    color: ${({theme, selected}) => selected ? theme.colors.primary : theme.colors.text};
  }

  &:hover {
    &::before {
      font-size: 3.4rem;
    }
  }

  &:selected {
    &::before {
      font-size: 2.8rem;
    }
  }
`;