"use client";

import { useEffect, useRef, useState } from "react";
import { AUDIO_EVENT } from "@/components/MusicPlayer";

// Ambient singing-bowl music toggle (music-note button in the header), the same
// pattern as elevatewithswati.com: off by default, nothing downloads until the
// visitor presses play, loops softly at 35% volume.
export default function AmbientSound() {
  const audio = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (audio.current) audio.current.volume = 0.35;
    // Pause when a Music Therapy track starts, so two sounds never overlap.
    const onOther = (e: Event) => {
      if ((e as CustomEvent).detail !== audio.current && audio.current && !audio.current.paused) {
        audio.current.pause();
        setPlaying(false);
      }
    };
    window.addEventListener(AUDIO_EVENT, onOther);
    return () => window.removeEventListener(AUDIO_EVENT, onOther);
  }, []);

  const toggle = () => {
    const a = audio.current;
    if (!a) return;
    if (a.paused) {
      a.play()
        .then(() => {
          setPlaying(true);
          window.dispatchEvent(new CustomEvent(AUDIO_EVENT, { detail: a }));
        })
        .catch(() => setPlaying(false));
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
