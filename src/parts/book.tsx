import { Button } from "../components/button/button";
import type { BookData } from "../data/books";

type BookProps = {
  book: BookData;
  id?: string;
};

export const Book = ({ book, id = "wierszoterapie" }: BookProps) => {
  const { Description } = book;
  const titleId = id === "wierszoterapie" ? "book-title" : `${id}-title`;
  const Heading = id === "wierszoterapie" ? "h1" : "h2";

  return (
    <section
      className={`scroll-mt-0 lg:scroll-mt-18 ${id === "wierszoterapie" ? "py-12 lg:pt-24 lg:pb-16" : "py-8 lg:py-12"}`}
      id={id}
      aria-labelledby={titleId}
    >
      <div className="site-container grid items-start gap-8 lg:grid-cols-2 lg:gap-6">
        <img
          className="mx-auto h-auto w-1/2 max-w-lg lg:w-full"
          src={book.image}
          width={book.imageWidth}
          height={book.imageHeight}
          alt={`Okładka książki „${book.title}” Patrycji Purgał`}
        />
        <div className="min-w-0 font-text text-sm">
          <p className="font-bold">Patrycja Purgał</p>
          <Heading
            id={titleId}
            tabIndex={-1}
            className="mt-1.5 font-ui text-xl font-medium text-primary outline-none"
          >
            {book.title}
          </Heading>
          <div className="space-y-5 py-3 text-justify">
            <Description />
          </div>
          <Button bigger href={`/order?book=${book.id}`} className="ml-0!">
            Zamów książkę z dedykacją
          </Button>
        </div>
      </div>
    </section>
  );
};
