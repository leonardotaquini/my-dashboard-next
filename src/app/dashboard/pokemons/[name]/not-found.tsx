import { Sidebar } from "@/components";
import Link from "next/link";

export default function PokemonNotFoundPage() {
  return (
        <main className="p-2 w-full text-slate-900 grid place-items-center h-full">
          <section className="flex flex-col space-y-2">
            <h1 className="text-3xl font-bold text-center my-3">404</h1>
            <p className="text-center">Pokemon no encontrado</p>
            <Link
              href="/dashboard/pokemons"
              className="rounded-lg p-2 bg-blue-950 text-white text-center hover:bg-blue-800"
            >
              Volver
            </Link>
          </section>
        </main>
  );
}