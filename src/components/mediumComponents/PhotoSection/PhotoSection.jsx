import React from "react";
import style from "./photoSection.module.css";
import SectionHeader from "../../basicComponents/SectionHeader/SectionHeader";
import imgOne from '../../../assets/img/img1.webp'
import imgTwo from '../../../assets/img/img2.webp'

function PhotoSection({sectionLittleText,sectionBigText}) {
  return (
    <section className={style.section}>
      <SectionHeader
        center={true}
        littleText={sectionLittleText}
        bigText={sectionBigText}
      />
      <div className={style.imgContainer}>
        <div className={style.imgDiv}>
          <img
            src={imgOne}
            
          />
        </div>
        <div className={style.imgDiv}>
          <img
            src={imgTwo}
            
          />
        </div>
      </div>
    </section>
  );
}

export default PhotoSection;
