import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { NavBar } from "../components/nav/nav"
import { Page } from "../components/page/page"
import { Book } from "../parts/book"
import { Poems } from "../parts/poems"
import { Contact } from "../parts/contact"
import { AboutMe } from "../parts/about-me"
import { WithNavigation } from "../components/with-nav/with-nav"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all"

gsap.registerPlugin(ScrollTrigger) 

const pages: [string, string, number][] = [
  ["KSIĄŻKA", "#wierszoterapie", 0],
  ["WIERSZE", "#poems", 2],
  ["KONTAKT", "#contact", 3],
  ["O MNIE", "#about-me", 1],
];

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Page>
        <WithNavigation selected={"#wierszoterapie"} pages={pages} id="wierszoterapie">
          <Book hasNav />
        </WithNavigation>

        <WithNavigation selected={"#about-me"} pages={pages} id="about-me">
          <AboutMe hasNav />
        </WithNavigation>

        <WithNavigation selected={"#poems"} pages={pages} id="poems">
          <Poems hasNav />
        </WithNavigation>

        <WithNavigation selected={"#contact"} pages={pages} id="contact">
          <Contact hasNav />
        </WithNavigation>
    </Page>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
