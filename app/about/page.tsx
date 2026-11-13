import type { Metadata } from "next";
import Link from "next/link";
import Motion from "@/components/Motion";
import PageHero from "@/components/PageHero";
import WhatWeDo from "@/components/WhatWeDo";
import CtaBand from "@/components/CtaBand";
import { Ph, PhImage } from "@/components/Placeholder";
import { ArrowUpRight } from "@/components/Icons";
import { contact, firm, founder, founderBio, mailLink, routes, values, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description: firm.vision,
};

export default function AboutPage() {
  return (
    <>
      <Motion />
      <main>
        <PageHero
          crumb="About Us"
          eyebrow="About the Firm"
          title={["THE HEART", "BEHIND THE", "CHAMBERS"]}
          intro={<p>{firm.intro}</p>}
          aside={
            <dl className="fact-list">
              <div>
                <dt>Established</dt>
                <dd>
                  <Ph value={firm.founded} />
                </dd>
              </div>
              <div>
                <dt>Chambers</dt>
                <dd>Kakrail, Dhaka</dd>
              </div>
              <div>
                <dt>Practice</dt>
                <dd>Advocates &amp; Tax Consultants</dd>
              </div>
            </dl>
          }
        />

        {/* Vision & mission */}
        <section className="section section--ink">
          <div className="container split">
            <div>
              <p className="eyebrow eyebrow--light">Vision &amp; Mission</p>
              <h2 className="display" data-split>
                PRACTICAL
                <br />
                SOLUTIONS,
                <br />
                SOUNDLY
                <br />
                DELIVERED
              </h2>
            </div>
            <div className="prose" data-reveal>
              <h3 className="label label--light">Our Vision</h3>
              <p className="dropcap">{firm.vision}</p>
              <h3 className="label label--light">Our Mission</h3>
              <p>{firm.mission}</p>
              <blockquote className="why__quote" data-blur>
                “{firm.quote}”
              </blockquote>
            </div>
          </div>
        </section>

        <WhatWeDo />

        {/* Why clients choose us */}
        <section className="section section--ink">
          <div className="container">
            <p className="eyebrow eyebrow--light">Why Clients Choose Us</p>
            <h2 className="display" data-split>
              OUR
              <br />
              STANDARDS
            </h2>
            <div className="value-grid">
              {values.map((v) => (
                <article className="value" key={v.n} data-reveal>
                  <span className="numeral numeral--light">{v.n}</span>
                  <h3>{v.title}</h3>
                  <p>{v.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* History */}
        <section className="section section--cream">
          <div className="container split">
            <div>
              <p className="eyebrow">Our Story</p>
              <h2 className="display display--dark" data-split>
                THE
                <br />
                FIRM
              </h2>
            </div>
            <div className="prose prose--dark" data-reveal>
              <p>
                <Ph value={firm.history} />
              </p>
              <PhImage label="The chambers at Green City Regency, Kakrail" ratio="16 / 9" />
            </div>
          </div>
        </section>

        {/* Founder */}
        <section className="section section--ink">
          <div className="container feature">
            <PhImage label={`Portrait — ${founder.name}`} initials={founder.initials} tone="dark" />
            <div>
              <p className="eyebrow eyebrow--light">Founder</p>
              <h2 className="display feature__name" data-split>
                {founder.name.toUpperCase()}
              </h2>
              {founder.alias && <p className="feature__alias">({founder.alias})</p>}
              <p className="feature__role">
                {founder.role}
              </p>
              <p className="feature__quals">{founder.quals}</p>
              <div className="prose" data-reveal>
                <p>
                  <Ph value={founderBio} />
                </p>
              </div>
              <div className="btn-row" data-reveal>
                <a className="btn btn--solid" data-magnetic href={waLink(`Hello ${founder.name}, I would like to discuss a legal matter.`)} target="_blank" rel="noreferrer">
                  WhatsApp <ArrowUpRight />
                </a>
                <a className="btn btn--ghost" data-magnetic href={contact.phoneHref}>
                  {contact.phone}
                </a>
                <a className="btn btn--ghost" data-magnetic href={mailLink()}>
                  Email
                </a>
              </div>
              <Link className="link-arrow feature__more" href={routes.lawyers}>
                Meet the team <ArrowUpRight />
              </Link>
            </div>
          </div>
        </section>

        <CtaBand />
      </main>
    </>
  );
}
