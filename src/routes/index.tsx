import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { Hero, SimplifiedContent, UrgencyBanner } from "@/components/landing";

const CONTENT_DELAY_SECONDS = 5 * 60 + 40;
const CONTENT_UNLOCK_STORAGE_KEY = "calisthenia-sales-content-unlocked-v1";

interface VturbPlayerInstance {
  on: (event: "timeupdate", callback: () => void) => void;
  off?: (event: "timeupdate", callback: () => void) => void;
  smartAutoPlay?: boolean;
  video?: {
    currentTime?: number;
  };
}

interface VturbSmartPlayer {
  instances?: VturbPlayerInstance[];
}

function getVturbPlayer() {
  return (window as Window & { smartplayer?: VturbSmartPlayer }).smartplayer?.instances?.[0];
}

function wasContentUnlocked() {
  try {
    return window.localStorage.getItem(CONTENT_UNLOCK_STORAGE_KEY) === "true";
  } catch {
    return false;
  }
}

function rememberContentUnlock() {
  try {
    window.localStorage.setItem(CONTENT_UNLOCK_STORAGE_KEY, "true");
  } catch {
    // The delay still works when localStorage is unavailable, but it cannot persist.
  }
}

function useDelayedContent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (wasContentUnlocked()) {
      setIsVisible(true);
      return;
    }

    let cancelled = false;
    let unlocked = false;
    let retryId: number | undefined;
    let player: VturbPlayerInstance | undefined;

    const unlockContent = () => {
      if (cancelled || unlocked) return;

      unlocked = true;
      rememberContentUnlock();
      setIsVisible(true);
    };

    const handleTimeUpdate = () => {
      if (!player || player.smartAutoPlay) return;

      const currentTime = Number(player.video?.currentTime ?? 0);
      if (currentTime < CONTENT_DELAY_SECONDS) return;

      player.off?.("timeupdate", handleTimeUpdate);
      unlockContent();
    };

    let attempts = 0;
    const connectToPlayer = () => {
      if (cancelled) return;

      player = getVturbPlayer();
      if (player) {
        player.on("timeupdate", handleTimeUpdate);
        handleTimeUpdate();
        return;
      }

      attempts += 1;
      if (attempts < 60) {
        retryId = window.setTimeout(connectToPlayer, 1000);
      }
    };

    connectToPlayer();

    return () => {
      cancelled = true;
      if (retryId !== undefined) window.clearTimeout(retryId);
      player?.off?.("timeupdate", handleTimeUpdate);
    };
  }, []);

  return isVisible;
}

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
  const showDelayedContent = useDelayedContent();

  return (
    <main className="min-h-screen overflow-x-hidden bg-background">
      <UrgencyBanner />
      <Hero showCallToAction={showDelayedContent} />
      {showDelayedContent && (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
          <SimplifiedContent />
        </div>
      )}
    </main>
  );
}
