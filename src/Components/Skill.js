import React from "react";
import styles from "./Skill.module.css";
function Skill({ skillProp }) {
  return (
    <p className={styles.skill} style={{ backgroundColor: skillProp.color }}>
      {skillProp.skill}
      <span>
        {" "}
        {skillProp.level === "beginner" && "👶"}
        {skillProp.level === "intermediate" && "👍"}
        {skillProp.level === "advanced" && "💪"}
      </span>
    </p>
  );
}

export default Skill;
