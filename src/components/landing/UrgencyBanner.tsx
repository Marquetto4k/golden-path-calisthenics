import { Clock3 } from "lucide-react";
import { useEffect, useState } from "react";

const OFFER_DURATION_SECONDS = 15 * 60;
const OFFER_DEADLINE_KEY = "calistenia-asiatica-offer-deadline";

function formatCountdown(totalSeconds: number) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

export function UrgencyBanner() {
  const [secondsLeft, setSecondsLeft] = useState(OFFER_DURATION_SECONDS);

  useEffect(() => {
    const now = Date.now();
    let deadline = now + OFFER_DURATION_SECONDS * 1000;

    try {
      const savedDeadline = window.sessionStorage.getItem(OFFER_DEADLINE_KEY);
      const parsedDeadline = Number(savedDeadline);

      if (savedDeadline && Number.isFinite(parsedDeadline)) {
        deadline = parsedDeadline;
      } else {
        window.sessionStorage.setItem(OFFER_DEADLINE_KEY, String(deadline));
      }
    } catch {
      // The countdown still works when browser storage is unavailable.
    }

    const updateCountdown = () => {
      const remainingSeconds = Math.max(0, Math.ceil((deadline - Date.now()) / 1000));
      setSecondsLeft(remainingSeconds);
      return remainingSeconds;
    };

    updateCountdown();
    const intervalId = window.setInterval(() => {
      if (updateCountdown() === 0) {
        window.clearInterval(intervalId);
      }
    }, 1000);

    return () => window.clearInterval(intervalId);
  }, []);

  const offerExpired = secondsLeft === 0;

  return (
    <aside
      className="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 px-4 py-3 text-white"
      aria-label="Prazo da oferta promocional"
    >
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-3 gap-y-2 text-center">
        <Clock3 className="size-5 shrink-0" aria-hidden="true" />
        <p className="text-xs font-extrabold uppercase tracking-[0.08em] sm:text-sm sm:tracking-[0.12em]">
          {offerExpired ? "Prazo da oferta promocional encerrado" : "Oferta promocional expira em"}
        </p>
        {!offerExpired && (
          <time
            className="min-w-[4.75rem] rounded-md bg-white px-2.5 py-1 text-base font-black tabular-nums text-orange-600 shadow-sm"
            dateTime={`PT${secondsLeft}S`}
            aria-live="off"
            aria-label={`${Math.floor(secondsLeft / 60)} minutos e ${secondsLeft % 60} segundos restantes`}
          >
            {formatCountdown(secondsLeft)}
          </time>
        )}
      </div>
    </aside>
  );
}
