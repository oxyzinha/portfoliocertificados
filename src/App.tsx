import { useState } from "react";
import "./Portfolio.css";

function Portfolio() {
  const [certificates] = useState([
    {
      id: "6f628844-0948-493f-8490-97fc0a87a89e",
      title: "Meu Certificado",
    },
  ]);

  return (
    <div className="portfolio-container">
      <h1>Meu Portfólio de Certificados</h1>
      {certificates.map((cert) => (
        <div key={cert.id} className="certificate">
          <h2>{cert.title}</h2>
          <div
            data-iframe-width="150"
            data-iframe-height="270"
            data-share-badge-id={cert.id}
            data-share-badge-host="https://www.credly.com"
          ></div>
        </div>
      ))}
      <script
        type="text/javascript"
        async
        src="//cdn.credly.com/assets/utilities/embed.js"
      ></script>
    </div>
  );
}

export default Portfolio;
