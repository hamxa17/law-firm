import type { Member } from "@/lib/site";

/** Team card with a monogram portrait placeholder (no stock faces for real people). */
export default function MemberCard({ member }: { member: Member }) {
  return (
    <article className="member">
      <div className="member__portrait reveal-img">
        <span>{member.initials}</span>
        <small>Image — Portrait — {member.name}</small>
      </div>
      <h3 data-reveal>
        {member.name.toUpperCase()} {member.alias && <em>({member.alias})</em>}
      </h3>
      <p className="member__role">{member.role}</p>
      <p className="member__quals">{member.quals}</p>
    </article>
  );
}

/** Empty slot for a team member the firm hasn't supplied yet. */
export function MemberSlot({ index }: { index: number }) {
  return (
    <article className="member member--slot">
      <div className="member__portrait">
        <span>{String(index).padStart(2, "0")}</span>
        <small>Image — Portrait — to be supplied</small>
      </div>
      <h3>
        <span className="ph-text">[Name]</span>
      </h3>
      <p className="member__role">
        <span className="ph-text">[Title]</span>
      </p>
      <p className="member__quals">
        <span className="ph-text">[Qualifications]</span>
      </p>
    </article>
  );
}
