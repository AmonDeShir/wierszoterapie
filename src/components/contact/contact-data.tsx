import { WithTitle } from "../with-title/with-title";
import { IconsFlex, Line, Lines, Text } from "./contact-data.styles";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";

type EmailPhoneProps = {
  email: string,
  phone: string,
}

export const EmailPhone = ({ email, phone }: EmailPhoneProps) => (
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

      <Line>
        <Text bold>
          Phone:
        </Text>
        <Text>
          { phone }
        </Text>
      </Line>
    </Lines>
  </WithTitle>
);

type SocialMediaProps = {
  size: string
  facebook: string,
  instagram: string,
}

export const SocialMedia = ({facebook, instagram, size}: SocialMediaProps) => (
  <IconsFlex>
    <a  href={facebook}><FaFacebookSquare color="#333" size={size} /> </a>
    <a  href={instagram}><FaInstagramSquare color="#333" size={size} /></a>
  </IconsFlex>
);