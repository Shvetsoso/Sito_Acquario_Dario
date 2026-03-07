import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getArticoli } from "../api/articoli";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setProdotti } from "../redux/slices/prodottiSlice";
import { useEffect } from "react";
import Prodotto from "../Components/Prodotto";
import Button from "../Components/Button";
import { removeProdotto } from "../redux/slices/prodottiSlice";

function Prodotti() {
  const dispatch = useDispatch();
  const prodotti = useSelector((state) => state.prodotti);

  const { datas, isLoading, error } = useQuery({
    queryKey: ["getProdotti"],
    queryFn: async () => {
      try {
        const res = await getArticoli();
        dispatch(setProdotti(res.data));
        return res;
      } catch (err) {
        console.error(err);
        throw err;
      }
    },
  });

  return (
    <div>
      <div className="comandi">
        <Button text={"aggiungi prodotto"} />
        <Button text={"elimina prodotto"} />
      </div>

      <div className="container-prodotti">
        {prodotti.map((prodotto, index) => (
          <div>
            <Prodotto
              key={index}
              nome={prodotto.nome}
              prezzo={prodotto.prezzo}
              descrizione={prodotto.descrizione}
              categoria={prodotto.categoria}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Prodotti;
