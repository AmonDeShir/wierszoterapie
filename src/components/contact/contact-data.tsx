import React from "react";

import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";

type EmailPhoneProps = {
  email: string;
};

export const EmailPhone = ({ email }: EmailPhoneProps) => (
  <>
    <h1 className="h-9 w-full text-center font-ui text-xl leading-4 font-medium tracking-[0.25em] text-primary max-[400px]:tracking-normal [@media(max-height:400px)]:tracking-normal">
      Kontakt
    </h1>
    <div className="flex flex-col items-start justify-start">
      <div className="flex">
        <div className="font-ui text-sm tracking-[0.25em] max-sm:tracking-normal pr-2 text-primary">
          Email:
        </div>
        <div className="font-ui text-sm tracking-[0.25em] max-sm:tracking-normal pr-0 text-body">
          {email}
        </div>
      </div>
    </div>
  </>
);

type SocialMediaProps = {
  facebook: string;
  instagram: string;
};

export const SocialMedia = ({ facebook, instagram }: SocialMediaProps) => (
  <div className="flex items-center justify-evenly">
    <a target="_blank" href={facebook}>
      <FaFacebookSquare className="size-16 text-dark sm:size-20" />
    </a>
    <a target="_blank" href={instagram}>
      <FaInstagramSquare className="size-16 text-dark sm:size-20" />
    </a>
  </div>
);
