import { Sidebar } from "@/components";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="bg-slate-100 overflow-y-scroll w-screen h-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white">
      <div className="flex">
        <Sidebar />

        <main className="p-2 w-full text-slate-900 grid place-items-center">
          <section className="flex flex-col space-y-2">
            <h1 className="text-3xl font-bold text-center my-3">404</h1>
            <p className="text-center">Pagina no encontrada</p>
            <Link
              href="/dashboard/main"
              className="rounded-lg p-2 bg-blue-950 text-white text-center hover:bg-blue-800"
            >
              Volver al inicio
            </Link>
          </section>
        </main>
      </div>
    </div>
  );
}
