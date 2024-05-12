import styled from "@emotion/styled";
import  { Link as GatsbyLink }from "gatsby";

export const Container = styled.nav`
  height: 12rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const Center = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-evenly;
`;

export type LinkProps = {
  active?: boolean;
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

  &::before {
    left: 0px;
    position: absolute;    
    content: "${({text}) => text}";
    will-change: font-size;
    transition: color 0.25s, font-size 0.25s;
    color: ${({theme, active}) => active ? theme.colors.primary : theme.colors.text};
  }

  &:hover {
    &::before {
      font-size: 3.2rem;
    }
  }
`;