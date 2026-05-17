import Image from "next/image";
import { JourneySection } from "./components/journey-section";
import { SkillsSection } from "./components/skills-section";
import { ThemeToggle } from "./components/theme-toggle";
import { SITE_LINKS } from "@/lib/links";

const projects = [
  {
    role: "Lead Developer",
    title: "UMart — Smart E-Marketplace",
    description:
      "Built an interactive campus marketplace for UiTM students with Flutter UI and Firebase backend for real-time listings and data sync.",
    tags: ["Flutter", "Firebase", "Mobile"],
    href: "https://github.com/njwxyzz/umart-app",
  },
  {
    role: "Mobile Developer",
    title: "Crowdsourcing & GPS Tracking App",
    description:
      "Delivered real-time GPS tracking, map hazard alerts, and a glassmorphism admin dashboard. Managed 22+ commits with GitHub version control.",
    tags: ["Java", "GPS/Maps API", "GitHub"],
    href: "https://github.com/njwxyzz/ICT602-GroupProject",
  },
  {
    role: "Frontend Developer",
    title: "AI Image Generator Web App",
    description:
      "Responsive web app with persistent dark mode, dynamic CSS states, and Hugging Face API integration. Deployed on Vercel with secure env handling.",
    tags: ["JavaScript", "REST API", "Vercel"],
    href: "https://github.com/njwxyzz",
  },
  {
    role: "Frontend Developer",
    title: "Developer Portfolio",
    description:
      "Personal portfolio built with Next.js and Tailwind CSS — responsive layout, theme switching, and recruiter-focused project showcase.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    href: "https://github.com/njwxyzz/portfolio-najwa",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen scroll-smooth bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur dark:border-slate-800/80 dark:bg-slate-950/80">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <a
            href="#home"
            className="text-lg font-bold text-purple-600 dark:text-purple-400"
          >
            Najwa
          </a>
          <div className="hidden items-center gap-5 text-sm sm:flex">
            <a
              href="#about"
              className="text-slate-600 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-slate-600 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
            >
              Skills
            </a>
            <a
              href="#journey"
              className="text-slate-600 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
            >
              Journey
            </a>
            <a
              href="#projects"
              className="text-slate-600 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="rounded-lg bg-cyan-500 px-4 py-2 font-medium text-slate-900 transition hover:bg-cyan-400"
            >
              Hire Me
            </a>
            <ThemeToggle />
          </div>
          <div className="flex items-center gap-3 sm:hidden">
            <a
              href="#contact"
              className="rounded-lg bg-cyan-500 px-3 py-1.5 text-sm font-medium text-slate-900"
            >
              Contact
            </a>
            <ThemeToggle />
          </div>
        </nav>
      </header>

      <section
        id="home"
        className="mx-auto grid min-h-[90vh] w-full max-w-6xl items-center gap-14 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-20"
      >
        <div className="max-w-3xl">
          <p className="mb-4 inline-block rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3 py-1 text-sm font-medium text-cyan-800 dark:border-cyan-400/30 dark:bg-cyan-400/10 dark:text-cyan-200">
            Open to Software Developer Internship · 7 Sep – 11 Dec 2026
          </p>

          <p className="text-sm font-medium uppercase tracking-widest text-slate-500 dark:text-slate-400">
            Nur Ain Najwa Binti Rajis Kana
          </p>

          <h1 className="mt-2 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Mobile & Web Developer
            <span className="mt-2 block text-2xl font-semibold text-purple-600 sm:text-3xl dark:text-purple-400">
              Building scalable apps with Flutter & modern web stacks
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
            Final-year Netcentric Computing student at UiTM Perlis (CGPA 3.71)
            with hands-on experience in e-commerce mobile apps, GPS tracking
            systems, and production-ready web interfaces.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-600 dark:text-slate-400">
            <span className="rounded-lg bg-slate-100 px-3 py-1 dark:bg-slate-800">
              Kuala Lumpur / Selangor
            </span>
            <span className="rounded-lg bg-slate-100 px-3 py-1 dark:bg-slate-800">
              CGPA 3.71
            </span>
            <span className="rounded-lg bg-slate-100 px-3 py-1 dark:bg-slate-800">
              14-week internship
            </span>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={`mailto:${SITE_LINKS.email}?subject=Internship%20Opportunity%20-%20Nur%20Ain%20Najwa`}
              className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-900 transition hover:bg-cyan-300"
            >
              Email Me
            </a>
            <a
              href={SITE_LINKS.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:border-slate-400 dark:border-slate-600 dark:text-slate-200"
            >
              View Resume
            </a>
            <a
              href="#projects"
              className="rounded-xl border border-transparent px-6 py-3 font-semibold text-purple-600 transition hover:text-purple-700 dark:text-purple-400"
            >
              See Projects →
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
          <div className="absolute inset-4 rounded-4xl bg-gradient-to-tr from-cyan-500/20 via-purple-500/10 to-transparent blur-3xl" />
          <div className="relative z-10 overflow-hidden rounded-4xl border border-slate-200 bg-white p-3 shadow-xl dark:border-slate-700 dark:bg-slate-900">
            <Image
              src="/images/ain-hd.png"
              alt="Nur Ain Najwa — Software Developer"
              width={433}
              height={577}
              priority
              sizes="(max-width: 1024px) 90vw, 42vw"
              className="h-[400px] w-full rounded-3xl object-cover object-top lg:h-[480px]"
            />
          </div>
        </div>
      </section>

      <section id="about" className="border-t border-slate-200 dark:border-slate-800">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:items-start">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">About Me</h2>
            <p className="mt-6 leading-relaxed text-slate-600 dark:text-slate-300">
              I am a final-year Bachelor of Science (Hons.) Netcentric Computing
              student at UiTM Cawangan Perlis with a strong academic record and
              practical project experience. I have built a functional campus
              e-marketplace (UMart) and a GPS crowdsourcing mobile application
              using Flutter, Firebase, and collaborative Git workflows.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-300">
              I am seeking a 14-week Software Developer internship anywhere in
              Malaysia from 7 September 2026 to 11 December 2026, where I can
              contribute to scalable mobile and web solutions while growing under
              an experienced engineering team.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900/60">
            <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-300">
              At a Glance
            </h3>
            <dl className="mt-4 space-y-4 text-sm">
              <div>
                <dt className="font-medium text-slate-500 dark:text-slate-400">
                  Education
                </dt>
                <dd className="mt-1 text-slate-700 dark:text-slate-200">
                  BSc (Hons.) Netcentric Computing · UiTM Perlis
                </dd>
              </div>
              <div>
                <dt className="font-medium text-slate-500 dark:text-slate-400">
                  Availability
                </dt>
                <dd className="mt-1 text-slate-700 dark:text-slate-200">
                  7 Sep 2026 – 11 Dec 2026 (14 weeks)
                </dd>
              </div>
              <div>
                <dt className="font-medium text-slate-500 dark:text-slate-400">
                  Location
                </dt>
                <dd className="mt-1 text-slate-700 dark:text-slate-200">
                  Open to placements in Malaysia · Based KL/Selangor
                </dd>
              </div>
              <div>
                <dt className="font-medium text-slate-500 dark:text-slate-400">
                  Contact
                </dt>
                <dd className="mt-1 space-y-1">
                  <a
                    href={`tel:${SITE_LINKS.phone}`}
                    className="block text-cyan-600 hover:underline dark:text-cyan-300"
                  >
                    +60 13-450 7918
                  </a>
                  <a
                    href={`mailto:${SITE_LINKS.email}`}
                    className="block text-cyan-600 hover:underline dark:text-cyan-300"
                  >
                    {SITE_LINKS.email}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <SkillsSection />
      <JourneySection />

      <section id="projects" className="border-t border-slate-200 dark:border-slate-800">
        <div className="mx-auto w-full max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-bold sm:text-4xl">Featured Projects</h2>
          <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
            Academic and personal builds that demonstrate end-to-end development,
            teamwork, and deployment experience.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:border-purple-400/50 dark:border-slate-700 dark:bg-slate-900/60"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-amber-600 dark:text-amber-400">
                  {project.role}
                </p>
                <h3 className="mt-2 text-xl font-semibold">{project.title}</h3>
                <p className="mt-3 flex-1 text-slate-600 dark:text-slate-300">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700 dark:bg-slate-800 dark:text-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block text-sm font-medium text-purple-600 hover:text-purple-700 dark:text-purple-300"
                >
                  View on GitHub →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-slate-200 dark:border-slate-800">
        <div className="mx-auto w-full max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-bold sm:text-4xl">Let&apos;s Work Together</h2>
          <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
            Recruiters and hiring managers — I would welcome a conversation about
            internship opportunities. The fastest way to reach me is email or
            LinkedIn.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <a
              href={`mailto:${SITE_LINKS.email}?subject=Internship%20Inquiry%20-%20Nur%20Ain%20Najwa`}
              className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm transition hover:border-cyan-400/50 dark:border-slate-700 dark:bg-slate-900/60"
            >
              <h3 className="font-semibold text-purple-600 dark:text-purple-300">
                Email
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                {SITE_LINKS.email}
              </p>
              <p className="mt-4 text-sm font-medium text-cyan-600 dark:text-cyan-300">
                Send message →
              </p>
            </a>

            <a
              href={SITE_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm transition hover:border-cyan-400/50 dark:border-slate-700 dark:bg-slate-900/60"
            >
              <h3 className="font-semibold text-purple-600 dark:text-purple-300">
                LinkedIn
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                Connect for internship and collaboration opportunities.
              </p>
              <p className="mt-4 text-sm font-medium text-cyan-600 dark:text-cyan-300">
                View profile →
              </p>
            </a>

            <a
              href={SITE_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm transition hover:border-cyan-400/50 dark:border-slate-700 dark:bg-slate-900/60"
            >
              <h3 className="font-semibold text-purple-600 dark:text-purple-300">
                GitHub
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                Explore repositories, commits, and project source code.
              </p>
              <p className="mt-4 text-sm font-medium text-cyan-600 dark:text-cyan-300">
                View GitHub →
              </p>
            </a>
          </div>

          <p className="mt-8 text-center text-sm text-slate-500 dark:text-slate-400">
            Student email:{" "}
            <a
              href={`mailto:${SITE_LINKS.studentEmail}`}
              className="text-cyan-600 hover:underline dark:text-cyan-300"
            >
              {SITE_LINKS.studentEmail}
            </a>
          </p>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-slate-50 py-10 dark:border-slate-800 dark:bg-slate-950">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-slate-500 sm:flex-row dark:text-slate-400">
          <p>
            © {new Date().getFullYear()} Nur Ain Najwa · Software Developer
            Portfolio
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#skills" className="hover:text-slate-800 dark:hover:text-slate-200">
              Skills
            </a>
            <a href="#projects" className="hover:text-slate-800 dark:hover:text-slate-200">
              Projects
            </a>
            <a href="#contact" className="hover:text-slate-800 dark:hover:text-slate-200">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
