"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export type Testimonial = { initials: string; name: string; role?: string; paras: string[] };

// Port of Aji's stacked coverflow: prev/next, dots, swipe, arrow keys,
// 7s auto-advance (paused on hover/focus/offscreen and for reduced motion),
// and a "Read full story" dialog when a quote overflows its card.
export default function Testimonials({ items }: { items: Testimonial[] }) {
  const n = items.length;
  const [cur, setCur] = useState(0);
  const [over, setOver] = useState<boolean[]>([]);
  const [open, setOpen] = useState<number | null>(null);
  const secRef = useRef<HTMLElement>(null);
  const quoteRefs = useRef<(HTMLQuoteElement | null)[]>([]);
  const dlgRef = useRef<HTMLDialogElement>(null);
  const timer = useRef<ReturnType<typeof setInterval> | undefined>(undefined);
  const x0 = useRef<number | null>(null);

  const go = useCallback((i: number) => setCur(((i % n) + n) % n), [n]);
  const stop = () => clearInterval(timer.current);
  const start = useCallback(() => {
    clearInterval(timer.current);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    timer.current = setInterval(() => setCur((c) => (c + 1) % n), 7000);
  }, [n]);

  // Flag quotes that overflow their card (shows "Read full story").
  useEffect(() => {
    const measure = () =>
      setOver(quoteRefs.current.map((q) => (q ? q.scrollHeight > q.clientHeight + 4 : false)));
    measure();
    const t = setTimeout(measure, 600);
    window.addEventListener("resize", measure);
    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", measure);
    };
  }, []);

  // Auto-advance only while the section is on screen.
  useEffect(() => {
    const sec = secRef.current;
    if (!sec || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver((e) => (e[0].isIntersecting ? start() : stop()));
    io.observe(sec);
    return () => {
      io.disconnect();
      stop();
    };
  }, [start]);

  useEffect(() => {
    const d = dlgRef.current;
    if (!d) return;
    if (open !== null && !d.open) d.showModal?.();
    if (open === null && d.open) d.close();
  }, [open]);

  return (
    <section
      ref={secRef}
      className="sec alt"
      id="testimonials"
      aria-labelledby="t-h"
      onMouseEnter={stop}
      onMouseLeave={start}
      onFocus={stop}
    >
      <div className="wrap reveal">
        <p className="eyebrow">Kind words</p>
        <h2 id="t-h">Felt, Not Just Heard</h2>
        <div
          className="t-stage"
          aria-roledescription="carousel"
          aria-label="Testimonials"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "ArrowRight") {
              e.preventDefault();
              go(cur + 1);
            }
            if (e.key === "ArrowLeft") {
              e.preventDefault();
              go(cur - 1);
            }
          }}
          onTouchStart={(e) => {
            x0.current = e.touches[0].clientX;
            stop();
          }}
          onTouchEnd={(e) => {
            if (x0.current === null) return;
            const dx = e.changedTouches[0].clientX - x0.current;
            if (Math.abs(dx) > 40) go(cur + (dx < 0 ? 1 : -1));
            x0.current = null;
          }}
        >
          <button type="button" className="t-btn t-prev" aria-label="Previous testimonial" onClick={() => { go(cur - 1); stop(); }}>
            <i className="fa-solid fa-arrow-left" aria-hidden="true" />
          </button>
          {items.map((t, i) => {
            let d = (((i - cur) % n) + n) % n;
            if (d > n / 2) d -= n;
            const ad = Math.abs(d);
            const cls = ["glass-card", "t-card", d === 0 && "is-active", ad > 1 && "hid", over[i] && "over"]
              .filter(Boolean)
              .join(" ");
            return (
              <article
                key={t.name}
                className={cls}
                role="group"
                aria-roledescription="slide"
                aria-label={`Testimonial ${i + 1} of ${n}`}
                aria-hidden={ad > 0}
                style={{ "--d": d, "--ad": ad } as React.CSSProperties}
                onClick={() => {
                  if (d !== 0 && ad <= 1) {
                    go(i);
                    stop();
                  }
                }}
              >
                <span className="t-mark" aria-hidden="true">
                  &ldquo;
                </span>
                <blockquote className="t-quote" ref={(el) => { quoteRefs.current[i] = el; }}>
                  {t.paras.map((p, k) => (
                    <p key={k}>{p}</p>
                  ))}
                </blockquote>
                <button className="t-more" type="button" tabIndex={d === 0 ? 0 : -1} onClick={() => setOpen(i)}>
                  Read full story
                </button>
                <footer className="t-by">
                  <span className="t-ava" aria-hidden="true">
                    {t.initials}
                  </span>
                  <span>
                    <b className="t-name">{t.name}</b>
                    {t.role && <span className="t-role">{t.role}</span>}
                  </span>
                </footer>
              </article>
            );
          })}
          <button type="button" className="t-btn t-next" aria-label="Next testimonial" onClick={() => { go(cur + 1); stop(); }}>
            <i className="fa-solid fa-arrow-right" aria-hidden="true" />
          </button>
        </div>
        <div className="t-dots">
          {items.map((t, i) => (
            <button
              key={t.name}
              type="button"
              className="t-dot"
              aria-label={`Go to testimonial ${i + 1}`}
              aria-current={i === cur}
              onClick={() => {
                go(i);
                stop();
              }}
            />
          ))}
        </div>
      </div>
      <svg className="wave-div" viewBox="0 0 600 28" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 14 Q37 0 75 14 T150 14 T225 14 T300 14 T375 14 T450 14 T525 14 T600 14" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>
      <dialog
        className="t-dlg"
        ref={dlgRef}
        aria-label="Full testimonial"
        onClose={() => setOpen(null)}
        onClick={(e) => {
          if (e.target === e.currentTarget) setOpen(null);
        }}
      >
        <div className="t-dlg-in">
          <button type="button" className="t-close" aria-label="Close" onClick={() => setOpen(null)}>
            &times;
          </button>
          {open !== null && (
            <>
              <blockquote className="t-quote">
                {items[open].paras.map((p, k) => (
                  <p key={k}>{p}</p>
                ))}
              </blockquote>
              <div className="t-by">
                <span className="t-ava" aria-hidden="true">
                  {items[open].initials}
                </span>
                <span>
                  <b className="t-name">{items[open].name}</b>
                  {items[open].role && <span className="t-role">{items[open].role}</span>}
                </span>
              </div>
            </>
          )}
        </div>
      </dialog>
    </section>
  );
}
