import Link from "next/link";
import { routes } from "@/lib/site";

/**
 * Opening band for inner pages: breadcrumb, eyebrow, display title, intro.
 * The title uses `data-split` and the intro `data-reveal`, so lib/motion.ts
 * animates them like the landing page headlines.
 */
export default function PageHero({
  eyebrow,
  title,
  intro,
  crumb,
  aside,
}: {
  eyebrow: string;
  /** Lines of the display title (rendered with <br />). */
  title: string[];
  intro?: React.ReactNode;
  /** Breadcrumb label for this page. */
  crumb: string;
  aside?: React.ReactNode;
}) {
  return (
    <section className="page-hero">
      <div className="container page-hero__grid">
        <div>
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href={routes.home}>Home</Link>
            <span aria-hidden>/</span>
            <span aria-current="page">{crumb}</span>
          </nav>
          <p className="eyebrow eyebrow--light">{eyebrow}</p>
          <h1 className="display page-hero__title" data-split>
            {title.map((line, i) => (
              <span key={i}>
                {line}
                {i < title.length - 1 && <br />}
              </span>
            ))}
          </h1>
          {intro && (
            <div className="page-hero__intro" data-reveal>
              {intro}
            </div>
          )}
        </div>
        {aside && <div className="page-hero__aside">{aside}</div>}
      </div>
    </section>
  );
}
