import React from "react";
import style from "./about.module.css";
import SectionHeader from "../../basicComponents/SectionHeader/SectionHeader";
import Button from "../../basicComponents/Button/Button";
import img from "../../../assets/img/about_img.webp";

function About() {
  return (
    <section className={style.about}>
      <div className={style.aboutContent}>
        <div className={style.imgContainer}>
          <img className={style.img} src={img} alt="" />
        </div>
        <div className="infContainer">
          <SectionHeader
            center={false}
            littleText={"About Our company"}
            bigText={"52 Years Of Experience In Hair cut!"}
          />

          <p className={style.aboutTextRegular}>
            {" "}
            Brook presents your services with flexible, convenient and cdpoe
            layouts. You can select your favorite layouts & elements for cular
            ts with unlimited ustomization possibilities. Pixel-perfreplication
            of the designers is intended.
          </p>
          <p className={style.aboutTextBold}>
            Brook presents your services with flexible, convefnient and ent
            anipurpose layouts. You can select your favorite.
          </p>

          <Button />

        </div>
      </div>
    </section>
  );
}

export default About;
