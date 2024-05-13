import * as React from "react"
import { Link, HeadFC, PageProps } from "gatsby"
import { Page } from "../components/page/page"
import { NavBar } from "../components/nav/nav"
import { Title } from "../components/title/title";
import { Text } from "../components/text/text";
import { Part } from "../components/part/part";

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

export const Head: HeadFC = () => <title>Not found</title>
