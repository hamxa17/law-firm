import { WhatsAppIcon } from "./Icons";
import { waLink } from "@/lib/site";

export default function WhatsAppFloat() {
  return (
    <a
      className="wa-float"
      data-magnetic
      href={waLink()}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Rajaul & Lawyers on WhatsApp (opens in a new tab)"
    >
      WhatsApp <WhatsAppIcon />
    </a>
  );
}
