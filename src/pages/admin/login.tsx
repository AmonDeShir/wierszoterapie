import * as React from "react";
import { useState } from "react";
import { PageProps, HeadProps, graphql } from "gatsby";
import { Page } from "../../components/page/page";
import { SEO } from "../../components/seo/seo";

import { SubmitButton } from "../../components/button/button";
import { API_URL, request } from "../../api";

const OrderPage: React.FC<PageProps> = () => {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    request(`/auth/login`, "post", { email, password }, false).then(
      ({ ok }) => {
        if (ok) {
          window.location.pathname = "/admin";
        } else {
          setError("Błędny login lub hasło!");
        }
      },
    );
  };

  return (
    <Page>
      <div className="flex h-full w-full flex-col items-center justify-start pt-2.5">
        <div className="mb-auto pb-1.5 text-center font-ui text-xl font-medium text-primary">
          Zaloguj się
        </div>
        <form className="w-full max-w-sm p-4 sm:p-8" onSubmit={handleLogin}>
          <label className="block cursor-pointer text-left text-base font-normal">
            Email
            <input
              className="block border-0 border-b border-solid border-black p-1.5 text-base [transition:border-color_0.25s] hover:border-primary hover:outline-none focus:border-primary focus:outline-none mb-6 w-full"
              name="email"
              autoComplete="login"
              type="email"
              id="email"
              value={email}
              onInput={(e) => setEmail(e.currentTarget.value)}
            />
          </label>

          <label className="block cursor-pointer text-left text-base font-normal">
            Hasło
            <input
              className="block border-0 border-b border-solid border-black p-1.5 text-base [transition:border-color_0.25s] hover:border-primary hover:outline-none focus:border-primary focus:outline-none mb-6 w-full"
              name="password"
              autoComplete="current-password"
              type="password"
              id="password"
              value={password}
              onInput={(e) => setPassword(e.currentTarget.value)}
            />
          </label>

          <div className="flex w-full items-center justify-center">
            <div>
              <SubmitButton type="submit">Zaloguj</SubmitButton>
            </div>
          </div>

          <div className="py-3 text-right font-ui text-sm text-[#bb0000] empty:hidden">
            {error}
          </div>
        </form>
      </div>
    </Page>
  );
};

export default OrderPage;

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
    <SEO url={`${siteUrl}${slug}`} title=" - Order" description="Order a book">
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
