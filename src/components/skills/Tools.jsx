import React from "react";

const toolsData = [
  { name: "GitHub", level: "Advanced" },
  { name: "Git", level: "Advanced" },
  { name: "Docker", level: "Intermediate" },
  { name: "Kubernetes", level: "Basic" },
  { name: "Jenkins", level: "Basic" },
  { name: "GitLab", level: "Advanced" },
  { name: "Postman", level: "Advanced" },
  { name: "Figma", level: "Advanced" },
  { name: "Adobe XD", level: "Advanced" },
  { name: "Heroku", level: "Advanced" },
  { name: "REST API", level: "Advanced" },
  { name: "Vite", level: "Intermediate" },
  { name: "Redux", level: "Intermediate" },
  { name: "Babel", level: "Basic" },
  { name: "Netlify", level: "Advanced" },
  { name: "Vercel", level: "Advanced" },
  { name: "TravisCI", level: "Basic" },
  { name: "Nginx", level: "Basic" },
  { name: "CircleCI", level: "Basic" },
  { name: "Bitbucket", level: "Intermediate" },
];

const Tools = () => {
  return (
    <div className="tools__content">
      <h3 className="tools__title">Tools & Libraries</h3>

      <div className="tools__box">
        {/* Split toolsData into two groups */}
        <div className="tools__group">
          {toolsData.slice(0, 10).map((tool, index) => (
            <div className="tools__data" key={index}>
              <i className="bx bx-badge-check"></i>
              <div>
                <h3 className="tools__name">{tool.name}</h3>
                <span className="tools__level">{tool.level}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="tools__group">
          {toolsData.slice(10, 20).map((tool, index) => (
            <div className="tools__data" key={index}>
              <i className="bx bx-badge-check"></i>
              <div>
                <h3 className="tools__name">{tool.name}</h3>
                <span className="tools__level">{tool.level}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tools;