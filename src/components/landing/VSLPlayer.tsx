import { createElement, useEffect } from "react";

const PLAYER_ID = "vid-6ab074c7d250b1dbcebbda11";
const PLAYER_SCRIPT_URL =
  "https://scripts.converteai.net/499bd2b5-e461-4778-b159-932ff532a394/players/6ab074c7d250b1dbcebbda11/v4/player.js";

export function VSLPlayer() {
  useEffect(() => {
    const existingScript = document.querySelector<HTMLScriptElement>(
      `script[src="${PLAYER_SCRIPT_URL}"]`,
    );

    if (existingScript) return;

    const script = document.createElement("script");
    script.src = PLAYER_SCRIPT_URL;
    script.async = true;
    document.head.appendChild(script);
  }, []);

  return (
    <div
      className="mx-auto w-full max-w-[400px] overflow-hidden rounded-2xl border border-blue-200 bg-black shadow-[0_28px_70px_rgba(15,23,42,0.2)]"
      aria-label="Apresentação em vídeo do Protocolo Calistenia Asiática"
    >
      {createElement(
        "vturb-smartplayer",
        {
          id: PLAYER_ID,
          style: {
            display: "block",
            margin: "0 auto",
            width: "100%",
            maxWidth: "400px",
          },
        },
        <div
          className="vturb-player-placeholder"
          style={{
            position: "relative",
            width: "100%",
            padding: "178.10760667903526% 0 0",
            zIndex: 0,
            backgroundColor: "black",
          }}
        />,
      )}
    </div>
  );
}
