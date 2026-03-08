import React from "react";
import "../../styles/_sidebar.scss";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="container-sidebar">
      <NavLink
        to="/admin/pesci"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        Pesci
      </NavLink>
      <NavLink
        to="/admin/acquari"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        Acquari
      </NavLink>
      <NavLink
        to="/admin/articoli"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        Articoli
      </NavLink>
      <NavLink
        to="/admin/codici-sconto"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        Codici sconto
      </NavLink>
    </div>
  );
}

export default Sidebar;
