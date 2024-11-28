import React from "react";
import ProjectCard from "../components/ProjectCard";
import { projectsData } from "../utils/projectData";

function Projects() {
  return (
    <section id="portfolio" className="portfolio min-h-full w-full pb-8 pt-8">
      <div className="portfolio__title flex flex-column gap-3 text-center">
        <h1 className="text-3xl md:text-5xl">Mi trabajo</h1>
      </div>
      <div className="portfolio__gallery">
        <div className="gallery__categories mb-5 mt-5">
          {/* <ul className="flex list-none flex-wrap justify-content-center gap-3">
            <li className="filter-item active" data-filter="all">Todos</li>
          </ul> */}
        </div>
        <div className="proyect__gallery flex justify-content-center align-items-center flex-wrap gap-3">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
