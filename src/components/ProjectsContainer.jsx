import React from "react";
import '../styles/components/projectscontainer.sass';

const ProjectsContainer = () => {
  return(
   <section className="projects-container">
    <h2>Projetos</h2>
    <p>
      Os projetos são o resumo do aprendizado e o esforço do trabalho. Tendo isso em mente, coloco em pratica tudo o que estudo e aprendo.
    </p>
    <p>

      Focado no Front-end, grande parte dos projetos que criei e participei, se encontram no meu repositorio, onde vai dos primeiros passos até os dias de hoje, onde mostro minha evolução e aprendizado.
      
    </p>
    <br />
    <p>
    Quer saber mais? Acesse meu repositorio.
    </p>
    <div id="box">
    <a href="https://github.com/padilhx?tab=repositories" className="btn2">
      Ver Projetos
    </a>
    </div>
  </section>
)};

export default ProjectsContainer;