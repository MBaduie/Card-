import React from "react";
import Skill from "./Skill";

function Footer() {
  const skills = [
    {
      skill: "HTML+CSS",
      level: "advanced",
      color: "#2662EA",
    },
    {
      skill: "JavaScript",
      level: "advanced",
      color: "#EFD81D",
    },
    {
      skill: "Web Design",
      level: "advanced",
      color: "#C3DCAF",
    },
    {
      skill: "Git and GitHub",
      level: "intermediate",
      color: "#E84F33",
    },
    {
      skill: "React",
      level: "advanced",
      color: "#60DAFB",
    },
    {
      skill: "Svelte",
      level: "beginner",
      color: "#FF3B00",
    },
  ];
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "1rem",
        marginBottom: "1rem",
        marginTop: "1rem",
        padding: "1rem",
      }}
    >
      {skills.map((skill) => (
        <Skill skillProp={skill} />
      ))}
    </div>
  );
}

export default Footer;
