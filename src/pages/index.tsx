import * as React from "react"
import { graphql, type HeadFC, type HeadProps, type PageProps } from "gatsby"
import { Page } from "../components/page/page"
import { SEO } from "../components/seo/seo"
import { Book } from "../parts/book";
import { NavBar } from "../components/nav/nav";
import { AboutMe } from "../parts/about-me";
import { Poems } from "../parts/poems";
import { Contact } from "../parts/contact";
import { Books } from "../parts/books";
import { books, getBook, type BookData, type BookId } from "../data/books";
import { homeSections as pages } from "../data/navigation";

const IndexPage: React.FC<PageProps<DataType>> = ({ data }) => {
  const [page, setPage] = React.useState(0);
  const [book, setBook] = React.useState<BookData | null>(null);
  const navRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    let frame: number | undefined;

    const updateActiveSection = () => {
      frame = undefined;
      const navHeight = window.matchMedia("(min-width: 1024px)").matches
        ? navRef.current?.getBoundingClientRect().height ?? 0
        : 0;
      const activationLine = navHeight + (window.innerHeight - navHeight) * 0.35;
      let activePage = 0;

      for (const [, selector, index] of pages) {
        const section = document.querySelector(selector);
        if (section && section.getBoundingClientRect().top <= activationLine) {
          activePage = index;
        }
      }

      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 1) {
        activePage = pages[pages.length - 1][2];
      }

      setPage(activePage);
    };

    const scheduleUpdate = () => {
      if (frame === undefined) {
        frame = window.requestAnimationFrame(updateActiveSection);
      }
    };

    scheduleUpdate();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    return () => {
      if (frame !== undefined) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, []);

  React.useEffect(() => {
    const restoreSelection = () => {
      const id = new URLSearchParams(window.location.search).get("book");
      setBook(id ? getBook(id) : null);
      const section = pages.find((item) => item[1] === window.location.hash);
      setPage(section?.[2] ?? 0);
    };

    restoreSelection();
    window.addEventListener("popstate", restoreSelection);
    return () => window.removeEventListener("popstate", restoreSelection);
  }, []);

  const handleBookSelect = (id: BookId | null) => {
    setBook(id ? getBook(id) : null);
    setPage(2);

    const url = new URL(window.location.href);
    if (id) url.searchParams.set("book", id);
    else url.searchParams.delete("book");
    url.hash = "books";
    window.history.pushState({}, "", url);

    window.requestAnimationFrame(() => {
      const target = id
        ? document.getElementById("selected-book-title")
        : document.querySelector<HTMLAnchorElement>("#books a");
      target?.focus({ preventScroll: true });
      document.getElementById("books")?.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "instant"
          : "smooth",
      });
    });
  };

  const handlePageChange = (page: number) => {
    setPage(page)
  };

  return (
    <Page>
      <NavBar ref={navRef} selected={pages[page][1]} pages={pages} goToPage={handlePageChange} />
      <Book book={books[0]} />
      <AboutMe />
      <Books selectedBook={book} onSelect={handleBookSelect} />
      <Poems poems={data.swapi.getPoems} />
      <Contact />
    </Page>
  )
}

export default IndexPage

interface DataType {
  site: {
    siteMetadata: {
      siteUrl: string;
    }
  },
  swapi: {
    getPoems: {
      _id: string,
      title: string,
      author: string,
      text: string,
      date?: string,
      dedication?: string,
    }[]
  }
};

export function Head({ data, location }: HeadProps<DataType>) {
  const siteUrl = data.site.siteMetadata.siteUrl;
  const slug = location.pathname;

  return (
    <SEO
      url={`${siteUrl}${slug}`}
      title="" 
      description="Książki i wiersze Patrycji Purgał. Poznaj tomy Starsza Pani na balkonie i Wierszoterapie oraz zamów książkę z dedykacją autorki."
    >
      <html lang="pl" />
    </SEO>
  );
}

export const query = graphql`
  {
    site {
      siteMetadata {
        siteUrl
      }
    }
    swapi {
      getPoems {
        _id
        title
        author
        date
        dedication
        text
        updated_at
      }
    }
  }
`;
