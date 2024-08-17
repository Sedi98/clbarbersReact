import React from "react";
import SectionHeader from "../../basicComponents/SectionHeader/SectionHeader";
import TeamCard from "../../basicComponents/TeamCard/TeamCard";
import style from "./teamSection.module.css";

function TeamSection({sectionLittleText,sectionBigText}) {
  return (
    <section className={style.teamSection}>
      <SectionHeader
        center={true}
        littleText={sectionLittleText}
        bigText={sectionBigText}
      />

      <div>
        <TeamCard />
      </div>
    </section>
  );
}

export default TeamSection;
