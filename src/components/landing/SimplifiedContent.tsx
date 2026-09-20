import {
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  Check,
  Clock3,
  Dumbbell,
  Gauge,
  LockKeyhole,
  MonitorSmartphone,
  ShieldCheck,
  Sparkles,
  StretchHorizontal,
} from "lucide-react";

import protocoloVitalidade from "@/assets/protocolo-vitalidade.webp";
import resultado01 from "@/assets/resultado-01.webp";
import resultado02 from "@/assets/resultado-02.webp";
import resultado03 from "@/assets/resultado-03.webp";
import resultado04 from "@/assets/resultado-04.webp";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const methodPillars = [
  {
    icon: Gauge,
    title: "Movimentos controlados",
    text: "Você aprende a dominar cada repetição antes de aumentar o desafio.",
  },
  {
    icon: CalendarDays,
    title: "Progressão de 28 dias",
    text: "Uma sequência simples que evolui junto com o seu corpo, sem saltos.",
  },
  {
    icon: Clock3,
    title: "15 a 20 minutos",
    text: "Treinos objetivos que cabem na rotina e ajudam você a manter a constância.",
  },
];

const programItems = [
  "Desafio completo com 28 treinos organizados dia a dia",
  "Aulas guiadas para executar cada movimento com segurança",
  "Progressões e adaptações pensadas para quem está começando",
  "Calendário visual para acompanhar sua evolução",
  "Bônus: guia de mobilidade e alongamento 40+",
  "Bônus: rotina matinal de ativação em 5 minutos",
];

const transformations = [
  {
    src: resultado01,
    alt: "Comparativo de evolução física masculina com redução abdominal",
    title: "Mais firmeza e definição",
  },
  {
    src: resultado02,
    alt: "Comparativo de evolução física masculina com mais definição corporal",
    title: "Força construída com constância",
  },
  {
    src: resultado03,
    alt: "Comparativo lateral de evolução física masculina",
    title: "Mudanças que aparecem no dia a dia",
  },
  {
    src: resultado04,
    alt: "Comparativo frontal de evolução física masculina",
    title: "Um corpo mais ativo e confiante",
  },
];

const bonuses = [
  {
    icon: StretchHorizontal,
    title: "Mobilidade 40+",
    text: "Uma rotina complementar para preparar o corpo e melhorar a qualidade dos movimentos.",
  },
  {
    icon: Sparkles,
    title: "Ativação matinal",
    text: "Uma sequência rápida de 5 minutos para começar o dia com o corpo desperto.",
  },
  {
    icon: CalendarDays,
    title: "Calendário de evolução",
    text: "Marque cada treino concluído e enxergue sua consistência durante os 28 dias.",
  },
  {
    icon: Dumbbell,
    title: "Guia de progressões",
    text: "Adaptações simples para ajustar a intensidade ao seu nível atual.",
  },
];

const questions = [
  [
    "Nunca pratiquei calistenia. Consigo acompanhar?",
    "Sim. O protocolo começa pelos fundamentos e apresenta progressões para iniciantes. Você aprende primeiro a execução e só então avança.",
  ],
  [
    "É indicado para homens com mais de 40 anos?",
    "O programa foi organizado pensando em homens 40+ que desejam voltar a se movimentar com sessões curtas e progressivas. Se você tem alguma condição médica, consulte um profissional antes de iniciar.",
  ],
  [
    "Preciso de academia ou equipamentos?",
    "Não. Os treinos usam principalmente o peso do corpo e objetos simples que normalmente já existem em casa.",
  ],
  [
    "Quanto tempo preciso reservar por dia?",
    "De 15 a 20 minutos. O objetivo é tornar a prática possível de manter, mesmo em uma rotina corrida.",
  ],
  [
    "Como recebo o acesso?",
    "Após a confirmação do pagamento, você recebe as instruções para acessar todo o conteúdo online.",
  ],
  [
    "E se o protocolo não fizer sentido para mim?",
    "Você conta com 7 dias de garantia para conhecer o conteúdo e solicitar o reembolso dentro do prazo.",
  ],
];

