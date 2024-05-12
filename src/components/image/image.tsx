import styled from "@emotion/styled";

type ImageProps = {
  width?: string;
  height?: string;
}

export const Image = styled.img<ImageProps>`
  --width: ${({width}) => width ?? "44rem"};
  --height: ${({height}) => height ?? "62rem"};

  width: calc(var(--width) / 2);
  height: calc(var(--height) / 2);

  @media (min-width: 768px) {
    width: calc(var(--width) / 1.5);
    height: calc(var(--height) / 1.5);
  }

  @media (min-width: 1024px) {
    width: calc(var(--width) / 1.25);
    height: calc(var(--height) / 1.25);
  }

  @media (min-width: 1536px) {
    width: var(--width);
    height: var(--height);
  }
  
`
