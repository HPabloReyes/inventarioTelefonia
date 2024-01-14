import { inventario } from "../helpers/inventario";
import PhoneCard from "./PhoneCard";

export default function Inventario() {
  return (
    <div>
      {inventario.map((e, index) => (
        <li className="list-none" key={index}>
          <PhoneCard nombre={e.telefono} colores={e.colores} />
        </li>
      ))}
    </div>
  );
}
