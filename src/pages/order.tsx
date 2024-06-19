import * as React from "react"
import { PageProps, HeadProps, graphql } from "gatsby"
import { Page } from "../components/page/page"
import { SEO } from "../components/seo/seo";
import { NavBar } from "../components/nav/nav";
import styled from "@emotion/styled";

const pages: [string, string, number][] = [
  ["KSIĄŻKA", "/#wierszoterapie", 0],
  ["O MNIE", "/#about-me", 1],
  ["WIERSZE", "/#poems", 2],
  ["KONTAKT", "/#contact", 3],
];

const Text = styled.div`
  text-align: justify;
  margin-bottom: auto;
  font-size: 2.7rem;
  padding: 2.5rem 0;
  width: 100%;
  height: 100%;
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Page>
        <NavBar selected="" pages={pages} useLinks />
        <Text>
          Tu będzie formularz zamówieniowy książki
        </Text>
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
      title=" - Order" 
      description="Order a book"
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