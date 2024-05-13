import styled from "@emotion/styled";
import gsap from "gsap";
import { PropsWithChildren, useLayoutEffect, useRef } from "react";

export type PartProps = {
  hasNav?: boolean
}

export const PartContainer = styled.section<PartProps>`
  width: 100%;
  height: 100%;
  min-height: ${({ hasNav }) => hasNav ? "calc(100vh - 14rem)" : "100vh"};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Part = ({hasNav, children}: PropsWithChildren<PartProps>) => {  
  return (
    <PartContainer hasNav={hasNav}>
      {children}
    </PartContainer>
  );
}