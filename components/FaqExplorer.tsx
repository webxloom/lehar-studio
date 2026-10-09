"use client";

import { useMemo, useRef, useState } from "react";
import { Verse } from "@/components/ui";
import type { FaqGroup } from "@/lib/faqs";

const strip = (html: string) => html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").toLowerCase();

// Port of Aji's FAQ engine: tabbed groups (arrow/Home/End keys), live search
// across every group with a match count, expand/collapse all, and one
// question open at a time.
export default function FaqExplorer({ groups }: { groups: FaqGroup[] }) {
  const [tab, setTab] = useState(0);
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState<Set<string>>(new Set());
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const q = query.trim().toLowerCase();
  const index = useMemo(
    () => groups.map((g, gi) => g.qs.map((x, qi) => ({ id: `${gi}-${qi}`, text: `${x.q} ${strip(x.a)}`.toLowerCase() }))),
    [groups]
  );
  const matches = useMemo(
    () => (q ? new Set(index.flat().filter((x) => x.text.includes(q)).map((x) => x.id)) : null),
    [index, q]
  );

  // Questions currently on screen: the active tab, or every match while searching.
  const visibleIds = matches ? [...matches] : index[tab].map((x) => x.id);
  const allOpen = visibleIds.length > 0 && visibleIds.every((id) => (matches ? true : open.has(id)));

  const selectTab = (i: number, focus = false) => {
    setTab(i);
    setQuery("");
    setOpen(new Set());
    if (focus) tabRefs.current[i]?.focus();
  };

  const toggle = (id: string) =>
    setOpen((prev) => (prev.has(id) ? new Set([...prev].filter((x) => x !== id)) : new Set([id])));

  return (
    <div id="faqui">
      <div className="faqbar">
        <input
          type="search"
          placeholder="Search all questions…"
          aria-label="Search all questions"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          type="button"
          onClick={() => {
            if (matches) return setQuery("");
            setOpen(allOpen ? new Set() : new Set(visibleIds));
          }}
        >
          {matches ? "Clear search" : allOpen ? "Collapse all" : "Expand all"}
        </button>
      </div>

      <div className="tabs" role="tablist" aria-label="Question groups">
        {groups.map((g, i) => (
          <button
            key={g.label}
            ref={(el) => {
              tabRefs.current[i] = el;
            }}
            type="button"
            role="tab"
            id={`t${i}`}
            aria-controls={`p${i}`}
            aria-selected={!matches && i === tab}
            tabIndex={i === tab ? 0 : -1}
            onClick={() => selectTab(i)}
            onKeyDown={(e) => {
              const n = groups.length;
              const next =
                e.key === "ArrowRight" ? (i + 1) % n : e.key === "ArrowLeft" ? (i - 1 + n) % n : e.key === "Home" ? 0 : e.key === "End" ? n - 1 : null;
              if (next !== null) {
                e.preventDefault();
                selectTab(next, true);
              }
            }}
          >
            <i aria-hidden="true" className={`fa-solid ${g.icon} tab-ico`} />
            <em>{g.label}</em>
            <span>{g.qs.length}</span>
          </button>
        ))}
      </div>

      {matches && (
        <p className="faqmsg" role="status">
          {matches.size
            ? `${matches.size} matching question${matches.size > 1 ? "s" : ""} across all groups`
            : "Nothing matched. Try a different word, or ask on the Booking page."}
        </p>
      )}

      {groups.map((g, gi) => {
        // Every question stays in the HTML (so search engines can read all
        // groups); inactive groups and non-matching questions are hidden.
        const items = g.qs.map((x, qi) => ({ ...x, id: `${gi}-${qi}` }));
        const shown = items.filter((x) => (matches ? matches.has(x.id) : gi === tab));
        return (
          <div
            key={g.label}
            className="panel"
            role="tabpanel"
            id={`p${gi}`}
            aria-labelledby={`t${gi}`}
            hidden={shown.length === 0}
          >
            {!matches && g.verse && <Verse lines={[g.verse]} />}
            {items.map((x) => (
              <details
                key={x.id}
                className="q"
                hidden={!shown.includes(x)}
                open={matches ? true : open.has(x.id)}
                onToggle={(e) => {
                  if (matches) return;
                  const isOpen = (e.currentTarget as HTMLDetailsElement).open;
                  if (isOpen !== open.has(x.id)) toggle(x.id);
                }}
              >
                <summary>{x.q}</summary>
                <div className="a" dangerouslySetInnerHTML={{ __html: x.a }} />
              </details>
            ))}
          </div>
        );
      })}
    </div>
  );
}
