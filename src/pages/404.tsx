import * as React from "react";
import { PageProps, HeadProps, graphql } from "gatsby";
import { Page } from "../components/page/page";
import { SEO } from "../components/seo/seo";
import { NavBar } from "../components/nav/nav";

import { homeLinks as pages } from "../data/navigation";

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Page>
      <NavBar selected="" pages={pages} useLinks />
      <div className="mb-auto py-3 text-justify text-sm flex h-full min-h-screen w-full flex-col items-center justify-center">
        404 Nie odnaleziono strony
      </div>
    </Page>
  );
};

export default NotFoundPage;

interface DataType {
  site: {
    siteMetadata: {
      siteUrl: string;
    };
  };
}

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
