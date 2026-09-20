import { Clock3, Dumbbell, HeartPulse, ShieldCheck } from "lucide-react";

const benefits = [
  { icon: ShieldCheck, number: "01", title: "Amigo das articulações", text: "Progressões controladas e de baixo impacto para respeitar seu corpo e seu ritmo." },
  { icon: Clock3, number: "02", title: "15–20 minutos", text: "Sessões objetivas que cabem na rotina, sem deslocamento ou equipamentos caros." },
  { icon: Dumbbell, number: "03", title: "Ativação muscular", text: "Movimentos que recrutam o corpo inteiro e constroem força útil para o dia a dia." },
  { icon: HeartPulse, number: "04", title: "Vitalidade 40+", text: "Uma rotina consistente para você se sentir mais disposto, firme e confiante." },
];

export function Benefits() {
  return (
    <section className="border-b border-border bg-background px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="section-kicker">Corpo forte. Método inteligente.</p>
          <h2 className="section-title">Não é sobre treinar mais.<br /><span className="text-gold">É sobre treinar certo.</span></h2>
        </div>
        <div className="mt-14 grid border-l border-t border-border sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map(({ icon: Icon, number, title, text }) => (
            <article key={title} className="relative border-b border-r border-border p-7 transition-colors hover:bg-card sm:p-8">
              <span className="absolute right-5 top-4 font-display text-5xl text-gold/10">{number}</span>
              <Icon className="size-7 text-gold" strokeWidth={1.5} />
              <h3 className="mt-8 font-display text-xl text-foreground">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}