function SectionEyebrow({ children }: { children: string }) {
  return (
    <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-blue-600">{children}</p>
  );
}

function ScrollToOfferButton({ label = "Quero começar agora" }: { label?: string }) {
  return (
    <Button
      asChild
      className="h-auto min-h-14 w-full rounded-xl bg-blue-600 px-7 py-4 text-center text-sm font-extrabold uppercase text-white shadow-[0_16px_35px_rgba(37,99,235,0.24)] transition hover:-translate-y-0.5 hover:bg-blue-700 sm:w-auto sm:min-w-80"
    >
      <a href="#oferta">
        {label} <ArrowRight className="size-5" />
      </a>
    </Button>
  );
}

function ProgramPreview() {
  return (
    <div className="relative mx-auto w-full max-w-[430px] px-5 pb-5 pt-3 sm:px-8">
      <div className="absolute inset-x-0 bottom-0 top-10 rounded-[2rem] bg-gradient-to-br from-blue-100 via-white to-orange-100" />
      <div className="relative overflow-hidden rounded-3xl border border-blue-100 bg-slate-950 p-3 shadow-[0_28px_70px_rgba(15,23,42,0.2)]">
        <div className="rounded-[1.2rem] bg-white p-5 text-slate-900">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-blue-600">
                Seu progresso
              </p>
              <p className="mt-1 text-lg font-extrabold">Dia 01 de 28</p>
            </div>
            <div className="grid size-11 place-items-center rounded-full bg-blue-600 text-sm font-black text-white">
              28
            </div>
          </div>
          <div className="mt-5 rounded-2xl bg-slate-950 p-5 text-white">
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-orange-300">
              Treino de hoje
            </p>
            <p className="mt-2 text-xl font-extrabold">Fundamentos e controle</p>
            <div className="mt-5 flex items-center justify-between text-xs text-slate-300">
              <span className="flex items-center gap-2">
                <Clock3 className="size-4 text-orange-300" /> 16 minutos
              </span>
              <span>Iniciante</span>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-4 gap-2">
            {[1, 2, 3, 4].map((day, index) => (
              <div
                key={day}
                className={`rounded-xl py-3 text-center text-xs font-black ${
                  index === 0 ? "bg-blue-600 text-white" : "bg-blue-50 text-blue-700"
                }`}
              >
                D{day}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function OfferCard({ compact = false }: { compact?: boolean }) {
  return (
    <div
      id={compact ? undefined : "oferta"}
      className={`mx-auto w-full max-w-3xl overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-[0_28px_80px_rgba(15,23,42,0.12)] ${compact ? "mt-12" : "mt-16"}`}
    >
      <div className="bg-gradient-to-r from-orange-500 to-orange-400 px-5 py-3 text-center text-xs font-extrabold uppercase tracking-[0.16em] text-white">
        Condição especial de lançamento
      </div>
      <div className="px-6 py-8 text-center sm:px-10 sm:py-10">
        <p className="text-sm font-bold text-slate-500">Acesso completo e imediato</p>
        <h3 className="mt-2 text-2xl font-black text-slate-950 sm:text-3xl">
          Protocolo Calistenia Asiática
        </h3>
        <p className="mt-1 text-sm font-bold text-blue-600">Desafio 28 Dias</p>
        <div className="mt-7 flex items-start justify-center text-blue-600">
          <span className="mt-2 text-xl font-black">R$</span>
          <span className="text-7xl font-black leading-none">37</span>
          <span className="mt-2 text-lg font-black">,00</span>
        </div>
        <p className="mt-2 text-sm text-slate-500">Pagamento único · Sem mensalidade</p>
        <Button
          type="button"
          data-checkout-button
          className="mt-7 h-auto min-h-14 w-full rounded-xl bg-blue-600 px-6 py-4 text-sm font-extrabold uppercase text-white shadow-[0_16px_35px_rgba(37,99,235,0.24)] transition hover:-translate-y-0.5 hover:bg-blue-700 sm:text-base"
        >
          Quero começar meu desafio <ArrowRight className="size-5" />
        </Button>
        <p className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-500">
          <LockKeyhole className="size-4 text-emerald-600" /> Compra segura e acesso imediato
        </p>
      </div>
    </div>
  );
}

export function SimplifiedContent() {
  return (
    <div className="bg-white font-sans text-slate-900">
      <section className="px-5 pb-20 pt-28 sm:px-8 sm:pb-24 sm:pt-32">
        <div className="mx-auto max-w-5xl">
          <div className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
            <div className="relative">
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-blue-100 to-orange-100" />
              <img
                src={protocoloVitalidade}
                alt="Casal atlético representando vitalidade, força e confiança"
                className="relative aspect-[4/3] w-full rounded-2xl object-cover shadow-xl"
                loading="lazy"
                width={1000}
                height={750}
              />
            </div>
            <div>
              <SectionEyebrow>O mecanismo do protocolo</SectionEyebrow>
              <h2 className="mt-4 text-3xl font-black leading-tight text-slate-950 sm:text-4xl lg:text-5xl">
                A Calistenia Asiática reacende sua força, sua energia e sua confiança.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
                Seu corpo não precisa de um treino impossível. Ele precisa do estímulo certo, na
                ordem certa e com uma progressão que você consiga manter.
              </p>
              <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-5 text-sm leading-relaxed text-slate-700 sm:text-base">
                <strong className="text-blue-700">Sem horas de academia ou aparelhos caros.</strong>{" "}
                O método combina movimentos com o peso do corpo, controle da execução e uma
                sequência prática de 28 dias.
              </div>
              <ul className="mt-6 space-y-3 text-sm font-semibold text-slate-700">
                {[
                  "Comece no seu nível atual",
                  "Avance sem pular etapas",
                  "Construa uma rotina que cabe no seu dia",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="grid size-6 shrink-0 place-items-center rounded-full bg-emerald-100">
                      <Check className="size-4 text-emerald-700" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-16 text-center sm:mt-20">
            <SectionEyebrow>Simples de entender. Possível de seguir.</SectionEyebrow>
            <h3 className="mx-auto mt-3 max-w-2xl text-3xl font-black text-slate-950 sm:text-4xl">
              Um caminho claro do primeiro ao último treino
            </h3>
            <div className="mt-9 grid gap-4 md:grid-cols-3">
              {methodPillars.map(({ icon: Icon, title, text }) => (
                <article
                  key={title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-left"
                >
                  <div className="grid size-11 place-items-center rounded-xl bg-blue-100 text-blue-700">
                    <Icon className="size-6" />
                  </div>
                  <h4 className="mt-5 text-lg font-extrabold text-slate-950">{title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p>
                </article>
              ))}
            </div>
            <div className="mt-9 flex justify-center">
              <ScrollToOfferButton />
            </div>
          </div>
        </div>
      </section>

      <section id="conteudo" className="bg-[#f4f8ff] px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <SectionEyebrow>O que você vai receber</SectionEyebrow>
            <h2 className="mt-4 text-3xl font-black leading-tight text-slate-950 sm:text-5xl">
              Seu plano de 28 dias já está pronto.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              Abra, acompanhe o treino do dia e siga o passo a passo. Sem precisar pesquisar
              exercícios ou montar uma rotina sozinho.
            </p>
          </div>

          <div className="mt-12 grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            <ul className="space-y-3">
              {programItems.map((item, index) => (
                <li
                  key={item}
                  className="flex gap-4 rounded-2xl border border-blue-100 bg-white p-4 text-sm font-semibold leading-relaxed text-slate-700 shadow-sm sm:p-5 sm:text-base"
                >
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-blue-600 text-xs font-black text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="pt-1">{item}</span>
                </li>
              ))}
            </ul>
            <div>
              <ProgramPreview />
              <p className="mt-5 flex items-center justify-center gap-2 text-center text-sm font-bold text-slate-600">
                <MonitorSmartphone className="size-5 text-blue-600" /> Acesse pelo celular,
                computador ou tablet
              </p>
            </div>
          </div>

          <OfferCard />
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-3 flex justify-center gap-1 text-orange-400" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, index) => (
                <span key={index}>★</span>
              ))}
            </div>
            <SectionEyebrow>O poder da constância</SectionEyebrow>
            <h2 className="mt-4 text-3xl font-black leading-tight text-slate-950 sm:text-5xl">
              Evoluções que inspiram a começar
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              Quando existe um plano simples e uma rotina possível, cada treino concluído se torna
              parte de uma mudança maior.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {transformations.map(({ src, alt, title }) => (
              <figure
                key={title}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_16px_45px_rgba(15,23,42,0.09)]"
              >
                <img
                  src={src}
                  alt={alt}
                  className="h-auto w-full"
                  loading="lazy"
                  width={1000}
                  height={823}
                />
                <figcaption className="flex items-center gap-2 border-t border-slate-100 px-5 py-4 text-sm font-extrabold text-slate-800">
                  <BadgeCheck className="size-5 shrink-0 text-blue-600" /> {title}
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mx-auto mt-5 max-w-2xl text-center text-xs leading-relaxed text-slate-500">
            Resultados individuais variam conforme ponto de partida, execução, alimentação,
            frequência e outros fatores pessoais.
          </p>

          <div className="mt-20 border-t border-slate-200 pt-20">
            <div className="mx-auto max-w-3xl text-center">
              <SectionEyebrow>Mais do que os 28 treinos</SectionEyebrow>
              <h3 className="mt-4 text-3xl font-black text-slate-950 sm:text-4xl">
                Você também recebe 4 bônus exclusivos
              </h3>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {bonuses.map(({ icon: Icon, title, text }, index) => (
                <article
                  key={title}
                  className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6"
                >
                  <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-blue-100 text-blue-700">
                    <Icon className="size-6" />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-orange-500">
                      Bônus {index + 1}
                    </p>
                    <h4 className="mt-1 text-lg font-extrabold text-slate-950">{title}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div
            id="garantia"
            className="mt-20 overflow-hidden rounded-3xl bg-slate-950 px-6 py-10 text-white sm:px-10 sm:py-12"
          >
            <div className="grid items-center gap-8 md:grid-cols-[auto_1fr] md:gap-10">
              <div className="mx-auto grid size-28 place-items-center rounded-full border-4 border-orange-300 bg-orange-400 text-center text-slate-950 shadow-[0_0_0_8px_rgba(251,146,60,0.12)] md:mx-0">
                <div>
                  <span className="block text-4xl font-black leading-none">7</span>
                  <span className="text-xs font-black uppercase">dias</span>
                </div>
              </div>
              <div className="text-center md:text-left">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-orange-300">
                  Garantia incondicional
                </p>
                <h3 className="mt-3 text-3xl font-black sm:text-4xl">
                  Experimente o protocolo sem risco.
                </h3>
                <p className="mt-4 max-w-2xl leading-relaxed text-slate-300">
                  Você terá 7 dias para acessar o conteúdo e conhecer a proposta. Se não fizer
                  sentido para você, basta solicitar o reembolso dentro do prazo.
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-20 max-w-4xl">
            <div className="text-center">
              <SectionEyebrow>Antes de começar</SectionEyebrow>
              <h3 className="mt-4 text-3xl font-black text-slate-950 sm:text-4xl">
                Perguntas frequentes
              </h3>
            </div>
            <Accordion
              type="single"
              collapsible
              className="mt-9 overflow-hidden rounded-2xl border border-slate-200 px-5 sm:px-7"
            >
              {questions.map(([question, answer], index) => (
                <AccordionItem value={`item-${index}`} key={question} className="border-slate-200">
                  <AccordionTrigger className="py-5 text-left text-base font-extrabold text-slate-900 hover:text-blue-600 hover:no-underline">
                    {question}
                  </AccordionTrigger>
                  <AccordionContent className="max-w-3xl pb-5 leading-relaxed text-slate-600">
                    {answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <OfferCard compact />

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-semibold text-slate-500">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="size-4 text-emerald-600" /> 7 dias de garantia
            </span>
            <span className="flex items-center gap-1.5">
              <LockKeyhole className="size-4 text-emerald-600" /> Pagamento protegido
            </span>
            <span className="flex items-center gap-1.5">
              <MonitorSmartphone className="size-4 text-emerald-600" /> Acesso online
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
