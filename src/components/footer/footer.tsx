import styled from "@emotion/styled";

export const Footer = styled.footer`
    text-align: center;
    height: 20rem;
    width: 100svw;
    display: block;
    font-size: 2rem;
    background-color: ${({theme}) => theme.colors.dark};
    color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.ui};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;