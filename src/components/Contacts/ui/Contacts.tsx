import React from "react";
import { ContactsWrapper, SocialNetworkWrapper } from "../lib/styles";
import Paragraph from "@/shared/Paragraph";
import { SocialIcon } from "react-social-icons";

export const Contacts = () => {
  return (
    <ContactsWrapper>
      <Paragraph text="Меня можно найти здесь" weight={900} size={36} />
      <SocialNetworkWrapper>
        <SocialIcon url="https://t.me/samsyaaa" />
        <SocialIcon url="https://github.com/fazeich" />
        <SocialIcon url="mailto:vladislavchenko@inbox.ru" />
      </SocialNetworkWrapper>
    </ContactsWrapper>
  );
};
