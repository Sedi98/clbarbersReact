import React from "react";
import style from "./services.module.css";

import SectionHeader from "../../basicComponents/SectionHeader/SectionHeader";
import ServiceCard from "../../basicComponents/ServiceCard/ServiceCard";

function Services({sectionLittleText, sectionBigText}) {
  return (
    <section className={style.services} id="services">
      <SectionHeader
        center={true}
        littleText={sectionLittleText}
        bigText={sectionBigText}
      />
      <div className={style.servicesCardContainer}>
        <ServiceCard
          title={"Saç kəsimi"}
          text={
            ""
          }
        />
        <ServiceCard
          title={"Qısa və uzun saçların kataloq üzrə kəsilməsi"}
          text={
            ""
          }
        />
        <ServiceCard
          title={"Uşaq saçlarına naxışların vurulması"}
          text={
            ""
          }
        />
        <ServiceCard
          title={"Saçların masajla yuyulması"}
          text={
            ""
          }
        />
        <ServiceCard
          title={"Artıq tüklərin lipuçka üsulu ilə təmizlənməsi"}
          text={
            ""
          }
        />
        <ServiceCard
          title={"Təbii bitkilərdən hazırlanmış üz üçün masqalar"}
          text={
            ""
          }
        />
        <ServiceCard
          title={"Ağarmış saçların qaraldılması"}
          text={
            ""
          }
        />
        <ServiceCard
          title={
            "Xususi günlər üçün seyrək saçların müvəqqəti qalınlaşdırılması"
          }
          text={
            ""
          }
        />
        <ServiceCard
          title={"Üz dərisinə qulluq (çiska)"}
          text={
            ""
          }
        />
        <ServiceCard
          title={"Perma(buruq saçlar)"}
          text={
            ""
          }
        />
        <ServiceCard
          title={"Keratin"}
          text={
            ""
          }
        />
      </div>
    </section>
  );
}

export default Services;
