"use client";

import { inventario } from "../helpers/inventario";
import PhoneCard from "./PhoneCard";
import { useState } from "react";

export default function Inventario() {
  const [filtro, setFiltro] = useState("");
  var render = inventario;

  if (filtro !== "") {
    var render = inventario.filter((e) =>
      e.telefono.toLowerCase().includes(filtro.toLowerCase())
    );
  }

  const handleChange = (e) => {
    setFiltro(e.target.value);
  };

  return (
    <div>
      <search className="flex items-center justify-center">
        <input
          onChange={(e) => handleChange(e)}
          type="text"
          id="search"
          name="search"
          className="border border-black-300 rounded-md text-center"
          placeholder="Busque un equipo aquí ..."
        />
      </search>
      {render.map((e, index) => (
        <li className="list-none" key={index}>
          <PhoneCard nombre={e.telefono} colores={e.colores} />
        </li>
      ))}
    </div>
  );
}
