import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  PenTool, Palette, Camera, Crop, Wand2, Layers,
  Image as ImageIcon, Film, Megaphone, Instagram, Mail, Phone, MessageCircle,
  Sparkles, ArrowRight, Star, Quote,
} from "lucide-react";
import founderAsset from "@/assets/founder.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cherry Graphics — Graphic Designer & Creative Editor" },
      { name: "description", content: "Premium creative studio by G. Sai Charan. Posters, banners, social posts, video editing & invitation design." },
      { property: "og:title", content: "Cherry Graphics — Premium Creative Studio" },
      { property: "og:description", content: "Black & gold luxury design studio." },
    ],
  }),
  component: Home,
});

const WHATSAPP_LINK = "https://wa.me/919542203277";
const INSTAGRAM_LINK = "https://www.instagram.com/cherry_graphicss?igsh=cHBrYXRodHVodDB3";
const EMAIL = "cherrygraphics2026@gmail.com";
const EMAIL_LINK = `mailto:${EMAIL}`;

function Home() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="mx-auto mt-4 flex max-w-6xl items-center justify-between gap-4 rounded-full glass px-5 py-3 mx-4 sm:mx-auto">
        <a href="#top" className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-gold-gradient text-[var(--background)] font-bold">C</span>
          <span className="font-display text-lg tracking-wide shimmer-text">Cherry Graphics</span>
        </a>
        <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
          {["About", "Services", "Work", "Contact"].map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="transition-colors hover:text-[var(--gold)]">{l}</a>
          ))}
        </nav>
        <a href={WHATSAPP_LINK} className="rounded-full bg-gold-gradient px-4 py-2 text-xs font-semibold text-[var(--background)] shadow-[var(--shadow-gold-sm)] transition-transform hover:scale-105">
          Hire me
        </a>
      </div>
    </motion.header>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMouse({ x, y });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section id="top" ref={ref} className="relative flex min-h-screen items-center px-4 pt-28 pb-16 sm:px-8">
      <FloatingScene mouse={mouse} />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Left: copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs text-muted-foreground"
          >
            <Sparkles className="h-3.5 w-3.5 text-[var(--gold)]" />
            Premium Creative Studio
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-display text-5xl leading-[0.95] sm:text-6xl lg:text-7xl xl:text-8xl"
          >
            <span className="block text-foreground/90">CHERRY</span>
            <span className="block shimmer-text italic">Graphics</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Graphic Designer &amp; Creative Editor crafting cinematic posters,
            scroll-stopping social, and refined brand visuals — by{" "}
            <span className="text-[var(--gold-soft)]">G. Sai Charan</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a href="#work" className="group inline-flex items-center gap-2 rounded-full bg-gold-gradient px-6 py-3 text-sm font-semibold text-[var(--background)] shadow-[var(--shadow-gold)] transition-transform hover:scale-[1.03]">
              View Portfolio
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:text-[var(--gold)]">
              Start a project
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-10 flex items-center gap-6 text-xs uppercase tracking-[0.2em] text-muted-foreground/70"
          >
            <span>Posters</span><span className="text-[var(--gold)]">/</span>
            <span>Branding</span><span className="text-[var(--gold)]">/</span>
            <span>Video</span><span className="hidden sm:inline text-[var(--gold)]">/</span>
            <span className="hidden sm:inline">Social</span>
          </motion.div>
        </div>

        {/* Right: portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          style={{
            transform: `perspective(1200px) rotateY(${mouse.x * -4}deg) rotateX(${mouse.y * 4}deg)`,
          }}
          className="relative mx-auto w-full max-w-sm lg:max-w-md"
        >
          {/* gold glow */}
          <div className="absolute -inset-8 -z-10 rounded-[2.5rem] bg-[radial-gradient(ellipse_at_center,oklch(0.78_0.13_80/0.35),transparent_70%)] blur-2xl" />
          {/* rotating ring */}
          <div className="absolute -inset-6 -z-10 animate-spin-slow">
            <div className="h-full w-full rounded-full border border-[oklch(0.78_0.12_85/0.25)]" />
          </div>
          <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-gold-gradient opacity-60 blur-[2px]" />
          <div className="relative overflow-hidden rounded-[1.8rem] border border-[oklch(0.78_0.12_85/0.35)] bg-card shadow-[var(--shadow-deep)]">
            <img
              src={founderAsset.url}
              alt="G. Sai Charan — Founder, Cherry Graphics"
              className="block h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,oklch(0.1_0_0/0.7))]" />
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
              <div>
                <div className="text-xs uppercase tracking-[0.25em] text-[var(--gold-soft)]">Founder</div>
                <div className="font-display text-2xl text-white">G. Sai Charan</div>
              </div>
              <span className="rounded-full glass px-3 py-1 text-[10px] uppercase tracking-widest text-[var(--gold)]">Est. 2024</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FloatingScene({ mouse }: { mouse: { x: number; y: number } }) {
  const tools = [
    { Icon: PenTool, top: "12%", left: "6%", size: 56, delay: 0, anim: "animate-float-slow" },
    { Icon: Palette, top: "70%", left: "10%", size: 64, delay: 1, anim: "animate-float-medium" },
    { Icon: Camera, top: "20%", left: "82%", size: 60, delay: 0.5, anim: "animate-float-medium" },
    { Icon: Layers, top: "75%", left: "78%", size: 52, delay: 1.5, anim: "animate-float-slow" },
    { Icon: Wand2, top: "45%", left: "48%", size: 44, delay: 2, anim: "animate-float-slow" },
    { Icon: Crop, top: "38%", left: "18%", size: 40, delay: 1.2, anim: "animate-float-medium" },
  ];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* particles */}
      {Array.from({ length: 28 }).map((_, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-[var(--gold)] animate-pulse-gold"
          style={{
            top: `${(i * 37) % 100}%`,
            left: `${(i * 53) % 100}%`,
            width: 2 + (i % 3),
            height: 2 + (i % 3),
            opacity: 0.25 + (i % 4) * 0.1,
            animationDelay: `${(i % 5) * 0.6}s`,
          }}
        />
      ))}

      {/* large rings */}
      <div className="absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full border border-[oklch(0.78_0.12_85/0.18)] animate-spin-slow" />
      <div className="absolute -top-20 -right-20 h-[300px] w-[300px] rounded-full border border-[oklch(0.78_0.12_85/0.12)]" />
      <div className="absolute -bottom-40 -left-32 h-[500px] w-[500px] rounded-full border border-[oklch(0.78_0.12_85/0.12)] animate-spin-slow" style={{ animationDirection: "reverse" }} />

      {/* gold orbs */}
      <div className="absolute left-1/4 top-1/3 h-72 w-72 rounded-full bg-[radial-gradient(circle,oklch(0.78_0.13_80/0.25),transparent_70%)] blur-2xl" />
      <div className="absolute right-1/3 bottom-1/4 h-80 w-80 rounded-full bg-[radial-gradient(circle,oklch(0.62_0.13_70/0.2),transparent_70%)] blur-2xl" />

      {/* floating tool icons */}
      {tools.map(({ Icon, top, left, size, delay, anim }, i) => (
        <div
          key={i}
          className={`absolute ${anim}`}
          style={{
            top, left,
            animationDelay: `${delay}s`,
            transform: `translate(${mouse.x * (10 + i * 3)}px, ${mouse.y * (10 + i * 3)}px)`,
            transition: "transform 0.4s ease-out",
          }}
        >
          <div className="relative grid place-items-center rounded-2xl glass" style={{ width: size + 24, height: size + 24 }}>
            <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_30%_30%,oklch(0.95_0.05_90/0.25),transparent_60%)]" />
            <Icon style={{ width: size * 0.55, height: size * 0.55 }} className="text-[var(--gold)] drop-shadow-[0_0_18px_oklch(0.78_0.13_80/0.7)]" strokeWidth={1.4} />
          </div>
        </div>
      ))}

      {/* holographic panel */}
      <div className="absolute right-[6%] top-[55%] hidden h-32 w-44 rotate-[8deg] rounded-xl glass md:block">
        <div className="m-3 h-3 w-16 rounded bg-gold-gradient opacity-80" />
        <div className="mx-3 h-2 w-24 rounded bg-[oklch(1_0_0/0.1)]" />
        <div className="mx-3 mt-2 h-2 w-20 rounded bg-[oklch(1_0_0/0.1)]" />
        <div className="m-3 mt-3 h-10 rounded bg-[linear-gradient(135deg,oklch(0.62_0.13_70/0.4),oklch(0.95_0.07_90/0.3))]" />
      </div>
    </div>
  );
}

