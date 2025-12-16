import { Github } from "lucide-react";

export default function Profile() {
  return (
    <div id="profil" className="hero">
      <div className="hero__avatar" aria-hidden="true">
        RM
      </div>
      <div className="hero__content">
        <p className="hero__eyebrow">Software engineer</p>
        <h1>Je construis des applications sécurisées qui allient performance et expérience utilisateur.</h1>
        <p className="hero__description">
          Titulaire d'un master en Ingénierie du Développement Logiciel et passionné par l'écosystème Java, Python et Javascript,
          j'aime transformer des problèmes complexes en produits concrets. Du backend Spring Boot Java ou Python aux interfaces
          React ou Angular, j'orchestre des solutions complètes en m'appuyant sur des pratiques DevOps modernes. J'aime également
          exploiter l'IA générative pour enrichir l'expérience des utilisateurs grâce à une approche agentique.
        </p>

        <div className="hero__actions">
          <a className="button" href="#projets">
            Découvrir mes projets
          </a>
          <a className="button button--github" href="https://github.com/regixx20" target="_blank" rel="noreferrer">
            <Github size={18} />
            Github
          </a>
        </div>
      </div>
    </div>
  );
}
