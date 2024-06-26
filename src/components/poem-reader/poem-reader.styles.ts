import styled from "@emotion/styled";
import { PropsWithChildren } from "react";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

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

export const PoemContainer = styled.article<{ noAbsolute?: boolean }>`
  position: ${({noAbsolute}) => noAbsolute ? "static" : "absolute"};
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: ${({noAbsolute}) => noAbsolute ? "1" : "-2"};
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

  display: block;

  @media (max-width: 300px) {
    width: 2rem;
    height: 2rem;
  }
`;

export const TextContainer = styled.div`
  position: relative;
  overflow-y: auto;
`;

type TextProps = PropsWithChildren<{
  width?: string;
  align?: "start" | "end" | "left" | "right" | "center" | "justify" | "match-parent"
}>;

export const Text = styled.p<TextProps>`
  display: block;
  text-align: ${({ align }) => align ?? "center"};
  font-size: 2.6rem;
  max-width: ${({ width }) => width ?? "initial" };
  white-space: pre-line;
`