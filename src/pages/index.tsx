import * as React from "react"
import { graphql, type HeadFC, type HeadProps, type PageProps } from "gatsby"
import { NavBar } from "../components/nav/nav"
import { Page } from "../components/page/page"
import { Book } from "../parts/book"
import { Poems } from "../parts/poems"
import { Contact } from "../parts/contact"
import { AboutMe } from "../parts/about-me"
import { WithNavigation } from "../components/with-nav/with-nav"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all"
import ReactPageScroller from 'react-page-scroller';
import { SEO } from "../components/seo/seo"

gsap.registerPlugin(ScrollTrigger) 

const pages: [string, string, number][] = [
  ["KSIĄŻKA", "#wierszoterapie", 0],
  ["WIERSZE", "#poems", 2],
  ["KONTAKT", "#contact", 3],
  ["O MNIE", "#about-me", 1],
];

const IndexPage: React.FC<PageProps> = () => {
  const [page, setPage] = React.useState(0);

  const handlePageChange = (page: number) => {
    setPage(page)
  };

  return (

    <Page>
      <ReactPageScroller
        pageOnChange={handlePageChange}
        customPageNumber={page}
        containerHeight={"100lvh"}
        containerWidth={"100lvw"}
      >
          <WithNavigation selected={"#wierszoterapie"} pages={pages} id="wierszoterapie" goToPage={setPage}>
            <Book hasNav />
          </WithNavigation>

          <WithNavigation selected={"#about-me"} pages={pages} id="about-me" goToPage={setPage}>
            <AboutMe hasNav />
          </WithNavigation>

          <WithNavigation selected={"#poems"} pages={pages} id="poems" goToPage={setPage}>
            <Poems hasNav />
          </WithNavigation>

          <WithNavigation selected={"#contact"} pages={pages} id="contact" goToPage={setPage}>
            <Contact hasNav />
          </WithNavigation>
        </ReactPageScroller>
    </Page>
  )
}

export default IndexPage

interface DataType {
  site: {
    siteMetadata: {
      siteUrl: string;
    };
  };
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
  }
`;