"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  BrainCircuit,
  Cloud,
  Code2,
  Monitor,
  Server,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Waves } from "@/components/ui/wave-background";
import { PORTFOLIO_DATA } from "@/lib/data";
import type { Experience, Project } from "@/lib/data";

const SKILL_ROWS: SkillRowData[] = [
  {
    label: "Languages",
    icon: Code2,
    skills: ["Python", "C", "C++", "Java", "JavaScript", "TypeScript", "SQL", "R"],
  },
  {
    label: "Frontend",
    icon: Monitor,
    skills: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS", "Shopify Polaris"],
  },
  {
    label: "Backend",
    icon: Server,
    skills: ["Node.js", "Flask", "REST APIs", "GraphQL", "PostgreSQL", "SQLite"],
  },
  {
    label: "Cloud / DevOps",
    icon: Cloud,
    skills: ["AWS", "Azure", "Docker", "Linux", "Git", "Jira", "Databricks"],
  },
  {
    label: "AI / Data",
    icon: BrainCircuit,
    skills: ["Machine Learning", "Pandas", "NumPy", "LLMs", "Power BI", "Tableau", "Matplotlib"],
  },
];

function isSafeInternalPath(link?: string) {
  return Boolean(link && link.startsWith("/") && !link.startsWith("//"));
}

