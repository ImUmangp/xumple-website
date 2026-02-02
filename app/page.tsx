"use client";
import React from "react";
import { motion, type Variants } from "framer-motion";
import {
  Moon,
  Instagram,
  Linkedin,
  Twitter,
  Download,
  ArrowRight,
  Mail,
  ClipboardList,
  PhoneCall,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Xumple – Landing Hero inspired by the screenshot layout
// Stack: React + Tailwind + Framer Motion + lucide-react + shadcn/ui
// Drop into any Next.js/React app. If using Vite, replace shadcn imports with your own button/card components.

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.06 * i,
      duration: 0.55,
      ease: [0.16, 1, 0.3, 1], // ✅ "easeOut" replacement (cubic-bezier)
    },
  }),
};

const floaty: Variants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 4.5,
      repeat: Infinity,
      ease: [0.45, 0, 0.55, 1], // ✅ easeInOut cubic-bezier
    },
  },
};

function Dots({ className = "" }: { className?: string }) {
  return (
    <div className={"grid grid-cols-6 gap-2 opacity-50 " + className}>
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={i}
          className="h-1.5 w-1.5 rounded-full border border-black/60"
        />
      ))}
    </div>
  );
}

function MetricPill({
  value,
  label,
  highlight,
  className = "",
}: {
  value: string;
  label: string;
  highlight?: string;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -3, scale: 1.01 }}
      className={
        "pointer-events-auto flex items-center gap-3 rounded-full border border-black bg-white/85 px-5 py-3 shadow-[6px_6px_0_0_rgba(0,0,0,0.12)] backdrop-blur " +
        className
      }
    >
      <div className="text-3xl font-black tracking-tight text-black">{value}</div>
      <div className="leading-tight">
        {highlight ? (
          <div className="text-xs font-extrabold uppercase tracking-widest text-indigo-600">
            {highlight}
          </div>
        ) : null}
        <div className="text-xs font-extrabold uppercase tracking-widest text-black">
          {label}
        </div>
      </div>
    </motion.div>
  );
}

function BrandMark() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative">
        <div className="h-7 w-10 rounded-lg border border-black/20 bg-white shadow-sm" />
        <div className="absolute left-2 top-1.5 h-4 w-6 rounded-md border border-indigo-500/40 bg-indigo-100" />
      </div>
      <div className="text-xl font-extrabold tracking-tight">
        <span className="text-indigo-600">X</span>umple
      </div>
    </div>
  );
}

export default function XumpleLandingPage() {
  return (
    <div className="min-h-screen w-full bg-[#f4efe7] text-black">
      <Hero />
      <ServicesCarousel />
      <PortfolioSection />
      <TestimonialsSection />
      <ContactSection />
      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-16">
        <div className="h-px w-full bg-black/10" />
      </div>
    </div>
  );
}

