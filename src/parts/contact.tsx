import { PropsWithChildren } from "react";
import { Part, PartProps } from "../components/part/part";
import { EmailPhone, SocialMedia } from "../components/contact/contact-data";
import { WithTitle } from "../components/with-title/with-title";
import { Footer } from "../components/footer/footer";

export const Contact = ({children, hasNav }: PropsWithChildren<PartProps>) => (
  <Part hasNav={hasNav}>
    {children}
    
    <EmailPhone
      email="wierszoterapie@gmail.com"
    />

    <WithTitle title="Social Media">
      <SocialMedia
        size="15rem"
        facebook="https://www.facebook.com/profile.php?id=61558898596972"
      />
    </WithTitle>
    
    <Footer>
     {`Copyright© Patrycja Purgał-Wilińska, 2024`.toUpperCase()}
     <p style={{display: "block"}} >Created by <a style={{ color: "#fff", textDecoration: "none" }} href="https://www.purgal.xyz">Dominik Purgał</a></p>
    </Footer>
  </Part>
);