import { Flame } from "lucide-react";

export function UrgencyBanner() {
  return (
    <aside
      className="bg-gradient-to-r from-red-800 via-red-600 to-red-800 px-4 py-3 text-white"
      aria-label="Condição promocional"
    >
      <div className="mx-auto flex max-w-5xl items-center justify-center gap-2.5 text-center">
        <Flame className="size-5 shrink-0 text-red-100" aria-hidden="true" />
        <p className="text-xs font-extrabold uppercase tracking-[0.08em] sm:text-sm sm:tracking-[0.12em]">
          Condição especial de lançamento disponível agora
        </p>
      </div>
    </aside>
  );
}
