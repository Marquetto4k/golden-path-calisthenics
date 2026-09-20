export function Footer() {
  return (
    <footer className="border-t border-border bg-card px-5 py-12 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-6 border-b border-border pb-8 sm:flex-row sm:items-center">
          <div>
            <p className="font-display text-lg text-foreground">PROTOCOLO CALISTENIA ASIÁTICA</p>
            <p className="mt-1 text-xs uppercase text-gold">Desafio 28 Dias</p>
          </div>
          <div className="flex gap-5 text-xs text-muted-foreground">
            <a href="#" className="transition-colors hover:text-gold">Termos de uso</a>
            <a href="#" className="transition-colors hover:text-gold">Privacidade</a>
            <a href="#" className="transition-colors hover:text-gold">Contato</a>
          </div>
        </div>
        <p className="mt-8 max-w-4xl text-[11px] leading-relaxed text-muted-foreground/70">
          Este produto não substitui orientação médica ou profissional. Os resultados variam de pessoa para pessoa conforme condição física, alimentação, constância e outros fatores individuais. Consulte seu médico antes de iniciar qualquer programa de exercícios.
        </p>
        <p className="mt-5 text-[11px] text-muted-foreground/60">© 2026 Protocolo Calistenia Asiática. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}