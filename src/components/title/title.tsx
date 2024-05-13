import styled from "@emotion/styled";

export const Title = styled.h1`
  width: 100%;
  height: 7rem;
  line-height: 3rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.ui};
  font-weight: 500;
  font-size: 4rem;
  letter-spacing: 0.25em;

  @media (max-width: 400px) {
    letter-spacing: 0em;
  }
`;

