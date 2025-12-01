'use client';
import React, { useState } from "react";

export function Mayus() {
  const [texto, setTexto] = useState("");

  const convertirAMayusculas = () => {
    setTexto(texto.toUpperCase());
  };

  return (
    <div >
      <h2>Convertir a Mayúsculas</h2>
      <textarea
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        rows="5"
        cols="40"
      />

      <br />

      <button onClick={convertirAMayusculas}>CONVERTIR</button>
    </div>
  );
}