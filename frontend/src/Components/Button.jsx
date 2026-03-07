import React from "react";

function Button({ funzione, text }) {
  return <button onClick={funzione}>{text}</button>;
}

export default Button;
