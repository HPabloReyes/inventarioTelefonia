import Link from "next/link";

export default function Formulario() {
  return (
    <div class="flex flex-col items-center justify-center">
      <img
        src="https://i.pinimg.com/originals/8b/19/fe/8b19feb0d9eec43509283e74917a7fe9.gif"
        class="mx-auto"
        alt="GIF"
      />
      <Link
        href="/"
        class="block text-center py-2 px-4 bg-blue-500 text-white font-semibold rounded-full shadow-md mt-3"
      >
        <h1 class="cursor-pointer">Seguimos en eso !</h1>
      </Link>
    </div>
  );
}
