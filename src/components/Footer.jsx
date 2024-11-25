import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <footer
      id="contact"
      className="min-h-full w-full flex grid col-12 justify-content-center pb-8 pt-8 lg:text-center"
    >
      <div className="social__media col-12 md:col-4 flex flex-column justify-content-between">
        <h3>Redes sociales</h3>
        <p>Auténtica e innovadora</p>
        <p>
          Desarrollo lo que necesitas, con un enfoque en usabilidad y
          rendimiento
        </p>
        <div className="social__mediaIcons mt-5 flex lg:justify-content-center gap-3">
          {/* <!--  <a
          href="#"
          target="_blank"
          aria-label="Ir a discord"
        >
        <i className="fa-brands fa-discord"></i>
        </a> --> */}
          <a
            href="https://github.com/abigail-salas"
            target="_blank"
            aria-label="Ir a gitHub"
          >
            <FontAwesomeIcon
              icon="fa-brands fa-github"
              className="icon-color"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/abigail-salas-2021/"
            target="_blank"
            aria-label="Ir a linkedin"
          >
            <FontAwesomeIcon icon="fa-brands fa-linkedin-in" className="icon-color"/>
          </a>
        </div>
      </div>
      <div className="contact col-12 sm:col-6 sm:pt-0 md:pt-2 md:col-4 flex flex-column justify-content-between md:align-items-center">
        <h3>Contacto</h3>
        <div className="phone__number flex align-items-center gap-2">
          <FontAwesomeIcon icon="fa-solid fa-phone" />
          <p>+54 9 3875202681</p>
        </div>
        <div className="email flex align-items-center gap-2">
          <FontAwesomeIcon icon="fa-solid fa-envelope" />
          <p>salasmedina02@gmail.com</p>
        </div>
        <a
          href="https://api.whatsapp.com/send/?phone=5493875202681"
          target="_blank"
          className="cursor-pointer text-center col-4 sm:col-6 xl:col-4 mt-3 no-underline border-round-lg"
        >
          <span>
            {" "}
            <FontAwesomeIcon icon="fa-brands fa-whatsapp" />{" "}
          </span>
          Escríbeme
        </a>
      </div>
      <div className="my__services col-12 sm:col-6 sm:p-0 md:col-4 md:pt-2 md:align-items-center flex flex-column justify-content-between">
        <h3>Mis Servicios</h3>
        <p>Desarrollo web FullStack</p>
        <p>Docente en JS, React, Node y PostgreSQL</p>
        <p>Desarrollo móvil</p>
      </div>
    </footer>
  );
}

export default Footer;
