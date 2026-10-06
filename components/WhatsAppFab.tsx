import { WA_GREETING, waLink } from "@/lib/site";

// Floating WhatsApp button (shown on every page).
export default function WhatsAppFab() {
  return (
    <a className="wa-float" href={waLink(WA_GREETING)} target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
      <i className="fa-brands fa-whatsapp" aria-hidden="true" />
    </a>
  );
}
