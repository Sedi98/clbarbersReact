import React from "react";
import style from "./footerSection.module.css";
import logo from "../../../assets/img/cl_logo.png";

function FooterSection() {
  return (
    <section className={style.footer}>
      <div className={style.footerContent}>
        <div className={style.footerLeft}>
          <div className={style.logo}>
            <img src={logo} className={style.logoImg} />
          </div>
          <p className={style.logoText}>CL Barbers</p>
          <h4 className={style.logoTextH4}>+994 51 123 45 67</h4>
        </div>
        <div className={style.footerMid}>
          <p p className={style.footerTitle}>Links</p>
          <a href="#" className={style.footerText}>Home</a>
          <a href="#" className={style.footerText}>About</a>
          <a href="#" className={style.footerText}>Services</a>
          <a href="#" className={style.footerText}>Gallery</a>
          <a href="#" className={style.footerText}>Contact</a>
        </div>
        <div className={style.footerRight}>
          <p className={style.footerTitle}>Email</p>
          <div className={style.footerInputContainer}>
            <input
              type="text"
              placeholder="Enter your email"
              className={style.footerInput}
            />
            <button className={style.footerBtn}>Send</button>
          </div>
        </div>
      </div>
      <div className={style.footerBottom}>
        <p>Copyright © 2024 CL Barbers. All rights reserved</p>
      </div>
    </section>
  );
}

export default FooterSection;
