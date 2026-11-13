/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Motion from "@/components/Motion";
import Preloader from "@/components/Preloader";
import WhatWeDo from "@/components/WhatWeDo";
import Steps from "@/components/Steps";
import CtaBand from "@/components/CtaBand";
import MemberCard from "@/components/MemberCard";
import { ArrowUpRight, ArrowDown } from "@/components/Icons";
import {
  images,
  practiceAreas,
  featuredAreas,
  stats,
  steps,
  team,
  firm,
  routes,
  areaHref,
  waLink,
  TEAM_SIZE,
} from "@/lib/site";

export default function Home() {
  const marquee = [...practiceAreas, ...practiceAreas].map((a) => a.title);

  return (
    <>
      <Preloader />
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
              <p className="hero__tagline">{firm.tagline}</p>

              <div className="hero__intro">
                <figure className="hero__fig">
                  <img src={images.figBooks} alt="Old law books" />
                  <figcaption>Fig. 01</figcaption>
                </figure>
                <div>
                  <h2 className="label label--light">{firm.descriptor}</h2>
                  <p>{firm.reputation}</p>
                </div>
              </div>

              <div className="btn-row">
                <a className="btn btn--solid" data-magnetic href={waLink()} target="_blank" rel="noreferrer">
                  Consult on WhatsApp <ArrowUpRight />
                </a>
                <Link className="btn btn--ghost" data-magnetic href={routes.practice}>
                  Our Practice
                </Link>
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
        <WhatWeDo id="about" />

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
                <p className="dropcap">{firm.vision}</p>
                <p>{firm.mission}</p>
              </div>
              <blockquote className="why__quote" data-blur>
                “{firm.quote}”
              </blockquote>
              <Link className="btn btn--ghost" data-magnetic data-reveal href={routes.about}>
                About the Firm <ArrowUpRight />
              </Link>
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
                  <em>{practiceAreas.length}</em>
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
                <Link className="link-arrow" href={routes.practice}>
                  All {practiceAreas.length} Areas <ArrowUpRight />
                </Link>
              </div>
            </div>
            <div className="areas__grid">
              {featuredAreas.map((a) => (
                <Link className="area" href={areaHref(a.slug)} key={a.slug} data-reveal>
                  <span className="numeral numeral--light">{a.n}</span>
                  <h3>{a.title}</h3>
                  <p>{a.body}</p>
                  <span className="area__explore">
                    <span className="area__circle">
                      <ArrowUpRight size={11} />
                    </span>
                    Explore
                  </span>
                </Link>
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
            <Steps items={steps} />
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
                {TEAM_SIZE} advocates and tax &amp; company law advisers, led by Md. Rajaul Islam.
              </p>
              <Link className="btn btn--outline-dark" data-magnetic href={routes.lawyers}>
                Meet All {TEAM_SIZE} <ArrowUpRight />
              </Link>
            </div>
            {team.map((m) => (
              <MemberCard key={m.name} member={m} />
            ))}
          </div>
        </section>

        {/* ───────────── CTA ───────────── */}
        <CtaBand id="contact" />
      </main>
    </>
  );
}
