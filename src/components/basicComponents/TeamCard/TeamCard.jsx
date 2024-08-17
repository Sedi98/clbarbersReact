import React from "react";
import style from "./teamCard.module.css";
import imgBarber from "../../../assets/img/barber.jpeg";

function TeamCard() {
  return (
    <div className={style.teamCard}>
      <img src={imgBarber} alt="" />
      <div className={style.overlay}>
        <div>
          <span>Professional Barber</span>
          <p>Calal Yusifov</p>
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
