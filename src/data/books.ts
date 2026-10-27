import type { ComponentType } from "react";
import starszaPaniImage from "../images/starsza-pani-na-balkonie.webp";
import wierszoterapieImage from "../images/book.webp";
import { StarszaPaniNaBalkonie } from "./starsza-pani-na-balkonie";
import { Wierszoterapie } from "./wierszoterapie";

export type BookId = "starsza-pani-na-balkonie" | "wierszoterapie";

export type BookData = {
  id: BookId;
  title: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  summary: string;
  Description: ComponentType;
};

export const books: BookData[] = [
  {
    id: "starsza-pani-na-balkonie",
    title: "Starsza Pani na balkonie",
    image: starszaPaniImage,
    imageWidth: 512,
    imageHeight: 724,
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    Description: StarszaPaniNaBalkonie,
  },
  {
    id: "wierszoterapie",
    title: "Wierszoterapie",
    image: wierszoterapieImage,
    imageWidth: 1603,
    imageHeight: 2267,
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    Description: Wierszoterapie,
  },
];

export const getBook = (id: string | null) =>
  books.find((book) => book.id === id) ?? books[0];
