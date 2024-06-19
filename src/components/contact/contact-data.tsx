import React from "react";
import { Title, IconsFlex, Line, Lines, Text  } from "./contact-data.styles";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";

type EmailPhoneProps = {
  email: string,
}

export const EmailPhone = ({ email }: EmailPhoneProps) => (
  <>
    <Title>Kontakt</Title>
    <Lines>
      <Line>
        <Text bold>
          Email:
        </Text>
        <Text>
          { email }
        </Text>
      </Line>
    </Lines>
  </>
);

type SocialMediaProps = {
  size: string
  facebook: string,
  instagram: string,
}

export const SocialMedia = ({facebook, instagram, size}: SocialMediaProps) => (
  <IconsFlex>
    <a target="_blank" href={facebook}><FaFacebookSquare color="#333" size={size} /> </a>
    <a target="_blank" href={instagram}><FaInstagramSquare color="#333" size={size} /> </a>
  </IconsFlex>
);