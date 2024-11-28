import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProjectCard = ({ image, title, description, link, category }) => {
  return (
    <div className={`project__card ${category}`}>
      <img src={image} alt={title} />
      <div className="overlay"></div>
      <div className="project__info flex w-full flex-column justify-content-center align-items-center text-center">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "white", textDecoration: "none" }}
        >
          <h2>{title}</h2>
          <p>{description}</p>
          <FontAwesomeIcon icon="fa-solid fa-arrow-right-long" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;



