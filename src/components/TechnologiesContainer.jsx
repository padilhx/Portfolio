import {
  DiHtml5,
  DiPhp,
  DiJsBadge,
  DiNodejsSmall,
  DiMysql,
  DiReact,
  DiDocker
} from 'react-icons/di'
import {SiTypescript} from 'react-icons/si'

import '../styles/components/technologiescontainer.sass'

const technologies = [
  { id: "html", name: "HTML5", icon: <DiHtml5 /> },
  { id: "php", name: "PHP", icon: <DiPhp /> },
  { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
  { id: "node", name: "Node.js", icon: <DiNodejsSmall /> },
  { id: "mysql", name: "MySQL", icon: <DiMysql />},
  { id: "react", name: "React", icon: <DiReact />},
  { id: "docker", name:"Docker", icon: <DiDocker />},
  { id: "typescript", name:"TypeScript", icon: <SiTypescript />}
];

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
              <p></p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesContainer;