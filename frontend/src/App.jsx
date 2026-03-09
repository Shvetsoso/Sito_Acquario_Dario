import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import { useEffect } from "react";
import { getArticoli } from "./api/articoli";
import Prodotti from "./Pages/Prodotti";
import Admin from "./Pages/Admin";
import Pesci from "./Pages/Pesci";
import Acquari from "./Pages/Acquari";
import Articoli from "./Pages/Articoli";
import CodiciSconto from "./Pages/CodificiSconto";
import Contatti from "./Pages/Contatti";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prodotti" element={<Prodotti />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/pesci" element={<Pesci />} />
        <Route path="/admin/acquari" element={<Acquari />} />
        <Route path="/admin/articoli" element={<Articoli />} />
        <Route path="/admin/codici-sconto" element={<CodiciSconto />} />
        <Route path="/contatti" element={<Contatti />} />
      </Routes>
    </div>
  );
}

export default App;
