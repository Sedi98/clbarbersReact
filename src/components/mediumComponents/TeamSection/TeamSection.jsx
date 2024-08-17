import React from "react";
import SectionHeader from "../../basicComponents/SectionHeader/SectionHeader";
import TeamCard from "../../basicComponents/TeamCard/TeamCard";
import style from "./teamSection.module.css";

function TeamSection() {
  return (
    <section className={style.teamSection}>
      <SectionHeader
        center={true}
        littleText={"Professional Teams"}
        bigText={"Our award winner hair cut exparts for you"}
      />

      <div>
        <TeamCard />
      </div>
    </section>
  );
}

export default TeamSection;
