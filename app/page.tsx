/* eslint-disable @next/next/no-img-element */
import Header from "@/components/Header";
import Motion from "@/components/Motion";
import Preloader from "@/components/Preloader";
import { StackedLogo, Amp } from "@/components/Brand";
import { ArrowUpRight, ArrowDown, WhatsAppIcon, StepIcon } from "@/components/Icons";
import {
  images,
  contact,
  practiceAreas,
  competencies,
  featuredAreas,
  stats,
  steps,
  team,
  navLeft,
  navRight,
} from "@/lib/site";

export default function Home() {
  const marquee = [...practiceAreas, ...practiceAreas];

  return (
    <>
      <Preloader />
      <Header />
      <Motion />

      <main>
        {/* ───────────── HERO ───────────── */}
        <section className="hero">
          <div className="hero__panel">
            <div className="hero__panel-inner">
            <p className="eyebrow eyebrow--light">Full Service Law Firm · Dhaka, Bangladesh</p>
            <h1 className="hero__title">
              RAJAUL
              <br />
              &amp; LAWYERS
            </h1>
            <p className="hero__tagline">Your Legal Partner for Every Step</p>

            <div className="hero__intro">
              <figure className="hero__fig">
                <img src={images.figBooks} alt="Old law books" />
                <figcaption>Fig. 01</figcaption>
              </figure>
              <div>
                <h2 className="label label--light">Advocates &amp; Tax Consultants</h2>
                <p>
                  We have a reputation for providing exceptional legal services, and for our ability to find
                  innovative solutions to the most complex of legal problems.
                </p>
              </div>
            </div>

            <div className="btn-row">
              <a className="btn btn--solid" data-magnetic href={contact.whatsapp} target="_blank" rel="noreferrer">
                Consult on WhatsApp <ArrowUpRight />
              </a>
              <a className="btn btn--ghost" data-magnetic href="#practice">
                Our Practice
              </a>
            </div>
            </div>
          </div>

          <div className="hero__media">
            <img src={images.hero} alt="Statue of Lady Justice holding the scales" />
            <div className="hero__shade" />
            <p className="hero__word">THE COUNSEL</p>
            <address className="hero__address">
              Green City Regency, 2nd Floor
              <br />
              26-27 Kakrail, Dhaka-1000
            </address>
            <a className="hero__scroll" href="#about">
              Scroll <ArrowDown />
            </a>
          </div>
        </section>

        {/* ───────────── MARQUEE ───────────── */}
        <div className="marquee" aria-hidden>
          <div className="marquee__track">
            {marquee.map((a, i) => (
              <span key={i}>
                {a}
                <i>/</i>
              </span>
            ))}
          </div>
        </div>

        {/* ───────────── WHAT WE DO ───────────── */}
        <section className="section section--cream what" id="about">
          <div className="container what__grid">
            <div className="what__intro">
              <p className="eyebrow">Three Core Competencies</p>
              <h2 className="display display--dark" data-split>
                WHAT
                <br />
                WE DO
              </h2>
              <p className="body body--dark" data-reveal>
                RAJAUL &amp; LAWYERS is a leading provider of professional services in Bangladesh split into three
                core competencies.
              </p>
            </div>
            {competencies.map((c, i) => (
              <article className="comp" key={c.title} data-reveal>
                <div className="comp__img reveal-img">
                  <img src={c.img} alt="" />
                </div>
                <h3 className="label">{c.title}</h3>
                <p className="body body--dark">{c.body}</p>
                <span className="numeral">{String(i + 1).padStart(2, "0")}</span>
              </article>
            ))}
          </div>
        </section>

        {/* ───────────── WHY ───────────── */}
        <section className="section section--ink why">
          <div className="container why__grid">
            <div>
              <p className="eyebrow eyebrow--light">Why We Do What We Do</p>
              <h2 className="display" data-split>
                PRACTICAL
                <br />
                SOLUTIONS,
                <br />
                SOUNDLY
                <br />
                DELIVERED
              </h2>
              <div className="why__cols" data-reveal>
                <p className="dropcap">
                  Our firm’s vision is to provide legal services to all businesses, institutions or persons, to offer
                  practical solutions to our clients and to be universally recognized as a full service law firm.
                </p>
                <p>
                  We undertake to embrace our client’s needs and address them soundly by offering turn-around time, to
                  enable them to make informed decisions. We have a reputation for providing exceptional legal
                  services.
                </p>
              </div>
              <blockquote className="why__quote" data-blur>
                “We are renowned for our commitment to excellence — a commitment our clients recognize and value.”
              </blockquote>
              <a className="btn btn--ghost" data-magnetic data-reveal href="#about">
                About the Firm <ArrowUpRight />
              </a>
            </div>
            <div className="why__figs">
              <figure className="why__fig why__fig--a">
                <div className="reveal-img why__frame">
                <img data-parallax="16" src={images.precedent} alt="Library shelves of law reports" />
                </div>
                <figcaption>
                  <em>Fig. 02</em> — Precedent
                </figcaption>
              </figure>
              <figure className="why__fig why__fig--b">
                <div className="reveal-img why__frame">
                <img data-parallax="16" src={images.chambers} alt="Busts in a law library" />
                </div>
                <figcaption>
                  <em>Fig. 03</em> — Chambers
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* ───────────── AREAS ───────────── */}
        <section className="section section--ink areas" id="practice">
          <div className="container">
            <div className="areas__head">
              <div>
                <p className="eyebrow eyebrow--light eyebrow--count">
                  <em>15</em>
                  <span className="rule" />
                  Areas of Practice
                </p>
                <h2 className="display" data-split>
                  AREAS OF
                  <br />
                  EXPERTISE
                </h2>
              </div>
              <div className="areas__aside" data-reveal>
                <p>
                  A full service law firm with leading expertise in various areas of law in Bangladesh — from the
                  boardroom to the courtroom.
                </p>
                <a className="link-arrow" href="#practice">
                  All 15 Areas <ArrowUpRight />
                </a>
              </div>
            </div>
            <div className="areas__grid">
              {featuredAreas.map((a) => (
                <a className="area" href="#practice" key={a.n} data-reveal>
                  <span className="numeral numeral--light">{a.n}</span>
                  <h3>{a.title}</h3>
                  <p>{a.body}</p>
                  <span className="area__explore">
                    <span className="area__circle">
                      <ArrowUpRight size={11} />
                    </span>
                    Explore
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ───────────── STATS ───────────── */}
        <section className="stats">
          <div className="container stats__grid">
            {stats.map((s, i) => (
              <div className="stat" key={s.label}>
                {i > 0 && <span className="stat__star">✦</span>}
                <span className="stat__n" data-count={s.n}>
                  {s.n}
                </span>
                <span className="stat__label">{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ───────────── HOW WE WORK ───────────── */}
        <section className="section section--ink how">
          <div className="container how__grid">
            <div>
              <p className="eyebrow eyebrow--light">From First Call to Resolution</p>
              <h2 className="display" data-split>
                HOW
                <br />
                WE
                <br />
                WORK
              </h2>
            </div>
            <ol className="steps">
              <span className="steps__line" aria-hidden />
              {steps.map((s) => (
                <li key={s.n} data-reveal>
                  <span className="steps__icon">
                    <StepIcon name={s.icon} />
                  </span>
                  <span className="numeral numeral--light">{s.n}</span>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ───────────── TEAM ───────────── */}
        <section className="section section--cream team" id="team">
          <div className="container team__grid">
            <div>
              <p className="eyebrow">Our Team</p>
              <h2 className="display display--dark" data-split>
                THE
                <br />
                CHAMBERS
              </h2>
              <p className="body body--dark">
                11 advocates and tax &amp; company law advisers, led by Md. Rajaul Islam.
              </p>
              <a className="btn btn--outline-dark" data-magnetic href="#team">
                Meet All 11 <ArrowUpRight />
              </a>
            </div>
            {team.map((m) => (
              <article className="member" key={m.name}>
                <div className="member__portrait reveal-img">
                  <span>{m.initials}</span>
                  <small>Image — Portrait — {m.name}</small>
                </div>
                <h3 data-reveal>
                  {m.name.toUpperCase()} {m.alias && <em>({m.alias})</em>}
                </h3>
                <p className="member__role">{m.role}</p>
                <p className="member__quals">{m.quals}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ───────────── CTA ───────────── */}
        <section className="cta" id="contact">
          <img className="cta__bg" src={images.ctaLibrary} alt="" />
          <div className="cta__vanta" aria-hidden />
          <div className="cta__tint" />
          <div className="cta__inner">
            <p className="eyebrow eyebrow--light">Contact the Chambers</p>
            <h2 className="display display--center" data-split>
              LET’S DISCUSS
              <br />
              YOUR MATTER
            </h2>
            <p className="cta__text" data-reveal>Visit us at Green City Regency, Kakrail, call, or message us on WhatsApp.</p>
            <div className="btn-row btn-row--center">
              <a className="btn btn--solid" data-magnetic href={contact.whatsapp} target="_blank" rel="noreferrer">
                Message on WhatsApp <ArrowUpRight />
              </a>
              <a className="btn btn--ghost" data-magnetic href={`mailto:${contact.email}`}>
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ───────────── FOOTER ───────────── */}
      <footer className="footer" id="careers">
        <div className="container">
          <div className="footer__top">
            <StackedLogo />
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
                <a key={l.label} href={l.href}>
                  {l.label}
                </a>
              ))}
            </div>
            <div>
              <h4>Practice</h4>
              {featuredAreas.map((a) => (
                <a key={a.n} href="#practice">
                  {a.title}
                </a>
              ))}
              <a className="footer__u" href="#practice">
                All 15 Areas
              </a>
            </div>
            <div>
              <h4>Contact</h4>
              <a href={contact.phoneHref}>{contact.phone}</a>
              <a href={contact.whatsapp} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
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

      <a className="wa-float" data-magnetic href={contact.whatsapp} target="_blank" rel="noreferrer">
        WhatsApp <WhatsAppIcon />
      </a>
    </>
  );
}
