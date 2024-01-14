import Link from "next/link";

export default function Navigation() {
  return (
    <nav class="flex items-center justify-between ">
      <div>
        <search>
          <input
            type="text"
            id="search"
            name="search"
            className="border border-black-300 rounded-md"
          />
        </search>
      </div>
      <div className="border border-black-300 rounded-md ml-1">
        <Link href={"/form"}>
          <p class="font-semibold p-1 text-center">Añadir Equipo</p>
        </Link>
      </div>
    </nav>
  );
}
