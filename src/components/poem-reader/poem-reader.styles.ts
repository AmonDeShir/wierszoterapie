import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 10rem;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const PoemContainer = styled.article`
`

export const Author = styled.p`
  display: block;
  text-align: left;
  font-size: 2.6rem;
  font-style: italic;
  padding-bottom: 2rem;
`;

export const Title = styled.h1`
  display: block;
  text-align: left;
  font-weight: bold;
  font-size: 4rem;
  padding-bottom: 2rem;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.text};
`;

export const Description = styled.p`
  display: block;
  text-align: right;
  font-weight: bold;
  font-size: 2.6rem;
  padding-top: 2rem;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.text};
`;


export const Icon = styled.div`
  transition: transform 0.25s;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
  }

  &:active {
    transform: scale(0.9);
  }
`;