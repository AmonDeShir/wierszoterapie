import * as React from "react"
import { StaticQueryDocument, graphql, useStaticQuery, type HeadFC, type HeadProps, type PageProps } from "gatsby"
import { Page } from "../components/page/page"
import { SEO } from "../components/seo/seo"
import { Book } from "../parts/book";
import { NavBar } from "../components/nav/nav";
import { AboutMe } from "../parts/about-me";
import { Poems } from "../parts/poems";
import { Contact } from "../parts/contact";

const pages: [string, string, number][] = [
  ["KSIĄŻKA", "#wierszoterapie", 0],
  ["O MNIE", "#about-me", 1],
  ["WIERSZE", "#poems", 2],
  ["KONTAKT", "#contact", 3],
];

const IndexPage: React.FC<PageProps<DataType>> = () => {
  const [page, setPage] = React.useState(0);

  const data = useStaticQuery<DataType>(graphql`
    query SWAPI {
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
  `);
    
  const handlePageChange = (page: number) => {
    setPage(page)
  };
  
  console.log("data", data);

  return (
    <Page>
      <NavBar selected={pages[page][1]} pages={pages} goToPage={handlePageChange} />
      <Book />
      <AboutMe />
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
      description=""
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
