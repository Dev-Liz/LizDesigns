"use client";
import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  Code2,
  ExternalLink,
  Layers3,
  Mail,
  Menu,
  Search,
  X,
} from "lucide-react";
import { useState } from "react";
import {
  projects,
  tools,
  experiences,
  articles,
  shots,
  socials,
} from "@/lib/content";
import { ThemeToggle } from "./theme-toggle";
import { AskLiz } from "./ask-liz";

const rise = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5 },
};
const SectionTitle = ({ label, title, copy }) => (
  <motion.div {...rise} className="mb-8 grid gap-4 md:grid-cols-12">
    <div className="md:col-span-2">
      <span className="eyebrow inline-flex items-center gap-2">
        <i className="dot" />
        {label}
      </span>
    </div>
    <h2 className="font-display text-4xl font-bold tracking-[-.06em] sm:text-5xl md:col-span-6">
      {title}
    </h2>
    {copy && (
      <p className="max-w-sm self-end text-sm leading-6 text-[var(--muted)] md:col-span-4">
        {copy}
      </p>
    )}
  </motion.div>
);

export function PortfolioHome() {
  const [filter, setFilter] = useState("All");
  const [menu, setMenu] = useState(false);
  const visibleProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.type === filter);
  return (
    <main className="overflow-hidden">
      <header className="sticky top-0 z-30 border-b border-[var(--line)] bg-[color:var(--bg)]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a
            href="#top"
            className="font-display text-lg font-extrabold tracking-[-.08em]"
          >
            LIZ BASSEY<span className="text-[var(--accent)]">.</span>
          </a>
          <nav className="hidden gap-6 text-xs md:flex">
            {[
              ["Works", "#works"],
              ["Tools", "#tools"],
              ["Thoughts", "#writing"],
              ["Contact", "#contact"],
            ].map(([name, link]) => (
              <a className="link-underline" href={link} key={name}>
                {name}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              className="grid h-9 w-9 place-items-center rounded-full border border-[var(--line)] md:hidden"
              aria-label="Open navigation"
              onClick={() => setMenu(!menu)}
            >
              {menu ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>
        {menu && (
          <nav className="grid gap-4 border-t border-[var(--line)] px-5 py-5 text-sm md:hidden">
            {[
              ["Works", "#works"],
              ["Tools", "#tools"],
              ["Thoughts", "#writing"],
              ["Contact", "#contact"],
            ].map(([name, link]) => (
              <a onClick={() => setMenu(false)} href={link} key={name}>
                {name}
              </a>
            ))}
          </nav>
        )}
      </header>

      <section
        id="top"
        className="page-grid mx-auto max-w-7xl border-x border-[var(--line)] px-5 pt-14 sm:pt-24"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid min-h-[600px] content-between pb-10"
        >
          <div className="flex items-center justify-between">
            <span className="eyebrow inline-flex items-center gap-2">
              <i className="dot animate-pulse" />
              Available for Design Engineering projects
            </span>
            <span className="eyebrow hidden sm:block">
              Based in Nigeria · Working worldwide
            </span>
          </div>
          <div className="grid gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-9">
              <p className="mb-4 font-sans text-sm text-[var(--muted)]">
                Hello, I&apos;m Liz
              </p>
              <h1 className="font-display text-[13vw] font-extrabold leading-[.82] tracking-[-.095em] md:text-[9.1rem]">
                FRONTEND
                <br />
                <span className="text-[var(--accent)]">DEV</span> + UX.
              </h1>
            </div>
            <div className="md:col-span-3">
              <p className="mb-6 text-sm leading-6 text-[var(--muted)]">
                I'm a detail-oriented frontend developer with a solid background
                in UX design and research. I make software product experience
                intuitive, enjoyable and seamless.
              </p>
              <a
                href="#works"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--ink)] px-4 py-3 text-xs text-[var(--bg)]"
              >
                Explore my works. <ArrowDownRight size={15} />
              </a>
            </div>
          </div>
          <div className="flex justify-between border-t border-[var(--line)] pt-4 text-[10px] uppercase tracking-[.12em] text-[var(--muted)]">
            <span>Scroll to explore</span>
            <span>01 / 07</span>
          </div>
        </motion.div>
      </section>

      <section
        id="works"
        className="mx-auto max-w-7xl border-x border-t border-[var(--line)] px-5 py-20"
      >
        <SectionTitle
          label="01 · Selected work"
          title="Built with the users at heart."
          copy="Intuitive and functional interfaces that guide the user seamlessly through the product."
        />
        <div className="mb-7 flex flex-wrap gap-2">
          {["All", "Frontend", "Case Studies"].map((item) => (
            <button
              onClick={() => setFilter(item)}
              key={item}
              className={`rounded-full border px-3 py-2 text-xs transition ${filter === item ? "border-[var(--ink)] bg-[var(--ink)] text-[var(--bg)]" : "border-[var(--line)] hover:border-[var(--accent)]"}`}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {visibleProjects.map((project, index) => (
            <motion.a
              {...rise}
              transition={{ delay: index * 0.06 }}
              href={project.href}
              target="_blank"
              rel="noreferrer"
              key={project.title}
              className="group card overflow-hidden p-3"
            >
              <div className="relative h-64 overflow-hidden rounded-xl bg-neutral-200 dark:bg-neutral-800">
                <img
                  src={project.image}
                  alt=""
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                console.log(project.image);
                <span className="absolute left-3 top-3 rounded-full bg-[var(--surface)] px-2.5 py-1 text-[10px]">
                  {project.type}
                </span>
              </div>
              <div className="grid gap-4 p-2 pt-5 sm:grid-cols-[1fr_auto]">
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <h3 className="font-display text-xl font-bold tracking-[-.05em]">
                      {project.title}
                    </h3>
                    <span className="text-xs text-[var(--muted)] sm:hidden">
                      {project.year}
                    </span>
                  </div>
                  <p className="max-w-md text-sm leading-6 text-[var(--muted)]">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.stack.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full border border-[var(--line)] px-2 py-1 text-[10px]"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="hidden text-[var(--muted)] sm:block">
                  <span className="text-xs">{project.year}</span>
                  <ArrowUpRight
                    className="ml-auto mt-10 transition group-hover:-translate-y-1 group-hover:translate-x-1"
                    size={20}
                  />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      <section
        id="tools"
        className="mx-auto max-w-7xl border-x border-t border-[var(--line)] px-5 py-20"
      >
        <SectionTitle
          label="02 · Tool box"
          title="The right tools for the idea"
          copy="I use top industry standard tools that get the job done."
        />
        <div className="grid grid-cols-2 border-l border-t border-[var(--line)] sm:grid-cols-3 md:grid-cols-5">
          {tools.map(([name, type], i) => (
            <motion.div
              {...rise}
              transition={{ delay: i * 0.03 }}
              key={name}
              className="min-h-36 border-b border-r border-[var(--line)] p-4 transition hover:bg-[var(--ink)] hover:text-[var(--bg)]"
            >
              <span className="mb-8 block text-[10px] text-[var(--accent)]">
                0{i + 1}
              </span>
              <h3 className="font-display text-lg font-bold tracking-[-.05em]">
                {name}
              </h3>
              <p className="mt-1 text-[10px] opacity-60">{type}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl border-x border-t border-[var(--line)] px-5 py-20">
        <SectionTitle
          label="03 · How I work"
          title="A walkthrough of my design process."
        />
        <div className="grid gap-4 md:grid-cols-4">
          {[
            [
              "01",
              "Research",
              "I start with context: the people, the product, the problem and the constraints.",
            ],
            [
              "02",
              "Define",
              "I analyze research data to make informed decisions.",
            ],
            [
              "03",
              "Design",
              "I develop design architecture, flow and personality.",
            ],
            [
              "04",
              "Prototype",
              "i create an implementation to test with real users.",
            ],
          ].map(([number, title, copy]) => (
            <motion.article {...rise} key={number} className="card p-5">
              <span className="eyebrow text-[var(--accent)]">{number}</span>
              <h3 className="mt-12 font-display text-2xl font-bold tracking-[-.06em]">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                {copy}
              </p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl border-x border-t border-[var(--line)] px-5 py-20">
        <SectionTitle
          label="04 · Experience"
          title="A designer's judgement. An engineer's discipline."
        />
        <div className="border-t border-[var(--line)]">
          {experiences.map(([year, company, role]) => (
            <motion.div
              {...rise}
              key={company}
              className="grid gap-2 border-b border-[var(--line)] py-5 text-sm sm:grid-cols-[150px_1fr_auto] sm:items-center"
            >
              <span className="text-xs text-[var(--muted)]">{year}</span>
              <h3 className="font-display text-xl font-bold tracking-[-.05em]">
                {company}
              </h3>
              <span className="text-xs text-[var(--muted)]">{role}</span>
            </motion.div>
          ))}
        </div>
      </section>

      <section
        id="writing"
        className="mx-auto max-w-7xl border-x border-t border-[var(--line)] px-5 py-20"
      >
        <SectionTitle
          label="05 · Writing"
          title="Sharing as I build and learn"
          copy="Thoughts around concepts, tools and technologies I find interesting."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {articles.map((article, i) => (
            <motion.a
              {...rise}
              transition={{ delay: i * 0.08 }}
              href={`/blog/${article.slug}`}
              key={article.slug}
              className="card group overflow-hidden"
            >
              <div className="h-40 overflow-hidden">
                <img
                  src={article.image}
                  alt=""
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex min-h-64 flex-col justify-between p-5">
                <span className="eyebrow text-[var(--accent)]">
                  {article.tag}
                </span>
                <div>
                  <h3 className="font-display text-2xl font-bold leading-[1.05] tracking-[-.06em]">
                    {article.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                    {article.summary}
                  </p>
                </div>
                <ArrowUpRight
                  className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                  size={19}
                />
              </div>
            </motion.a>
          ))}
        </div>
        <a
          href="/blog"
          className="mt-7 inline-flex items-center gap-2 text-xs font-medium link-underline"
        >
          Read all writing <ArrowUpRight size={14} />
        </a>
      </section>

      <section className="mx-auto max-w-7xl border-x border-t border-[var(--line)] px-5 py-20">
        <SectionTitle
          label="06 · Design explorations"
          title="Visualizing Ideas and concepts."
          copy="A visual playground of interfaces, ideas and experiments from my Dribbble."
        />
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {shots.map((shot, i) => (
            <motion.a
              {...rise}
              transition={{ delay: i * 0.06 }}
              href={shot.url}
              target="_blank"
              rel="noreferrer"
              key={shot.title}
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-[var(--ink)] p-4 text-[var(--bg)]"
            >
              <div
                style={{
                  backgroundImage: `url('designs/${shot.image}')`,
                }}
                className={`absolute inset-0 transition duration-500 group-hover:scale-110 ${["bg-gradient-to-br from-orange-400 via-rose-500 to-indigo-950", "bg-gradient-to-br from-amber-200 via-blue-600 to-slate-950", "bg-gradient-to-br from-green-200 via-lime-500 to-stone-950", "bg-gradient-to-br from-fuchsia-400 via-orange-400 to-slate-900"][i]} bg-contain bg-center`}
              />
              <div className="relative flex h-full flex-col justify-between">
                <span className="eyebrow rounded-full bg-black/20 px-2 py-1 backdrop-blur self-start">
                  {shot.category}
                </span>
                <h3 className="font-display text-xl font-bold leading-none tracking-[-.06em]">
                  {shot.title}
                  <ArrowUpRight className="ml-1 inline" size={15} />
                </h3>
              </div>
            </motion.a>
          ))}
        </div>
        <a
          href="https://dribbble.com/Liz-B"
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center gap-2 text-xs font-medium link-underline"
        >
          See all explorations on Dribbble <ArrowUpRight size={14} />
        </a>
      </section>

      <section
        id="contact"
        className="mx-auto max-w-7xl border-x border-y border-[var(--line)] px-5 py-20"
      >
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-8">
            <span className="eyebrow inline-flex items-center gap-2">
              <i className="dot" />
              07 · Contact
            </span>
            <h2 className="mt-5 font-display text-[14vw] font-extrabold leading-[.82] tracking-[-.095em] md:text-[8.7rem]">
              LET&apos;S
              <br />
              <span className="text-[var(--accent)]">TALK.</span>
            </h2>
          </div>
          <div className="self-end md:col-span-4">
            <p className="mb-6 text-sm leading-6 text-[var(--muted)]">
              Have a product that needs thoughtful UX perspective or frontend
              craft? I&apos;d love to hear about it.
            </p>
            <a
              className="mb-10 inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-3 text-sm text-white"
              href="mailto:basseyelizabeth569@gmail.com"
            >
              Start a conversation <Mail size={15} />
            </a>
            <div className="grid grid-cols-2 gap-y-3 border-t border-[var(--line)] pt-5">
              {socials.map(([name, url]) => (
                <a
                  className="text-xs link-underline w-fit"
                  target="_blank"
                  rel="noreferrer"
                  href={url}
                  key={name}
                >
                  {name} <ArrowUpRight className="inline" size={11} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
      <footer className="mx-auto flex max-w-7xl justify-between px-5 py-6 text-[10px] uppercase tracking-[.1em] text-[var(--muted)]">
        <span>© Elizabeth Bassey. All rights reserved</span>
        <span>Last updated: October 2026</span>
      </footer>
      <AskLiz />
    </main>
  );
}
