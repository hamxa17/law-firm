"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HeaderLogo } from "./Brand";
import { navLeft, navRight } from "@/lib/site";

const isActive = (pathname: string, href: string) =>
  href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const link = (l: { label: string; href: string }) => {
    const active = isActive(pathname, l.href);
    return (
      <li key={l.label}>
        <Link href={l.href} className={active ? "is-active" : ""} aria-current={active ? "page" : undefined}>
          {l.label}
        </Link>
      </li>
    );
  };

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""} ${open ? "is-open" : ""}`}>
      <nav className="site-header__inner" aria-label="Main">
        <ul className="nav nav--left">{navLeft.map(link)}</ul>
        <HeaderLogo />
        <ul className="nav nav--right">{navRight.map(link)}</ul>
        <button className="menu-btn" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span />
          <span />
        </button>
      </nav>
      <div className="mobile-menu">
        {[...navLeft, ...navRight].map((l) => (
          <Link
            key={l.label}
            href={l.href}
            onClick={() => setOpen(false)}
            aria-current={isActive(pathname, l.href) ? "page" : undefined}
          >
            {l.label}
          </Link>
        ))}
      </div>
    </header>
  );
}
