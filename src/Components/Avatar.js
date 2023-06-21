import React from "react";
import styles from "./Avatar.module.css";
function Avatar() {
  return (
    <div className={styles.imgContainer}>
      <img src="DSC_7008.JPG" alt="أسر" className={styles.imgStyle} />
    </div>
  );
}

export default Avatar;
