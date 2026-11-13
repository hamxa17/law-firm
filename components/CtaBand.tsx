/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { ArrowUpRight } from "./Icons";
import { images, routes, waLink } from "@/lib/site";

/** "Let's discuss your matter" band with the Vanta fog (see lib/motion.ts step 13). */
export default function CtaBand({
  eyebrow = "Contact the Chambers",
  title = ["LET’S DISCUSS", "YOUR MATTER"],
  text = "Visit us at Green City Regency, Kakrail, call, or message us on WhatsApp.",
  showContactLink = true,
  id,
}: {
  eyebrow?: string;
  title?: string[];
  text?: string;
  /** Hide the "Contact Us" button on the Contact page itself. */
  showContactLink?: boolean;
  id?: string;
}) {
  return (
    <section className="cta" id={id}>
      <img className="cta__bg" src={images.ctaLibrary} alt="" />
      <div className="cta__vanta" aria-hidden />
      <div className="cta__tint" />
      <div className="cta__inner">
        <p className="eyebrow eyebrow--light">{eyebrow}</p>
        <h2 className="display display--center" data-split>
          {title.map((line, i) => (
            <span key={i}>
              {line}
              {i < title.length - 1 && <br />}
            </span>
          ))}
        </h2>
        <p className="cta__text" data-reveal>
          {text}
        </p>
        <div className="btn-row btn-row--center">
          <a className="btn btn--solid" data-magnetic href={waLink()} target="_blank" rel="noreferrer">
            Message on WhatsApp <ArrowUpRight />
          </a>
          {showContactLink && (
            <Link className="btn btn--ghost" data-magnetic href={routes.contact}>
              Contact Us
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
