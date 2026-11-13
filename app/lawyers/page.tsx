import type { Metadata } from "next";
import Motion from "@/components/Motion";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import MemberCard, { MemberSlot } from "@/components/MemberCard";
import { Ph, PhImage } from "@/components/Placeholder";
import { ArrowUpRight } from "@/components/Icons";
import { contact, founder, founderBio, mailLink, team, TEAM_SIZE, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Lawyers",
  description: `Meet the ${TEAM_SIZE} advocates and tax & company law advisers of Rajaul & Lawyers.`,
};

export default function LawyersPage() {
  const others = team.filter((m) => !m.founder);
  const missing = Math.max(0, TEAM_SIZE - team.length);

  return (
    <>
      <Motion />
      <main>
        <PageHero
          crumb="Lawyers"
          eyebrow="Our Team"
          title={["THE", "CHAMBERS"]}
          intro={<p>{TEAM_SIZE} advocates and tax &amp; company law advisers, led by {founder.name}.</p>}
        />

        {/* Founder */}
        <section className="section section--ink">
          <div className="container feature">
            <PhImage label={`Portrait — ${founder.name}`} initials={founder.initials} tone="dark" />
            <div>
              <p className="eyebrow eyebrow--light">Founder &amp; Head of Chambers</p>
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
            </div>
          </div>
        </section>

        {/* Team grid */}
        <section className="section section--cream">
          <div className="container">
            <p className="eyebrow">Advocates &amp; Advisers</p>
            <h2 className="display display--dark" data-split>
              THE TEAM
            </h2>
            <p className="body body--dark team-note">
              {team.length} of {TEAM_SIZE} profiles listed.{" "}
              {missing > 0 && <span className="ph-text">[{missing} profiles awaiting details and photos]</span>}
            </p>
            <div className="team-grid">
              {others.map((m) => (
                <MemberCard key={m.name} member={m} />
              ))}
              {Array.from({ length: missing }, (_, i) => (
                <MemberSlot key={i} index={team.length + i + 1} />
              ))}
            </div>
          </div>
        </section>

        <CtaBand />
      </main>
    </>
  );
}
