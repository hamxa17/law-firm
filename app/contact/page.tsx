import type { Metadata } from "next";
import Motion from "@/components/Motion";
import PageHero from "@/components/PageHero";
import { Ph, PhImage } from "@/components/Placeholder";
import { ArrowUpRight } from "@/components/Icons";
import { contact, founder, mailLink, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Visit, call or message Rajaul & Lawyers — ${contact.addressLines.join(", ")}.`,
};

export default function ContactPage() {
  return (
    <>
      <Motion />
      <main>
        <PageHero
          crumb="Contact Us"
          eyebrow="Contact the Chambers"
          title={["LET’S DISCUSS", "YOUR MATTER"]}
          intro={<p>Visit us at Green City Regency, Kakrail, call, or message us on WhatsApp.</p>}
        />

        {/* Contact details */}
        <section className="section section--ink">
          <div className="container contact-grid">
            <article className="contact-card" data-reveal>
              <span className="numeral numeral--light">01</span>
              <h2 className="label label--light">Visit</h2>
              <address>
                {contact.addressLines.map((l) => (
                  <span key={l}>
                    {l}
                    <br />
                  </span>
                ))}
              </address>
              <a className="link-arrow" href={contact.map} target="_blank" rel="noreferrer">
                View on map <ArrowUpRight />
              </a>
            </article>

            <article className="contact-card" data-reveal>
              <span className="numeral numeral--light">02</span>
              <h2 className="label label--light">Call</h2>
              <p>
                <a href={contact.phoneHref}>{contact.phone}</a>
              </p>
              <p className="contact-card__note">{founder.name}</p>
            </article>

            <article className="contact-card" data-reveal>
              <span className="numeral numeral--light">03</span>
              <h2 className="label label--light">WhatsApp</h2>
              <p>Send us a message about your matter.</p>
              <a className="link-arrow" href={waLink()} target="_blank" rel="noreferrer">
                Start a chat <ArrowUpRight />
              </a>
            </article>

            <article className="contact-card" data-reveal>
              <span className="numeral numeral--light">04</span>
              <h2 className="label label--light">Email</h2>
              <p>
                <a href={mailLink()}>{contact.email}</a>
              </p>
            </article>

            <article className="contact-card" data-reveal>
              <span className="numeral numeral--light">05</span>
              <h2 className="label label--light">Office hours</h2>
              <p>
                <Ph value={contact.hours} />
              </p>
            </article>
          </div>
        </section>

        {/* Map */}
        <section className="section section--cream">
          <div className="container split">
            <div>
              <p className="eyebrow">Find Us</p>
              <h2 className="display display--dark" data-split>
                GREEN CITY
                <br />
                REGENCY
              </h2>
              <p className="body body--dark map-note">
                2nd Floor, 26-27 Kakrail, Dhaka-1000. <span className="ph-text">[Directions / nearby landmark]</span>
              </p>
              <a className="btn btn--outline-dark" data-magnetic href={contact.map} target="_blank" rel="noreferrer">
                Open in Google Maps <ArrowUpRight />
              </a>
            </div>
            <PhImage label="Map embed — exact pin for Green City Regency" ratio="4 / 3" />
          </div>
        </section>

        {/* Direct lines */}
        <section className="section section--ink">
          <div className="container">
            <p className="eyebrow eyebrow--light">Direct Lines</p>
            <h2 className="display" data-split>
              SPEAK TO
              <br />
              A LAWYER
            </h2>
            <ul className="directory">
              <li data-reveal>
                <span>
                  <strong>{founder.name}</strong>
                  <em>{founder.role}</em>
                </span>
                <a href={contact.phoneHref}>{contact.phone}</a>
                <a href={mailLink()}>{contact.email}</a>
              </li>
              <li data-reveal>
                <span>
                  <strong>
                    <span className="ph-text">[Other lawyers’ direct numbers and emails]</span>
                  </strong>
                </span>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
