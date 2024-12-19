import React from "react";

const backendSkillsData = [
  { name: "PHP", level: "Advanced" },
  { name: "Ruby", level: "Intermediate" },
  { name: "Node.js", level: "Advanced" },
  { name: "Express.js", level: "Advanced" },
  { name: "Django", level: "Advanced" },
  { name: "Flask", level: "Intermediate" },
  { name: "Ruby on Rails", level: "Intermediate" },
  { name: "Spring Boot", level: "Intermediate" },
  { name: "Laravel", level: "Intermediate" },
  { name: "ASP.NET Core", level: "Basic" },
  { name: "MySQL", level: "Advanced" },
  { name: "PostgreSQL", level: "Intermediate" },
  { name: "SQLite", level: "Intermediate" },
  { name: "MongoDB", level: "Advanced" },
  { name: "Firebase", level: "Advanced" },
  { name: "Redis", level: "Intermediate" },
  { name: "AWS", level: "Advanced" },
  { name: "GCP", level: "Intermediate" },
  { name: "Docker", level: "Intermediate" },
  { name: "Git", level: "Advanced" },
];

const Backend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend Developer</h3>

      <div className="skills__box">
        {/* First Group */}
        <div className="skills__group">
          {backendSkillsData.slice(0, 10).map((skill, index) => (
            <div className="skills__data" key={index}>
              <i className="bx bx-badge-check"></i>
              <div>
                <h3 className="skills__name">{skill.name}</h3>
                <span className="skills__level">{skill.level}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Second Group */}
        <div className="skills__group">
          {backendSkillsData.slice(10, 20).map((skill, index) => (
            <div className="skills__data" key={index}>
              <i className="bx bx-badge-check"></i>
              <div>
                <h3 className="skills__name">{skill.name}</h3>
                <span className="skills__level">{skill.level}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Backend;