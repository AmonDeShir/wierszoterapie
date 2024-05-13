import { PropsWithChildren } from "react";
import { Part, PartProps } from "../components/part/part";
import { Title } from "../components/title/title";
import { EmailPhone, SocialMedia } from "../components/contact/contact-data";
import { WithTitle } from "../components/with-title/with-title";

export const Contact = ({children, hasNav }: PropsWithChildren<PartProps>) => (
  <Part id="contact" hasNav={hasNav}>
    {children}
    
    <EmailPhone
      phone="+48 882 104 742"
      email="kontakt@patrycjapurgal.pl"
    />

    <WithTitle title="Social Media">
      <SocialMedia
        size="30rem"
        facebook="facebook.com"
        instagram="instagram.com"
      />
    </WithTitle>
  </Part>
);