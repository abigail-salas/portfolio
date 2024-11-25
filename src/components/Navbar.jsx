import React from "react";

function Navbar() {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="flex w-full fixed top-0 z-1">
      <nav className="flex justify-content-between w-full navbar">
        <span
          className="logo cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          <img src="./ABBY.png" alt="Logo portafolio" width="50" height="50" />
        </span>
        <input
          type="checkbox"
          aria-label="Checkbox para mostrar y quitar hamburger menu"
          className="checkbox xl:hidden"
        />
        <div className="hamburger__lines">
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </div>
        <div className="header__info flex align-items-center gap-3">
          <ul className="flex flex-column xl:flex-row list-none">
            <li onClick={() => scrollToSection("about-me")}>Sobre mí</li>
            <li onClick={() => scrollToSection("skills")}>Conocimiento</li>
            <li onClick={() => scrollToSection("projects")}>Proyectos</li>
            <li onClick={() => scrollToSection("contact")}>Contacto</li>
          </ul>
          <div className="hireMe__button pt-4">
            <a
              href="mailTo:salasmedina02@gmail.com"
              aria-label="Enviar mensaje al correo"
              className="cursor-pointer no-underline border-round-lg text-xl xl:text-sm"
            >
              Contratame
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
