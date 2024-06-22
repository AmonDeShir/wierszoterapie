import * as React from "react"
import { useState } from "react";
import { PageProps, HeadProps, graphql } from "gatsby"
import { Page } from "../../components/page/page"
import { SEO } from "../../components/seo/seo";
import styled from "@emotion/styled";
import { SubmitButton } from "../../components/button/button";
import { API_URL, request } from "../../api";

const Error = styled.div`
  text-align: right;
  font-size: 2.7rem;
  padding: 2.5rem 0;
  color: #bb0000;
  font-family: ${({theme}) => theme.fonts.ui};

  &:empty {
    display: none;
  }
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
  padding-top: 2rem;
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

const OrderPage: React.FC<PageProps> = () => {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    request(`/auth/login`, "post", { email, password }, false)
      .then(({ ok }) => {
        if (ok) {
          window.location.pathname = "/admin";
        }
        else {
          setError("Błędny login lub hasło!")
        }
      });
  }

  return (
    <Page>
      <Center>
        <Title>Zaloguj się</Title>
        <Form onSubmit={handleLogin}>
          <Label>
            Email
            <Input name="email" autoComplete="login" type="email" id="email" value={email} onInput={(e) => setEmail(e.currentTarget.value)} />
          </Label>

          <Label>
            Hasło
            <Input name="password" autoComplete="current-password" type="password" id="password" value={password} onInput={(e) => setPassword(e.currentTarget.value)} />
          </Label>

          <Buttons>
            <div>
              <SubmitButton type="submit">Zaloguj</SubmitButton>
            </div>
          </Buttons>

          <Error>{error}</Error>
        </Form>
      </Center>
    </Page>
  )
}

export default OrderPage

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