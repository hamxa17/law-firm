import type { Metadata } from "next";
import Motion from "@/components/Motion";
import PageHero from "@/components/PageHero";
import Steps from "@/components/Steps";
import CtaBand from "@/components/CtaBand";
import { Ph } from "@/components/Placeholder";
import { ArrowUpRight } from "@/components/Icons";
import { careerPerks, hiringSteps, mailLink, openings, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Careers",
  description: "Careers at Rajaul & Lawyers, Dhaka — openings for advocates, tax advisers and interns.",
};

export default function CareersPage() {
  return (
    <>
      <Motion />
      <main>
        <PageHero
          crumb="Careers"
          eyebrow="Careers"
          title={["JOIN THE", "CHAMBERS"]}
          intro={
            <p>
              <span className="ph-text">
                [Short careers introduction — who the firm hires and what it looks for]
              </span>
            </p>
          }
        />

        {/* Why join */}
        <section className="section section--ink">
          <div className="container">
            <p className="eyebrow eyebrow--light">Why Join Us</p>
            <h2 className="display" data-split>
              LIFE AT
              <br />
              THE FIRM
            </h2>
            <div className="value-grid">
              {careerPerks.map((p) => (
                <article className="value" key={p.n} data-reveal>
                  <span className="numeral numeral--light">{p.n}</span>
                  <h3>
                    <Ph value={p.title} />
                  </h3>
                  <p>
                    <Ph value={p.body} />
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Openings */}
        <section className="section section--cream">
          <div className="container">
            <p className="eyebrow">Current Openings</p>
            <h2 className="display display--dark" data-split>
              OPEN
              <br />
              POSITIONS
            </h2>

            {openings.length > 0 ? (
              <ul className="openings">
                {openings.map((o) => (
                  <li className="opening" key={o.role} data-reveal>
                    <div>
                      <h3>{o.role}</h3>
                      <p className="opening__meta">
                        {o.type} · {o.experience}
                      </p>
                      <p className="body body--dark">{o.summary}</p>
                    </div>
                    <a className="btn btn--outline-dark" href={mailLink(`Application — ${o.role}`)}>
                      Apply <ArrowUpRight />
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="empty-state" data-reveal>
                <p className="empty-state__title">There are no openings listed at the moment.</p>
                <p className="body body--dark">
                  We are always glad to hear from capable advocates, tax advisers and law students. Send your CV and
                  we will keep it on file for future opportunities.
                </p>
                <div className="btn-row">
                  <a className="btn btn--outline-dark" data-magnetic href={mailLink("Career enquiry — CV")}>
                    Email your CV <ArrowUpRight />
                  </a>
                  <a
                    className="btn btn--outline-dark"
                    data-magnetic
                    href={waLink("Hello Rajaul & Lawyers, I would like to enquire about career opportunities.")}
                    target="_blank"
                    rel="noreferrer"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Hiring process */}
        <section className="section section--ink how">
          <div className="container how__grid">
            <div>
              <p className="eyebrow eyebrow--light">Hiring Process</p>
              <h2 className="display" data-split>
                HOW WE
                <br />
                HIRE
              </h2>
            </div>
            <Steps items={hiringSteps} />
          </div>
        </section>

        <CtaBand
          eyebrow="Questions about a role?"
          title={["TALK TO", "THE CHAMBERS"]}
          text="Message us on WhatsApp or send an email — we will get back to you."
        />
      </main>
    </>
  );
}
