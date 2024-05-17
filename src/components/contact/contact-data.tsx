import { WithTitle } from "../with-title/with-title";
import { IconsFlex, Line, Lines, Text } from "./contact-data.styles";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";

type EmailPhoneProps = {
  email: string,
}

export const EmailPhone = ({ email }: EmailPhoneProps) => (
  <WithTitle title="Kontakt">
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
  </WithTitle>
);

type SocialMediaProps = {
  size: string
  facebook: string,
}

export const SocialMedia = ({facebook, size}: SocialMediaProps) => (
  <IconsFlex>
    <a  href={facebook}><FaFacebookSquare color="#333" size={size} /> </a>
  </IconsFlex>
);