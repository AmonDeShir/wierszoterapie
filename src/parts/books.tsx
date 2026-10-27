import type { MouseEvent } from "react";
import { books, type BookData, type BookId } from "../data/books";
import { Book } from "./book";

type BooksProps = {
  selectedBook: BookData | null;
  onSelect: (id: BookId | null) => void;
};

export const Books = ({ selectedBook, onSelect }: BooksProps) => {
  const selectBook = (event: MouseEvent<HTMLAnchorElement>, id: BookId | null) => {
    if (
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    event.preventDefault();
    onSelect(id);
  };

  return (
    <section
      id="books"
      aria-label="Książki Patrycji Purgał"
      className={`scroll-mt-0 py-12 lg:scroll-mt-18 lg:py-16 ${selectedBook ? "" : "flex min-h-svh items-center lg:min-h-[calc(100svh-var(--spacing)*18)]"}`}
    >
      {selectedBook ? (
        <>
          <div className="site-container">
            <a
              href="/#books"
              onClick={(event) => selectBook(event, null)}
              className="group relative inline-block font-ui text-sm text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              <span aria-hidden="true" className="invisible">Wszystkie książki</span>
              <span className="absolute top-0 left-0 whitespace-nowrap text-sm underline underline-offset-4 transition-[font-size] duration-250 ease-out group-hover:text-base group-active:text-xs motion-reduce:transition-none">
                Wszystkie książki
              </span>
            </a>
          </div>
          <Book book={selectedBook} id="selected-book" />
        </>
      ) : (
        <div className="site-container grid gap-20 sm:grid-cols-2 sm:gap-12 lg:gap-24 2xl:gap-32">
          {books.map((book) => (
            <a
              key={book.id}
              href={`?book=${book.id}#books`}
              onClick={(event) => selectBook(event, book.id)}
              className="flex flex-col items-center text-center no-underline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-primary"
            >
              <img
                src={book.image}
                width={book.imageWidth}
                height={book.imageHeight}
                alt={`Okładka książki „${book.title}”`}
                loading="lazy"
                className="h-auto w-full max-w-72 object-contain"
              />
              <h2 className="mt-6 font-ui text-xl font-medium text-primary">
                {book.title}
              </h2>
              <p className="mt-4 max-w-xs text-base leading-relaxed">
                {book.summary}
              </p>
              <span className="group/book-link relative mt-6 inline-block font-ui text-sm text-primary">
                <span aria-hidden="true" className="invisible">Zobacz książkę</span>
                <span className="absolute top-0 left-0 whitespace-nowrap text-sm underline underline-offset-4 transition-[font-size] duration-250 ease-out group-hover/book-link:text-base group-active/book-link:text-xs motion-reduce:transition-none">
                  Zobacz książkę
                </span>
              </span>
            </a>
          ))}
        </div>
      )}
    </section>
  );
};
