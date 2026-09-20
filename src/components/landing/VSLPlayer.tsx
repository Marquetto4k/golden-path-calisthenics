import { Play, Volume2 } from "lucide-react";

import vslImage from "@/assets/calistenia-detail.jpg";

export function VSLPlayer() {
  return (
    <div className="relative mx-auto aspect-video w-full max-w-5xl overflow-hidden border border-gold/35 bg-card shadow-vsl">
      <img
        src={vslImage}
        alt="Homem maduro praticando calistenia com controle"
        className="h-full w-full object-cover opacity-65"
        loading="lazy"
        width={1536}
        height={1024}
      />
      <div className="absolute inset-0 bg-vsl-overlay" />
      <div className="absolute inset-0 flex flex-col items-center justify-center px-5 text-center">
        <button
          type="button"
          aria-label="Reproduzir apresentação"
          className="group grid size-18 cursor-pointer place-items-center rounded-full border border-gold/70 bg-primary text-primary-foreground shadow-gold transition duration-300 hover:scale-105 hover:bg-gold-bright focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:size-22"
        >
          <Play className="ml-1 size-7 fill-current sm:size-9" />
        </button>
        <p className="mt-5 font-display text-xl text-foreground sm:text-2xl">
          Assista antes de começar
        </p>
        <p className="mt-1 flex items-center gap-2 text-xs uppercase text-muted-foreground">
          <Volume2 className="size-4 text-gold" /> Ative o som
        </p>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-1 bg-muted">
        <div className="h-full w-[14%] bg-crimson" />
      </div>
    </div>
  );
}