function SectionHeading({ kicker, title, sub }: { kicker: string; title: string; sub?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
      className="mx-auto mb-14 max-w-2xl text-center"
    >
      <div className="mb-3 text-xs uppercase tracking-[0.35em] text-[var(--gold)]">{kicker}</div>
      <h2 className="font-display text-4xl leading-tight sm:text-5xl">
        <span className="shimmer-text">{title}</span>
      </h2>
      {sub && <p className="mt-4 text-muted-foreground">{sub}</p>}
    </motion.div>
  );
}

function About() {
  return (
    <section id="about" className="relative px-4 py-28 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeading kicker="About" title="Crafted with intention." />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl glass p-8 sm:p-12"
        >
          <div className="absolute -inset-px -z-10 rounded-3xl bg-gold-gradient opacity-30 blur-sm" />
          <p className="font-display text-2xl leading-relaxed text-foreground/90 sm:text-3xl">
            "I build visuals that don't just look beautiful — they{" "}
            <span className="text-gold-gradient">earn attention</span> and{" "}
            <span className="text-gold-gradient">earn trust</span>."
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {[
              { n: "120+", l: "Projects shipped" },
              { n: "40+", l: "Happy clients" },
              { n: "3 yrs", l: "Creative practice" },
            ].map((s) => (
              <div key={s.l} className="rounded-2xl border border-[var(--border)] bg-[oklch(1_0_0/0.02)] p-5 text-center">
                <div className="font-display text-3xl text-gold-gradient">{s.n}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const SERVICES = [
  { Icon: ImageIcon, title: "Poster Design", desc: "Editorial, cinematic posters that anchor your campaigns." },
  { Icon: Megaphone, title: "Banner Design", desc: "High-impact banners for web, print, and outdoor." },
  { Icon: Instagram, title: "Social Media Posts", desc: "Scroll-stopping carousels, reels covers, and templates." },
  { Icon: Film, title: "Video Editing", desc: "Cuts, color, motion graphics — story-first edits." },
  { Icon: Sparkles, title: "Invitation Design", desc: "Weddings, launches, milestones — designed to be kept." },
];

function Services() {
  return (
    <section id="services" className="relative px-4 py-28 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="Services" title="What I make." sub="A focused practice across five disciplines — each delivered with the same studio-grade polish." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              className="group relative rounded-3xl glass p-7 transition-all hover:-translate-y-1 hover:border-[oklch(0.78_0.12_85/0.5)] hover:shadow-[var(--shadow-gold)]"
            >
              <div className="absolute inset-0 -z-10 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: "radial-gradient(400px circle at 50% 0%, oklch(0.78 0.13 80 / 0.18), transparent 60%)" }} />
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-gradient text-[var(--background)] shadow-[var(--shadow-gold-sm)]">
                <s.Icon className="h-6 w-6" strokeWidth={1.8} />
              </div>
              <h3 className="font-display text-2xl text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              <div className="mt-5 inline-flex items-center gap-1 text-xs uppercase tracking-widest text-[var(--gold)] opacity-0 transition-opacity group-hover:opacity-100">
                Enquire <ArrowRight className="h-3 w-3" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -60]);

  const items = [
    { title: "Aurora Campaign", tag: "Poster", grad: "from-[oklch(0.4_0.12_50)] to-[oklch(0.2_0.05_60)]" },
    { title: "Saffron Launch", tag: "Social", grad: "from-[oklch(0.55_0.16_70)] to-[oklch(0.25_0.08_60)]" },
    { title: "Maison Invitations", tag: "Invitation", grad: "from-[oklch(0.5_0.1_80)] to-[oklch(0.18_0.04_70)]" },
    { title: "Velvet Reel", tag: "Video", grad: "from-[oklch(0.3_0.06_60)] to-[oklch(0.15_0.03_60)]" },
    { title: "Atelier Banner", tag: "Banner", grad: "from-[oklch(0.45_0.14_75)] to-[oklch(0.2_0.05_60)]" },
    { title: "Noir Series", tag: "Poster", grad: "from-[oklch(0.25_0.06_70)] to-[oklch(0.1_0.02_60)]" },
  ];

  return (
    <section id="work" className="relative px-4 py-28 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="Selected Work" title="Portfolio." sub="A curated cut. Full case studies on request." />
        <motion.div style={{ y }} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <motion.a
              href={INSTAGRAM_LINK}
              key={it.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.08 }}
              className={`group relative aspect-[4/5] overflow-hidden rounded-3xl border border-[var(--border)] bg-gradient-to-br ${it.grad}`}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,oklch(0.95_0.07_90/0.25),transparent_60%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_50%,oklch(0.1_0_0/0.8))]" />
              {/* faux design panels */}
              <div className="absolute left-6 top-6 h-1 w-12 rounded bg-gold-gradient" />
              <div className="absolute left-6 top-10 h-1 w-8 rounded bg-[oklch(1_0_0/0.4)]" />
              <div className="absolute right-6 top-6 rounded-full glass px-2 py-1 text-[10px] uppercase tracking-widest text-[var(--gold)]">{it.tag}</div>
              <div className="absolute inset-x-6 bottom-6 flex items-end justify-between">
                <div>
                  <div className="font-display text-2xl text-white">{it.title}</div>
                  <div className="mt-1 text-xs text-white/60">Cherry Graphics — 2025</div>
                </div>
                <div className="grid h-10 w-10 place-items-center rounded-full bg-gold-gradient text-[var(--background)] transition-transform group-hover:rotate-45">
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 ring-1 ring-[oklch(0.78_0.12_85/0.6)] transition-opacity group-hover:opacity-100" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const QUOTES = [
  { name: "Aarav M.", role: "Founder, Saffron Studio", text: "Charan delivers like a senior creative director. Posters felt like a magazine spread — refined, restrained, premium." },
  { name: "Neha K.", role: "Marketing Lead", text: "Our social engagement nearly doubled after the rebrand. The black-and-gold direction felt unmistakably ours." },
  { name: "Rohit S.", role: "Event Curator", text: "The invitations were unreal. Guests kept asking who designed them. Cherry Graphics is going to be huge." },
];

function Testimonials() {
  return (
    <section className="relative px-4 py-28 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="Testimonials" title="Words from the room." />
        <div className="grid gap-5 md:grid-cols-3">
          {QUOTES.map((q, i) => (
            <motion.div
              key={q.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative rounded-3xl glass p-7"
            >
              <Quote className="absolute right-5 top-5 h-8 w-8 text-[var(--gold)] opacity-30" />
              <div className="mb-4 flex gap-1 text-[var(--gold)]">
                {Array.from({ length: 5 }).map((_, j) => <Star key={j} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="text-foreground/90 leading-relaxed">"{q.text}"</p>
              <div className="mt-6 flex items-center gap-3 border-t border-[var(--border)] pt-4">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-gold-gradient font-semibold text-[var(--background)]">
                  {q.name.charAt(0)}
                </div>
                <div>
                  <div className="font-medium text-foreground">{q.name}</div>
                  <div className="text-xs text-muted-foreground">{q.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative px-4 py-28 sm:px-8">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[2rem] glass p-10 text-center sm:p-16"
        >
          <div className="absolute -inset-px -z-10 rounded-[2rem] bg-gold-gradient opacity-40 blur-sm" />
          <div className="absolute -top-32 left-1/2 -z-10 h-64 w-64 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,oklch(0.78_0.13_80/0.4),transparent_70%)] blur-2xl" />

          <div className="mb-3 text-xs uppercase tracking-[0.35em] text-[var(--gold)]">Let's collaborate</div>
          <h2 className="font-display text-5xl leading-tight sm:text-6xl">
            <span className="shimmer-text">Have a project in mind?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-muted-foreground">
            Tell me about your brand, your event, or your next launch. Replies within 24 hours.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a href={WHATSAPP_LINK} className="inline-flex items-center gap-2 rounded-full bg-gold-gradient px-6 py-3 text-sm font-semibold text-[var(--background)] shadow-[var(--shadow-gold)] transition-transform hover:scale-105">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
            <a href={INSTAGRAM_LINK} className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold transition-colors hover:text-[var(--gold)]">
              <Instagram className="h-4 w-4" /> Instagram
            </a>
            <a href="mailto:hello@cherrygraphics.studio" className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold transition-colors hover:text-[var(--gold)]">
              <Mail className="h-4 w-4" /> Email
            </a>
          </div>

          <div className="mt-10 grid gap-4 border-t border-[var(--border)] pt-8 text-sm text-muted-foreground sm:grid-cols-3">
            <div className="flex items-center justify-center gap-2"><Phone className="h-4 w-4 text-[var(--gold)]" /> On request</div>
            <div className="flex items-center justify-center gap-2"><Mail className="h-4 w-4 text-[var(--gold)]" /> hello@cherrygraphics.studio</div>
            <div className="flex items-center justify-center gap-2"><Sparkles className="h-4 w-4 text-[var(--gold)]" /> Worldwide remote</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-[var(--border)] px-4 py-10 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-2">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-gold-gradient text-[var(--background)] text-xs font-bold">C</span>
          <span className="font-display tracking-wide shimmer-text">Cherry Graphics</span>
        </div>
        <div className="text-xs text-muted-foreground">© {new Date().getFullYear()} Cherry Graphics. Crafted by G. Sai Charan.</div>
      </div>
    </footer>
  );
}
