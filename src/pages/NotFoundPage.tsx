import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <main className="pt-20 flex-1 flex flex-col items-center justify-center px-6 py-24 text-center">
      <p className="font-label-sm text-sm uppercase tracking-widest text-[#0f5238] mb-3">
        Error 404
      </p>
      <h1 className="font-headline-lg text-3xl md:text-4xl text-[#1c1b1b] mb-4">
        Página no encontrada
      </h1>
      <p className="font-body-md text-base text-[#404943] mb-8 max-w-md">
        Esa ruta no existe en La Sazón de Lola. Vuelve al inicio o explora el menú.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          to="/"
          className="px-6 py-2.5 rounded-lg bg-[#0f5238] text-white font-label-sm text-sm hover:opacity-90 transition-opacity"
        >
          Ir al inicio
        </Link>
        <Link
          to="/menu"
          className="px-6 py-2.5 rounded-lg border border-[#0f5238] text-[#0f5238] font-label-sm text-sm hover:bg-[#0f5238] hover:text-white transition-all"
        >
          Ver menú
        </Link>
      </div>
    </main>
  );
}
