import Inventario from "./components/Inventario";
import Navigation from "./components/Navigation";

export default function Home() {
  return (
    <main>
      <Navigation></Navigation>
      <div className="flex flex-col justify-center items-center mt-1">
        <h1 className="text-xl font-semibold">
          Colores del inventario de telefonía
        </h1>
        <div>
          <Inventario></Inventario>
        </div>
      </div>
    </main>
  );
}
