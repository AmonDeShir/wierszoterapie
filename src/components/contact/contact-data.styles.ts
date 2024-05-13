import styled from "@emotion/styled";

export const Lines = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Line = styled.div`
  display: flex;
`;

export const Text = styled.div<{ bold?: boolean }>`
  font-family: ${({ theme }) => theme.fonts.ui};
  font-size: 2.6rem;
  color: ${({ theme, bold }) => bold ? theme.colors.primary : theme.colors.text };
  color: ${({ bold }) => bold ? "bold" : 500 };
  padding-right: ${({ bold }) => bold ? "0.5em" : 0 };
  letter-spacing: 0.25em;
`;

export const IconsFlex = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;