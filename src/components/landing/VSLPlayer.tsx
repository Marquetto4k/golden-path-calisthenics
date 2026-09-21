import { Play, Volume2 } from "lucide-react";

import vslImage from "@/assets/calistenia-detail.jpg";
import { Button } from "@/components/ui/button";

export function VSLPlayer() {
  return (
    <div className="relative mx-auto aspect-video w-full max-w-4xl overflow-hidden rounded-2xl border border-blue-200 bg-slate-950 shadow-[0_28px_70px_rgba(15,23,42,0.2)]">
      <img
        src={vslImage}
        alt="Homem maduro praticando calistenia com controle"
        className="h-full w-full object-cover opacity-70"
        loading="lazy"
        width={1536}
        height={1024}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-slate-950/10" />
      <div className="absolute inset-0 flex flex-col items-center justify-center px-5 text-center">
        <Button
          type="button"
          variant="default"
          size="icon"
          aria-label="Reproduzir apresentação"
          className="group size-18 rounded-full border-4 border-white/80 bg-blue-600 text-white shadow-[0_14px_35px_rgba(37,99,235,0.38)] transition duration-300 hover:scale-105 hover:bg-blue-700 sm:size-22"
        >
          <Play className="ml-1 size-7 fill-current sm:size-9" />
        </Button>
        <p className="mt-5 text-xl font-extrabold text-white sm:text-2xl">
          Assista antes de começar
        </p>
        <p className="mt-1 flex items-center gap-2 text-xs font-bold uppercase text-slate-300">
          <Volume2 className="size-4 text-orange-300" /> Ative o som
        </p>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-1 bg-white/20">
        <div className="h-full w-[14%] bg-orange-400" />
      </div>
    </div>
  );
}
