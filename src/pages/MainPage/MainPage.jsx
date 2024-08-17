import React from "react";
import Navbar from "../../components/mediumComponents/Navbar/Navbar";
import Hero from "../../components/mediumComponents/HeroSection/Hero";
import About from "../../components/mediumComponents/AboutSection/About";
import Services from "../../components/mediumComponents/ServiceSection/Services";
import TeamSection from "../../components/mediumComponents/TeamSection/TeamSection";
import PhotoSection from "../../components/mediumComponents/PhotoSection/PhotoSection";
import FooterSection from "../../components/mediumComponents/FooterSection/FooterSection";

function MainPage() {
  return (
    <>
      <Navbar />
      <Hero
        littleText={"with patrick potter"}
        bigtext={"our hair style make your look elegance"}
      />
      <About
        sectionLittleText={"about our company"}
        title={"52 Years Of Experience In Hair cut!"}
        regularText={
          "Brook presents your services with flexible, convenient and cdpoe layous. You can select your favorite layouts & elements for cularts with unlimited ustomization possibilities. Pixel-perf replication of the designers is intended"
        }
        boldText={
          " Brook presents your services with flexible, convefnient and entirely manipurpose layouts. You can select your favorite."
        }
      />
      <Services sectionLittleText={"Professional Services"} sectionBigText={"Our Best services that we offering to you"} />
      <TeamSection sectionLittleText={"Professional Teams"} sectionBigText={"Our award winner hair cut exparts for you"} />
      <PhotoSection />
      <FooterSection phoneNumber={"+994 51 123 45 67"} bottomText={'Copyright © 2024 CL Barbers. All rights reserved'} />
    </>
  );
}

export default MainPage;
