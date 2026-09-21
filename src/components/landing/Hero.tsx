import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CHECKOUT_FALLBACK_URL, CHECKOUT_URL } from "@/config/checkout";
import { VSLPlayer } from "./VSLPlayer";

export function Hero({ showCallToAction = false }: { showCallToAction?: boolean }) {
  return (
    <header className="bg-gradient-to-b from-blue-50 via-white to-white px-5 pb-16 pt-10 text-slate-950 sm:px-8 sm:pb-20 sm:pt-14">
      <div className="mx-auto max-w-5xl text-center">
        <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-blue-600 sm:text-sm">
          Protocolo Calistenia Asiática · Desafio 28 Dias
        </p>
        <h1 className="mx-auto mt-4 max-w-4xl text-4xl font-black leading-[1.05] sm:text-5xl lg:text-6xl">
          Recupere sua <span className="text-blue-600">força e firmeza</span> depois dos 40 com a{" "}
          <span className="text-orange-500">Calistenia Asiática</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
          Acesse pelo aplicativo treinos progressivos de 15 a 20 minutos para fazer em casa, mesmo
          que você esteja parado ou nunca tenha praticado calistenia.
        </p>

        <div className="mt-8 sm:mt-10">
          <VSLPlayer />
        </div>

        {showCallToAction && (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-700">
            <Button
              asChild
              size="lg"
              className="mt-7 h-auto min-h-14 w-full rounded-xl bg-blue-600 px-8 py-4 text-sm font-extrabold uppercase text-white shadow-[0_16px_35px_rgba(37,99,235,0.24)] transition hover:-translate-y-0.5 hover:bg-blue-700 sm:w-auto sm:min-w-80 sm:text-base"
            >
              <a
                href={CHECKOUT_URL || CHECKOUT_FALLBACK_URL}
                data-checkout-button
                data-checkout-configured={CHECKOUT_URL ? "true" : "false"}
              >
                Quero começar agora <ArrowRight className="size-5" />
              </a>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}
