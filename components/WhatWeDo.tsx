/* eslint-disable @next/next/no-img-element */
import { competencies, firm } from "@/lib/site";

/** Three core competencies on cream. Used on the landing page and About. */
export default function WhatWeDo({ id }: { id?: string }) {
  return (
    <section className="section section--cream what" id={id}>
      <div className="container what__grid">
        <div className="what__intro">
          <p className="eyebrow">Three Core Competencies</p>
          <h2 className="display display--dark" data-split>
            WHAT
            <br />
            WE DO
          </h2>
          <p className="body body--dark" data-reveal>
            {firm.intro}
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
  );
}
