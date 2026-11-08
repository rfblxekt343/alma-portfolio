"use client";

import { motion } from "framer-motion";
import {
  ArrowDown, ArrowRight, ArrowUpRight, Code2, Github, Linkedin,
  Mail, Menu, Monitor, Server, Database, Wrench, Sparkles
} from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Skill Simulator",
    category: "Interactive learning platform",
    description: "An interactive skill-training simulator designed to turn practice into an engaging, structured experience.",
    tags: ["React", "TypeScript", "Interactive UI"],
    href: "https://skill-simulator--two.vercel.app/",
    art: "from-violet-500/30 via-indigo-500/10 to-slate-900",
    symbol: "SIMULATOR",
    icon: "◎"
  },
  {
    number: "02",
    title: "Memorial Website",
    category: "Community & remembrance",
    description: "A digital memorial dedicated to those who fell during the Iron Swords war, with a focus on respectful presentation and accessible storytelling.",
    tags: ["React", "UI/UX", "Content Design"],
    href: "https://site-memorial-git-main-rfblxekt343s-projects.vercel.app/",
    art: "from-rose-500/25 via-purple-500/10 to-slate-900",
    symbol: "REMEMBERING",
    icon: "✳"
  },
  {
    number: "03",
    title: "Coordinate Learning",
    category: "Educational application",
    description: "An interactive coordinate-measuring learning tool built to support hands-on practice and visual understanding.",
    tags: ["React", "Education", "Interactive UI"],
    href: "https://coordinates-lenf.vercel.app/",
    art: "from-cyan-500/25 via-blue-500/10 to-slate-900",
    symbol: "COORDINATES",
    icon: "⌖"
  },
  {
    number: "04",
    title: "Calendar Manager",
    category: "Productivity application",
    description: "A time-management calendar experience for organizing schedules and keeping everyday planning clear.",
    tags: ["React", "State Management", "Responsive UI"],
    href: "https://calender-new.vercel.app/",
    art: "from-emerald-500/20 via-teal-500/10 to-slate-900",
    symbol: "YOUR SCHEDULE",
    icon: "▦"
  }
];

const skillGroups = [
  { title: "Frontend", icon: Monitor, skills: ["React", "TypeScript", "JavaScript", "Next.js", "HTML & CSS", "Tailwind CSS"] },
  { title: "Backend", icon: Server, skills: ["Node.js", "REST APIs", "Server-side logic"] },
  { title: "Database", icon: Database, skills: ["MongoDB", "Prisma"] },
  { title: "Tools & Workflow", icon: Wrench, skills: ["Git & GitHub", "VS Code", "Vercel", "Docker"] }
];

