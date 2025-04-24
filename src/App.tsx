  import { useState, useEffect } from "react";
  import "./Portfolio.css";

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

    useEffect(() => {
      // Remove scripts antigos se existirem
      const oldScript = document.querySelector('script[src="//cdn.credly.com/assets/utilities/embed.js"]');
      if (oldScript) {
        oldScript.remove();
      }

      // Adiciona novamente o script da Credly
      const script = document.createElement("script");
      script.src = "//cdn.credly.com/assets/utilities/embed.js";
      script.async = true;
      document.body.appendChild(script);

      return () => {
        if (script) document.body.removeChild(script);
      };
    }, [certificates]);

    return (
      <div className="portfolio-wrapper">
        <div className="portfolio-container">
          <h1>Meu Portfólio de Certificados</h1>
          <div className="certificates-wrapper">
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
          </div>
        </div>
      </div>
    );
  }

  export default Portfolio;
