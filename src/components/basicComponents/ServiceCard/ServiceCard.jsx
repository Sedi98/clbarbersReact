import React from "react";
import style from "./serviceCard.module.css";

function ServiceCard({title,text}) {
  return (
    <div className={style.serviceCard}>
      <p className={style.cardTitle}>{title}</p>
      <p className={style.cardText}>{text}</p>
    </div>
  );
}

export default ServiceCard;
