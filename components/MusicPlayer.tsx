"use client";

import { useEffect, useRef, useState } from "react";

/** Fired on window whenever any Léhar audio starts, so other players pause. */
export const AUDIO_EVENT = "lehar:audio-play";

const fmt = (t: number) => {
  if (!Number.isFinite(t)) return "0:00";
  const m = Math.floor(t / 60);
  const s = Math.floor(t % 60);
  return `${m}:${String(s).padStart(2, "0")}`;
};

// Small inline player for the Music Therapy sections. With no `src` it shows
// a disabled "track coming soon" state (tracks are being chosen by Aji).
export default function MusicPlayer({ src, title }: { src?: string; title: string }) {
  const audio = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [time, setTime] = useState(0);
  const [dur, setDur] = useState(0);

  useEffect(() => {
    const onOther = (e: Event) => {
      if ((e as CustomEvent).detail !== audio.current) audio.current?.pause();
    };
    window.addEventListener(AUDIO_EVENT, onOther);
    return () => window.removeEventListener(AUDIO_EVENT, onOther);
  }, []);

  const toggle = () => {
    const a = audio.current;
    if (!a) return;
    if (a.paused) {
      a.play()
        .then(() => window.dispatchEvent(new CustomEvent(AUDIO_EVENT, { detail: a })))
        .catch(() => setPlaying(false));
    } else {
      a.pause();
    }
  };

  return (
    <div className={`mplayer${src ? "" : " is-empty"}`}>
      {src && (
        <audio
          ref={audio}
          preload="none"
          src={src}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onEnded={() => setPlaying(false)}
          onTimeUpdate={(e) => setTime(e.currentTarget.currentTime)}
          onLoadedMetadata={(e) => setDur(e.currentTarget.duration)}
        />
      )}
      <button
        type="button"
        className="mplayer-btn"
        onClick={toggle}
        disabled={!src}
        aria-label={src ? `${playing ? "Pause" : "Play"} ${title}` : `${title}: track coming soon`}
      >
        <i className={`fa-solid ${playing ? "fa-pause" : "fa-play"}`} aria-hidden="true" />
      </button>
      <div className="mplayer-body">
        <span className="mplayer-title">
          <i className="fa-solid fa-headphones" aria-hidden="true" /> {src ? title : "Track coming soon"}
        </span>
        <input
          type="range"
          className="mplayer-seek"
          min={0}
          max={dur || 0}
          step={0.1}
          value={time}
          disabled={!src || !dur}
          aria-label={`Seek ${title}`}
          onChange={(e) => {
            if (audio.current) audio.current.currentTime = Number(e.target.value);
          }}
        />
      </div>
      <span className="mplayer-time">{src ? `${fmt(time)} / ${fmt(dur)}` : "--:--"}</span>
    </div>
  );
}
