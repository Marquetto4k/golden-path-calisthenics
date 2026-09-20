import { ArrowRight, Check, LockKeyhole, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";

export function OfferSection() {
  return (
    <section id="oferta" className="relative overflow-hidden border-y border-gold/20 bg-offer px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="section-kicker justify-center">Condição especial de lançamento</p>
          <h2 className="section-title">Comece hoje sua<br /><span className="text-gold">transformação de 28 dias.</span></h2>
        </div>
        <div className="mx-auto mt-12 max-w-2xl border border-gold/40 bg-card p-6 shadow-offer sm:p-10">
          <div className="grid gap-8 sm:grid-cols-[1fr_auto] sm:items-end">
            <div>
              <p className="text-xs font-bold uppercase text-gold">Acesso completo e imediato</p>
              <h3 className="mt-3 font-display text-3xl text-foreground">Protocolo Calistenia Asiática</h3>
              <ul className="mt-6 space-y-3 text-sm text-foreground/85">
                {["Desafio completo de 28 dias", "Treinos guiados de 15–20 minutos", "Calendário de evolução", "Bônus: guia de mobilidade 40+", "Bônus: rotina matinal de 5 minutos"].map((item) => (
                  <li key={item} className="flex gap-3"><Check className="mt-0.5 size-4 shrink-0 text-gold" /> {item}</li>
                ))}
              </ul>
            </div>
            <div className="border-t border-border pt-6 sm:border-l sm:border-t-0 sm:pl-8 sm:pt-0">
              <p className="text-sm text-muted-foreground">Pagamento único</p>
              <div className="mt-1 flex items-start text-gold">
                <span className="mt-2 font-display text-xl">R$</span>
                <span className="font-display text-7xl leading-none">37</span>
                <span className="mt-3 text-sm">,00</span>
              </div>
              <p className="mt-2 text-xs text-muted-foreground">Sem mensalidade</p>
            </div>
          </div>
          <Button className="mt-9 h-auto min-h-16 w-full whitespace-normal bg-primary px-5 py-4 text-center text-sm font-bold uppercase text-primary-foreground shadow-gold hover:bg-gold-bright sm:text-base">
            Sim, quero começar agora <ArrowRight className="size-5" />
          </Button>
          <p className="mt-4 flex items-center justify-center gap-2 text-center text-xs text-muted-foreground"><LockKeyhole className="size-3.5" /> Ambiente de compra seguro</p>
        </div>
        <div className="mx-auto mt-8 flex max-w-lg items-center gap-5">
          <ShieldCheck className="size-14 shrink-0 text-gold" strokeWidth={1.3} />
          <p className="text-sm leading-relaxed text-muted-foreground"><strong className="block text-foreground">Garantia incondicional de 7 dias</strong> Experimente o protocolo. Se não fizer sentido para você, basta solicitar o reembolso dentro do prazo.</p>
        </div>
      </div>
    </section>
  );
}