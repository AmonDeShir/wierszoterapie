import styled from "@emotion/styled";
import { PropsWithChildren, useLayoutEffect, useRef } from "react";

export type PartProps = {
  hasNav?: boolean,
  id?: string,
}

export const PartContainer = styled.section<PartProps>`
  width: 100%;
  height: 100%;
  min-height: ${({ hasNav }) => hasNav ? "calc(100vh - 14rem)" : "100vh"};
  min-height: ${({ hasNav }) => hasNav ? "calc(100svh - 14rem)" : "100svh"};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Part = ({hasNav, id, children}: PropsWithChildren<PartProps>) => {  
  return (
    <PartContainer id={id} hasNav={hasNav}>
      {children}
    </PartContainer>
  );
}