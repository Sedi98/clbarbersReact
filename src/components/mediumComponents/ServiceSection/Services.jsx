import React from "react";
import style from "./services.module.css";

import SectionHeader from "../../basicComponents/SectionHeader/SectionHeader";
import ServiceCard from "../../basicComponents/ServiceCard/ServiceCard";

function Services() {
  return (
    <section className={style.services}>
      <SectionHeader
        center={true}
        littleText={"Professional Services"}
        bigText={"Our Best services that we offering to you"}
      />
      <div className={style.servicesCardContainer}>
        <ServiceCard
          title={"Saç kəsimi"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut efficitur ante. Donec dapibus dictum"
          }
        />
        <ServiceCard
          title={"Qısa və uzun saçların kataloq üzrə kəsilməsi"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut efficitur ante. Donec dapibus dictum"
          }
        />
        <ServiceCard
          title={"Uşaq saçlarına naxışların vurulması"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut efficitur ante. Donec dapibus dictum"
          }
        />
        <ServiceCard
          title={"Saçların masajla yuyulması"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut efficitur ante. Donec dapibus dictum"
          }
        />
        <ServiceCard
          title={"Artıq tüklərin lipuçka üsulu ilə təmizlənməsi"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut efficitur ante. Donec dapibus dictum"
          }
        />
        <ServiceCard
          title={"Təbii bitkilərdən hazırlanmış üz üçün masqalar"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut efficitur ante. Donec dapibus dictum"
          }
        />
        <ServiceCard
          title={"Ağarmış saçların qaraldılması"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut efficitur ante. Donec dapibus dictum"
          }
        />
        <ServiceCard
          title={
            "Xususi günlər üçün seyrək saçların müvəqqəti qalınlaşdırılması"
          }
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut efficitur ante. Donec dapibus dictum"
          }
        />
        <ServiceCard
          title={"Üz dərisinə qulluq (çiska)"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut efficitur ante. Donec dapibus dictum"
          }
        />
        <ServiceCard
          title={"Perma(buruq saçlar)"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut efficitur ante. Donec dapibus dictum"
          }
        />
        <ServiceCard
          title={"Keratin"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut efficitur ante. Donec dapibus dictum"
          }
        />
      </div>
    </section>
  );
}

export default Services;
