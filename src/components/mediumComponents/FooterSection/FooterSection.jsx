import React from "react";
import style from "./footerSection.module.css";
import logo from "../../../assets/img/cl_logo.png";

function FooterSection({phoneNumber, bottomText}) {
  return (
    <section className={style.footer} id="contact">
      <div className={style.footerContent}>
        <div className={style.footerLeft}>
          <div className={style.logo}>
            <img src={logo} className={style.logoImg} />
          </div>
          <p className={style.logoText}>CL Barbers</p>
          <h4 onClick={() => window.open("tel:" + phoneNumber)} className={style.logoTextH4}>{phoneNumber}</h4>
        </div>
        <div className={style.footerMid}>
          <p p className={style.footerTitle}>Keçidlər</p>
          <a href="#" className={style.footerText}>Ev</a>
          <a href="#" className={style.footerText}>Haqqında</a>
          <a href="#" className={style.footerText}>Xidmətlər</a>
          <a href="#" className={style.footerText}>Qalereya</a>
          <a href="#" className={style.footerText}>Əlaqə</a>
        </div>
        <div className={style.footerRight}>
          <p className={style.footerTitle}>Email</p>
          <div className={style.footerInputContainer}>
            <input
              type="text"
              placeholder="E-poçtunuzu daxil edin"
              className={style.footerInput}
            />
            <button className={style.footerBtn}>Göndər</button>
          </div>
        </div>
      </div>
      <div className={style.footerBottom}>
        <p>{bottomText}</p>
      </div>
    </section>
  );
}

export default FooterSection;
