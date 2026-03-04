import React from "react";
import { Link } from "react-router";
import "../styles/_navbar.scss";

function NavBar() {
  return (
    <div className="navbar">
      <Link className="link" to="/">
        Home
      </Link>
      <Link className="link" to="/prodotti">
        Prodotti
      </Link>
      <Link className="link" to="/">
        Home
      </Link>
      <Link className="link" to="/prodotti">
        Prodotti
      </Link>
      <Link className="link" to="/">
        Contatti
      </Link>
    </div>
  );
}

export default NavBar;
