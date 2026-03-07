import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import { useEffect } from "react";
import { getArticoli } from "./api/articoli";
import Prodotti from "./Pages/Prodotti";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prodotti" element={<Prodotti />} />
      </Routes>
    </div>
  );
}

export default App;
