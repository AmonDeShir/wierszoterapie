import * as React from "react"
import { useState } from "react"
import { PageProps, HeadProps, graphql } from "gatsby"
import { Page } from "../components/page/page"
import { SEO } from "../components/seo/seo"
import { NavBar } from "../components/nav/nav"
import styled from "@emotion/styled"
import { SubmitButton } from "../components/button/button"
import { Delivery, PostalAddress } from "../components/delivery/delivery"
import { Address } from "cluster"

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

const ResponseTitle = styled.div`
  display: block;
  font-size: 3.2rem;
  text-align: left;
  font-weight: bold;
`;

const ResponseText = styled.div`
  display: block;
  font-size: 3.2rem;
  text-align: left;
`;

const Input = styled.input`
  display: block;
  border: 0px;
  border-bottom: 1px solid black;
  transition: border-color 0.25s;
  font-size: 3rem;
  padding: 1rem;
  width: 50rem;

  &:hover, &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary}; 
  }
`;

const Select = styled.select`
  display: block;
  border: 0px;
  border-bottom: 1px solid black;
  transition: border-color 0.25s;
  font-size: 3rem;
  padding: 2rem 1rem;
  width: 50rem;
  background-color: transparent;

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

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10rem;
`;

const Response = styled.div`
  padding: 10rem;
  max-width: 800px;
`;



const Line = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 105rem;
`;

const OrderPage: React.FC<PageProps> = () => {
  const [author, setAuthor] = useState<string>("");
  const [paczkomat, setPaczkomat] = useState(false);
  const [address, setAddress] = useState<PostalAddress>();

  const handleGenerate = (address: PostalAddress) => {
    setAddress(address);
  };

  return (
    <Page>
        <NavBar selected="" pages={pages} useLinks />
          <Center>
            <Title>Zamów książkę z dedykacją</Title>
            <Response>
              <ResponseText>Proszę wysłać maila na adres <b>wierszoterapie@gmail.com</b>, z informacją komu wypisać dedykację oraz z preferowany sposób wysyłki wraz z adresem i ewentualnymi uwagami.</ResponseText><br/>
              { !address && <ResponseText>Wypełnij formularz poniżej aby wygenerować odpowiednią treść maila.</ResponseText> }
            </Response>
            
            {!address && (
              <Container>
                <Line>
                  <Label>
                    Komu wpisać dedykację
                    <Input name="author" type="author" id="author" placeholder="Adamowi Kowalskiemu" onInput={(e) => setAuthor(e.currentTarget.value)} />
                  </Label>

                  <Label>
                    Preferowana forma dostawy
                    <Select onInput={(e) => setPaczkomat(e.currentTarget.value === "paczkomat")}>
                      <option selected value="paczka">Paczka</option>
                      <option value="paczkomat">Paczkomat</option>
                    </Select>
                  </Label>
                </Line>

                <Delivery paczkomat={paczkomat} onChange={handleGenerate}></Delivery>
              </Container>
            )}

            {address && (
              <Response>
                <ResponseTitle>
                  Wygenerowana treść maila
                </ResponseTitle>

                <ResponseText>
                  <br/>Dzień dobry, <br/><br/>
                  Uprzejmie prosz o przesłanie książki z dedykacją dla {author}. <br/>
                  Forma dostawy: {address.paczkomat === undefined ? "Przesyłka kurierska" : "Paczkomat"} <br/>
                  Numer Telefonu: +{address.areaCode} {address.phone} <br/>
                  Adresat: {address.name} {address.surname} <br/>
                  { address.paczkomat 
                    ? `Paczkomat: ${address.paczkomat} ${address.city}` 
                    : `Adres: ${address.street} ${address.building}/${address.apartment} ${address.postalCode} ${address.city} ${address.contry}`
                  }
                </ResponseText>
              </Response>
            )}
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