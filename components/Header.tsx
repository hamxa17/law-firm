"use client";

import { useEffect, useState } from "react";
import { HeaderLogo } from "./Brand";
import { navLeft, navRight } from "@/lib/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""} ${open ? "is-open" : ""}`}>
      <nav className="site-header__inner" aria-label="Main">
        <ul className="nav nav--left">
          {navLeft.map((l, i) => (
            <li key={l.label}>
              <a href={l.href} className={i === 0 ? "is-active" : ""}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <HeaderLogo />
        <ul className="nav nav--right">
          {navRight.map((l) => (
            <li key={l.label}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>
        <button className="menu-btn" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span />
          <span />
        </button>
      </nav>
      <div className="mobile-menu">
        {[...navLeft, ...navRight].map((l) => (
          <a key={l.label} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
      </div>
    </header>
  );
}
