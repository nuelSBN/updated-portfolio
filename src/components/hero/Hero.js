import React from "react";
import profile from "../../assets/profile.png";

import {
  HeroBox,
  HeroBtn,
  HeroContainer,
  HeroImg,
  HeroTextLg,
  HeroTextMd,
} from "./hero.styles";

export default function Hero() {
  return (
    <HeroContainer>
      <HeroBox>
        <HeroImg src={profile} alt="Emmanuel Igwenagu" />
      </HeroBox>
      <HeroBox>
        <div>
          <HeroTextMd>Hello! 👋, I'm Emmanuel Igwenagu</HeroTextMd>
          <HeroTextLg>MERN STACK ENGINEER</HeroTextLg>
          <HeroBox variant="outline">
            <HeroBtn
              href="https://wa.me/2348130927634"
              rel="noreferrer"
              target={"_blank"}
            >
              whatsapp
            </HeroBtn>
            <HeroBtn
              href="https://github.com/nuelSBN"
              rel="noreferrer"
              target={"_blank"}
            >
              github
            </HeroBtn>
          </HeroBox>
        </div>
      </HeroBox>
    </HeroContainer>
  );
}
