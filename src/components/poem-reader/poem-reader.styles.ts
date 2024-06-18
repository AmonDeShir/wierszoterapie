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
  font-style: normal;
  font-weight: bold;
  padding-bottom: 2rem;
`;

export const Dedication = styled.p`
  display: block;
  text-align: right;
  font-size: 2.6rem;
`;


export const Title = styled.h1`
  display: block;
  text-align: left;
  font-weight: bold;
  font-size: 4rem;
  padding-bottom: 4rem;
  padding-top: 2rem;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.text};
`;

export const Description = styled.p`
  display: block;
  text-align: right;
  font-weight: normal;
  font-size: 2.6rem;
  padding-top: 2rem;
  color: ${({ theme }) => theme.colors.dark};
  font-family: ${({ theme }) => theme.fonts.text};
`;

export const MobileIcons = styled.div`
  margin-top: 2em;
  display: none;
  width: 100%;
  justify-content: space-between;

  @media (max-width: 450px) or (max-height: 450px) {
    display: flex;
  }
`;


export const Icon = styled.div<{mobile?: boolean}>`
  width: 4rem;
  height: 4rem;
  transition: transform 0.25s;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
  }

  &:selected {
    transform: scale(0.9);
  }

  display: ${({ mobile }) => mobile ? "none" : "block" };

  @media (max-width: 450px) or (max-height: 450px) {
    display: ${({ mobile }) => mobile ? "block" : "none" };
  }
`;

export const TextContainer = styled.div`
  position: relative;
  overflow-y: auto;
`;