import React from "react";
import style from "./button.module.css";

function Button() {
  return (
    <button
      onClick={() =>
        window.open(
          "https://www.mediafire.com/file/pcl1gfgkkwv6j9g/clbarbers.apk/file",
          "_blank"
        )
      }
      className={style.button}
    >
      Randevu Al
    </button>
  );
}

export default Button;
