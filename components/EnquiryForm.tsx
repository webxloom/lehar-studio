"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Img } from "@/components/ui";
import { STUDIO, waLink } from "@/lib/site";

const SERVICES = [
  {
    value: "group",
    label: "Group Sound Bath",
    hint: "Preferred dates, venue and location, approximate group size, and the nature of the group.",
  },
  {
    value: "one",
    label: "One-to-One Immersion",
    hint: "What has led you here, what you would like to focus on, and any health considerations or sound sensitivities.",
  },
  {
    value: "corp",
    label: "Corporate & Retreat",
    hint: "Your organisation or retreat, dates, venue, number of participants, and the purpose of the session.",
  },
  {
    value: "music",
    label: "Music Therapy",
    hint: "What has led you here and what you would like the sessions to support.",
  },
  { value: "other", label: "Not sure yet", hint: "Tell us a little about yourself and what you are looking for." },
];

function todayIso() {
  const d = new Date();
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
  return d.toISOString().slice(0, 10);
}

function fmt(v: string) {
  if (!v) return "";
  const [y, m, d] = v.split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
}

// Aji's enquiry flow: builds a ready-written message and opens WhatsApp (or
// email). Nothing is stored on the site. `?service=` preselects the service.
export default function EnquiryForm() {
  const params = useSearchParams();
  const initial = SERVICES.some((s) => s.value === params.get("service")) ? params.get("service")! : "group";
  const [svc, setSvc] = useState(initial);
  const [name, setName] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [details, setDetails] = useState("");
  const today = todayIso();
  const service = SERVICES.find((s) => s.value === svc) ?? SERVICES[0];

  const message = () => {
    const a = fmt(from);
    const b = fmt(to);
    const dates = a ? (b && b !== a ? `${a} to ${b}` : a) : "to be discussed";
    return `Hello Kavitha, I would like to enquire about: ${service.label}.\n\nName: ${name}\nPreferred dates: ${dates}\n\n${details}`;
  };

  return (
    <div className="glass-card no-lift form-card">
      <div className="form-side">
        <h3 style={{ marginTop: 0 }}>Send your enquiry</h3>
        <p className="mini">
          This opens a ready-written WhatsApp message (or an email) that you can edit before sending. Nothing is stored
          on this site.
        </p>
        <form
          className="form"
          noValidate
          onSubmit={(e) => {
            e.preventDefault();
            window.open(waLink(message()), "_blank", "noopener");
          }}
        >
          <div className="row">
            <div>
              <label htmlFor="svc">I am interested in</label>
              <select id="svc" name="svc" value={svc} onChange={(e) => setSvc(e.target.value)}>
                {SERVICES.map((s) => (
                  <option key={s.value} value={s.value}>
                    {s.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="nm">Your name</label>
              <input id="nm" name="name" autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
          </div>
          <div>
            <label htmlFor="dfrom">Preferred dates</label>
            <div className="row dates">
              <div className="dwrap">
                <span className="dlab">From</span>
                <input
                  id="dfrom"
                  name="dfrom"
                  type="date"
                  min={today}
                  value={from}
                  onChange={(e) => {
                    setFrom(e.target.value);
                    if (to && to < e.target.value) setTo("");
                  }}
                />
              </div>
              <div className="dwrap">
                <span className="dlab">To (optional)</span>
                <input
                  id="dto"
                  name="dto"
                  type="date"
                  aria-label="Preferred dates, to (optional)"
                  min={from || today}
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="dl">What would you like to share?</label>
            <textarea
              id="dl"
              name="details"
              rows={5}
              placeholder={service.hint}
              value={details}
              onChange={(e) => setDetails(e.target.value)}
            />
          </div>
          <div className="actions">
            <button className="btn" type="submit">
              <i className="fa-brands fa-whatsapp" aria-hidden="true" /> Send on WhatsApp
            </button>
            <a
              className="btn ghost"
              href={`mailto:${STUDIO.email}?subject=${encodeURIComponent(`Enquiry: ${service.label}`)}&body=${encodeURIComponent(message())}`}
            >
              Send by email
            </a>
          </div>
        </form>
      </div>
      <figure className="form-img">
        <Img name="book-form.avif" sizes="(max-width: 900px) 100vw, 45vw" />
      </figure>
    </div>
  );
}
