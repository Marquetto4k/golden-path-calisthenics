import { createFileRoute } from "@tanstack/react-router";

import { Footer, Hero, SimplifiedContent, UrgencyBanner } from "@/components/landing";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Protocolo Calistenia Asiática | Desafio 28 Dias" },
      {
        name: "description",
        content:
          "Aplicativo com um protocolo de calistenia de 28 dias para homens 40+: treinos curtos, progressivos e organizados dia a dia.",
      },
      { property: "og:title", content: "Protocolo Calistenia Asiática – Desafio 28 Dias" },
      {
        property: "og:description",
        content: "Acesse pelo aplicativo seu protocolo de 28 dias, com treinos de 15 a 20 minutos.",
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
      <UrgencyBanner />
      <Hero />
      <SimplifiedContent />
      <Footer />
    </main>
  );
}
