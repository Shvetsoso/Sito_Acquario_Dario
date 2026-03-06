import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import { useEffect } from "react";
import { getArticoli } from "./api/articoli";

function App() {



  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
