"use client";

import { useEffect, useRef, useState } from "react";

// Ambient singing-bowl music toggle (music-note button in the header), the same
// pattern as elevatewithswati.com: off by default, nothing downloads until the
// visitor presses play, loops softly at 35% volume.
export default function AmbientSound() {
  const audio = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (audio.current) audio.current.volume = 0.35;
  }, []);

  const toggle = () => {
    const a = audio.current;
    if (!a) return;
    if (a.paused) {
      a.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    } else {
      a.pause();
      setPlaying(false);
    }
  };

  return (
    <>
      <audio ref={audio} loop preload="none">
        <source src="/audio/bowl-music.mp3" type="audio/mpeg" />
      </audio>
      <button
        type="button"
        className={`theme-btn audio-btn${playing ? " playing" : ""}`}
        aria-label={playing ? "Pause calming bowl music" : "Play calming bowl music"}
        title={playing ? "Pause calming bowl music" : "Play calming bowl music"}
        aria-pressed={playing}
        onClick={toggle}
      >
        <i className="fa-solid fa-music" aria-hidden="true" />
      </button>
    </>
  );
}
