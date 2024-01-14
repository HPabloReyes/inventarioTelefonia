"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import JsBarcode from "jsbarcode";
import { urlBase } from "../helpers/inventario";

export default function PhoneCard({ nombre, colores }) {
  const imageBase = urlBase;

  return (
    <>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden my-3 h-full max-w-xs min-w-80">
        <h3 className="text-xl font-semibold text-gray-800 p-4 text-center">
          {nombre}
        </h3>
        <div className="flex justify-center">
          <Image
            width={100}
            height={200}
            alt="Descripción de la imagen"
            src={imageBase}
          />
        </div>
        <ul className="p-4">
          <h4 className="text-lg font-semibold text-center">
            Colores Disponibles:
          </h4>
          {colores?.map((e, index) => (
            <ColorItem key={index} color={e.color} codigo={e.codigo} />
          ))}
        </ul>
      </div>
    </>
  );
}

function ColorItem({ color, codigo }) {
  const barcodeRef = useRef(null);

  useEffect(() => {
    JsBarcode(barcodeRef.current, codigo);
  }, [codigo]);

  return (
    <li className="mb-4">
      <div className="bg-gray-200 p-4 rounded-md h-full flex flex-col items-center justify-center">
        <p className="text-sm text-gray-600 text-center">{color}</p>
        <img ref={barcodeRef} className="mx-auto my-auto" />
      </div>
    </li>
  );
}
