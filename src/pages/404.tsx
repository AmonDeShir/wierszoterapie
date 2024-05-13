import * as React from "react"
import { Link, HeadFC, PageProps, HeadProps, graphql } from "gatsby"
import { Page } from "../components/page/page"
import { NavBar } from "../components/nav/nav"
import { Title } from "../components/title/title";
import { Text } from "../components/text/text";
import { Part } from "../components/part/part";
import { SEO } from "../components/seo/seo";

const pages: [string, string, number][] = [
  ["KSIĄŻKA", "/#wierszoterapie", 0],
  ["WIERSZE", "/#poems", 2],
  ["KONTAKT", "/#contact", 3],
  ["O MNIE", "/#about-me", 1],
];


const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Page>
      <NavBar pages={pages} selected="" useLinks />
      <Part>
        <Title>404</Title>
        <Text>Nie odnaleziono strony</Text>
      </Part>
    </Page>
  )
}

export default NotFoundPage

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
      title=" - Not found" 
      description="Content not found"
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