import Inventario from "./components/Inventario";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
      <h1 className="text-xl font-semibold">
        Colores del inventario de telefonía
      </h1>
      <div>
        <Inventario></Inventario>
      </div>
    </main>
  );
}
