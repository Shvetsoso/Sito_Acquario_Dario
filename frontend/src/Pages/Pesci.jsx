import React from "react";
import Sidebar from "../Components/admin/Sidebar";
import Prodotto from "../Components/Prodotto";
import "../styles/_container.scss";
import "../styles/_pesci.scss";

function Pesci() {
  return (
    <div className="container-sidebar-pages">
      <Sidebar />
      <div className="container-pesci">
        <h1>pesci</h1>
        <div className="pesci">
          <Prodotto
            nome={"nome"}
            prezzo={10}
            descrizione={"fneiown"}
            categoria={"pesci"}
          />
          <Prodotto
            nome={"nome"}
            prezzo={10}
            descrizione={"fneiown"}
            categoria={"pesci"}
          />
          <Prodotto
            nome={"nome"}
            prezzo={10}
            descrizione={"fneiown"}
            categoria={"pesci"}
          />
          <Prodotto
            nome={"nome"}
            prezzo={10}
            descrizione={"fneiown"}
            categoria={"pesci"}
          />
          <Prodotto
            nome={"nome"}
            prezzo={10}
            descrizione={"fneiown"}
            categoria={"pesci"}
          />
          <Prodotto
            nome={"nome"}
            prezzo={10}
            descrizione={"fneiown"}
            categoria={"pesci"}
          />
          <Prodotto
            nome={"nome"}
            prezzo={10}
            descrizione={"fneiown"}
            categoria={"pesci"}
          />
          <Prodotto
            nome={"nome"}
            prezzo={10}
            descrizione={"fneiown"}
            categoria={"pesci"}
          />
          <Prodotto
            nome={"nome"}
            prezzo={10}
            descrizione={"fneiown"}
            categoria={"pesci"}
          />
        </div>
      </div>
    </div>
  );
}

export default Pesci;
