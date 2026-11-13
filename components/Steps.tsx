import { StepIcon } from "./Icons";

type Step = { n: string; title: string; body: string; icon: string };

/** Numbered process with a connecting line (animated by lib/motion.ts step 10). */
export default function Steps({ items }: { items: readonly Step[] }) {
  return (
    <ol className="steps" style={{ "--steps": items.length } as React.CSSProperties}>
      <span className="steps__line" aria-hidden />
      {items.map((s) => (
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
  );
}
