import styled from "@emotion/styled";

export type PartProps = {
  hasNav?: boolean
}

export const Part = styled.section<PartProps>`
  width: 100%;
  min-height: ${({ hasNav }) => hasNav ? "calc(100vh - 14rem)" : "100vh"};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;