import React from "react";
import freelancer from "../assets/img/freelancer.jpg";

function AboutMe() {
  return (
    <section
      id="about"
      className="about__me w-full min-h-screen flex align-items-center"
    >
      <div className="aboutMe__content min-h-full flex flex-column md:flex-row pt-8 md:pt-0">
        <div className="aboutMe__info col-12 md:col-6 md:pr-6 pt-0">
          <h1 className="text-3xl md:text-5xl">Sobre mí</h1>
          <p className="text-gray-500">
            Desarrolladora Web con sólida experiencia en el stack PERN
            (PostgreSQL, Express, React, Node.js) y una trayectoria en la
            enseñanza de desarrollo web. Me especializo en crear aplicaciones
            dinámicas y escalables, integrando prácticas ágiles y colaborativas.
            Aunque mi experiencia incluye una fuerte base en educación, busco
            avanzar y profundizar mis habilidades técnicas en el desarrollo de
            software, contribuyendo en proyectos innovadores y de alto impacto.
          </p>
          <div className="knowledge flex flex-column gap-3 mt-5">
            <p>JavaScript 90%</p>
            <div className="progress__bar progress__js">
              <span></span>
            </div>

            <p>React 90%</p>
            <div className="progress__bar progress__react">
              <span></span>
            </div>

            <p>Node 70%</p>
            <div className="progress__bar progress__node">
              <span></span>
            </div>

            <p>Git/Github 80%</p>
            <div className="progress__bar progress__git">
              <span></span>
            </div>

            <p>SQL 60%</p>
            <div className="progress__bar progress__sql">
              <span></span>
            </div>
          </div>
          <div className="hireMe__button pt-4">
            <a
              href="mailTo:salasmedina02@gmail.com"
              aria-label="Enviar mensaje al correo"
              className="cursor-pointer no-underline border-round-lg"
            >
              Contratame
            </a>
          </div>
        </div>
        <div className="image col p-0 mt-6 md:mt-0">
          <img
            src={freelancer}
            alt="Foto relacionado a acerca de mí"
            width="100"
            height="100"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
