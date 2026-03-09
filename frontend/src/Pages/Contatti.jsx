import React from "react";
import "../styles/_contatti.scss";

function Contatti() {
  return (
    <div className="container-contatti">
      <div className="contatti-maps">
        <div className="contatti">
          <h1>Contattaci</h1>
          <div className="telefono-email">
            <div className="blocco">
              <p className="titolo">Telefono</p>
              <div className="riga">
                <span>📞</span>
                <p>+39 3792535882</p>
              </div>
              <div className="riga">
                <span>📞</span>
                <p>+39 3792535882</p>
              </div>
            </div>

            <div className="blocco">
              <p className="titolo">E-mail</p>
              <div className="riga">
                <span>✉️</span>
                <p>support@aquaworld.com</p>
              </div>
            </div>
          </div>
          <div className="indirizzo-seguici">
            <div className="blocco">
              <p className="titolo">Indirizzo</p>
              <p>123 Ocean Drive</p>
              <p>Miami, FL 33101</p>
            </div>

            <div className="blocco">
              <p className="titolo">Seguici</p>
              <div className="icone">
                <span>📸</span>
                <span>🐦</span>
              </div>
            </div>
          </div>
        </div>
        <div className="maps">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d11102.377727815478!2d10.21886412132082!3d45.91941793465007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sacquarium!5e0!3m2!1sit!2sit!4v1773081555773!5m2!1sit!2sit"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullFcreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="form">
        <h1>Mandaci un messaggio</h1>
      </div>
    </div>
  );
}

export default Contatti;
