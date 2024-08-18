import React from "react";
import style from "./about.module.css";
import SectionHeader from "../../basicComponents/SectionHeader/SectionHeader";
import Button from "../../basicComponents/Button/Button";
import img from "../../../assets/img/about_img.webp";

function About({sectionLittleText,title,regularText,boldText}) {
  return (
    <section className={style.about}>
      <div className={style.aboutContent}>
        <div className={style.imgContainer}>
          <img className={style.img} src={img} alt="" />
        </div>
        <div className={style.infContainer}>
          <SectionHeader
            center={false}
            littleText={sectionLittleText}
            bigText={title}
          />

          <p className={style.aboutTextRegular}>
          {regularText}
            
          </p>
          <p className={style.aboutTextBold}>
           {
             boldText
           }
          </p>

          <Button />

        </div>
      </div>
    </section>
  );
}

export default About;
