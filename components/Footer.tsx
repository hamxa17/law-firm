import Link from "next/link";
import { StackedLogo, Amp } from "./Brand";
import { areaHref, contact, featuredAreas, mailLink, navLeft, navRight, routes, waLink } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <Link href={routes.home} aria-label="Rajaul & Lawyers — Home">
            <StackedLogo />
          </Link>
          <p>
            Advocates &amp; Tax Consultants, practising from
            <br />
            26-27 Kakrail, Dhaka-1000.
          </p>
        </div>
      </div>
      <div className="footer__rule" />
      <div className="container">
        <div className="footer__cols">
          <div>
            <h4>Chambers</h4>
            {contact.addressLines.map((l) => (
              <p key={l}>{l}</p>
            ))}
            <a className="footer__u" href={contact.map} target="_blank" rel="noreferrer">
              View on Map
            </a>
          </div>
          <div>
            <h4>Pages</h4>
            {[...navLeft, ...navRight].map((l) => (
              <Link key={l.label} href={l.href}>
                {l.label}
              </Link>
            ))}
          </div>
          <div>
            <h4>Practice</h4>
            {featuredAreas.map((a) => (
              <Link key={a.slug} href={areaHref(a.slug)}>
                {a.title}
              </Link>
            ))}
            <Link className="footer__u" href={routes.practice}>
              All 15 Areas
            </Link>
          </div>
          <div>
            <h4>Contact</h4>
            <a href={contact.phoneHref}>{contact.phone}</a>
            <a href={waLink()} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <a href={mailLink()}>{contact.email}</a>
          </div>
        </div>
        <p className="footer__word">
          RAJAUL <Amp /> LAWYERS
        </p>
        <div className="footer__bottom">
          <span>© 2026 Rajaul &amp; Lawyers. All rights reserved.</span>
          <span>Advocates &amp; Tax Consultants · Dhaka · Photography: Unsplash</span>
        </div>
      </div>
    </footer>
  );
}