export default function Portfolio() {
  return (
    <main className="overflow-hidden">
      <header className="fixed top-0 z-50 w-full border-b border-white/[0.06] bg-[#090d18]/80 backdrop-blur-xl">
        <div className="container flex h-[76px] items-center justify-between">
          <a href="#home" className="flex items-center gap-3 font-bold tracking-tight">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-500 text-white">A.</span>
            <span>ALMA<span className="text-violet-400">.DEV</span></span>
          </a>
          <nav className="nav-links flex items-center gap-8">
            <a className="nav-link" href="#about">About</a>
            <a className="nav-link" href="#projects">Projects</a>
            <a className="nav-link" href="#skills">Skills</a>
            <a className="nav-link" href="#experience">Experience</a>
          </nav>
          <a href="#contact" className="secondary-button !px-4 !py-2.5">Let's talk <ArrowUpRight size={15}/></a>
        </div>
      </header>

      <section id="home" className="relative flex min-h-screen items-center pt-24">
        <div className="glow right-[-150px] top-[5%] bg-violet-600" />
        <div className="glow bottom-[-230px] left-[-180px] bg-blue-600" />
        <div className="container relative z-10 grid items-center gap-12 py-20 lg:grid-cols-[1.2fr_.8fr]">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
            <div className="mb-8 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_14px_#34d399]" />
              <span className="eyebrow !text-slate-400">Full Stack Developer · Israel</span>
            </div>
            <h1 className="max-w-3xl text-5xl font-bold leading-[1.06] tracking-[-.055em] sm:text-7xl lg:text-[76px]">
              Building digital<br/><span className="gradient-text">experiences.</span>
            </h1>
            <p className="muted mt-8 max-w-xl text-base sm:text-lg">
              Hi, I'm Alma. I build interactive web applications and digital products, turning ideas into functional, thoughtful experiences.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#projects" className="primary-button">Explore my work <ArrowUpRight size={17}/></a>
              <a href="#contact" className="secondary-button">Get in touch <Mail size={16}/></a>
            </div>
            <div className="mt-12 flex items-center gap-5 text-slate-500">
              <span className="text-xs uppercase tracking-[.18em]">Find me on</span>
              <a aria-label="GitHub" href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-white"><Github size={19}/></a>
              <a aria-label="LinkedIn" href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-white"><Linkedin size={19}/></a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, delay: .15 }} className="relative mx-auto w-full max-w-[430px]">
            <div className="absolute -inset-5 rounded-[35px] bg-gradient-to-br from-violet-500/20 to-cyan-500/10 blur-2xl"/>
            <div className="card relative p-5 sm:p-7">
              <div className="mb-8 flex items-center justify-between border-b border-white/[0.08] pb-4">
                <div className="flex gap-2"><i className="h-2.5 w-2.5 rounded-full bg-rose-400"/><i className="h-2.5 w-2.5 rounded-full bg-amber-300"/><i className="h-2.5 w-2.5 rounded-full bg-emerald-400"/></div>
                <span className="text-[10px] tracking-[.2em] text-slate-500">DEVELOPER.MINDSET</span>
              </div>
              <div className="space-y-4 font-mono text-sm">
                <p className="text-slate-500">// A little about how I work</p>
                <p><span className="text-violet-300">const</span> <span className="text-cyan-200">developer</span> = {"{"}</p>
                <p className="pl-5 text-slate-300">curiosity: <span className="text-emerald-300">"always learning"</span>,</p>
                <p className="pl-5 text-slate-300">mindset: <span className="text-emerald-300">"problem solver"</span>,</p>
                <p className="pl-5 text-slate-300">focus: <span className="text-emerald-300">"building products"</span>,</p>
                <p className="pl-5 text-slate-300">approach: <span className="text-emerald-300">"detail oriented"</span></p>
                <p>{"};"}</p>
              </div>
              <div className="mt-9 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-4"><Code2 className="mb-3 text-violet-300" size={19}/><p className="text-sm font-semibold">Clean code</p><p className="mt-1 text-xs text-slate-500">Thoughtful solutions</p></div>
                <div className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-4"><Sparkles className="mb-3 text-cyan-300" size={19}/><p className="text-sm font-semibold">User focused</p><p className="mt-1 text-xs text-slate-500">Useful experiences</p></div>
              </div>
            </div>
          </motion.div>
        </div>
        <a href="#about" className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-[10px] tracking-[.2em] text-slate-500 md:flex">SCROLL TO EXPLORE <ArrowDown size={14}/></a>
      </section>

      <section id="about" className="section border-t border-white/[0.05]">
        <div className="container grid gap-12 md:grid-cols-[.7fr_1.3fr]">
          <div><p className="eyebrow">01 / About me</p><h2 className="section-title">A developer who loves to <span className="gradient-text">build.</span></h2></div>
          <div className="pt-2">
            <p className="muted text-lg">I'm a Full Stack Developer with around two years of development experience, focused on creating web applications, interactive tools and learning experiences.</p>
            <p className="muted mt-5">My background includes developing frontend applications, simulators and digital learning products. I enjoy understanding the problem behind a product, designing a clear solution and bringing it to life through code.</p>
            <div className="mt-8 flex flex-wrap gap-2"><span className="pill">Problem solving</span><span className="pill">Product thinking</span><span className="pill">Continuous learning</span><span className="pill">Teamwork</span></div>
          </div>
        </div>
      </section>

      <section id="projects" className="section border-y border-white/[0.05] bg-[#0c1120]">
        <div className="container">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-5">
            <div><p className="eyebrow">02 / Selected work</p><h2 className="section-title">Things I've <span className="gradient-text">built.</span></h2><p className="muted max-w-xl">A selection of projects that reflect my interest in useful products, interactive experiences and thoughtful development.</p></div>
            <span className="pill">04 Featured projects</span>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((project, index) => (
              <motion.article key={project.number} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }} transition={{ duration: .5, delay: index * .08 }} className="card group overflow-hidden">
                <div className={`project-art bg-gradient-to-br ${project.art}`}>
                  <div className="absolute inset-0 opacity-20" style={{backgroundImage:"linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),linear-gradient(90deg,rgba(255,255,255,.08) 1px,transparent 1px)",backgroundSize:"32px 32px"}}/>
                  <div className="text-center">
                    <div className="mb-3 text-5xl text-white/80">{project.icon}</div>
                    <div className="font-mono text-xs tracking-[.35em] text-white/60">{project.symbol}</div>
                  </div>
                  <span className="absolute right-5 top-5 font-mono text-xs text-white/50">{project.number}</span>
                </div>
                <div className="p-6 sm:p-7">
                  <p className="eyebrow !text-xs">{project.category}</p>
                  <div className="mt-2 flex items-start justify-between gap-3"><h3 className="text-2xl font-semibold tracking-tight">{project.title}</h3><a href={project.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`} className="rounded-full border border-slate-700 p-2.5 text-slate-300 transition group-hover:border-violet-400 group-hover:text-violet-300"><ArrowUpRight size={18}/></a></div>
                  <p className="muted mt-3 min-h-[76px] text-sm">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">{project.tags.map(tag => <span key={tag} className="pill">{tag}</span>)}</div>
                  <a href={project.href} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-violet-300 hover:text-violet-200">View live project <ArrowRight size={15}/></a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="section">
        <div className="container">
          <p className="eyebrow">03 / Toolbox</p><h2 className="section-title">Technologies I <span className="gradient-text">work with.</span></h2>
          <p className="muted mb-10 max-w-xl">Tools and technologies I've worked with across development projects. This list should be tailored to the stack I can confidently discuss.</p>
          <div className="grid gap-4 sm:grid-cols-2">
            {skillGroups.map(group => {
              const Icon = group.icon;
              return <div key={group.title} className="card p-6"><div className="mb-5 flex items-center gap-3"><span className="rounded-xl bg-violet-500/10 p-3 text-violet-300"><Icon size={20}/></span><h3 className="text-lg font-semibold">{group.title}</h3></div><div className="flex flex-wrap gap-2">{group.skills.map(skill => <span key={skill} className="pill">{skill}</span>)}</div></div>;
            })}
          </div>
        </div>
      </section>

      <section id="experience" className="section border-y border-white/[0.05] bg-[#0c1120]">
        <div className="container grid gap-12 md:grid-cols-[.7fr_1.3fr]">
          <div><p className="eyebrow">04 / Experience</p><h2 className="section-title">Where I've <span className="gradient-text">grown.</span></h2></div>
          <div className="card p-6 sm:p-8">
            <div className="flex gap-4">
              <div className="mt-1 h-3 w-3 shrink-0 rounded-full bg-violet-400 shadow-[0_0_15px_#8b5cf6]"/>
              <div>
                <p className="text-xs font-bold uppercase tracking-[.16em] text-violet-300">Development experience</p>
                <h3 className="mt-2 text-xl font-semibold">Full Stack & Software Development</h3>
                <p className="muted mt-1 text-sm">Approximately 2 years of development experience</p>
                <p className="muted mt-5 text-sm">Developed frontend applications, simulators and digital learning products. Worked on turning requirements into interactive tools, with an emphasis on usability and practical problem solving.</p>
                <div className="mt-5 flex flex-wrap gap-2"><span className="pill">Frontend development</span><span className="pill">Simulators</span><span className="pill">Learning products</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container">
          <div className="card relative overflow-hidden px-7 py-14 text-center sm:px-14 sm:py-20">
            <div className="glow left-1/2 top-[-250px] -translate-x-1/2 bg-violet-600"/>
            <div className="relative">
              <p className="eyebrow">05 / Contact</p>
              <h2 className="mx-auto mt-5 max-w-2xl text-4xl font-bold tracking-[-.045em] sm:text-6xl">Have a project in mind?<br/><span className="gradient-text">Let's connect.</span></h2>
              <p className="muted mx-auto mt-6 max-w-lg">I'm always happy to connect, discuss interesting ideas and explore new opportunities.</p>
              <div className="mt-9 flex flex-wrap justify-center gap-3">
                <a href="mailto:almalevy100@gmail.com" className="primary-button"><Mail size={17}/> Email me</a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="secondary-button"><Linkedin size={17}/> LinkedIn</a>
                <a href="https://github.com/rfblxekt343" target="_blank" rel="noreferrer" className="secondary-button"><Github size={17}/> GitHub</a>
              </div>
              <a href="/Alma-CV.pdf" className="mt-6 inline-block text-sm text-slate-400 underline decoration-slate-700 underline-offset-4 hover:text-white">Download my CV</a>
            </div>
          </div>
          <footer className="flex flex-wrap items-center justify-between gap-3 py-8 text-xs text-slate-600"><span>© {new Date().getFullYear()} Alma. Built with care.</span><a href="#home" className="hover:text-white">Back to top ↑</a></footer>
        </div>
      </section>
    </main>
  );
}
