import { Check } from "lucide-react";

const phases = [
  { days: "DIAS 01–07", title: "Despertar", text: "Mobilidade, consciência corporal e domínio dos fundamentos." },
  { days: "DIAS 08–14", title: "Construir", text: "Ativação progressiva de peito, costas, pernas e centro do corpo." },
  { days: "DIAS 15–21", title: "Fortalecer", text: "Combinações mais completas para ampliar resistência e controle." },
  { days: "DIAS 22–28", title: "Consolidar", text: "Rotina integrada para transformar disciplina em um novo padrão." },
];

export function ChallengePhases() {
  return (
    <section className="bg-card px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
        <div>
          <p className="section-kicker">O protocolo completo</p>
          <h2 className="section-title">28 dias.<br /><span className="text-gold">4 fases.</span><br />Uma decisão.</h2>
          <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
            Cada semana prepara seu corpo para a próxima. Você avança sem saltos, com uma direção clara do primeiro ao último treino.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-foreground/80">
            {["Aulas passo a passo", "Calendário de acompanhamento", "Versões para iniciantes"].map((item) => (
              <li key={item} className="flex items-center gap-3"><Check className="size-4 text-gold" /> {item}</li>
            ))}
          </ul>
        </div>
        <ol className="border-t border-border">
          {phases.map((phase, index) => (
            <li key={phase.title} className="grid gap-3 border-b border-border py-7 sm:grid-cols-[120px_1fr] sm:gap-7">
              <div className="text-xs font-bold text-gold">{phase.days}</div>
              <div>
                <h3 className="font-display text-2xl text-foreground"><span className="mr-3 text-crimson">{String(index + 1).padStart(2, "0")}</span>{phase.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{phase.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}