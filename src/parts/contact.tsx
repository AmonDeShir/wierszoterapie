import { EmailPhone, SocialMedia } from "../components/contact/contact-data";
import { Footer } from "../components/footer/footer";

export const Contact = () => (
  <div
    className="flex min-h-screen scroll-mt-0 flex-col items-center justify-center lg:scroll-mt-18"
    id="contact"
  >
    <div className="site-container mt-auto flex flex-col items-center">
      <EmailPhone email="wierszoterapie@gmail.com" />
    </div>

    <div className="site-container mt-auto">
      <h1 className="block pt-2.5 pb-5 text-center font-text text-xl font-bold text-primary">
        Social Media
      </h1>
      <SocialMedia
        facebook="https://www.facebook.com/profile.php?id=61558898596972"
        instagram="https://www.instagram.com/patrycjapurgal_autorka?igsh=MXg1eWVhdGZqb3ZmMg=="
      />
    </div>

    <Footer className="mt-auto">
      {`Copyright© Patrycja Purgał-Wilińska, 2026`.toUpperCase()}
      <p className="block">
        Created by{" "}
        <a className="text-white no-underline" href="https://www.purgal.xyz">
          Dominik Purgał
        </a>
      </p>
    </Footer>
  </div>
);
