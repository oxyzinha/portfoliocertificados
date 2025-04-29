import { useState, useEffect } from "react";
import "./Portfolio.css";

function CredlyBadge({ badgeId }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//cdn.credly.com/assets/utilities/embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      data-iframe-width="150"
      data-iframe-height="270"
      data-share-badge-id={badgeId}
      data-share-badge-host="https://www.credly.com"
    ></div>
  );
}

function Portfolio() {
  const [certificates] = useState([
    {
      id: "6f628844-0948-493f-8490-97fc0a87a89e",
      title: "Meu Certificado",
    },
    {
      id: "429f8ac4-eff3-4491-bf54-4a53b1f02892",
      title: "Meu Segundo Certificado",
    },
    {
      id: "32619262-3a09-4763-93b6-793e50a332e8",
      title: "Meu Terceiro Certificado",
    },
  ]);

  return (
    <div className="portfolio-wrapper">
      <section className="profile-section">
        <h1>Olá, eu sou a Lara!</h1>
        <p className="intro">
          Aqui encontrarás os meus projetos e certificados que refletem a minha paixão por tecnologia e inovação.
        </p>
        <div className="socials">
          <a href="https://github.com/oxyzinha" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.instagram.com/llaramanon/" target="_blank" rel="noreferrer">Instagram</a>
        </div>
      </section>

      <section className="skills-section">
        <h2>Minhas Habilidades</h2>
        <ul className="skills-list">
          <li>
            <span>React</span>
            <div className="bar"><div className="fill" style={{ width: "90%" }} /></div>
          </li>
          <li>
            <span>JavaScript</span>
            <div className="bar"><div className="fill" style={{ width: "85%" }} /></div>
          </li>
          <li>
            <span>CSS</span>
            <div className="bar"><div className="fill" style={{ width: "80%" }} /></div>
          </li>
        </ul>
      </section>

      <section className="featured-work">
        <h2>Trabalho em Destaque</h2>
        <a href="https://2-g-finnovationsystems.vercel.app" target="_blank" rel="noreferrer">
          <img src="/image.png" alt="Trabalho em Destaque" />
        </a>
        <p>
          Esse é um dos meus projetos favoritos, onde utilizei React, Tailwind e APIs modernas!
        </p>
      </section>

      <section className="portfolio-container">
        <h2>Certificados</h2>
        <div className="certificates-wrapper">
          {certificates.map((cert) => (
            <div key={cert.id} className="certificate fade-in">
              <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>🎓</div>
              <h3>{cert.title}</h3>
              <CredlyBadge badgeId={cert.id} />
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 Lara | Todos os direitos reservados</p>
        <div className="footer-socials">
          <a href="https://github.com/oxyzinha" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.instagram.com/llaramanon/" target="_blank" rel="noreferrer">Instagram</a>
        </div>
      </footer>
    </div>
  );
}

export default Portfolio;
