import {
  ArrowRight,
  BadgeCheck,
  Check,
  Clock3,
  HeartPulse,
  LockKeyhole,
  MonitorSmartphone,
  MoonStar,
  Salad,
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
import { CHECKOUT_FALLBACK_URL, CHECKOUT_URL } from "@/config/checkout";

const programItems = [
  "Aplicativo com os 28 treinos organizados dia a dia",
  "Aulas guiadas para executar cada movimento com segurança",
  "Progressões e adaptações pensadas para quem está começando",
  "Calendário visual para acompanhar sua evolução",
  "Timers individuais para acompanhar cada exercício",
  "Checklist diário para registrar cada treino concluído",
];

const transformations = [
  {
    src: resultado01,
    alt: "Comparativo de evolução física masculina com redução abdominal",
    name: "Roberto",
    result: "-3 kg e corpo firme em 21 dias",
    text: "Eu não estava muito acima do peso, mas meu corpo tinha perdido a forma e eu me sentia mole, sem firmeza. Com a Calistenia Asiática, a ativação das fibras profundas mudou meu corpo. Em 21 dias, perdi 3 kg de gordura e a barriga começou a firmar. Voltei a me sentir bem comigo mesmo, com mais força e disposição.",
  },
  {
    src: resultado02,
    alt: "Comparativo de evolução física masculina com mais definição corporal",
    name: "Carlos",
    result: "-13 kg em 21 dias",
    text: "Eu estava acabado, sem energia e com vergonha de tirar a camisa. Achava que ia precisar de horas na academia, mas a Calistenia Asiática mudou tudo. Recuperei minha força treinando dentro do meu próprio quarto. Hoje me sinto outro homem, mais confiante e 13 kg mais leve em apenas 3 semanas. Foi a melhor decisão que tomei!",
  },
  {
    src: resultado03,
    alt: "Comparativo lateral de evolução física masculina",
    name: "Sérgio",
    result: "-8 kg em 21 dias, aos 58 anos",
    text: "Depois dos 50, essa barriga não saía por nada e minhas costas viviam doendo. Os movimentos suaves da Calistenia Asiática foram a minha salvação. As dores diminuíram e eliminei 8 kg em 21 dias. Finalmente estou vendo a barriga secar de novo, sem forçar o corpo e sem impacto.",
  },
  {
    src: resultado04,
    alt: "Comparativo frontal de evolução física masculina",
    name: "Antônio",
    result: "-4 kg em 14 dias",
    text: "Sempre fui desconfiado com promessa rápida, mas as fotos não mentem. Em apenas duas semanas, a ativação das fibras profundas secou minha barriga de um jeito que abdominal nenhum tinha feito. Perdi 4 kg rápido e o inchaço sumiu. Se em 14 dias eu já estou assim, imagina no fim do protocolo!",
  },
];

const bonuses = [
  {
    icon: MoonStar,
    title: "Protocolo Anticortisol Noturno",
    text: "Um passo a passo noturno com hábitos e exercícios leves para ajudar a relaxar, controlar o estresse e dormir melhor.",
  },
  {
    icon: Salad,
    title: "Cardápio Anti-inflamatório",
    text: "Receitas simples e acessíveis para o dia a dia, com foco em alimentação equilibrada e apoio à redução de gordura.",
  },
  {
    icon: HeartPulse,
    title: "Guia do Desempenho Sexual",
    text: "Orientações práticas de hábitos, treino e rotina para favorecer mais disposição, libido e confiança na vida íntima.",
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
    "Após a confirmação do pagamento, você recebe as instruções para entrar no aplicativo e acessar todo o protocolo.",
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

function OfferCard() {
  return (
    <div
      id="oferta"
      className="mx-auto mt-12 w-full max-w-3xl scroll-mt-6 overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-[0_28px_80px_rgba(15,23,42,0.12)]"
    >
      <div className="bg-gradient-to-r from-orange-500 to-orange-400 px-5 py-3 text-center text-xs font-extrabold uppercase tracking-[0.16em] text-white">
        Condição especial de lançamento
      </div>
      <div className="px-6 py-8 text-center sm:px-10 sm:py-10">
        <p className="text-sm font-bold text-slate-500">Acesso completo e imediato ao aplicativo</p>
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
          asChild
          className="mt-7 h-auto min-h-14 w-full rounded-xl bg-blue-600 px-6 py-4 text-sm font-extrabold uppercase text-white shadow-[0_16px_35px_rgba(37,99,235,0.24)] transition hover:-translate-y-0.5 hover:bg-blue-700 sm:text-base"
        >
          <a
            href={CHECKOUT_URL || CHECKOUT_FALLBACK_URL}
            data-checkout-button
            data-checkout-configured={CHECKOUT_URL ? "true" : "false"}
          >
            Quero começar meu desafio <ArrowRight className="size-5" />
          </a>
        </Button>
        <p className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-500">
          <LockKeyhole className="size-4 text-emerald-600" /> Compra segura e acesso imediato
        </p>
      </div>
    </div>
  );
}

function TransformationsSection() {
  return (
    <section
      id="depoimentos"
      className="border-y border-slate-200 bg-[#f4f8ff] px-5 py-16 sm:px-8 sm:py-20"
    >
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

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {transformations.map(({ src, alt, name, result, text }) => (
            <figure
              key={name}
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
              <figcaption className="border-t border-slate-100 px-5 py-5 text-left">
                <div className="flex items-start gap-3">
                  <BadgeCheck className="mt-0.5 size-6 shrink-0 text-blue-600" />
                  <div>
                    <p className="text-lg font-extrabold text-slate-950">{name}</p>
                    <p className="text-sm font-extrabold text-blue-600">{result}</p>
                  </div>
                </div>
                <blockquote className="mt-4 text-sm leading-relaxed text-slate-600">
                  “{text}”
                </blockquote>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mx-auto mt-5 max-w-2xl text-center text-xs leading-relaxed text-slate-500">
          Depoimentos e imagens enviados para esta página. Resultados individuais variam conforme
          ponto de partida, execução, alimentação, frequência e outros fatores pessoais.
        </p>
      </div>
    </section>
  );
}

function BonusesBlock() {
  return (
    <div className="mt-16 border-t border-blue-100 pt-16">
      <div className="mx-auto max-w-3xl text-center">
        <SectionEyebrow>Mais do que os 28 treinos</SectionEyebrow>
        <h3 className="mt-4 text-3xl font-black text-slate-950 sm:text-4xl">
          Você também recebe 3 bônus exclusivos
        </h3>
      </div>
      <div className="mt-9 grid gap-4 lg:grid-cols-3">
        {bonuses.map(({ icon: Icon, title, text }, index) => (
          <article
            key={title}
            className="flex gap-4 rounded-2xl border border-blue-100 bg-white p-5 shadow-sm sm:p-6"
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
  );
}

export function SimplifiedContent() {
  return (
    <div className="bg-white font-sans text-slate-900">
      <TransformationsSection />

      <section className="px-5 py-20 sm:px-8 sm:py-24">
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
              <SectionEyebrow>Força e vitalidade masculina</SectionEyebrow>
              <h2 className="mt-4 text-3xl font-black leading-tight text-slate-950 sm:text-4xl lg:text-5xl">
                Seu corpo ainda sabe responder ao estímulo certo.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
                Os movimentos controlados da Calistenia Asiática trabalham grandes grupos musculares
                e desafiam o corpo como um treino de força, usando apenas o próprio peso.
              </p>
              <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-5 text-sm leading-relaxed text-slate-700 sm:text-base">
                <strong className="text-blue-700">
                  O treino de força pode gerar uma elevação temporária da testosterona após o
                  exercício.
                </strong>{" "}
                Essa resposta varia conforme intensidade, condicionamento, sono, alimentação e saúde
                individual. O foco do protocolo é construir força, firmeza e disposição com
                constância — sem promessas hormonais irreais.
              </div>
              <ul className="mt-6 space-y-3 text-sm font-semibold text-slate-700">
                {[
                  "Ative grandes grupos musculares",
                  "Desenvolva força e controle corporal",
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
        </div>
      </section>

      <section id="conteudo" className="bg-[#f4f8ff] px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <SectionEyebrow>Dentro do aplicativo</SectionEyebrow>
            <h2 className="mt-4 text-3xl font-black leading-tight text-slate-950 sm:text-5xl">
              Seu protocolo de 28 dias organizado em um só lugar.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              Entre no aplicativo, acompanhe o treino do dia e siga o passo a passo. Sem precisar
              pesquisar exercícios ou montar uma rotina sozinho.
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

          <BonusesBlock />
          <OfferCard />
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <div
            id="garantia"
            className="overflow-hidden rounded-3xl bg-slate-950 px-6 py-10 text-white sm:px-10 sm:py-12"
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
        </div>
      </section>
    </div>
  );
}
