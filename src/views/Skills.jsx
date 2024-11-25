import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Skills() {
  return (
    <section id="services" className="services">
      <div className="services__title flex flex-column gap-3 text-center">
        <h1 className="text-3xl md:text-5xl">Conocimiento</h1>
        {/* <!-- <p className="text-gray-400 text-sm md:text-base">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum odit
        ab mollitia optio quod recusandae placeat aliquam veniam officiis
        cum quam eum architecto quidem, nobis commodi consequatur distinctio
        ullam non.
      </p> --> */}
      </div>

      <div className="services__card w-full grid grid-nogutter mt-7">
        <div className="col-12 md:col-6 lg:col-4 xl:col-3 gap-3 p-2 card flex align-items-center">
          <div className="service__logo flex align-items-center justify-content-center">
            <FontAwesomeIcon icon="fa-brands fa-js" className="icon-style" />
          </div>
          <div className="service__name">
            <p>JavaScript</p>
          </div>
        </div>

        <div className="col-12 md:col-6 lg:col-4 xl:col-3 gap-3 p-2 card flex align-items-center">
          <div className="service__logo flex align-items-center justify-content-center">
            <FontAwesomeIcon icon="fa-brands fa-react" className="icon-style" />
          </div>
          <div className="service__name">
            <p>React.js</p>
          </div>
        </div>

        <div className="col-12 md:col-6 lg:col-4 xl:col-3 gap-3 p-2 card flex align-items-center">
          <div className="service__logo flex align-items-center justify-content-center">
            <FontAwesomeIcon icon="fa-brands fa-sass" className="icon-style" />
          </div>
          <div className="service__name">
            <p>SASS</p>
          </div>
        </div>

        <div className="col-12 md:col-6 lg:col-4 xl:col-3 gap-3 p-2 card flex align-items-center">
          <div className="service__logo flex align-items-center justify-content-center">
            <FontAwesomeIcon
              icon="fa-brands fa-bootstrap"
              className="icon-style"
            />
          </div>
          <div className="service__name">
            <p>Bootstrap</p>
          </div>
        </div>

        <div className="col-12 md:col-6 lg:col-4 xl:col-3 gap-3 p-2 card flex align-items-center">
          <div className="service__logo flex align-items-center justify-content-center">
            <FontAwesomeIcon icon="fa-brands fa-html5" className="icon-style" />
          </div>
          <div className="service__name">
            <p>HTML</p>
          </div>
        </div>

        <div className="col-12 md:col-6 lg:col-4 xl:col-3 gap-3 p-2 card flex align-items-center">
          <div className="service__logo flex align-items-center justify-content-center">
            <FontAwesomeIcon
              icon="fa-brands fa-css3-alt"
              className="icon-style"
            />
          </div>
          <div className="service__name">
            <p>CSS</p>
          </div>
        </div>

        <div className="col-12 md:col-6 lg:col-4 xl:col-3 gap-3 p-2 card flex align-items-center">
          <div className="service__logo flex align-items-center justify-content-center">
            <FontAwesomeIcon icon="fa-solid fa-code" className="icon-style" />
          </div>
          <div className="service__name">
            <p>DOM</p>
          </div>
        </div>

        <div className="col-12 md:col-6 lg:col-4 xl:col-3 gap-3 p-2 card flex align-items-center">
          <div className="service__logo flex align-items-center justify-content-center">
            <FontAwesomeIcon icon="fa-brands fa-node" size="2x"
              style={{ color: "#a3a3a3" }} />
          </div>
          <div className="service__name">
            <p>Node.js</p>
          </div>
        </div>

        <div className="col-12 md:col-6 lg:col-4 xl:col-3 gap-3 p-2 card flex align-items-center">
          <div className="service__logo flex align-items-center justify-content-center">
            <FontAwesomeIcon icon="fa-solid fa-code" className="icon-style" />
          </div>
          <div className="service__name">
            <p>Express</p>
          </div>
        </div>

        <div className="col-12 md:col-6 lg:col-4 xl:col-3 gap-3 p-2 card flex align-items-center">
          <div className="service__logo flex align-items-center justify-content-center">
            <FontAwesomeIcon
              icon="fa-solid fa-database"
              className="icon-style"
            />
          </div>
          <div className="service__name">
            <p>PostgreSQL</p>
          </div>
        </div>

        <div className="col-12 md:col-6 lg:col-4 xl:col-3 gap-3 p-2 card flex align-items-center">
          <div className="service__logo flex align-items-center justify-content-center">
            <FontAwesomeIcon
              icon="fa-solid fa-database"
              className="icon-style"
            />
          </div>
          <div className="service__name">
            <p>MongoDB</p>
          </div>
        </div>

        <div className="col-12 md:col-6 lg:col-4 xl:col-3 gap-3 p-2 card flex align-items-center">
          <div className="service__logo flex align-items-center justify-content-center">
            <FontAwesomeIcon
              icon="fa-solid fa-code-branch"
              className="icon-style"
            />
          </div>
          <div className="service__name">
            <p>JWT</p>
          </div>
        </div>

        <div className="col-12 md:col-6 lg:col-4 xl:col-3 gap-3 p-2 card flex align-items-center">
          <div className="service__logo flex align-items-center justify-content-center">
            <FontAwesomeIcon
              icon="fa-solid fa-code-pull-request"
              className="icon-style"
            />
          </div>
          <div className="service__name">
            <p>Postman</p>
          </div>
        </div>

        <div className="col-12 md:col-6 lg:col-4 xl:col-3 gap-3 p-2 card flex align-items-center">
          <div className="service__logo flex align-items-center justify-content-center">
            <FontAwesomeIcon
              icon="fa-brands fa-git-alt"
              size="2x"
              style={{ color: "#a3a3a3" }}
            />
          </div>
          <div className="service__name">
            <p>GIT</p>
          </div>
        </div>

        <div className="col-12 md:col-6 lg:col-4 xl:col-3 gap-3 p-2 card flex align-items-center">
          <div className="service__logo flex align-items-center justify-content-center">
            <FontAwesomeIcon
              icon="fa-brands fa-github"
              className="icon-style"
            />
          </div>
          <div className="service__name">
            <p>GitHub</p>
          </div>
        </div>

        <div className="col-12 md:col-6 lg:col-4 xl:col-3 gap-3 p-2 card flex align-items-center">
          <div className="service__logo flex align-items-center justify-content-center">
            <FontAwesomeIcon
              icon="fa-solid fa-arrows-turn-to-dots"
              className="icon-style"
            />
          </div>
          <div className="service__name">
            <p>Scrum</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
