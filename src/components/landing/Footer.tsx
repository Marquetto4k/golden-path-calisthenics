export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 px-5 py-12 text-white sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-6 border-b border-slate-800 pb-8 sm:flex-row sm:items-center">
          <div>
            <p className="font-display text-lg text-white">PROTOCOLO CALISTENIA ASIÁTICA</p>
            <p className="mt-1 text-xs font-bold uppercase text-orange-300">Desafio 28 Dias</p>
          </div>
          <div className="flex flex-wrap gap-5 text-xs text-slate-400">
            <a href="#" className="transition-colors hover:text-white">
              Termos de uso
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Privacidade
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Contato
            </a>
          </div>
        </div>
        <p className="mt-8 max-w-4xl text-[11px] leading-relaxed text-slate-500">
          Este produto não substitui orientação médica ou profissional. Os resultados variam de
          pessoa para pessoa conforme condição física, alimentação, constância e outros fatores
          individuais. Consulte seu médico antes de iniciar qualquer programa de exercícios.
        </p>
        <p className="mt-5 text-[11px] text-slate-600">
          © 2026 Protocolo Calistenia Asiática. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
