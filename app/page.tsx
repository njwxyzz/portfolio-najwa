import Image from "next/image";
import { JourneySection } from "./components/journey-section";
import { ThemeToggle } from "./components/theme-toggle";

export default function Home() {
  return (
    <main className="min-h-screen scroll-smooth bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur dark:border-slate-800/80 dark:bg-slate-950/80">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <a
            href="#home"
            className="text-lg font-bold text-purple-600 dark:text-purple-400"
          >
            Najwa
          </a>
          <div className="flex items-center gap-4 text-sm sm:gap-6">
            <a
              href="#about"
              className="text-slate-600 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
            >
              About
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
              className="text-slate-600 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
            >
              Contact
            </a>
            <ThemeToggle />
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section
        id="home"
        className="mx-auto grid min-h-screen w-full max-w-6xl items-center gap-14 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr]"
      >
        <div className="max-w-3xl">
          <p className="mb-4 inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-sm text-purple-700 dark:border-cyan-400/30 dark:bg-cyan-400/10 dark:text-purple-300">
            Mobile & Web Developer
          </p>

          <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Hi, I'm <span className="text-purple-600 dark:text-purple-400">Najwa</span>.
            <br />
            I build scalable mobile apps and modern web experiences.
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
            I'm a final-year Netcentric Computing student specializing in mobile
            app development. I love turning complex problems into clean,
            functional solutions using Flutter, Firebase, and modern web
            technologies.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-900 transition hover:bg-cyan-300"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-900 dark:border-slate-600 dark:text-slate-200 dark:hover:text-white"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
          <div className="absolute -top-10 left-5 h-32 w-32 rounded-full border border-cyan-300/25 bg-cyan-300/5 backdrop-blur-sm" />
          <div className="absolute -bottom-6 -right-8 h-24 w-24 rounded-full border border-purple-300/30 bg-purple-300/10 backdrop-blur-sm" />
          <div className="absolute right-16 top-12 h-3 w-3 rounded-full bg-cyan-300/80 shadow-[0_0_24px_8px_rgba(34,211,238,0.45)]" />
          <div className="absolute left-10 top-32 h-2.5 w-2.5 rounded-full bg-purple-300/80 shadow-[0_0_20px_7px_rgba(196,181,253,0.45)]" />
          <div className="absolute inset-4 rounded-[2rem] bg-gradient-to-tr from-cyan-500/25 via-purple-500/10 to-transparent blur-3xl" />

          <div className="relative z-10 rounded-[2rem] bg-gradient-to-br from-white/20 via-white/5 to-transparent p-[1.5px] shadow-[0_24px_60px_-20px_rgba(34,211,238,0.45)]">
            <div className="overflow-hidden rounded-[calc(2rem-2px)] bg-white/90 p-3 shadow-lg backdrop-blur dark:bg-slate-900/85 dark:shadow-none">
              <Image
                src="/images/ain-hd.png"
                alt="Najwa portrait"
                width={433}
                height={577}
                priority
                sizes="(max-width: 1024px) 90vw, 42vw"
                className="h-[420px] w-full rounded-[1.35rem] object-cover object-top lg:h-[500px]"
              />
              <div className="pointer-events-none absolute inset-0 rounded-[calc(2rem-2px)] bg-gradient-to-t from-slate-950/10 via-transparent to-cyan-300/5" />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-t border-slate-200 dark:border-slate-800">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">About Me</h2>
            <p className="mt-6 text-slate-600 dark:text-slate-300">
              I am a final-year Netcentric Computing student at UiTM (CGPA:
              3.71), actively seeking a Software Developer internship from 7
              September 2026 until 11 December 2026. I have a strong foundation
              in both mobile and web development, with hands-on experience
              building functional e-commerce and GPS tracking applications.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900/60 dark:shadow-none">
            <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-300">
              Quick Facts
            </h3>
            <ul className="mt-4 space-y-3 text-slate-600 dark:text-slate-300">
              <li>Core Skills: Flutter, Firebase, Next.js, PHP</li>
              <li>Focus: Mobile App & Frontend Web Dev</li>
              <li>Goal: Seeking Internship (Sep/Oct 2026)</li>
              <li>Location: Kuala Lumpur / Selangor</li>
            </ul>
          </div>
        </div>
      </section>

      <JourneySection />

      {/* PROJECTS */}
      <section id="projects" className="border-t border-slate-200 dark:border-slate-800">
        <div className="mx-auto w-full max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-bold sm:text-4xl">Projects</h2>
          <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
            Selected projects that highlight my mobile and web development
            experience.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <article className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm transition hover:-translate-y-2 hover:border-purple-400/60 dark:border-slate-700 dark:bg-slate-900/60 dark:shadow-none">
              <h3 className="text-xl font-semibold">
                UMart (Smart E-Marketplace)
              </h3>
              <p className="mt-3 text-slate-600 dark:text-slate-300">
                Designed and developed an interactive e-marketplace mobile
                application specifically tailored for UiTM students to facilitate
                campus trading.
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs">
                <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                  Flutter
                </span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                  Firebase
                </span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                  Mobile Dev
                </span>
              </div>
              <a
                href="https://github.com/njwxyzz/umart-app"
                className="mt-6 inline-block text-sm font-medium text-purple-600 hover:text-purple-700 dark:text-purple-300 dark:hover:text-purple-200"
              >
                View Project →
              </a>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm transition hover:-translate-y-2 hover:border-purple-400/60 dark:border-slate-700 dark:bg-slate-900/60 dark:shadow-none">
              <h3 className="text-xl font-semibold">
                Crowdsourcing & GPS Tracking App
              </h3>
              <p className="mt-3 text-slate-600 dark:text-slate-300">
                A mobile application featuring real-time GPS tracking,
                interactive map hazard pop-ups, and a Glassmorphism Admin
                Dashboard. Managed with strict version control.
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs">
                <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                  GPS/Maps API
                </span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                  Java
                </span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                  GitHub
                </span>
              </div>
              <a
                href="https://github.com/njwxyzz/ICT602-GroupProject"
                className="mt-6 inline-block text-sm font-medium text-purple-600 hover:text-purple-700 dark:text-purple-300 dark:hover:text-purple-200"
              >
                View Project →
              </a>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm transition hover:-translate-y-2 hover:border-purple-400/60 dark:border-slate-700 dark:bg-slate-900/60 dark:shadow-none">
              <h3 className="text-xl font-semibold">Modern Developer Portfolio</h3>
              <p className="mt-3 text-slate-600 dark:text-slate-300">
                My personal portfolio website built from scratch focusing on
                responsive design, smooth animations, and a glassmorphism UI.
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs">
                <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                  Next.js
                </span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                  Tailwind CSS
                </span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                  Vercel
                </span>
              </div>
              <a
                href="#"
                className="mt-6 inline-block text-sm font-medium text-purple-600 hover:text-purple-700 dark:text-purple-300 dark:hover:text-purple-200"
              >
                View Project →
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="border-t border-slate-200 dark:border-slate-800">
        <div className="mx-auto w-full max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-bold sm:text-4xl">Contact</h2>
          <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
            Want to say hi or talk about a project? Reach out — I'd love to hear
            from you.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900/60 dark:shadow-none">
              <h3 className="text-lg font-semibold text-purple-600 dark:text-purple-300">
                Let's connect
              </h3>
              <p className="mt-3 text-slate-600 dark:text-slate-300">
                Feel free to reach out anytime.
              </p>

              <ul className="mt-6 space-y-3 text-slate-700 dark:text-slate-200">
                <li>
                  <a
                    href="mailto:najwaa780ainn@gmail.com"
                    className="font-medium text-cyan-600 hover:text-cyan-700 dark:text-cyan-300 dark:hover:text-cyan-200"
                  >
                    najwaa780ainn@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/njwxyzz"
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-cyan-600 hover:text-cyan-700 dark:text-cyan-300 dark:hover:text-cyan-200"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/nur-ain-najwa-928275319/"
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-cyan-600 hover:text-cyan-700 dark:text-cyan-300 dark:hover:text-cyan-200"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900/60 dark:shadow-none">
              <h3 className="text-lg font-semibold text-purple-600 dark:text-purple-300">
                Quick message (visual only)
              </h3>
              <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
                This box is for layout practice. Later you can connect it to a
                real form or service.
              </p>

              <div className="mt-6 space-y-4">
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none focus:border-purple-500 dark:border-slate-600 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-purple-400"
                />
                <textarea
                  placeholder="Your message"
                  rows={4}
                  className="w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none focus:border-purple-500 dark:border-slate-600 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-purple-400"
                />
                <button
                  type="button"
                  className="rounded-xl bg-purple-500 px-5 py-3 font-semibold text-white transition hover:bg-purple-400"
                >
                  Send (demo)
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-slate-50 py-10 dark:border-slate-800 dark:bg-slate-950">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-slate-500 sm:flex-row dark:text-slate-400">
          <p>© {new Date().getFullYear()} Najwa. Built with Next.js & Tailwind.</p>
          <div className="flex gap-6">
            <a
              href="#about"
              className="hover:text-slate-800 dark:hover:text-slate-200"
            >
              About
            </a>
            <a
              href="#journey"
              className="hover:text-slate-800 dark:hover:text-slate-200"
            >
              Journey
            </a>
            <a
              href="#projects"
              className="hover:text-slate-800 dark:hover:text-slate-200"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="hover:text-slate-800 dark:hover:text-slate-200"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}