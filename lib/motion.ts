/*
 * All site motion lives here, written against plain DOM hooks (data attributes /
 * class names) so the markup stays server-rendered.
 *
 *  Lenis   → inertial smooth scrolling, drives ScrollTrigger + marquee velocity
 *  GSAP    → preloader, hero intro, SplitText line/char reveals, ScrollTrigger
 *  Vanta   → slow navy "fog" WebGL field behind the contact CTA
 *  React-Bits-style micro-interactions → count-up stats, blur-in text, magnetic buttons
 */
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Lenis from "lenis";
import * as THREE from "three";
import FOG from "vanta/dist/vanta.fog.min";

type Cleanup = () => void;

const EASE = "expo.out";
const EASE_IO = "expo.inOut";

export function initMotion(): Cleanup {
  gsap.registerPlugin(ScrollTrigger, SplitText);

  const html = document.documentElement;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const preloader = document.querySelector<HTMLElement>(".preloader");
  const cleanups: Cleanup[] = [];
  let ctx: gsap.Context | null = null;
  let disposed = false;

  if (reduce) {
    preloader?.remove();
    return () => {};
  }

  html.classList.add("motion-ready");
  if (preloader) preloader.style.animation = "none"; // JS has taken over from the CSS fallback

  /* ── Lenis smooth scroll ─────────────────────────────── */
  const lenis = new Lenis({ lerp: 0.085, wheelMultiplier: 0.95 });
  lenis.stop(); // locked until the preloader leaves
  lenis.on("scroll", ScrollTrigger.update);
  const raf = (t: number) => lenis.raf(t * 1000);
  gsap.ticker.add(raf);
  gsap.ticker.lagSmoothing(0);
  cleanups.push(() => {
    gsap.ticker.remove(raf);
    lenis.destroy();
  });

  const onAnchor = (e: MouseEvent) => {
    const a = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]');
    if (!a) return;
    const id = a.getAttribute("href")!;
    const target = id.length > 1 ? document.querySelector<HTMLElement>(id) : null;
    if (!target) return;
    e.preventDefault();
    lenis.scrollTo(target, { offset: -96, duration: 1.6 });
  };
  document.addEventListener("click", onAnchor);
  cleanups.push(() => document.removeEventListener("click", onAnchor));

  /* Wait for webfonts so SplitText measures the real line breaks. */
  document.fonts.ready.then(() => {
    if (disposed) return;
    ctx = gsap.context(() => build(lenis, preloader, cleanups));
  });

  return () => {
    disposed = true;
    ctx?.revert();
    cleanups.forEach((fn) => fn());
    html.classList.remove("motion-ready");
  };
}

