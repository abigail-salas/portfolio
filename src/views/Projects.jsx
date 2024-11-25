import React from "react";
import canalDelClima from "../assets/img/Canal-del-clima.png";
import buscaMinas from "../assets/img/world-of-minesweeper.png";
import toDoList from "../assets/img/Lista-de-quehaceres.png";
import tateti from "../assets/img/tateti.png";
import typerD from "../assets/img/Typer-D.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Projects() {
  return (
    <section id="portfolio" className="portfolio min-h-full w-full pb-8 pt-8">
      <div className="portfolio__title flex flex-column gap-3 text-center">
        <h1 className="text-3xl md:text-5xl">Mi trabajo</h1>
        {/* <!-- <p className="text-gray-400 text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum odit
            ab mollitia optio quod recusandae placeat aliquam veniam officiis
            cum quam eum architecto quidem, nobis commodi consequatur distinctio
            ullam non.
          </p> --> */}
      </div>
      <div className="portfolio__gallery">
        <div className="gallery__categories mb-5 mt-5">
          {/* <ul className="flex list-none flex-wrap justify-content-center gap-3">
              <li className="filter-item active" data-filter="all">Todos</li>
              <li className="filter-item" data-filter="gym">Gimnasio</li>
              <li className="filter-item" data-filter="tours__Web">Tours web</li>
              <li className="filter-item" data-filter="world__Tours">
                Inmobiliaria web
              </li>
              <li className="filter-item" data-filter="e__commerce">E-commerce</li>
            </ul>  */}
        </div>
        <div className="proyect__gallery flex justify-content-center align-items-center flex-wrap gap-3">
          <div className="project__card e__commerce">
            <img src={buscaMinas} alt="" />
            <div className="overlay"></div>
            <div className="project__info flex w-full flex-column justify-content-center align-items-center text-center">
              <a
                href="https://busca-minas-e8cfad.netlify.app"
                target="_blank"
                style={{ color: "white", textDecoration: "none" }}
              >
                <h2>Busca Minas</h2>
                <p>
                  Buscaminas es un videojuego para un jugador. El objetivo del
                  juego es despejar un campo de minas sin detonar ninguna.
                </p>

                <FontAwesomeIcon icon="fa-solid fa-arrow-right-long" />
              </a>
            </div>
          </div>
          <div className="project__card tours__Web">
            <img src={toDoList} alt="" />
            <div className="overlay"></div>
            <div className="project__info flex w-full flex-column justify-content-center align-items-center text-center">
              <a
                href="https://todolist-ae8e5d.netlify.app/"
                target="_blank"
                style={{ color: "white", textDecoration: "none" }}
              >
                <h2>To Do List</h2>
                <p>
                  ¡Pagína de lista de quehaceres! Anotá todas tus tareas del día
                  aquí.
                </p>

                <FontAwesomeIcon icon="fa-solid fa-arrow-right-long" />
              </a>
            </div>
          </div>
          <div className="project__card gym">
            <img src={canalDelClima} alt="" />
            <div className="overlay"></div>
            <div className="project__info flex w-full flex-column justify-content-center align-items-center text-center">
              <a
                href="https://weatherchannel-bafb49.netlify.app/"
                target="_blank"
                style={{ color: "white", textDecoration: "none" }}
              >
                <h2>Weather Channel</h2>
                <p>
                  ¡Aquí podrás ver el clima de cada ciudad! Con una linda imagen
                  ilustrativa.
                </p>
                <FontAwesomeIcon icon="fa-solid fa-arrow-right-long" />
              </a>
            </div>
          </div>
          <div className="project__card world__Tours">
            <img src={tateti} alt="" />
            <div className="overlay"></div>
            <div className="project__info flex w-full flex-column justify-content-center align-items-center text-center">
              <a
                href="https://tateti-804a09.netlify.app/"
                target="_blank"
                style={{ color: "white", textDecoration: "none" }}
              >
                <h2>Ta Te Ti</h2>
                <p>
                  El clasico TA TE TI o también conocido como TRES EN RAYA. Aquí
                  podrás jugar con 1vs1 con la computadora.
                </p>
                <FontAwesomeIcon icon="fa-solid fa-arrow-right-long" />
              </a>
            </div>
          </div>
          <div className="project__card tours__Web">
            <img src={typerD} alt="" />
            <div className="overlay"></div>
            <div className="project__info flex w-full flex-column justify-content-center align-items-center text-center">
              <a
                href="https://typer-d-6eaec9.netlify.app/"
                target="_blank"
                style={{ color: "white", textDecoration: "none" }}
              >
                <h2>Typer-D</h2>
                <p>
                  Este juego interactivo se desarrolla de la siguiente manera:
                  recibirá una palabra en inglés y la tendrá que tipear en un
                  input en el menor tiempo posible. Si la palabra tipeada
                  coincide con la recibida, pasa a la siguiente y se le asigna
                  un tiempo extra.
                </p>
                <FontAwesomeIcon icon="fa-solid fa-arrow-right-long" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
