import { createFileRoute } from "@tanstack/react-router";

import { Footer, Hero, SimplifiedContent } from "@/components/landing";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Protocolo Calistenia Asiática | Desafio 28 Dias" },
      {
        name: "description",
        content:
          "Desafio de calistenia de 28 dias para homens 40+: treinos curtos, progressivos e pensados para preservar as articulações.",
      },
      { property: "og:title", content: "Protocolo Calistenia Asiática – Desafio 28 Dias" },
      {
        property: "og:description",
        content: "Força natural e vitalidade após os 40 em apenas 15 a 20 minutos por dia.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background">
      <Hero />
      <SimplifiedContent />
      <Footer />
    </main>
  );
}
