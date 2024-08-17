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
      <Hero />
      <About />
      <Services />
      <TeamSection />
      <PhotoSection />
      <FooterSection />
    </>
  );
}

export default MainPage;
