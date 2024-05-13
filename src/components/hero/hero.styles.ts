import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 10rem;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 1000px) {
    flex-direction: column;
  }

  @media (max-width: 500px) or (max-height: 500px) {
    flex-direction: column;
    padding: 0 5rem;
  }

  @media (max-width: 400px) or (max-height: 400px) {
    flex-direction: column;
    padding: 0 0rem;
  }
`;

export const TextContainer = styled.div<{ imageWidth?: string }>`
  --image-width: ${({ imageWidth }) => imageWidth ?? "50rem"};

  display: flex;
  justify-content: center;
  align-items: center;
  max-width: min(100rem, calc(80vw - var(--image-width)));
  padding-bottom: 2rem;

  @media (max-width: 1000px) or (max-height: 500px) {
    max-width: 90vw;
  }
`

type ImageContainerProps = {
  width?: string;
  height?: string;
}

export const ImageContainer = styled.div<ImageContainerProps>`
  width: 50vh;
  width: 50svh;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 5rem 0 0;

  @media (max-width: 1000px) or (max-height: 500px) {
    padding: 0 0 4rem 0;
    min-height: 60rem;
    width: 100%;
  }
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
  position: relative;
  z-index: -1;
  background-position: ${({ imageAlign }) => imageAlign ?? "center"} center;
`;