import * as React from "react"
import { PageProps, HeadProps, graphql } from "gatsby"
import { Page } from "../components/page/page"
import { SEO } from "../components/seo/seo";

const pages: [string, string, number][] = [
  ["KSIĄŻKA", "/#wierszoterapie", 0],
  ["O MNIE", "/#about-me", 1],
  ["WIERSZE", "/#poems", 2],
  ["KONTAKT", "/#contact", 3],
];

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Page>
        404
        Nie odnaleziono strony
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