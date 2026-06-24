import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import {
  Download, Mail, Github, Linkedin, ExternalLink, Code2, Globe, Wrench, Users,
  GraduationCap, Briefcase, Award, Trophy, MapPin, ArrowRight, Sparkles,
} from "lucide-react";
import profileAsset from "@/assets/akshitha-profile.asset.json";
import { SiReact, SiJavascript, SiHtml5, SiCss, SiGit, SiGithub, SiMongodb, SiExpress, SiNodedotjs, SiTailwindcss, SiPython, SiMysql } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import objectDetectionImg from "@/assets/project-object-detection.jpg";
import restaurantImg from "@/assets/project-restaurant.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Akshitha Roy Kanchuboina — Full Stack Developer" },
      { name: "description", content: "Portfolio of Akshitha Roy Kanchuboina — Computer Science student and full stack developer building modern, responsive web applications." },
      { property: "og:title", content: "Akshitha Roy Kanchuboina — Full Stack Developer" },
      { property: "og:description", content: "Projects, skills, internships and achievements of Akshitha Roy Kanchuboina." },
    ],
  }),
  component: Portfolio,
});

const EMAIL = "akshitharoy@example.com";
const GITHUB = "https://github.com/";
const LINKEDIN = "https://www.linkedin.com/";
const RESTAURANT_DEMO = "https://github.com/akshitharoykanchuboina14/Restaurant-website";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("fade-up");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    el.querySelectorAll<HTMLElement>("[data-reveal]").forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);
  return ref;
}