function build(lenis: Lenis, preloader: HTMLElement | null, cleanups: Cleanup[]) {
  const q = <T extends Element = HTMLElement>(s: string) => document.querySelector<T>(s);
  const qa = <T extends Element = HTMLElement>(s: string) => gsap.utils.toArray<T>(s);

  /* ── 1. Preloader ────────────────────────────────────── */
  const intro = gsap.timeline({ defaults: { ease: EASE } });

  if (preloader) {
    /*
     * FLIP: the intro logo is placed exactly over the real header logo, then
     * pushed to the centre of the screen and scaled up. Animating the transform
     * back to zero flies it into its header position.
     */
    const flyer = preloader.querySelector<HTMLElement>(".preloader__logo")!;
    const target = document.querySelector<HTMLElement>(".site-header .header-logo")!;
    const r = target.getBoundingClientRect();
    gsap.set(flyer, { left: r.left, top: r.top, width: r.width, height: r.height, opacity: 1 });
    gsap.set(target, { autoAlpha: 0 });

    const scale = Math.min(2.1, (window.innerWidth * 0.78) / r.width);
    const toCentre = {
      x: window.innerWidth / 2 - (r.left + r.width / 2),
      y: window.innerHeight / 2 - (r.top + r.height / 2),
      scale,
    };

    intro
      .set(flyer, { ...toCentre, transformOrigin: "50% 50%" })
      .from(flyer.querySelector(".mark"), {
        autoAlpha: 0,
        y: 18,
        duration: 1.1,
        ease: "power3.out",
      })
      .from(
        flyer.querySelector(".header-logo__name"),
        { autoAlpha: 0, filter: "blur(10px)", x: -12, duration: 1.1, ease: "power3.out" },
        0.25
      )
      .from(
        flyer.querySelector(".header-logo__sub"),
        { autoAlpha: 0, letterSpacing: "0.6em", duration: 1.2, ease: "power3.out" },
        0.45
      )
      .addLabel("fly", "+=0.35")
      .to(flyer, { x: 0, y: 0, scale: 1, duration: 1.25, ease: "expo.inOut" }, "fly")
      .to(".preloader__bg", { autoAlpha: 0, duration: 1.1, ease: "power2.inOut" }, "fly+=0.35")
      .add(() => {
        gsap.set(target, { autoAlpha: 1 });
        gsap.set(preloader, { display: "none" });
      }, "fly+=1.3");
  }

  /* ── 2. Hero intro (landing) / page intro (inner pages) ─ */
  if (!q(".hero")) {
    // Inner pages: the .page-hero title animates via [data-split] (step 5).
    intro
      .add(() => lenis.start(), 0)
      .from(".nav li", { autoAlpha: 0, y: -14, duration: 0.9, stagger: 0.06 }, 0.1)
      .from(".page-hero .crumbs, .page-hero .eyebrow", { autoAlpha: 0, y: 16, duration: 0.9, stagger: 0.08 }, 0)
      .from(".wa-float", { autoAlpha: 0, scale: 0.8, duration: 0.8, ease: "back.out(2)" }, 0.6);
  } else {
  const heroTitle = SplitText.create(".hero__title", { type: "lines", mask: "lines", linesClass: "line" });
  const heroWord = SplitText.create(".hero__word", { type: "chars", mask: "chars", charsClass: "char" });

  intro
    .addLabel("hero", preloader ? "fly+=0.45" : 0)
    .from(".nav li", { autoAlpha: 0, y: -14, duration: 0.9, stagger: 0.06 }, "hero+=0.55")
    .from(
      ".hero__media",
      { clipPath: "inset(0% 0% 0% 100%)", duration: 1.5, ease: EASE_IO },
      "hero"
    )
    .from(".hero__media img", { scale: 1.35, duration: 2.2, ease: "power3.out" }, "hero")
    .from(heroWord.chars, { yPercent: 105, duration: 1.2, stagger: 0.045 }, "hero+=0.6")
    .from(".hero__panel .eyebrow", { autoAlpha: 0, y: 16, duration: 0.9 }, "hero+=0.3")
    .from(heroTitle.lines, { yPercent: 110, duration: 1.3, stagger: 0.12 }, "hero+=0.35")
    .from(
      ".hero__tagline",
      { autoAlpha: 0, filter: "blur(12px)", y: 10, duration: 1.2, ease: "power2.out" },
      "hero+=0.75"
    )
    .from(".hero__fig", { clipPath: "inset(0% 0% 100% 0%)", duration: 1.1, ease: EASE_IO }, "hero+=0.8")
    .from(".hero__intro > div > *", { autoAlpha: 0, y: 18, duration: 0.9, stagger: 0.08 }, "hero+=0.9")
    .from(".hero__panel .btn", { autoAlpha: 0, y: 18, duration: 0.9, stagger: 0.08 }, "hero+=1.05")
    .from([".hero__address", ".hero__scroll"], { autoAlpha: 0, y: 12, duration: 0.9 }, "hero+=1.2")
    .from(".wa-float", { autoAlpha: 0, scale: 0.8, duration: 0.8, ease: "back.out(2)" }, "hero+=1.4")
    .add(() => lenis.start(), "hero+=0.6");

  // hero scroll choreography
  const heroST = { trigger: ".hero", start: "top top", end: "bottom top", scrub: true };
  gsap.to(".hero__media img", { yPercent: 14, scale: 1.08, ease: "none", scrollTrigger: heroST });
  gsap.to(".hero__word", { yPercent: -60, ease: "none", scrollTrigger: heroST });
  gsap.to(".hero__panel-inner", { y: -80, ease: "none", scrollTrigger: heroST });
  gsap.to(".hero__scroll svg", { y: 5, repeat: -1, yoyo: true, duration: 0.9, ease: "sine.inOut" });
  }

  /* ── 3. Header: hide on scroll down, return on scroll up ─ */
  // The header lives in the root layout and outlives this page, so clear the
  // class on cleanup or the next page would start with the header hidden.
  const header = q(".site-header")!;
  ScrollTrigger.create({
    start: 0,
    end: "max",
    onUpdate: (self) => {
      const y = self.scroll();
      header.classList.toggle("is-hidden", self.direction === 1 && y > 420);
    },
  });
  cleanups.push(() => header.classList.remove("is-hidden"));

  /* ── 4. Marquee driven by scroll velocity ────────────── */
  if (q(".marquee__track")) {
    const marquee = gsap.to(".marquee__track", { xPercent: -50, duration: 60, ease: "none", repeat: -1 });
    let dir = 1;
    lenis.on("scroll", ({ velocity }: { velocity: number }) => {
      if (velocity !== 0) dir = velocity > 0 ? 1 : -1;
      const boost = gsap.utils.clamp(-8, 8, velocity * 0.35);
      marquee.timeScale(dir + boost);
      gsap.to(marquee, { timeScale: dir, duration: 0.8, overwrite: true });
    });
  }

  /* ── 5. Headline line reveals ────────────────────────── */
  qa("[data-split]").forEach((el) => {
    const split = SplitText.create(el, { type: "lines", mask: "lines", linesClass: "line" });
    gsap.from(split.lines, {
      yPercent: 110,
      duration: 1.25,
      ease: EASE,
      stagger: 0.1,
      scrollTrigger: { trigger: el, start: "top 86%" },
    });
  });

  /* ── 6. Quote: word-by-word blur in (React Bits "BlurText") ─ */
  qa("[data-blur]").forEach((el) => {
    const split = SplitText.create(el, { type: "words" });
    gsap.from(split.words, {
      autoAlpha: 0,
      filter: "blur(10px)",
      y: 8,
      duration: 0.9,
      ease: "power2.out",
      stagger: 0.04,
      scrollTrigger: { trigger: el, start: "top 82%" },
    });
  });

  /* ── 7. Fade-up groups (batched for natural stagger) ──── */
  gsap.set("[data-reveal]", { autoAlpha: 0, y: 36 });
  ScrollTrigger.batch("[data-reveal]", {
    start: "top 90%",
    onEnter: (els) =>
      gsap.to(els, { autoAlpha: 1, y: 0, duration: 1.1, ease: EASE, stagger: 0.09, overwrite: true }),
  });

  /* ── 8. Image curtain reveals + parallax ─────────────── */
  qa(".reveal-img").forEach((wrap) => {
    const img = wrap.querySelector("img, span");
    const tl = gsap.timeline({ scrollTrigger: { trigger: wrap, start: "top 85%" } });
    tl.from(wrap, { clipPath: "inset(100% 0% 0% 0%)", duration: 1.4, ease: EASE_IO });
    if (img) tl.from(img, { scale: 1.3, duration: 1.8, ease: "power3.out" }, 0);
  });
  qa<HTMLElement>("[data-parallax]").forEach((el) => {
    const amt = Number(el.dataset.parallax || 10);
    gsap.fromTo(
      el,
      { yPercent: -amt / 2 },
      { yPercent: amt / 2, ease: "none", scrollTrigger: { trigger: el.parentElement, scrub: true } }
    );
  });

  /* ── 9. Stats: count-up (React Bits "CountUp") ───────── */
  qa<HTMLElement>("[data-count]").forEach((el, i) => {
    const end = Number(el.dataset.count);
    const n = { v: 0 };
    gsap.to(n, {
      v: end,
      duration: 2,
      delay: i * 0.12,
      ease: "power3.out",
      onUpdate: () => (el.textContent = String(Math.round(n.v)).padStart(2, "0")),
      scrollTrigger: { trigger: ".stats", start: "top 78%" },
    });
  });
  if (q(".stat__star")) {
    gsap.from(".stat__star", {
      rotate: -180,
      scale: 0,
      duration: 1.2,
      ease: "back.out(2)",
      stagger: 0.15,
      scrollTrigger: { trigger: ".stats", start: "top 78%" },
    });
  }

  /* ── 10. Process line draws as you scroll (any .steps list) ─ */
  qa(".steps").forEach((list) => {
    const line = list.querySelector(".steps__line");
    if (line) {
      gsap.fromTo(
        line,
        { scaleX: 0 },
        { scaleX: 1, ease: "none", scrollTrigger: { trigger: list, start: "top 80%", end: "top 35%", scrub: 0.6 } }
      );
    }
    gsap.from(list.querySelectorAll(".steps__icon"), {
      scale: 0,
      duration: 0.8,
      ease: "back.out(2.2)",
      stagger: 0.16,
      scrollTrigger: { trigger: list, start: "top 75%" },
    });
  });

  /* ── 11. Footer wordmark rises letter by letter ──────── */
  if (q(".footer__word")) {
    const word = SplitText.create(".footer__word", { type: "chars", mask: "chars", charsClass: "char" });
    // Plays once on enter (not scrubbed): the footer sits at the very bottom of the
    // page, so a scroll-linked version could never reach its end state.
    gsap.from(word.chars, {
      yPercent: 100,
      duration: 1.3,
      ease: EASE,
      stagger: 0.045,
      scrollTrigger: { trigger: ".footer__word", start: "top 95%" },
    });
  }

  /* ── 12. Magnetic buttons (React Bits "Magnet") ──────── */
  if (window.matchMedia("(hover: hover)").matches) {
    qa<HTMLElement>("[data-magnetic]").forEach((el) => {
      const xTo = gsap.quickTo(el, "x", { duration: 0.6, ease: "power3.out" });
      const yTo = gsap.quickTo(el, "y", { duration: 0.6, ease: "power3.out" });
      const move = (e: PointerEvent) => {
        const r = el.getBoundingClientRect();
        xTo((e.clientX - (r.left + r.width / 2)) * 0.28);
        yTo((e.clientY - (r.top + r.height / 2)) * 0.38);
      };
      const leave = () => {
        gsap.to(el, { x: 0, y: 0, duration: 0.9, ease: "elastic.out(1, 0.45)" });
      };
      el.addEventListener("pointermove", move);
      el.addEventListener("pointerleave", leave);
      cleanups.push(() => {
        el.removeEventListener("pointermove", move);
        el.removeEventListener("pointerleave", leave);
      });
    });
  }

  /* ── 13. Vanta fog behind the CTA (only while near view) ─ */
  const vantaEl = q(".cta__vanta");
  if (vantaEl) {
    let effect: { destroy: () => void } | null = null;
    const start = () => {
      if (effect) return;
      try {
        effect = FOG({
          el: vantaEl,
          THREE,
          mouseControls: true,
          touchControls: false,
          gyroControls: false,
          highlightColor: 0x4f79a0,
          midtoneColor: 0x0f3f6b,
          lowlightColor: 0x05253f,
          baseColor: 0x031a2e,
          blurFactor: 0.62,
          speed: 0.9,
          zoom: 0.7,
        });
      } catch {
        /* no WebGL — the static gradient underneath stays */
      }
    };
    const stop = () => {
      effect?.destroy();
      effect = null;
    };
    ScrollTrigger.create({
      trigger: ".cta",
      start: "top bottom+=200",
      end: "bottom top-=200",
      onToggle: (self) => (self.isActive ? start() : stop()),
    });
    cleanups.push(stop);
  }

  ScrollTrigger.refresh();
}
