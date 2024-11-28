import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const skillsData = [
  { icon: "fa-brands fa-js", name: "JavaScript" },
  { icon: "fa-brands fa-react", name: "React.js" },
  { icon: "fa-brands fa-sass", name: "SASS" },
  { icon: "fa-brands fa-bootstrap", name: "Bootstrap" },
  { icon: "fa-brands fa-html5", name: "HTML" },
  { icon: "fa-brands fa-css3-alt", name: "CSS" },
  { icon: "fa-solid fa-code", name: "DOM" },
  {
    icon: "fa-brands fa-node",
    name: "Node.js",
    size: "2x",
    className: "icon-style-special",
  },
  { icon: "fa-solid fa-code", name: "Express" },
  { icon: "fa-solid fa-database", name: "PostgreSQL" },
  { icon: "fa-solid fa-database", name: "MongoDB" },
  { icon: "fa-solid fa-code-branch", name: "JWT" },
  { icon: "fa-solid fa-code-pull-request", name: "Postman" },
  {
    icon: "fa-brands fa-git-alt",
    name: "GIT",
    size: "2x",
    className: "icon-style-special",
  },
  { icon: "fa-brands fa-github", name: "GitHub" },
  { icon: "fa-solid fa-arrows-turn-to-dots", name: "Scrum" },
];

function Skills() {
  return (
    <section id="services" className="services">
      <div className="services__title flex flex-column gap-3 text-center">
        <h1 className="text-3xl md:text-5xl">Conocimiento</h1>
      </div>

      <div className="services__card w-full grid grid-nogutter mt-7">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="col-12 md:col-6 lg:col-4 xl:col-3 gap-3 p-2 card flex align-items-center"
          >
            <div className="service__logo flex align-items-center justify-content-center">
              <FontAwesomeIcon
                icon={skill.icon}
                className={skill.className || "icon-style"}
                size={skill.size || {}}
              />
            </div>
            <div className="service__name">
              <p>{skill.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
