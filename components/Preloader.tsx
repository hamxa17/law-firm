import { LogoLockup } from "./Brand";

/**
 * Intro: the logo appears in the centre, then flies into its header position
 * while the page fades in behind it (see lib/motion.ts → intro).
 */
export default function Preloader() {
  return (
    <div className="preloader" aria-hidden>
      <div className="preloader__bg" />
      <div className="preloader__logo header-logo">
        <LogoLockup />
      </div>
    </div>
  );
}
