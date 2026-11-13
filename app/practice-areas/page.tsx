import type { Metadata } from "next";
import Motion from "@/components/Motion";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { ArrowUpRight } from "@/components/Icons";
import { areaNumber, practiceAreas, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Practice Areas",
  description: `${practiceAreas.length} areas of practice — corporate, property, taxation, litigation, family law and more.`,
};

export default function PracticeAreasPage() {
  return (
    <>
      <Motion />
      <main>
        <PageHero
          crumb="Practice Areas"
          eyebrow={`${practiceAreas.length} Areas of Practice`}
          title={["AREAS OF", "EXPERTISE"]}
          intro={
            <p>
              A full service law firm with leading expertise in various areas of law in Bangladesh — from the
              boardroom to the courtroom.
            </p>
          }
        />

        {/* Index */}
        <section className="section section--cream practice-index">
          <div className="container">
            <p className="eyebrow">Index</p>
            <ol className="index-list">
              {practiceAreas.map((a) => (
                <li key={a.slug}>
                  <a href={`#${a.slug}`}>
                    <span className="numeral">{areaNumber(a.slug)}</span>
                    <span className="index-list__title">{a.title}</span>
                    <ArrowUpRight />
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Detail sections */}
        <section className="section section--ink">
          <div className="container">
            {practiceAreas.map((a) => (
              <article className="practice" id={a.slug} key={a.slug}>
                <div className="practice__head">
                  <span className="numeral numeral--light">{areaNumber(a.slug)}</span>
                  <h2 className="practice__title" data-split>
                    {a.title}
                  </h2>
                </div>
                <div className="practice__body" data-reveal>
                  {a.summary ? (
                    <p className="practice__lead">{a.summary}</p>
                  ) : (
                    <p className="practice__lead">
                      <span className="ph-text">[One-line summary of this practice area]</span>
                    </p>
                  )}
                  <p>
                    <span className="ph-text">
                      [Detailed description — what the firm does in this area, typical clients and matters]
                    </span>
                  </p>
                  <h3 className="label label--light">Services include</h3>
                  <ul className="practice__services">
                    {[1, 2, 3].map((n) => (
                      <li key={n}>
                        <span className="ph-text">[Service {n}]</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    className="link-arrow"
                    href={waLink(`Hello Rajaul & Lawyers, I would like to discuss a ${a.title} matter.`)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Discuss a matter <ArrowUpRight />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <CtaBand />
      </main>
    </>
  );
}
