import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="flex items-center justify-between">
      <div className="border border-black-300 rounded-md mx-auto">
        <Link href={"/form"}>
          <p className="font-semibold p-1 text-center">Añadir Equipo</p>
        </Link>
      </div>
    </nav>
  );
}
