// The R&L monogram is a transparent mask (public/brand/mark.png) so it can take
// any brand colour via CSS: champagne on dark/blue, navy on light.
export function Mark({ size = 44, className = "" }: { size?: number; className?: string }) {
  return (
    <span
      aria-hidden
      className={`mark ${className}`}
      style={{ width: size * 0.99, height: size }}
    />
  );
}

export function Amp() {
  return <span className="amp">&amp;</span>;
}

/** Mark + wordmark lockup. Used by the header and by the intro, which flies it into the header. */
export function LogoLockup() {
  return (
    <>
      <Mark size={46} />
      <span className="header-logo__text">
        <span className="header-logo__name">
          RAJAUL <Amp /> LAWYERS
        </span>
        <span className="header-logo__sub">Advocates &amp; Tax Consultants</span>
      </span>
    </>
  );
}

export function HeaderLogo() {
  return (
    <a href="/" className="header-logo" aria-label="Rajaul & Lawyers — Home">
      <LogoLockup />
    </a>
  );
}

export function StackedLogo() {
  return (
    <div className="stacked-logo">
      <Mark size={84} />
      <div className="stacked-logo__name">
        RAJAUL <span className="amp-plain">&amp;</span> LAWYERS
      </div>
      <div className="stacked-logo__rule" />
      <div className="stacked-logo__tag">Your Legal Partner for Every Step</div>
    </div>
  );
}
