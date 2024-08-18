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
        littleText={"Cəlal Yusifov ilə"}
        bigtext={"Saç stilimiz sizi daha yaraşıqlı edir!"}
      />
      <About
        sectionLittleText={"Haqqımızda"}
        title={"Saç kəsimində illərin təcrübəsi!"}
        regularText={"Biz kişilər üçün mükəmməl saç və saqqal baxımı xidmətləri təklif edirik. Təcrübəli ustalarımız, müasir texnologiyalar və ən son trendlərlə, hər müştəriyə fərdi yanaşma ilə xidmət göstərir. Mağazamız gözəl mühit və keyfiyyətli xidmət ilə seçilir. Saç kəsimindən tutmuş saqqal formalaşdırmağa qədər hər zövqə uyğun xidmətlərimiz mövcuddur. Bizdə hər bir müştəri razılıqla mağazadan ayrılır!" }
        boldText={
          "Bizdə hər bir xidmət xüsusi qayğı ilə göstərilir. Fərdi yanaşma ilə saç və saqqal baxımınızı bizə həvalə edin. Göz oxşayan görünüş üçün sizi gözləyirik!"
        }
      />
      <Services sectionLittleText={"Professional Xidmətlər"} sectionBigText={"Sizə təqdim etdiyimiz peşəkar xidmətlərimiz"} />
      <TeamSection sectionLittleText={"Professional Komanda"} sectionBigText={"Peşəkar saç ustalarımızı sizə təqdim edirik"} />
      <PhotoSection sectionLittleText={"Bizim foto galereyamız"} sectionBigText={"mağazamızdan bəzi şəkillər"} />
      <FooterSection phoneNumber={"+994 51 123 45 67"} bottomText={'Copyright © 2024 CL Barbers. All rights reserved'} />
    </>
  );
}

export default MainPage;
