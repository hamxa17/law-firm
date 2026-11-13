import { isPh, type Placeholder } from "@/lib/site";

/**
 * Renders content that may still be a placeholder. Real strings render as-is;
 * `ph(...)` values render as a dashed "to be supplied" note so they're obvious
 * in review and easy to grep for (`.ph-text`).
 */
export function Ph({ value }: { value: string | Placeholder }) {
  if (!isPh(value)) return <>{value}</>;
  return (
    <span className="ph-text" title="Placeholder — awaiting client content">
      [{value.placeholder}]
    </span>
  );
}

/** Hatched image stand-in with a caption of what the real image should show. */
export function PhImage({
  label,
  ratio = "4 / 5",
  initials,
  tone = "light",
}: {
  label: string;
  ratio?: string;
  initials?: string;
  tone?: "light" | "dark";
}) {
  return (
    <div className={`ph-img ph-img--${tone}`} style={{ aspectRatio: ratio }} role="img" aria-label={`Placeholder: ${label}`}>
      {initials && <span className="ph-img__initials">{initials}</span>}
      <small>Image — {label}</small>
    </div>
  );
}
