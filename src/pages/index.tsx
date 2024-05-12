import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { NavBar } from "../components/nav/nav"
import { Page } from "../components/page/page"
import { Book } from "../parts/book"
import { Poems } from "../parts/poems"
import { Contact } from "../parts/contact"
import { AboutMe } from "../parts/about-me"
import { WithNavigation } from "../components/with-nav/with-nav"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Page>
        <WithNavigation
          active={location.hash ?? "#book"}
          pages={[
            ["KSIĄŻKA", "#book"],
            ["WIERSZE", "#poems"],
            ["KONTAKT", "#contact"],
            ["O MNIE", "#about-me"],
          ]}
        >
          <Book hasNav />
        </WithNavigation>

      <AboutMe /> 
      <Poems />
      <Contact />
    </Page>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
