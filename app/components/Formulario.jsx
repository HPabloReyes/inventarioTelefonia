"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function Formulario() {
  const colors = ["Rojo", "Azul", "Verde", "Amarillo", "Negro"];
  // Estado para realizar un seguimiento del color seleccionado
  const [colorSeleccionado, setColorSeleccionado] = useState("");
  // Estado para realizar un seguimiento del código asignado
  const [codigo, setCodigo] = useState("");
  // Estado para realizar un seguimiento de la lista de colores
  const [colorList, setColorList] = useState([]);

  const handleColorChange = (event) => {
    // Actualizar el estado con el color seleccionado
    setColorSeleccionado(event.target.value);

    // Reiniciar el código cuando se cambia el color
    setCodigo("");
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Aquí puedes realizar acciones adicionales con el color y el código seleccionados

    const telefono = data.telefono;
    const send = { telefono, colorList };
    console.log(send);
  };

  const handleClick = () => {
    // Validar que se haya seleccionado un color antes de añadir a la lista
    if (colorSeleccionado) {
      // Añadir la configuración de color y código a la lista
      setColorList([
        ...colorList,
        { color: colorSeleccionado, codigo: codigo },
      ]);
      // Limpiar la selección después de añadir a la lista
      setColorSeleccionado("");
      setCodigo("");
    }
  };

  const handleRemove = (index) => {
    // Eliminar el color de la lista según el índice
    const updatedColorList = [...colorList];
    updatedColorList.splice(index, 1);
    setColorList(updatedColorList);
  };

  return (
    // <div className="container mx-auto p-4">
    //   <form
    //     className="bg-white p-4 rounded-md shadow-md"
    //     onSubmit={handleSubmit(onSubmit)}
    //   >
    //     <label className="text-sm text-gray-600">Nombre del equipo</label>
    //     <input
    //       {...register("telefono", { required: true })}
    //       type="text"
    //       placeholder="Modelo.."
    //       className="border border-gray-300 p-2 rounded mt-1"
    //     />

    //     <label className="mt-3 text-sm text-gray-600">Colores</label>
    //     <select
    //       onChange={handleColorChange}
    //       value={colorSeleccionado}
    //       className="border border-gray-300 p-2 rounded mt-1"
    //     >
    //       <option value="" disabled>
    //         Selecciona un color
    //       </option>
    //       {colors.map((color, index) => (
    //         <option key={index} value={color}>
    //           {color}
    //         </option>
    //       ))}
    //     </select>

    //     {colorSeleccionado && (
    //       <input
    //         type="text"
    //         placeholder="Código"
    //         value={codigo}
    //         onChange={(e) => setCodigo(e.target.value)}
    //         className="border border-gray-300 p-2 rounded mt-3"
    //       />
    //     )}

    //     <button
    //       type="button"
    //       onClick={handleClick}
    //       className="bg-blue-500 text-white px-4 py-2 rounded mt-3"
    //     >
    //       Añadir
    //     </button>
    //     <button
    //       type="submit"
    //       className="bg-green-500 text-white px-4 py-2 rounded mt-4"
    //     >
    //       Enviar
    //     </button>
    //   </form>

    //   <div className="mt-4">
    //     <h2 className="text-lg font-semibold">Colores Añadidos:</h2>
    //     <ul className="list-disc pl-5 mt-2">
    //       {colorList.map((item, index) => (
    //         <li key={index} className="flex items-center justify-between">
    //           <span>
    //             Color: {item.color}, Código: {item.codigo}
    //           </span>
    //           <button
    //             onClick={() => handleRemove(index)}
    //             className="bg-red-500 text-white px-3 py-1 rounded"
    //           >
    //             Quitar
    //           </button>
    //         </li>
    //       ))}
    //     </ul>
    //   </div>
    // </div>
    <div className="flex flex-col items-center justify-center">
      <img
        src="https://i.pinimg.com/originals/8b/19/fe/8b19feb0d9eec43509283e74917a7fe9.gif"
        className="mx-auto"
        alt="GIF"
      />
      <Link
        href="/"
        className="block text-center py-2 px-4 bg-blue-500 text-white font-semibold rounded-full shadow-md mt-3"
      >
        <h1 className="cursor-pointer">Seguimos en eso !</h1>
      </Link>
    </div>
  );
}
