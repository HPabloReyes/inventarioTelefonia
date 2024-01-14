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
      <div className="border border-black-300 rounded-md ">
        <p class="font-semibold mx-2">Añadir Equipo</p>
      </div>
    </nav>
  );
}
