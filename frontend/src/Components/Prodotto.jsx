import React from "react";
import pesce from "../../../img/Fresh Fish.png";
import "../styles/_prodotto.scss";

function Prodotto({ nome, prezzo, descrizione, categoria }) {
  return (
    <div className="container">
      <div className="prodotto">
        <div className="immagineProdotto">
          <img src={pesce} />
        </div>
        <div className="nome-prezzo">
          <div className="nome">nome: {nome}</div>
          <div className="prezzo">prezzo: {prezzo}€</div>
          <div className="categoria">categoria: {categoria}</div>
        </div>
        <div className="compra">compra ora</div>
      </div>
    </div>
  );
}

export default Prodotto;
