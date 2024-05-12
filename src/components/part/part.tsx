import styled from "@emotion/styled";

export type PartProps = {
  hasNav?: boolean
}

export const Part = styled.section<PartProps>`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding-top: ${({ hasNav }) => hasNav ? "14rem" : "0rem"};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;