function Nav() {
  const links = [
    ["About", "about"], ["Skills", "skills"], ["Certifications", "certifications"],
    ["Projects", "projects"], ["Experience", "experience"], ["Contact", "contact"],
  ] as const;
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#top" className="font-display text-lg font-bold text-primary">
          AK<span className="text-teal">.</span>
        </a>
        <ul className="hidden items-center gap-7 text-sm font-medium text-muted-foreground md:flex">
          {links.map(([label, id]) => (
            <li key={id}>
              <a href={`#${id}`} className="transition-colors hover:text-primary">{label}</a>
            </li>
          ))}
        </ul>
        <a
          href={`mailto:${EMAIL}`}
          className="hidden rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5 md:inline-flex"
        >
          Hire me
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-teal/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-sky/20 blur-3xl" />
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-[1.25fr_1fr] md:gap-12 md:py-24">
        <div className="fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-teal/30 bg-white/70 px-3 py-1 text-xs font-semibold text-teal backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" /> Open to Software Developer Internships
          </span>
          <h1 className="mt-5 text-[2.5rem] font-extrabold leading-[1.05] text-primary sm:text-5xl md:text-[3.75rem]">
            Akshitha Roy <br />
            <span className="bg-gradient-to-r from-teal to-sky bg-clip-text text-transparent">Kanchuboina</span>
          </h1>
          <p className="mt-4 text-base font-semibold uppercase tracking-wide text-primary/70 sm:text-lg">
            Computer Science Student <span className="text-teal">•</span> Full Stack Developer
          </p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-foreground/80 sm:text-lg">
            I design and build clean, responsive web applications with React, JavaScript and modern
            tooling — focused on shipping recruiter-ready, production-quality interfaces.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:-translate-y-0.5">
              View Projects <ArrowRight className="h-4 w-4" />
            </a>
            <a href="/resume.pdf" download="Akshitha_Roy_Resume.pdf" className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-5 py-3 text-sm font-semibold text-primary transition-colors hover:border-teal hover:text-teal">
              <Download className="h-4 w-4" /> Download Resume
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-teal px-5 py-3 text-sm font-semibold text-teal-foreground shadow-soft transition-transform hover:-translate-y-0.5">
              <Mail className="h-4 w-4" /> Contact Me
            </a>
          </div>
        </div>
        <div className="fade-up flex justify-center md:justify-end" style={{ animationDelay: "120ms" }}>
          <div className="relative">
            <div className="absolute inset-0 -m-3 rounded-full bg-gradient-to-tr from-teal to-sky blur-xl opacity-60" />
            <div className="relative float-slow rounded-full bg-white p-2 shadow-elegant ring-1 ring-border">
              <div className="overflow-hidden rounded-full">
                <img
                  src={profileAsset.url}
                  alt="Akshitha Roy Kanchuboina"
                  width={320}
                  height={320}
                  className="h-56 w-56 object-cover sm:h-64 sm:w-64 md:h-72 md:w-72"
                />
              </div>
            </div>
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground shadow-soft">
              CGPA 9.0 / 10
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionTitle({ eyebrow, title, desc }: { eyebrow: string; title: string; desc?: string }) {
  return (
    <div className="mb-12 text-center" data-reveal>
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-bold sm:text-4xl">{title}</h2>
      {desc && <p className="mx-auto mt-3 max-w-2xl text-foreground/70">{desc}</p>}
    </div>
  );
}

function About() {
  const ref = useReveal();
  return (
    <section id="about" className="section-pad" ref={ref}>
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle eyebrow="About" title="A bit about me" />
        <div className="mx-auto max-w-4xl rounded-3xl border border-border bg-card p-8 shadow-soft md:p-12" data-reveal>
          <p className="text-lg leading-relaxed text-foreground/80">
            I'm a <span className="font-semibold text-primary">Computer Science</span> student and aspiring
            full stack developer. I love turning ideas into clean, responsive web apps with React,
            JavaScript and modern tools — and I'm actively seeking a <span className="font-semibold text-primary">software developer internship</span> where
            I can contribute, learn fast, and grow into a well-rounded engineer.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-4">
            {[
              { icon: Code2, label: "Languages" },
              { icon: Globe, label: "Web Dev" },
              { icon: Wrench, label: "Tools" },
              { icon: Users, label: "Teamwork" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="group flex items-center gap-3 rounded-2xl border border-border bg-secondary/50 px-4 py-3 transition-all hover:border-teal hover:bg-white hover:shadow-soft">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-teal/10 text-teal transition-transform group-hover:scale-110">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="text-sm font-semibold text-primary">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const SKILL_GROUPS = [
  { icon: Code2, title: "Programming", items: ["C", "Java", "Python"] },
  { icon: Globe, title: "Web", items: ["HTML", "CSS", "JavaScript", "React"] },
  { icon: Wrench, title: "Tools", items: ["GitHub", "VS Code", "Git", "Vercel"] },
  { icon: Users, title: "Soft Skills", items: ["Problem Solving", "Communication", "Leadership"] },
];

function Skills() {
  const ref = useReveal();
  return (
    <section id="skills" className="section-pad bg-secondary/40" ref={ref}>
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle eyebrow="Skills" title="Tech I work with" desc="A snapshot of the tools and languages I use to build polished web experiences." />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SKILL_GROUPS.map(({ icon: Icon, title, items }) => (
            <div key={title} data-reveal className="group rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-teal/40 hover:shadow-elegant">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-teal to-sky text-white shadow-soft transition-transform group-hover:scale-110">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-bold">{title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {items.map((s) => (
                  <li key={s} className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-primary/80 transition-colors group-hover:border-teal/30">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const PROJECTS = [
  {
    title: "Live Object Detection with Voice Feedback",
    desc: "Real-time object detection in the browser using TensorFlow.js with spoken audio feedback for accessibility.",
    img: objectDetectionImg,
    tech: ["HTML", "JavaScript", "TensorFlow.js"],
    github: GITHUB,
    demo: "#",
  },
  {
    title: "Masala Magic",
    desc: "A premium Indian restaurant website showcasing authentic North & South Indian cuisine, online reservations, and a digital menu with rich visuals.",
    img: restaurantImg,
    tech: ["HTML", "CSS", "JavaScript"],
    github: GITHUB,
    demo: "#",
  },
];

function Projects() {
  const ref = useReveal();
  return (
    <section id="projects" className="section-pad" ref={ref}>
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle eyebrow="Projects" title="Selected work" desc="A few things I've built recently." />
        <div className="grid gap-8 md:grid-cols-2">
          {PROJECTS.map((p) => (
            <article key={p.title} data-reveal className="group overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all hover:-translate-y-1 hover:shadow-elegant">
              <div className="relative overflow-hidden">
                <img src={p.img} alt={p.title} loading="lazy" width={1280} height={800}
                  className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">{p.title}</h3>
                <p className="mt-2 text-sm text-foreground/70">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="rounded-full bg-teal/10 px-3 py-1 text-xs font-semibold text-teal">{t}</span>
                  ))}
                </div>
                <div className="mt-6 flex gap-3">
                  <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-primary/20 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:border-teal hover:text-teal">
                    <Github className="h-4 w-4" /> Code
                  </a>
                  <a href={p.demo} className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5">
                    <ExternalLink className="h-4 w-4" /> Live Demo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

type TLItem = { year: string; title: string; place: string; detail?: string };
function Timeline({ items }: { items: TLItem[] }) {
  return (
    <ol className="relative space-y-8 border-l-2 border-dashed border-border pl-8">
      {items.map((it, i) => (
        <li key={i} data-reveal className="relative">
          <span className="absolute -left-[42px] grid h-6 w-6 place-items-center rounded-full bg-gradient-to-br from-teal to-sky text-white shadow-soft ring-4 ring-background">
            <span className="h-2 w-2 rounded-full bg-white" />
          </span>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-0.5 hover:border-teal/40 hover:shadow-elegant">
            <p className="text-xs font-bold uppercase tracking-widest text-teal">{it.year}</p>
            <h3 className="mt-1 text-lg font-bold">{it.title}</h3>
            <p className="mt-1 flex items-center gap-1 text-sm text-foreground/70">
              <MapPin className="h-3.5 w-3.5" /> {it.place}
            </p>
            {it.detail && <p className="mt-2 text-sm font-medium text-primary">{it.detail}</p>}
          </div>
        </li>
      ))}
    </ol>
  );
}

function Education() {
  const ref = useReveal();
  const items: TLItem[] = [
    { year: "2023 — 2026", title: "Bachelor's Degree, Computer Science", place: "Aditya Degree College", detail: "CGPA: 9.0 / 10" },
    { year: "2021 — 2023", title: "MPC (Intermediate)", place: "Sri Chaitanya Junior College" },
    { year: "2020 — 2021", title: "Secondary Education", place: "Ravindra Bharathi School" },
  ];
  return (
    <section id="education" className="section-pad bg-secondary/40" ref={ref}>
      <div className="mx-auto max-w-3xl px-5">
        <SectionTitle eyebrow="Education" title="My academic journey" />
        <div className="flex items-center justify-center gap-2 mb-8 text-primary" data-reveal>
          <GraduationCap className="h-5 w-5 text-teal" />
        </div>
        <Timeline items={items} />
      </div>
    </section>
  );
}

function Experience() {
  const ref = useReveal();
  const items: TLItem[] = [
    { year: "Internship", title: "MERN Full Stack Development", place: "Hands-on training in MongoDB, Express, React, Node.js" },
    { year: "Internship", title: "Full Stack Java Training", place: "Backend fundamentals with Java, SQL and REST APIs" },
  ];
  return (
    <section id="experience" className="section-pad" ref={ref}>
      <div className="mx-auto max-w-3xl px-5">
        <SectionTitle eyebrow="Experience" title="Internships" />
        <div className="flex items-center justify-center gap-2 mb-8" data-reveal>
          <Briefcase className="h-5 w-5 text-teal" />
        </div>
        <Timeline items={items} />
      </div>
    </section>
  );
}

const CERTS = [
  "Cisco — C Programming",
  "TCS iON Career Edge",
  "Infosys — Python",
  "HTML5 Application Development",
  "DevOps Certification",
];

function Certificates() {
  const ref = useReveal();
  return (
    <section className="section-pad bg-secondary/40" ref={ref}>
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle eyebrow="Certificates" title="Continuous learning" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CERTS.map((c) => (
            <div key={c} data-reveal className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft transition-all hover:-translate-y-1 hover:border-teal/40 hover:shadow-elegant">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-teal/15 to-sky/15 text-teal transition-transform group-hover:scale-110">
                <Award className="h-6 w-6" />
              </span>
              <p className="text-sm font-semibold text-primary">{c}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const ACHIEVEMENTS = [
  { icon: Trophy, title: "1st Prize", desc: "Live Object Detection project" },
  { icon: Award, title: "5★ HackerRank", desc: "C Programming proficiency" },
  { icon: Trophy, title: "3rd Prize", desc: "Tech Crossword competition" },
];

function Achievements() {
  const ref = useReveal();
  return (
    <section className="section-pad" ref={ref}>
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle eyebrow="Achievements" title="Highlights" />
        <div className="grid gap-6 md:grid-cols-3">
          {ACHIEVEMENTS.map(({ icon: Icon, title, desc }) => (
            <div key={title} data-reveal className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 text-center shadow-soft transition-all hover:-translate-y-1 hover:shadow-elegant">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-teal to-sky" />
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-teal to-sky text-white shadow-soft transition-transform group-hover:scale-110">
                <Icon className="h-7 w-7" />
              </span>
              <h3 className="mt-4 text-lg font-bold">{title}</h3>
              <p className="mt-1 text-sm text-foreground/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const ref = useReveal();
  const links = [
    { icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
    { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/akshitharoy", href: LINKEDIN },
    { icon: Github, label: "GitHub", value: "github.com/akshitharoy", href: GITHUB },
  ];
  return (
    <section id="contact" className="section-pad" ref={ref}>
      <div className="mx-auto max-w-4xl px-5">
        <div className="relative overflow-hidden rounded-3xl bg-primary p-10 text-primary-foreground shadow-elegant md:p-14" data-reveal>
          <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-teal/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-sky/30 blur-3xl" />
          <div className="relative">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal">Contact</p>
            <h2 className="mt-2 text-3xl font-bold text-primary-foreground sm:text-4xl">Let's build something great.</h2>
            <p className="mt-3 max-w-xl text-primary-foreground/70">
              I'm open to internships and entry-level full-stack roles. Drop a message — I'll get back within a day.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {links.map(({ icon: Icon, label, value, href }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer"
                  className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition-all hover:-translate-y-1 hover:border-teal/50 hover:bg-white/10">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-teal text-teal-foreground transition-transform group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className="mt-4 text-xs uppercase tracking-widest text-primary-foreground/60">{label}</p>
                  <p className="mt-1 truncate text-sm font-semibold">{value}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 text-sm text-foreground/60 sm:flex-row">
        <p>© {new Date().getFullYear()} Akshitha Roy Kanchuboina. All rights reserved.</p>
        <p>Built with React & Tailwind.</p>
      </div>
    </footer>
  );
}

const TECH_STACK = [
  { Icon: SiReact, label: "React", color: "#61DAFB" },
  { Icon: SiJavascript, label: "JavaScript", color: "#F7DF1E" },
  { Icon: FaJava, label: "Java", color: "#E76F00" },
  { Icon: SiPython, label: "Python", color: "#3776AB" },
  { Icon: SiMysql, label: "SQL", color: "#4479A1" },
  { Icon: SiHtml5, label: "HTML5", color: "#E34F26" },
  { Icon: SiCss, label: "CSS3", color: "#1572B6" },
  { Icon: SiTailwindcss, label: "Tailwind", color: "#06B6D4" },
  { Icon: SiNodedotjs, label: "Node.js", color: "#5FA04E" },
  { Icon: SiExpress, label: "Express", color: "#0F172A" },
  { Icon: SiMongodb, label: "MongoDB", color: "#47A248" },
  { Icon: SiGit, label: "Git", color: "#F05032" },
  { Icon: SiGithub, label: "GitHub", color: "#0F172A" },
];

function TechStack() {
  const ref = useReveal();
  return (
    <section className="section-pad" ref={ref}>
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle eyebrow="Tech Stack" title="Tools & technologies" desc="The stack I reach for when building modern web apps." />
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 sm:gap-4 md:grid-cols-6 lg:grid-cols-7" data-reveal>
          {TECH_STACK.map(({ Icon, label, color }) => (
            <div key={label} className="group flex flex-col items-center gap-2 rounded-2xl border border-border bg-card p-4 shadow-soft transition-all hover:-translate-y-1 hover:border-teal/40 hover:shadow-elegant">
              <Icon className="h-8 w-8 transition-transform group-hover:scale-110" style={{ color }} />
              <span className="text-xs font-semibold text-primary/80">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <TechStack />
        <Projects />
        <Education />
        <Experience />
        <Certificates />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
