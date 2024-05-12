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

export const TextContainer = styled.div<{ imageWidth?: string }>`
  --image-width: ${({ imageWidth }) => imageWidth ?? "50rem"};

  display: flex;
  justify-content: center;
  align-items: center;
  max-width: min(100rem, calc(80vw - var(--image-width)));
`

type ImageContainerProps = {
  width?: string;
  height?: string;
}

export const ImageContainer = styled.div<ImageContainerProps>`
  width: ${({width}) => width ?? "80%"};
  height: ${({height}) => height ?? "80%"};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 5rem 0 0;
`

type ImageProps = {
  src: string,
  width?: string;
  height?: string;
  imageAlign?: "center" | "top" | "bottom"
}

export const Image = styled.div<ImageProps>`
  width: 100%;
  height: 100%;
  background-image: ${({ src }) => `url("${src}")`};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: ${({ imageAlign }) => imageAlign ?? "center"} center;
`;