export default function Home() {
  return (
    <main
      id="top"
      className="min-h-screen overflow-x-hidden bg-black text-white selection:bg-white/20 selection:text-white font-sans antialiased relative"
    >
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Waves
          className="h-full w-full"
          strokeColor="#222222"
          backgroundColor="#030303"
          pointerSize={0}
        />
      </div>

      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/25 bg-white/5 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <a
            href="#top"
            className="font-sans font-bold tracking-tighter uppercase transition-colors hover:text-neutral-200 focus-visible:outline focus-visible:outline-1 focus-visible:outline-white/40"
            aria-label="Back to top"
          >
            {PORTFOLIO_DATA.name.split(" ")[0]}
            <span className="text-white">.</span>
          </a>
          <nav className="flex gap-6 text-sm font-medium text-neutral-200">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#education" className="hover:text-white transition-colors">Education</a>
            <a href="#projects" className="hover:text-white transition-colors hidden sm:block">Projects</a>
          </nav>
        </div>
      </header>

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-24 pb-24 space-y-32">

        {/* HERO SECTION */}
        <section id="about" className="pt-8 scroll-mt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 flex flex-col items-center gap-12 md:flex-row md:items-start"
          >
            {/* Profile Picture & Links Column */}
            <div className="flex flex-col gap-6 items-center flex-shrink-0 w-[240px]">
              <div className="w-48 h-48 rounded-full border border-white/20 bg-neutral-900 overflow-hidden relative transition-all duration-500">
                <Image
                  src="/me.jpg"
                  alt="Portrait of Ivan Sostaric"
                  fill
                  priority
                  sizes="192px"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col gap-3 w-full">
                <a href={`mailto:${PORTFOLIO_DATA.email}`} className="px-3 py-2.5 border border-white/25 bg-white/5 hover:bg-white/[0.08] hover:border-white/40 backdrop-blur-sm transition-all duration-300 text-center flex flex-col items-center gap-0.5 group">
                  <span className="text-xs font-bold text-white group-hover:text-black font-mono uppercase tracking-widest transition-colors">Email</span>
                  <span className="text-[10px] text-neutral-300 group-hover:text-white font-mono truncate w-full px-2 transition-colors">{PORTFOLIO_DATA.email}</span>
                </a>

                <a href={PORTFOLIO_DATA.linkedin} target="_blank" rel="noreferrer" className="px-3 py-2.5 border border-white/25 bg-white/5 hover:bg-white/[0.08] hover:border-white/40 backdrop-blur-sm transition-all duration-300 text-center flex flex-col items-center gap-0.5 group">
                  <span className="text-xs font-bold text-white group-hover:text-black font-mono uppercase tracking-widest transition-colors">LinkedIn</span>
                  <span className="text-[10px] text-neutral-300 group-hover:text-white font-mono truncate w-full px-2 transition-colors">{PORTFOLIO_DATA.linkedin.replace("https://www.", "").replace(/\/$/, "")}</span>
                </a>

                <a href={PORTFOLIO_DATA.github} target="_blank" rel="noreferrer" className="px-3 py-2.5 border border-white/25 bg-white/5 hover:bg-white/[0.08] hover:border-white/40 backdrop-blur-sm transition-all duration-300 text-center flex flex-col items-center gap-0.5 group">
                  <span className="text-xs font-bold text-white group-hover:text-black font-mono uppercase tracking-widest transition-colors">GitHub</span>
                  <span className="text-[10px] text-neutral-300 group-hover:text-white font-mono truncate w-full px-2 transition-colors">{PORTFOLIO_DATA.github.replace("https://", "").replace(/\/$/, "")}</span>
                </a>

                {PORTFOLIO_DATA.resume && (
                  <a href={PORTFOLIO_DATA.resume} target="_blank" rel="noreferrer" className="px-3 py-2.5 border border-white/25 bg-white/5 hover:bg-white/[0.08] hover:border-white/40 backdrop-blur-sm transition-all duration-300 text-center flex flex-col items-center gap-0.5 group">
                    <span className="text-xs font-bold text-white group-hover:text-black font-mono uppercase tracking-widest transition-colors">Resume</span>
                    <span className="text-[10px] text-neutral-300 group-hover:text-white font-mono transition-colors">open in new tab</span>
                  </a>
                )}
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 uppercase">
                {PORTFOLIO_DATA.name}
              </h1>
              <h2 className="text-xl md:text-2xl text-neutral-200 font-sans font-light mb-3">
                {PORTFOLIO_DATA.role}
              </h2>
              <div className="text-xs md:text-sm text-neutral-200 font-mono mb-6 flex flex-wrap justify-center md:justify-start gap-2 items-center tracking-widest uppercase mt-2">
                {PORTFOLIO_DATA.specialization.split(" | ").map((spec, idx, arr) => (
                  <span key={spec} className="flex gap-2 items-center">
                    <span>{spec}</span>
                    {idx < arr.length - 1 && <span>|</span>}
                  </span>
                ))}
              </div>
              <p className="text-lg text-neutral-400 font-sans font-light max-w-2xl leading-8 mb-0">
                {PORTFOLIO_DATA.bio}
              </p>

            </div>
          </motion.div>

          <TechnicalSkills />
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="scroll-mt-32">
          <SectionHeading title="Work Experience" />
          <TracingBeam items={PORTFOLIO_DATA.experience} />
        </section>

        {/* EDUCATION SECTION */}
        <section id="education" className="scroll-mt-32">
          <SectionHeading title="Education" />
          <TracingBeam items={PORTFOLIO_DATA.education} />
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="scroll-mt-32">
          <SectionHeading title="Projects" />
          <div className="flex flex-col gap-4">
            {PORTFOLIO_DATA.projects.map((project, idx) => (
              <ProjectCard key={idx} project={project} idx={idx} />
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="pt-16 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-500">
          <div>
            &copy; {new Date().getFullYear()} {PORTFOLIO_DATA.name}.
          </div>
          <div className="flex gap-6">
            <a href={PORTFOLIO_DATA.github} className="hover:text-white transition-colors uppercase tracking-widest">GitHub</a>
            <a href={PORTFOLIO_DATA.linkedin} className="hover:text-white transition-colors uppercase tracking-widest">LinkedIn</a>
            <a href={`mailto:${PORTFOLIO_DATA.email}`} className="hover:text-white transition-colors uppercase tracking-widest">Email</a>
          </div>
        </footer>

        <div className="flex justify-center">
          <a href="#top" className="text-xs uppercase tracking-widest text-neutral-500 hover:text-white transition-colors border border-white/10 rounded-sm px-6 py-3 hover:bg-white/5">
            Back to Top
          </a>
        </div>

      </div>
    </main>
  );
}

function SectionHeading({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-4 mb-16">
      <h2 className="text-3xl font-bold uppercase tracking-tighter shrink-0">{title}</h2>
      <div className="h-[1px] w-full bg-white/10" />
    </div>
  );
}

type SkillRowData = {
  label: string;
  icon: LucideIcon;
  skills: string[];
};

function TechnicalSkills() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.15 }}
      className="mt-6 border-y border-white/25 bg-white/5 py-3 px-3 backdrop-blur-sm"
    >
      <div className="mb-2 flex items-end justify-between gap-4">
        <h2 className="text-xs font-bold uppercase tracking-widest text-white">Technical Skills</h2>
      </div>
      <div className="border-y border-white/15">
        {SKILL_ROWS.map((row) => (
          <SkillGroup key={row.label} row={row} />
        ))}
      </div>
    </motion.div>
  );
}