function Hero() {
  return (
    <>
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-indigo-300/30 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="absolute -right-40 -bottom-40 h-[520px] w-[520px] rounded-full bg-fuchsia-300/20 blur-3xl"
        />
      </div>

      {/* Topbar */}
      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <motion.div
          initial={{ opacity: 0, x: -14 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <BrandMark />
        </motion.div>

        <motion.button
          initial={{ opacity: 0, x: 14 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="rounded-full border border-black/15 bg-white/70 p-2 shadow-sm backdrop-blur"
          aria-label="Toggle theme"
        >
          <Moon className="h-5 w-5" />
        </motion.button>
      </header>

      {/* Main */}
      <main className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-10 pt-6 lg:grid-cols-2 lg:gap-6">
        {/* Left content */}
        <div className="relative">
          {/* Left vertical line accent */}
          <div className="pointer-events-none absolute -left-10 top-0 hidden h-[520px] w-10 lg:block">
            <div className="absolute left-4 top-10 h-[420px] w-[2px] bg-black/30" />
            <div className="absolute left-[7px] top-0 h-6 w-6 rounded-full border-2 border-black/40 bg-[#f4efe7]" />
            <div className="absolute bottom-0 left-[7px] h-6 w-6 rounded-full border-2 border-black/40 bg-[#f4efe7]" />
          </div>

          <motion.div
            initial="hidden"
            animate="show"
            className="max-w-xl"
          >
            <motion.div variants={fadeUp} custom={0} className="text-sm font-extrabold tracking-widest">
              HELLO WORLD, <span className="text-indigo-600">WE ARE</span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              custom={1}
              className="mt-4 text-6xl font-black tracking-tight md:text-7xl"
            >
              <span className="relative inline-block">
                <span className="relative z-10 text-indigo-600">XUMPLE</span>
                <span className="absolute left-1 top-1 -z-0 text-black/80">
                  XUMPLE
                </span>
              </span>
            </motion.h1>

            <motion.div
              variants={fadeUp}
              custom={2}
              className="mt-3 text-2xl font-semibold italic"
            >
              A Creative Growth Studio
            </motion.div>

            <motion.p
              variants={fadeUp}
              custom={3}
              className="mt-6 max-w-md text-base leading-relaxed text-black/70"
            >
              We help brands grow with high-performing content, social media strategy,
              and delightful digital experiences — powered by motion-first design.
            </motion.p>

            <motion.div variants={fadeUp} custom={4} className="mt-6 flex items-center gap-4">
              <a
                href="#"
                className="rounded-full border border-black/15 bg-white/70 p-2 shadow-sm backdrop-blur transition hover:-translate-y-0.5"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="rounded-full border border-black/15 bg-white/70 p-2 shadow-sm backdrop-blur transition hover:-translate-y-0.5"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="rounded-full border border-black/15 bg-white/70 p-2 shadow-sm backdrop-blur transition hover:-translate-y-0.5"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              custom={5}
              className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
            >
              <Button
                className="rounded-full border border-black bg-white px-8 py-6 font-bold text-black shadow-[8px_8px_0_0_rgba(0,0,0,0.12)] hover:-translate-y-0.5"
              >
                CONTACT US <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <button className="group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-black/80">
                <Download className="h-4 w-4" />
                Download Brochure
                <span className="h-[2px] w-0 bg-black/60 transition-all duration-300 group-hover:w-10" />
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Right art / illustration area */}
        <div className="relative">
          {/* dotted clusters */}
          <Dots className="absolute -right-2 -top-6 hidden lg:grid" />
          <Dots className="absolute -left-10 bottom-0 hidden lg:grid" />

          {/* Main circle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative mx-auto flex h-[420px] w-[420px] items-center justify-center rounded-full bg-indigo-500/70 shadow-[0_30px_80px_rgba(0,0,0,0.12)] md:h-[520px] md:w-[520px]"
          >
            {/* pseudo 3D rocket */}
            <motion.div
              variants={floaty}
              animate="animate"
              className="relative"
            >
              <div className="mx-auto h-[250px] w-[140px] rounded-[80px] border border-white/60 bg-gradient-to-b from-white via-white/80 to-white/60 shadow-[0_18px_50px_rgba(0,0,0,0.25)]" />
              <div className="absolute left-1/2 top-[52px] h-14 w-14 -translate-x-1/2 rounded-full border border-indigo-400/40 bg-indigo-100 shadow-inner" />
              <div className="absolute left-1/2 top-[130px] h-20 w-2 -translate-x-1/2 rounded-full bg-indigo-200/80" />

              {/* wings */}
              <div className="absolute left-[-24px] top-[140px] h-24 w-14 -skew-x-12 rounded-3xl bg-indigo-300/70 shadow-md" />
              <div className="absolute right-[-24px] top-[140px] h-24 w-14 skew-x-12 rounded-3xl bg-indigo-300/70 shadow-md" />

              {/* flame */}
              <motion.div
                initial={{ opacity: 0.8, scale: 0.98 }}
                animate={{ opacity: [0.75, 1, 0.75], scale: [0.95, 1.05, 0.95] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-1/2 top-[245px] h-24 w-20 -translate-x-1/2 rounded-[40px] bg-gradient-to-b from-white/90 via-fuchsia-200/80 to-indigo-400/60 blur-[0.3px]"
              />
            </motion.div>

            {/* Floating icons */}
            {[
              { label: "Play", x: -150, y: 40 },
              { label: "Chat", x: -120, y: -60 },
              { label: "Like", x: 120, y: 80 },
              { label: "Map", x: 150, y: 10 },
              { label: "Coin", x: 40, y: 150 },
              { label: "Mail", x: 150, y: 150 },
            ].map((b, i) => (
              <motion.div
                key={b.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + i * 0.08, duration: 0.5 }}
                whileHover={{ scale: 1.08, rotate: 2 }}
                className="absolute"
                style={{ transform: `translate(${b.x}px, ${b.y}px)` }}
              >
                <div className="h-14 w-14 rounded-2xl border border-white/40 bg-white/70 shadow-lg backdrop-blur" />
              </motion.div>
            ))}
          </motion.div>

          {/* Metric pills */}
          <div className="pointer-events-none absolute -left-2 bottom-12 flex w-full items-center justify-start">
            <MetricPill value="30+" highlight="HAPPY" label="CLIENTS" className="pointer-events-auto" />
          </div>

          <div className="pointer-events-none absolute bottom-4 right-0 flex w-full items-center justify-end">
            <MetricPill value="999+" label="VIDEOS" highlight="EDITED & PUBLISHED" className="pointer-events-auto" />
          </div>
        </div>
      </main>

      {/* Footer line */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-10">
        <div className="h-px w-full bg-black/10" />
      </div>
    </>
  );
}

function ServicesCarousel() {
  const services = [
    {
      title: "VIDEO EDITING",
      subtitle: "Vlogs, Tutorials, Educational etc.",
      desc:
        "Transform your raw footage into stunning, engaging videos with our professional video editing services. From concept to delivery, we bring your story to life.",
    },
    {
      title: "ADVERTISING",
      subtitle: "Facebook, Instagram and Google",
      desc:
        "Empower your brand with Facebook, Instagram, Google, and YouTube advertising. Reach millions, boost sales, and maximize visibility.",
    },
    {
      title: "SOCIAL MEDIA CONSULTING",
      subtitle: "Calls for building strategy",
      desc:
        "Maximize YouTube success with expert consulting: in-depth channel analysis, innovative video ideas, editing/thumbnail feedback, and content optimization.",
    },
    {
      title: "SOCIAL MEDIA MANAGEMENT",
      subtitle: "Instagram, LinkedIn and more",
      desc:
        "Amplify your social media impact through expert management. We devise captivating strategies for heightened engagement, follower growth, and extensive reach.",
    },
    {
      title: "360° YOUTUBE MANAGEMENT",
      subtitle: "For Brands and Influencers",
      desc:
        "All-encompassing support for strategy, post-production, operations, and analytics — driving channel growth and success.",
    },
    {
      title: "GRAPHIC DESIGNING",
      subtitle: "Multipurpose Designing",
      desc:
        "Elevate your brand with tailored graphic design services: stunning visuals for marketing, branding, and social media.",
    },
  ];

  const [page, setPage] = React.useState(0);
  const pages = [services.slice(0, 3), services.slice(3, 6)];

  return (
    <section className="relative z-10 mx-auto max-w-7xl px-6 pb-20 pt-10">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-center text-4xl font-black tracking-widest"
      >
        OUR SERVICES
      </motion.h2>

      {/* Right vertical line accent */}
      <div className="pointer-events-none absolute -right-4 top-0 hidden h-full w-10 lg:block">
        <div className="absolute right-4 top-24 h-[520px] w-[2px] bg-black/25" />
        <div className="absolute right-[7px] top-10 h-6 w-6 rounded-full border-2 border-black/35 bg-[#f4efe7]" />
        <div className="absolute right-[7px] top-[560px] h-6 w-6 rounded-full border-2 border-black/35 bg-[#f4efe7]" />
      </div>

      {/* Decorative dots */}
      <Dots className="absolute -right-4 bottom-12 hidden lg:grid" />

      {/* Carousel */}
      <div className="mt-12">
        <div className="relative">
          <motion.div
            key={page}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="grid grid-cols-1 gap-6 md:grid-cols-3"
          >
            {pages[page].map((s, idx) => (
              <ServiceCard key={s.title} service={s} index={idx} />
            ))}
          </motion.div>

          {/* Carousel nav */}
          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              onClick={() => setPage(0)}
              className="rounded-full p-2"
              aria-label="Services page 1"
            >
              <Dot active={page === 0} />
            </button>
            <button
              onClick={() => setPage(1)}
              className="rounded-full p-2"
              aria-label="Services page 2"
            >
              <Dot active={page === 1} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function PortfolioSection() {
  const filters = ["ALL", "VIDEO EDITS", "THUMBNAILS", "AD EDITS"] as const;
  type Filter = (typeof filters)[number];

  const items = [
    {
      id: "p1",
      category: "AD EDITS" as Filter,
      title: "Sanjay's Ad Edit",
      desc:
        "Sanjay's captivating Ad video for his SEO course. Edited with attractive animations and to-the-tee transcribing!",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "p2",
      category: "AD EDITS" as Filter,
      title: "Luru's ProductHunt Video",
      desc:
        "Luru's successful ProductHunt launch feature. A high-quality edit with custom-made screen grabs and creative animations!",
      image:
        "https://images.unsplash.com/photo-1553481187-be93c21490a9?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "p3",
      category: "THUMBNAILS" as Filter,
      title: "Ishan's Dr Strange thumbnail",
      desc:
        "A mystic fusion of creativity and mastery, showcasing the sorcerer of content's enchanting digital realm.",
      image:
        "https://images.unsplash.com/photo-1520975682031-a7a0a4d03586?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "p4",
      category: "VIDEO EDITS" as Filter,
      title: "Creator Shorts Pack",
      desc:
        "Fast-paced edits, motion typography, and viral pacing for Reels/Shorts.",
      image:
        "https://images.unsplash.com/photo-1516357231954-91487b459602?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "p5",
      category: "THUMBNAILS" as Filter,
      title: "Ecommerce Thumbnail Set",
      desc:
        "Clean product focus with conversion-first layout and bold hierarchy.",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "p6",
      category: "VIDEO EDITS" as Filter,
      title: "YouTube Longform Edit",
      desc:
        "Story-driven longform editing with retention hooks and smooth transitions.",
      image:
        "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  const [filter, setFilter] = React.useState<Filter>("ALL");

  const filtered = filter === "ALL" ? items : items.filter((x) => x.category === filter);

  return (
    <section className="relative z-10 mx-auto max-w-7xl px-6 pb-24 pt-10">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-center text-4xl font-black tracking-widest"
      >
        PORTFOLIO
      </motion.h2>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
        className="mt-7 flex flex-wrap items-center justify-center gap-8 text-sm font-extrabold tracking-widest"
      >
        {filters.map((f) => {
          const active = f === filter;
          return (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={
                "relative pb-2 transition hover:text-indigo-600 " +
                (active ? "text-indigo-600" : "text-black/80")
              }
            >
              {f}
              {active ? (
                <motion.div
                  layoutId="portfolio-underline"
                  className="absolute left-1/2 top-full h-[2px] w-6 -translate-x-1/2 rounded-full bg-indigo-600"
                />
              ) : null}
            </button>
          );
        })}
      </motion.div>

      {/* Right vertical line accent */}
      <div className="pointer-events-none absolute -right-4 top-0 hidden h-full w-10 lg:block">
        <div className="absolute right-4 top-20 h-[720px] w-[2px] bg-black/25" />
        <div className="absolute right-[7px] top-10 h-6 w-6 rounded-full border-2 border-black/35 bg-[#f4efe7]" />
        <div className="absolute right-[7px] top-[740px] h-6 w-6 rounded-full border-2 border-black/35 bg-[#f4efe7]" />
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
        {filtered.map((item, idx) => (
          <PortfolioCard key={item.id} item={item} index={idx} />
        ))}
      </div>
    </section>
  );
}

function PortfolioCard({
  item,
  index,
}: {
  item: { category: string; title: string; desc: string; image: string };
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.06 }}
      whileHover={{ y: -7 }}
      className="relative"
    >
      <div className="group relative overflow-hidden rounded-3xl border border-black/10 bg-white/65 shadow-[0_30px_70px_rgba(0,0,0,0.08)] backdrop-blur">
        {/* Image */}
        <div className="relative m-6 overflow-hidden rounded-2xl">
          <motion.img
            src={item.image}
            alt={item.title}
            className="h-48 w-full object-cover"
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />

          {/* overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent"
          />
        </div>

        <div className="px-6 pb-7">
          <div className="text-xs font-black uppercase tracking-widest text-indigo-600">
            {item.category}
          </div>
          <h3 className="mt-2 text-lg font-extrabold text-black">
            {item.title}
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-black/65">
            {item.desc}
          </p>

          <div className="mt-6 flex items-center gap-2 text-sm font-bold text-black/80">
            See project
            <motion.span
              whileHover={{ x: 4 }}
              className="inline-flex items-center text-indigo-600"
            >
              <ArrowRight className="h-4 w-4" />
            </motion.span>
          </div>
        </div>

        {/* dotted corner */}
        <div className="absolute bottom-7 right-7">
          <div className="grid grid-cols-3 gap-2 opacity-60">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="h-1.5 w-1.5 rounded-full border border-black/50" />
            ))}
          </div>
        </div>

        {/* subtle moving highlight */}
        <motion.div
          initial={{ x: "-40%", opacity: 0 }}
          whileHover={{ x: "140%", opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          className="pointer-events-none absolute top-0 h-full w-28 -skew-x-12 bg-gradient-to-b from-indigo-200/40 via-white/35 to-fuchsia-200/25"
        />
      </div>
    </motion.article>
  );
}

function TestimonialsSection() {
  const testimonials = [
    {
      name: "Parikh Jain",
      role: "Creator and Founder",
      quote:
        "Xumple is a really cool agency to work with. They produce amazing thumbnails, superb video editing and have contributed a lot in growth of my channel.",
      avatar:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Kushal Lodha",
      role: "Founder, KAGR | LinkedIn Top Voice",
      quote:
        "Xumple's exceptional Social Media Management across YouTube, Instagram and LinkedIn saved me so much time and made my experience smooth. Kudos to their team!",
      avatar:
        "https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Mehul Mohan",
      role: "Founder, Codedamn",
      quote:
        "Xumple really helped us get organised with our publishing schedule, video titles and content strategy that boosted our views from 250k/month to 1.1M/month at peak.",
      avatar:
        "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=400&q=80",
    },
  ];

  return (
    <section className="relative z-10 mx-auto max-w-7xl px-6 pb-28 pt-10">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-center text-4xl font-black tracking-widest"
      >
        TESTIMONIALS
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
        className="mt-2 text-center"
      >
        <span className="text-xs font-black uppercase tracking-widest text-indigo-600">
          WHAT
        </span>{" "}
        <span className="ml-2 text-xl font-semibold italic">Customers Say</span>
      </motion.div>

      {/* Right vertical line accent */}
      <div className="pointer-events-none absolute -right-4 top-0 hidden h-full w-10 lg:block">
        <div className="absolute right-4 top-28 h-[520px] w-[2px] bg-black/25" />
        <div className="absolute right-[7px] top-12 h-6 w-6 rounded-full border-2 border-black/35 bg-[#f4efe7]" />
        <div className="absolute right-[7px] top-[560px] h-6 w-6 rounded-full border-2 border-black/35 bg-[#f4efe7]" />
      </div>

      <Dots className="absolute -right-2 top-4 hidden lg:grid" />

      <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
        {testimonials.map((t, idx) => (
          <TestimonialCard key={t.name} t={t} index={idx} />
        ))}
      </div>

      {/* nav mini */}
      <div className="mt-10 flex items-center justify-center">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-indigo-600" />
          <div className="h-2 w-8 rounded-full bg-black/10" />
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  t,
  index,
}: {
  t: { name: string; role: string; quote: string; avatar: string };
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.06 }}
      whileHover={{ y: -7 }}
      className="relative"
    >
      <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white/65 px-8 pb-9 pt-8 shadow-[0_30px_70px_rgba(0,0,0,0.08)] backdrop-blur">
        {/* quote mark */}
        <div className="absolute left-6 top-6 text-4xl font-black text-emerald-500/90">
          ❝
        </div>

        {/* avatar */}
        <div className="mt-2 flex justify-start">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="h-28 w-28 overflow-hidden rounded-full bg-black/5"
          >
            <img
              src={t.avatar}
              alt={t.name}
              className="h-full w-full object-cover"
            />
          </motion.div>
        </div>

        <p className="mt-6 text-sm leading-relaxed text-black/65">
          {t.quote}
        </p>

        <div className="mt-8">
          <div className="text-lg font-extrabold">{t.name}</div>
          <div className="text-sm text-black/60">{t.role}</div>
        </div>

        {/* dotted corner */}
        <div className="absolute bottom-7 right-7">
          <div className="grid grid-cols-3 gap-2 opacity-60">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="h-1.5 w-1.5 rounded-full border border-black/50" />
            ))}
          </div>
        </div>

        {/* subtle moving highlight */}
        <motion.div
          initial={{ x: "-40%", opacity: 0 }}
          whileHover={{ x: "140%", opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          className="pointer-events-none absolute top-0 h-full w-28 -skew-x-12 bg-gradient-to-b from-emerald-200/35 via-white/35 to-indigo-200/20"
        />
      </div>
    </motion.article>
  );
}

function ContactSection() {
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-6 pb-10 pt-10">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-center text-4xl font-black tracking-widest"
      >
        CONTACT US
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
        className="mt-2 text-center"
      >
        <span className="text-xs font-black uppercase tracking-widest text-indigo-600">
          LET'S
        </span>{" "}
        <span className="ml-2 text-xl font-semibold italic">Talk About Ideas</span>
      </motion.div>

      {/* Left vertical line accent */}
      <div className="pointer-events-none absolute -left-4 top-0 hidden h-full w-10 lg:block">
        <div className="absolute left-4 top-28 h-[520px] w-[2px] bg-black/25" />
        <div className="absolute left-[7px] top-12 h-6 w-6 rounded-full border-2 border-black/35 bg-[#f4efe7]" />
        <div className="absolute left-[7px] top-[560px] h-6 w-6 rounded-full border-2 border-black/35 bg-[#f4efe7]" />
      </div>

      {/* Decorative dots */}
      <Dots className="absolute -left-8 bottom-20 hidden lg:grid" />

      <div className="mt-14 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        {/* Left info */}
        <motion.div
          initial={{ opacity: 0, x: -14 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-10"
        >
          <ContactRow
            icon={<Mail className="h-5 w-5" />}
            title="Email"
            lines={["hello@xumple.in", "contact@xumple.in"]}
          />

          <ContactRow
            icon={<ClipboardList className="h-5 w-5" />}
            title="Fill our contact form"
            lines={["Share a few details and we'll get back fast."]}
            action={
              <Button className="mt-6 rounded-full border border-black bg-white px-10 py-6 font-bold text-black shadow-[8px_8px_0_0_rgba(0,0,0,0.12)] hover:-translate-y-0.5">
                CONTACT
              </Button>
            }
          />
        </motion.div>

        {/* Right illustration */}
        <motion.div
          initial={{ opacity: 0, x: 14 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
            className="relative mx-auto flex max-w-md items-center justify-center"
          >
            {/* Phone art */}
            <div className="relative h-[360px] w-[250px] rounded-[44px] border border-black/10 bg-gradient-to-b from-white/90 via-white/70 to-white/60 shadow-[0_40px_90px_rgba(0,0,0,0.10)]">
              <div className="absolute left-1/2 top-5 h-2.5 w-20 -translate-x-1/2 rounded-full bg-black/10" />
              <div className="absolute left-1/2 top-14 h-36 w-36 -translate-x-1/2 rounded-3xl bg-indigo-100/70" />
              <div className="absolute left-1/2 top-56 h-14 w-40 -translate-x-1/2 rounded-2xl bg-black/5" />
            </div>

            {/* floating call card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
              whileHover={{ rotate: 2, scale: 1.03 }}
              className="absolute -right-2 bottom-14 rounded-2xl border border-black/10 bg-white/80 p-4 shadow-lg backdrop-blur"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100">
                  <PhoneCall className="h-5 w-5 text-emerald-700" />
                </div>
                <div>
                  <div className="text-xs font-black uppercase tracking-widest text-black/60">
                    Call Us
                  </div>
                  <div className="text-sm font-extrabold">+91 90000 00000</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* subtle dot */}
          <motion.div
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-20 top-10 h-4 w-4 rounded-full bg-black/10"
          />
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="mt-20 border-t border-black/10 pt-10">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="rounded-full border border-black/15 bg-white/70 p-2 shadow-sm backdrop-blur transition hover:-translate-y-0.5"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="rounded-full border border-black/15 bg-white/70 p-2 shadow-sm backdrop-blur transition hover:-translate-y-0.5"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="rounded-full border border-black/15 bg-white/70 p-2 shadow-sm backdrop-blur transition hover:-translate-y-0.5"
              aria-label="Twitter"
            >
              <Twitter className="h-4 w-4" />
            </a>
          </div>

          <div className="text-center text-xs font-semibold text-black/60">
            © {new Date().getFullYear()} <span className="font-extrabold text-indigo-600">XUMPLE</span> MEDIA PRIVATE LIMITED
            <div className="mt-2 text-[11px] font-extrabold uppercase tracking-widest text-black/60">
              All Rights Reserved
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}

function ContactRow({
  icon,
  title,
  lines,
  action,
}: {
  icon: React.ReactNode;
  title: string;
  lines: string[];
  action?: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="flex items-start gap-6"
    >
      <div className="relative">
        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-black/10 bg-white/80 shadow-[6px_6px_0_0_rgba(0,0,0,0.12)]">
          {icon}
        </div>
        <div className="absolute left-14 top-1/2 h-[2px] w-10 -translate-y-1/2 bg-black/20" />
      </div>

      <div>
        <div className="text-xl font-semibold italic">{title}</div>
        <div className="mt-2 space-y-1 text-sm text-black/60">
          {lines.map((l, i) => (
            <div key={i}>{l}</div>
          ))}
        </div>
        {action}
      </div>
    </motion.div>
  );
}

function Dot({ active }: { active: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <div className="h-2 w-2 rounded-full border border-black/70" />
      <div className={active ? "h-2 w-8 rounded-full bg-indigo-500" : "h-2 w-8 rounded-full bg-black/10"} />
    </div>
  );
}

function ServiceCard({
  service,
  index,
}: {
  service: { title: string; subtitle: string; desc: string };
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.06 }}
      whileHover={{ y: -6 }}
      className="relative"
    >
      <div className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white/70 p-8 shadow-[0_25px_60px_rgba(0,0,0,0.08)] backdrop-blur">
        {/* subtle moving highlight */}
        <motion.div
          initial={{ x: "-40%", opacity: 0 }}
          whileHover={{ x: "140%", opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          className="pointer-events-none absolute top-0 h-full w-28 -skew-x-12 bg-gradient-to-b from-indigo-200/50 via-white/40 to-fuchsia-200/30"
        />

        <div className="text-sm font-black tracking-widest text-black">
          {service.title}
        </div>
        <div className="mt-6 text-base font-extrabold text-black">
          {service.subtitle}
        </div>
        <p className="mt-6 text-sm leading-relaxed text-black/60">
          {service.desc}
        </p>

        {/* dotted corner */}
        <div className="absolute bottom-6 right-6">
          <div className="grid grid-cols-3 gap-2 opacity-60">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="h-1.5 w-1.5 rounded-full border border-black/50" />
            ))}
          </div>
        </div>

        {/* micro CTA */}
        <div className="mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-black/70">
          Learn more
          <span className="inline-block h-[2px] w-8 bg-black/30 transition-all duration-300 group-hover:w-12 group-hover:bg-black/50" />
        </div>
      </div>
    </motion.div>
  );
}
