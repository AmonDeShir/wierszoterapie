import * as React from "react"
import { PageProps, HeadProps, graphql } from "gatsby"
import { Page } from "../components/page/page"
import { SEO } from "../components/seo/seo";
import { NavBar } from "../components/nav/nav";
import styled from "@emotion/styled";
import { SubmitButton } from "../components/button/button";

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

const Label = styled.label`
  display: block;
  font-size: 3.2rem;
  text-align: left;
  font-weight: normal;
  cursor: pointer;
`;

const Input = styled.input`
  display: block;
  border: 0px;
  border-bottom: 1px solid black;
  transition: border-color 0.25s;
  font-size: 3rem;
  padding: 1rem;
  margin-bottom: 5rem;
  width: 50rem;

  &:hover, &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary}; 
  }
`;

const Area = styled.textarea`
  display: block;
  border: 0px;
  border-bottom: 1px solid black;
  transition: border-color 0.25s;
  font-size: 3rem;
  padding: 1rem;
  margin-bottom: 5rem;
  width: 50rem;
  height: 20rem;

  &:hover, &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary}; 
  }
`;

const Title = styled.div`
  font-size: 4rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.ui};
  text-align: center;
  padding-bottom: 1rem;
  margin-bottom: auto;
`;

const Center = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

const Form = styled.form`
  padding: 10rem;
`;

const Buttons = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Page>
        <NavBar selected="" pages={pages} useLinks />
          <Center>
            <Title>Zamów książkę z dedykacją</Title>
            <Form method="post" action="/api/wierszoterapie/order">
              <Label>
                Twój adres email
                <Input name="email" type="email" id="email" />
              </Label>

              <Label>
                Uwagi
                <Area name="email" id="email" />
              </Label>

              <Buttons>
                <div>
                  <SubmitButton type="submit">Wyślij</SubmitButton>
                </div>
              </Buttons>
            </Form>
          </Center>
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