"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { MotionProps, Variants } from "framer-motion";
import {
  Award,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Download,
  GraduationCap,
  HardHat,
  Languages,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Wrench
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import type { Experience, Profile, Project } from "@/data/resume";

type Props = {
  profile: Profile;
};

const sections = [
  { href: "#summary", label: "Summary" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#credentials", label: "Credentials" },
  { href: "#answers", label: "Answers" },
  { href: "#contact", label: "Contact" }
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 }
};

const revealEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function AnimatedPortfolio({ profile }: Props) {
  const [loaded, setLoaded] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const timer = window.setTimeout(() => setLoaded(true), shouldReduceMotion ? 180 : 850);
    return () => window.clearTimeout(timer);
  }, [shouldReduceMotion]);

  const currentProject = profile.projects[0];
  const currentRole = profile.experiences[0];

  return (
    <>
      <AnimatePresence>
        {!loaded && <PortfolioLoader name={profile.name} />}
      </AnimatePresence>

      <div className="site-shell">
        <header className="topbar" aria-label="Primary navigation">
          <a className="brand-mark" href="#home" aria-label={`${profile.name} home`}>
            <ShieldCheck aria-hidden="true" />
            <span>TH</span>
          </a>
          <nav>
            {sections.map((section) => (
              <a key={section.href} href={section.href}>
                {section.label}
              </a>
            ))}
          </nav>
          <a className="topbar-cta" href="/resume-tanweerul-haque.pdf" download>
            <Download size={18} aria-hidden="true" />
            Resume
          </a>
        </header>

        <main id="home">
          <section className="hero-section">
            <EngineeringScene />
            <div className="hero-grid">
              <motion.div
                className="hero-copy"
                initial={shouldReduceMotion ? false : "hidden"}
                animate="visible"
                variants={fadeUp}
                transition={{ duration: 0.7, ease: revealEase }}
              >
                <p className="eyebrow">
                  <HardHat size={18} aria-hidden="true" />
                  Qatar and India civil infrastructure safety
                </p>
                <h1>{profile.name}</h1>
                <p className="hero-title">{profile.title}</p>
                <p className="hero-lede">
                  Safety-led delivery for roads, drainage, tunneling, utilities, and high-risk
                  construction environments.
                </p>
                <div className="hero-actions">
                  <a className="button button-primary" href={`mailto:${profile.email}`}>
                    <Mail size={19} aria-hidden="true" />
                    Contact
                  </a>
                  <a className="button button-secondary" href="#projects">
                    <Building2 size={19} aria-hidden="true" />
                    View Projects
                  </a>
                </div>
              </motion.div>

              <motion.aside
                className="hero-panel"
                initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15, ease: revealEase }}
              >
                <div className="portrait-wrap">
                  <Image
                    src="/assets/tanweerul-haque.png"
                    alt={`${profile.name} portrait`}
                    width={720}
                    height={720}
                    priority
                  />
                </div>
                <div className="status-strip">
                  <span>Current Assignment</span>
                  <strong>{currentProject.name}</strong>
                  <small>{currentRole.period}</small>
                </div>
                <div className="metric-grid" aria-label="Professional highlights">
                  <Metric value="20+" label="Years HSE field" />
                  <Metric value="10" label="Major assignments" />
                  <Metric value="12" label="Certificates" />
                  <Metric value="5" label="Languages" />
                </div>
              </motion.aside>
            </div>
          </section>

          <Section id="summary" eyebrow="Profile" title="Safety judgement for complex civil works">
            <div className="summary-layout">
              <motion.article className="section-card summary-card" {...revealProps(shouldReduceMotion)}>
                <p>{profile.summary}</p>
                <div className="contact-grid">
                  <ContactItem icon={<Mail />} label="Email" value={profile.email} href={`mailto:${profile.email}`} />
                  <ContactItem icon={<Phone />} label="Phone" value={profile.phones.join(", ")} />
                  <ContactItem icon={<MapPin />} label="Location" value={profile.address} />
                </div>
                <div className="summary-fill" aria-label="HSE operating snapshot">
                  <article>
                    <span>Current role</span>
                    <strong>{currentRole.title}</strong>
                    <small>
                      {currentRole.company} - {currentRole.period}
                    </small>
                  </article>
                  <article>
                    <span>Current project</span>
                    <strong>{currentProject.name}</strong>
                    <small>
                      {currentProject.role} - {currentProject.period}
                    </small>
                  </article>
                  <article>
                    <span>Infrastructure coverage</span>
                    <strong>{currentProject.scope.map((scope) => scope.label).join(", ")}</strong>
                    <small>Roads, drainage, sewerage, TSE, street lighting, and utilities.</small>
                  </article>
                  <article>
                    <span>Safety control set</span>
                    <strong>HIRA/JSA, audits, PTW, incident investigation</strong>
                    <small>Worker welfare, emergency drills, environmental reporting, LTIR and TRIR.</small>
                  </article>
                </div>
              </motion.article>

              <motion.aside className="expertise-panel" {...revealProps(shouldReduceMotion, 0.1)}>
                <h3>Core strengths</h3>
                <p>{profile.skillStatement}</p>
                <div className="tag-cloud">
                  {profile.knowsAbout.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </motion.aside>
            </div>
          </Section>

          <Section id="experience" eyebrow="Career" title="Experience across site, contractor, and consultant roles">
            <div className="timeline">
              {profile.experiences.map((experience, index) => (
                <ExperienceCard
                  key={`${experience.company}-${experience.period}`}
                  experience={experience}
                  index={index}
                  reduceMotion={shouldReduceMotion}
                />
              ))}
            </div>
          </Section>

          <Section id="projects" eyebrow="Infrastructure" title="Project scope from roads to tunneling">
            <div className="project-grid">
              {profile.projects.map((project, index) => (
                <ProjectCard
                  key={`${project.name}-${project.period}`}
                  project={project}
                  index={index}
                  reduceMotion={shouldReduceMotion}
                />
              ))}
            </div>
          </Section>

          <Section id="credentials" eyebrow="Credentials" title="Education, certificates, awards, and languages">
            <div className="credential-grid">
              <motion.div className="section-card credential-block" {...revealProps(shouldReduceMotion)}>
                <h3>
                  <GraduationCap size={20} aria-hidden="true" />
                  Education
                </h3>
                {profile.education.map((item) => (
                  <article key={`${item.degree}-${item.period}`} className="plain-item">
                    <strong>{item.degree}</strong>
                    <span>{item.institution}</span>
                    <small>{item.period}</small>
                    {item.note && <p>{item.note}</p>}
                  </article>
                ))}
              </motion.div>

              <motion.div className="section-card credential-block" {...revealProps(shouldReduceMotion, 0.1)}>
                <h3>
                  <BadgeCheck size={20} aria-hidden="true" />
                  Certificates
                </h3>
                <ul className="check-list">
                  {profile.certifications.map((certificate) => (
                    <li key={certificate}>
                      <CheckCircle2 size={17} aria-hidden="true" />
                      <span>{certificate}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div className="section-card credential-block" {...revealProps(shouldReduceMotion, 0.2)}>
                <h3>
                  <Award size={20} aria-hidden="true" />
                  Awards
                </h3>
                {profile.awards.map((award) => (
                  <article key={award.title} className="plain-item award-item">
                    <strong>{award.title}</strong>
                    <span>{award.issuer}</span>
                  </article>
                ))}
              </motion.div>

              <motion.div className="section-card credential-block" {...revealProps(shouldReduceMotion, 0.3)}>
                <h3>
                  <Languages size={20} aria-hidden="true" />
                  Languages
                </h3>
                <div className="language-list">
                  {profile.languages.map((language) => (
                    <div key={language.name} className="language-row">
                      <span>{language.name}</span>
                      <LanguageDots level={language.level} />
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </Section>

          <Section id="answers" eyebrow="Answer-ready profile" title="Direct answers for recruiters and search engines">
            <div className="faq-grid">
              {profile.faqs.map((faq, index) => (
                <motion.article
                  className="faq-card"
                  key={faq.question}
                  {...revealProps(shouldReduceMotion, index * 0.04)}
                >
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </motion.article>
              ))}
            </div>
          </Section>

          <section id="contact" className="contact-section">
            <motion.div className="contact-inner" {...revealProps(shouldReduceMotion)}>
              <div>
                <p className="eyebrow">
                  <Sparkles size={18} aria-hidden="true" />
                  Available for HSE and civil infrastructure roles
                </p>
                <h2>Bring senior safety control to the next project.</h2>
                <p>{profile.declaration}</p>
                <p className="signature">Name: {profile.declarationName}</p>
                <p className="signature-muted">Signature: / Date:</p>
              </div>
              <div className="contact-actions">
                <a className="button button-primary" href={`mailto:${profile.email}`}>
                  <Mail size={19} aria-hidden="true" />
                  {profile.email}
                </a>
                <a className="button button-secondary" href={`tel:${profile.phones[0].replace(/\s/g, "")}`}>
                  <Phone size={19} aria-hidden="true" />
                  {profile.phones[0]}
                </a>
                <a className="button button-secondary" href="/resume-tanweerul-haque.pdf" download>
                  <Download size={19} aria-hidden="true" />
                  Download Resume
                </a>
              </div>
            </motion.div>
          </section>
        </main>
      </div>
    </>
  );
}

function PortfolioLoader({ name }: { name: string }) {
  return (
    <motion.div
      className="portfolio-loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, pointerEvents: "none" }}
      transition={{ duration: 0.45, ease: revealEase }}
      role="status"
      aria-live="polite"
    >
      <div className="loader-core">
        <motion.div
          className="loader-ring"
          animate={{ rotate: 360 }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "linear" }}
        />
        <ShieldCheck size={42} aria-hidden="true" />
      </div>
      <p>{name}</p>
      <span>Loading civil HSE portfolio</span>
      <div className="loader-track">
        <motion.i
          initial={{ width: "12%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.1, ease: revealEase }}
        />
      </div>
    </motion.div>
  );
}

function EngineeringScene() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    let frame = 0;
    let animationId = 0;

    const render = () => {
      const rect = canvas.getBoundingClientRect();
      const ratio = window.devicePixelRatio || 1;
      canvas.width = Math.floor(rect.width * ratio);
      canvas.height = Math.floor(rect.height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      context.clearRect(0, 0, rect.width, rect.height);

      context.fillStyle = "#f3f6f0";
      context.fillRect(0, 0, rect.width, rect.height);

      context.strokeStyle = "rgba(25, 32, 28, 0.08)";
      context.lineWidth = 1;
      for (let x = 0; x < rect.width; x += 42) {
        context.beginPath();
        context.moveTo(x, 0);
        context.lineTo(x, rect.height);
        context.stroke();
      }
      for (let y = 0; y < rect.height; y += 42) {
        context.beginPath();
        context.moveTo(0, y);
        context.lineTo(rect.width, y);
        context.stroke();
      }

      const pulse = shouldReduceMotion ? 0 : Math.sin(frame * 0.025) * 8;
      const roadY = rect.height * 0.62;

      context.strokeStyle = "#18211d";
      context.lineWidth = 12;
      context.lineCap = "round";
      context.beginPath();
      context.moveTo(rect.width * 0.04, roadY);
      context.bezierCurveTo(rect.width * 0.28, roadY - 90, rect.width * 0.55, roadY + 70, rect.width * 0.96, roadY - 40);
      context.stroke();

      context.strokeStyle = "#d88a00";
      context.lineWidth = 3;
      context.setLineDash([16, 14]);
      context.beginPath();
      context.moveTo(rect.width * 0.07, roadY);
      context.bezierCurveTo(rect.width * 0.3, roadY - 68, rect.width * 0.55, roadY + 45, rect.width * 0.92, roadY - 30);
      context.stroke();
      context.setLineDash([]);

      context.strokeStyle = "rgba(29, 120, 116, 0.55)";
      context.lineWidth = 2;
      for (let index = 0; index < 5; index += 1) {
        const x = rect.width * (0.16 + index * 0.16);
        const y = roadY - 100 + (index % 2) * 74;
        context.beginPath();
        context.arc(x, y, 28 + pulse * 0.12, 0, Math.PI * 2);
        context.stroke();

        context.fillStyle = index % 2 === 0 ? "#1d7874" : "#b54333";
        context.beginPath();
        context.arc(x, y, 5 + Math.max(pulse, 0) * 0.08, 0, Math.PI * 2);
        context.fill();
      }

      context.fillStyle = "rgba(24, 33, 29, 0.06)";
      context.fillRect(rect.width * 0.72, rect.height * 0.1, rect.width * 0.2, rect.height * 0.22);
      context.strokeStyle = "rgba(24, 33, 29, 0.32)";
      context.strokeRect(rect.width * 0.72, rect.height * 0.1, rect.width * 0.2, rect.height * 0.22);

      frame += 1;
      if (!shouldReduceMotion) {
        animationId = window.requestAnimationFrame(render);
      }
    };

    render();
    window.addEventListener("resize", render);

    return () => {
      window.removeEventListener("resize", render);
      window.cancelAnimationFrame(animationId);
    };
  }, [shouldReduceMotion]);

  return <canvas ref={canvasRef} className="engineering-scene" aria-hidden="true" />;
}

function Section({
  id,
  eyebrow,
  title,
  children
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="content-section">
      <div className="section-heading">
        <p>{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {children}
    </section>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="metric">
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}

function ContactItem({
  icon,
  label,
  value,
  href
}: {
  icon: React.ReactElement;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <>
      <span className="contact-icon">{icon}</span>
      <span>
        <small>{label}</small>
        <strong>{value}</strong>
      </span>
    </>
  );

  if (href) {
    return (
      <a className="contact-item" href={href}>
        {content}
      </a>
    );
  }

  return <div className="contact-item">{content}</div>;
}

function ExperienceCard({
  experience,
  index,
  reduceMotion
}: {
  experience: Experience;
  index: number;
  reduceMotion: boolean | null;
}) {
  return (
    <motion.article
      className="timeline-item"
      {...revealProps(reduceMotion, Math.min(index * 0.04, 0.18))}
    >
      <div className="timeline-pin">
        <BriefcaseBusiness size={18} aria-hidden="true" />
      </div>
      <div className="timeline-body">
        <div className="item-kicker">
          <span>{experience.period}</span>
          <CalendarDays size={16} aria-hidden="true" />
        </div>
        <h3>{experience.title}</h3>
        <p className="company">{experience.company}</p>
        {experience.project && <p className="project-name">Project: {experience.project}</p>}
        {experience.overview && <p className="overview">{experience.overview}</p>}
        <ul className="detail-list">
          {experience.responsibilities.map((responsibility, itemIndex) => (
            <li key={`${responsibility.title || "responsibility"}-${itemIndex}`}>
              <ChevronRight size={16} aria-hidden="true" />
              <span>
                {responsibility.title && <strong>{responsibility.title}: </strong>}
                {responsibility.detail}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}

function ProjectCard({
  project,
  index,
  reduceMotion
}: {
  project: Project;
  index: number;
  reduceMotion: boolean | null;
}) {
  const compact = useMemo(() => project.scope.length <= 1, [project.scope.length]);

  return (
    <motion.article className="project-card" {...revealProps(reduceMotion, Math.min(index * 0.05, 0.2))}>
      <div className="project-top">
        <span>
          <Wrench size={17} aria-hidden="true" />
          {project.role}
        </span>
        <small>{project.period}</small>
      </div>
      <h3>{project.name}</h3>
      <div className={compact ? "scope-list scope-list-compact" : "scope-list"}>
        {project.scope.map((scope) => (
          <div key={scope.label} className="scope-block">
            <strong>{scope.label}</strong>
            <ul>
              {scope.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.article>
  );
}

function LanguageDots({ level }: { level: number }) {
  return (
    <span className="language-dots" aria-label={`${level} out of 5`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <i key={index} className={index < level ? "is-active" : ""} />
      ))}
    </span>
  );
}

function revealProps(reduceMotion: boolean | null, delay = 0): MotionProps {
  if (reduceMotion) {
    return {
      initial: false,
      whileInView: { opacity: 1 },
      viewport: { once: true, amount: 0.2 }
    };
  }

  return {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, amount: 0.16 },
    variants: fadeUp,
    transition: { duration: 0.58, delay, ease: revealEase }
  };
}
