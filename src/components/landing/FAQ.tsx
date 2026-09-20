import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const questions = [
  ["Nunca pratiquei calistenia. Consigo acompanhar?", "Sim. O desafio começa pelos fundamentos e inclui progressões para iniciantes. O objetivo é executar bem antes de avançar."],
  ["Tenho mais de 40 anos e estou parado. É para mim?", "O programa foi pensado especialmente para homens 40+, com sessões curtas e movimentos controlados. Se você possui uma condição médica, consulte um profissional antes de iniciar."],
  ["Preciso comprar equipamentos?", "Não. Os treinos usam principalmente o peso do corpo e objetos simples que você já tem em casa."],
  ["Quanto tempo preciso por dia?", "Reserve de 15 a 20 minutos. A consistência diária vale mais do que sessões longas e exaustivas."],
  ["Como recebo o acesso?", "Após a confirmação do pagamento, as instruções de acesso são enviadas para o e-mail informado na compra."],
  ["E se eu não gostar?", "Você tem 7 dias para conhecer o conteúdo e solicitar o reembolso, conforme os termos da garantia."],
];

export function FAQ() {
  return (
    <section className="bg-background px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
        <div>
          <p className="section-kicker">Sem dúvidas para começar</p>
          <h2 className="section-title">Perguntas<br /><span className="text-gold">frequentes.</span></h2>
        </div>
        <Accordion type="single" collapsible className="border-t border-border">
          {questions.map(([question, answer], index) => (
            <AccordionItem value={`item-${index}`} key={question} className="border-border">
              <AccordionTrigger className="py-6 text-base text-foreground hover:text-gold hover:no-underline">{question}</AccordionTrigger>
              <AccordionContent className="max-w-xl pb-6 leading-relaxed text-muted-foreground">{answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}