import React from "react";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Skills from "./Skills";
import { scrollToSection } from "../utils/function";

function Home() {
  return (
    <div>
      <div className="container">
        <section
          id="home"
          className="home__page flex align-items-center justify-content-center xl\:justify-content-between grid grid-nogutter gap-4"
        >
          <div className="left__content col-12 xl:col-6">
            <div className="message__bubble triangle mb-4 md:mb-2">
              <div className="message__text p-2 sm:p-3 text-center">
                <p>Hola, Yo soy</p>
              </div>
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-7xl">Abigail Salas</h1>
            <p className="text-gray-500">Full-Stack Developer</p>
            <div className="home__buttons flex align-items-center gap-2 mt-6">
              <a
                href="./assets/CV_Abigail_Salas.pdf"
                aria-label="Descargar curriculum"
                className="cursor-pointer border-round-lg no-underline"
                download
              >
                Descargar CV
              </a>
              <button
                onClick={() => scrollToSection("portfolio")}
                aria-label="Deslizar a sección portafolio para mostrar mis trabajos"
                className="cursor-pointer border-round-lg"
              >
                Mi trabajo
              </button>
            </div>
          </div>
          <div className="right__content col-9 sm:col-6 xl:col-5">
            <img
              src="./foto_de_perfil.png"
              alt="Foto perfil"
              width="100"
              height="100"
            />
          </div>
        </section>

        <section id="about-me">
          <AboutMe />
        </section>
      </div>

      <section className="freelancer mb-4 mt-4 min-w-full flex flex-column justify-content-center align-items-center">
        <p className="text-sm">Tienes un proyecto en mente?</p>
        <h1 className="text-center">Estoy disponible como freelancer</h1>
        <div className="hireMe__button pt-4">
          <a
            href="mailTo:salasmedina02@gmail.com"
            aria-label="Enviar mensaje al correo"
            className="cursor-pointer no-underline border-round-lg"
          >
            Escríbeme
          </a>
        </div>
      </section>

      <div className="container">
        <section id="skills">
          <Skills />
        </section>

        <section id="projects">
          <Projects />
        </section>
      </div>
    </div>
  );
}

export default Home;