function SkillGroup({ row }: { row: SkillRowData }) {
  const Icon = row.icon;

  return (
    <div className="grid gap-1.5 border-b border-white/15 py-2 last:border-b-0 md:grid-cols-[126px_1fr] md:items-center">
      <div className="flex items-center gap-2 text-neutral-200">
        <Icon className="h-4 w-4 text-neutral-300 shrink-0" aria-hidden="true" />
        <span className="text-xs font-bold uppercase tracking-widest">{row.label}</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {row.skills.map((skill) => (
          <span key={`${row.label}-${skill}`} className="skill-token">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

function TracingBeam({ items }: { items: Experience[] }) {
  return (
    <div className="relative pl-8 md:pl-0">
      {/* Vertical Line */}
      <div className="absolute left-[3px] md:left-[calc(200px+1rem)] top-0 bottom-0 w-[1px] bg-white/10" />

      {items.map((exp: Experience) => (
        <TracingBeamItem key={`${exp.company}-${exp.years}`} exp={exp} />
      ))}
    </div>
  );
}

function TracingBeamItem({ exp }: { exp: Experience }) {
  const [expanded, setExpanded] = useState(false);
  const canExpand = Boolean(exp.maximizedInfo);
  const toggleExpanded = () => {
    if (canExpand) {
      setExpanded((current) => !current);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: 0.1, duration: 0.5 }}
      className="relative mb-16 md:flex gap-8 group"
    >
      {/* Node Dot */}
      <div className="absolute left-[-5px] md:left-[calc(200px+1rem-4px)] top-1.5 h-2 w-2 border border-white bg-black group-hover:bg-white group-hover:shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all duration-300" />

      <div className="md:w-[200px] flex-shrink-0 pt-1 text-sm text-neutral-500 mb-2 md:mb-0">
        {exp.years}
      </div>

      <div
        className={`relative border border-white/25 bg-white/5 p-6 backdrop-blur-sm transition-colors w-full flex flex-col hover:bg-white/[0.08] group-hover:border-white/40 ${canExpand ? "cursor-pointer" : ""}`}
      >
        {canExpand && (
          <button
            type="button"
            aria-expanded={expanded}
            aria-label={`${expanded ? "Collapse" : "Expand"} ${exp.role} at ${exp.company}`}
            onClick={toggleExpanded}
            className="absolute inset-0 z-10 cursor-pointer focus-visible:outline focus-visible:outline-1 focus-visible:outline-white/40"
          >
            <span className="sr-only">
              {expanded ? "Read less" : "Read more"}
            </span>
          </button>
        )}

        <div className="flex items-start gap-4 mb-4">
          {exp.logo && (
            <div className="w-12 h-12 flex-shrink-0 bg-transparent relative">
              <Image
                src={exp.logo}
                alt={`${exp.company} logo`}
                fill
                sizes="48px"
                className="object-contain"
              />
            </div>
          )}
          <div>
            <h3 className="text-xl font-semibold font-sans mb-0">{exp.role}</h3>
            {exp.subRole && (
              <h3 className="text-[19px] font-semibold font-sans mb-0 text-white tracking-tight">{exp.subRole}</h3>
            )}
            {exp.subRole2 && (
              <h3 className="text-base font-semibold font-sans mb-1 text-white tracking-tight">{exp.subRole2}</h3>
            )}
            {(!exp.subRole && !exp.subRole2) && <div className="mb-1" />}

            <h4 className="text-sm text-neutral-200 uppercase tracking-widest mt-2 leading-relaxed">{exp.company}</h4>
            {exp.subCompany && (
              <h4 className="text-sm text-neutral-200 uppercase tracking-widest leading-relaxed mt-1">{exp.subCompany}</h4>
            )}
          </div>
        </div>

        {/* Minimized Info */}
        {exp.minimizedInfo && (
          <p className="text-neutral-300 font-sans text-sm leading-relaxed mb-4 whitespace-pre-line">
            {exp.minimizedInfo}
          </p>
        )}

        {/* Maximized Info - Animated container */}
        <AnimatePresence initial={false}>
          {expanded && exp.maximizedInfo && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="pt-4 border-t border-white/10 mt-2 mb-4 space-y-3">
                {exp.maximizedInfo.trim().startsWith("•") ? (
                  exp.maximizedInfo.split('\n').map((bullet: string, i: number) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="text-neutral-400 text-xs mt-1 flex-shrink-0">•</span>
                      <p className="text-neutral-300 font-sans text-sm leading-relaxed">
                        {bullet.replace(/^•\s*/, '')}
                      </p>
                    </div>
                  ))
                ) : (
                  <p className="text-neutral-300 font-sans text-sm leading-relaxed">
                    {exp.maximizedInfo}
                  </p>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Read More Toggle Button */}
        {exp.maximizedInfo && (
          <div
            aria-hidden="true"
            className="self-start mt-auto flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-500 transition-colors group-hover:text-white"
          >
            {expanded ? "Read Less" : "Read More"}
            <motion.span
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              ↓
            </motion.span>
          </div>
        )}
      </div>
    </motion.div>
  );
}

function ProjectCard({ project, idx }: { project: Project, idx: number }) {
  const [expanded, setExpanded] = useState(false);
  const safeProjectLink = isSafeInternalPath(project.link) ? project.link : undefined;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      className="group relative grid grid-cols-1 gap-4 border border-white/25 bg-white/5 p-5 backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.08] hover:border-white/40 md:grid-cols-[220px_minmax(0,1fr)_7.5rem] md:items-stretch"
    >
      {safeProjectLink ? (
        <Link
          href={safeProjectLink}
          aria-label={`View ${project.title} project`}
          className="absolute inset-0 z-10 focus-visible:outline focus-visible:outline-1 focus-visible:outline-white/40"
        >
          <span className="sr-only">View {project.title} project</span>
        </Link>
      ) : (
        <button
          type="button"
          aria-expanded={expanded}
          aria-label={`${expanded ? "Collapse" : "Expand"} ${project.title}`}
          onClick={() => setExpanded((current) => !current)}
          className="absolute inset-0 z-10 cursor-pointer focus-visible:outline focus-visible:outline-1 focus-visible:outline-white/40"
        >
          <span className="sr-only">
            {expanded ? "Show less" : "View full project"}
          </span>
        </button>
      )}

      {project.heroImage && (
        <div className="relative h-44 w-full shrink-0 overflow-hidden rounded-sm border border-white/15 md:h-full md:min-h-40">
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 220px"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}

      <div className="flex min-w-0 flex-col">
        <div className="mb-3 flex flex-wrap items-start justify-between gap-3">
          <h3 className="font-sans text-2xl font-semibold leading-tight md:text-[1.7rem]">
            {project.title}
          </h3>
          <span className="shrink-0 border border-white/15 bg-white/5 px-2 py-1 text-xs uppercase tracking-wider text-neutral-300">
            {project.category}
          </span>
        </div>

        <p className="mb-4 whitespace-pre-line font-sans text-sm leading-6 text-neutral-300">
          {project.description}
        </p>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              {project.thumbnails && (
                <div className="flex gap-4 mb-6">
                  {project.thumbnails.map((thumb: string) => (
                    <div key={thumb} className="w-16 h-16 bg-white/5 border border-white/10 flex items-center justify-center text-[10px] text-neutral-500 rounded-sm text-center p-1">
                      Thumb<br/>{thumb}
                    </div>
                  ))}
                </div>
              )}

              {project.skills && (
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.skills.map((skill: string) => (
                    <span key={skill} className="text-xs px-2 py-1 bg-white/5 border border-white/10 text-neutral-300 rounded-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {safeProjectLink ? (
        <div aria-hidden="true" className="flex items-center justify-between border-t border-white/10 pt-4 transition-colors group-hover:border-white/30 md:min-w-28 md:flex-col md:items-end md:border-l md:border-t-0 md:pl-5 md:pt-0">
          <span className="text-xs uppercase tracking-widest text-neutral-400 md:text-right">View full project</span>
          <span className="text-2xl text-neutral-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white">
            →
          </span>
        </div>
      ) : (
        <div
          aria-hidden="true"
          className="flex items-center justify-between border-t border-white/10 pt-4 transition-colors group-hover:border-white/30 md:min-w-28 md:flex-col md:items-end md:border-l md:border-t-0 md:pl-5 md:pt-0"
        >
          <span className="text-xs text-neutral-400 uppercase tracking-widest md:text-right">{expanded ? 'Show Less' : 'View full project'}</span>
          <span className="text-2xl text-neutral-400 group-hover:text-white transition-colors duration-300">
            {expanded ? '↑' : '↓'}
          </span>
        </div>
      )}
    </motion.article>
  );
}
