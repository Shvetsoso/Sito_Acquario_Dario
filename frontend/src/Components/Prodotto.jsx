import React from "react";
import pesce from "../../../img/Fresh Fish.png";
import "../styles/_prodotto.scss";

function Prodotto() {
  return (
    <div className="container">
      <div className="prodotto">
        <div className="immagineProdotto">
          <img src={pesce} />
        </div>
        <div className="nome-prezzo">
          <div className="nome">pesce rosso</div>
          <div className="prezzo">20€</div>
        </div>
        <div className="compra">compra ora</div>
      </div>
    </div>
  );
}

export default Prodotto;
