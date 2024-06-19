import { EmailPhone, SocialMedia } from "../components/contact/contact-data";
import { Footer } from "../components/footer/footer";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;

  @media (max-width: 1000px) {
    padding: 0px;
  }
`;

const Title = styled.h1`
  display: block;
  text-align: left;
  font-weight: bold;
  text-align: center;
  font-size: 4rem;
  padding-bottom: 4rem;
  padding-top: 2rem;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.text};
`;

const TopAuto = styled.div`
  margin-top: auto;
`;

const TopAutoFooter = styled(Footer)`
  margin-top: auto;
`;

export const Contact = () => (
  <Container id="contact">
    <TopAuto>
      <EmailPhone
        email="wierszoterapie@gmail.com"
      />
    </TopAuto>

    <TopAuto>
      <Title>Social Media</Title>
      <SocialMedia
        size="15rem"
        facebook="https://www.facebook.com/profile.php?id=61558898596972"
        instagram="https://www.instagram.com/patrycjapurgal_autorka?igsh=MXg1eWVhdGZqb3ZmMg=="
      />
    </TopAuto>

    <TopAutoFooter>
      {`Copyright© Patrycja Purgał-Wilińska, 2024`.toUpperCase()}
      <p style={{display: "block"}} >Created by <a style={{ color: "#fff", textDecoration: "none" }} href="https://www.purgal.xyz">Dominik Purgał</a></p>
    </TopAutoFooter>
  </Container>
);