import { ArrowDown, Check, ShieldCheck } from "lucide-react";

import heroImage from "@/assets/calistenia-hero.jpg";
import { Button } from "@/components/ui/button";
import { VSLPlayer } from "./VSLPlayer";

export function Hero() {
  return (
    <>
      <div className="bg-crimson px-4 py-2.5 text-center text-[11px] font-bold uppercase text-crimson-foreground sm:text-xs">
        Turma especial 40+ · Acesso imediato ao desafio de 28 dias
      </div>
      <header className="relative isolate overflow-hidden border-b border-border">
        <img
          src={heroImage}
          alt="Atleta maduro executando calistenia em um dojo"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-[64%_center] opacity-55 md:object-center"
          width={1536}
          height={1920}
        />
        <div className="absolute inset-0 -z-10 bg-hero-overlay" />
        <div className="mx-auto max-w-6xl px-5 pb-28 pt-8 sm:px-8 sm:pt-12 lg:pb-36">
          <nav aria-label="Marca" className="flex items-center gap-3">
            <span className="grid size-10 rotate-45 place-items-center border border-gold bg-background/70">
              <span className="-rotate-45 font-display text-lg text-gold">28</span>
            </span>
            <div>
              <p className="font-display text-lg text-foreground">PROTOCOLO CALISTENIA</p>
              <p className="text-[10px] uppercase text-gold">Força após os 40</p>
            </div>
          </nav>

          <div className="max-w-3xl pt-24 sm:pt-32 lg:pt-36">
            <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase text-gold">
              <span className="h-px w-10 bg-gold" /> Método oriental de força natural
            </p>
            <h1 className="font-display text-5xl leading-[0.98] text-foreground sm:text-6xl lg:text-8xl">
              PROTOCOLO
              <span className="block text-gold">CALISTENIA ASIÁTICA</span>
            </h1>
            <p className="mt-5 font-display text-2xl text-foreground sm:text-3xl">
              Desafio 28 Dias
            </p>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Recupere força, firmeza e vitalidade com movimentos controlados, pensados para homens
              40+ que querem treinar sem castigar as articulações.
            </p>
            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm text-foreground/85">
              {["15–20 min por dia", "Sem academia", "Nível iniciante"].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <Check className="size-4 text-gold" /> {item}
                </span>
              ))}
            </div>
            <Button asChild size="lg" className="mt-9 h-14 w-full bg-primary px-8 text-base font-bold uppercase text-primary-foreground shadow-gold hover:bg-gold-bright sm:w-auto">
              <a href="#oferta">Quero iniciar o desafio <ArrowDown className="size-5" /></a>
            </Button>
            <p className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
              <ShieldCheck className="size-4 text-gold" /> Compra protegida · 7 dias de garantia
            </p>
          </div>
        </div>
      </header>
      <section className="relative z-10 -mt-20 px-5 sm:px-8" aria-label="Apresentação em vídeo">
        <VSLPlayer />
      </section>
    </>
  );
}