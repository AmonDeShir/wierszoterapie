import { PropsWithChildren } from "react";
import { Part, PartProps } from "../components/part/part";
import { EmailPhone, SocialMedia } from "../components/contact/contact-data";
import { WithTitle } from "../components/with-title/with-title";
import { Footer } from "../components/footer/footer";

export const Contact = ({children, hasNav }: PropsWithChildren<PartProps>) => (
  <Part hasNav={hasNav}>
    {children}
    
    <EmailPhone
      phone="+48 882 104 742"
      email="wierszoterapie@gmail.com"
    />

    <WithTitle title="Social Media">
      <SocialMedia
        size="15rem"
        facebook="https://www.facebook.com/profile.php?id=61558898596972"
      />
    </WithTitle>
    
    <Footer>
     {`Copyright© Patrycja Purgał-Wilińska, 2024`.toUpperCase()} <br/>
     Created by Dominik Purgał 
    </Footer>
  </Part>
);