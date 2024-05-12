import styled from "@emotion/styled";
import { PropsWithChildren } from "react";

export type Props = PropsWithChildren<{
  width?: string;
  align?: "start" | "end" | "left" | "right" | "center" | "justify" | "match-parent"
}>;

export const Text = styled.p<Props>`
  display: block;
  text-align: ${({ align }) => align ?? "center"};
  font-size: 2.6rem;

  max-width: ${({ width }) => width ?? "initial" };
`