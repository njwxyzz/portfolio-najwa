const timeline = [
  {
    period: "Jul 2023 — Present",
    title: "Bachelor of Science (Hons.) Netcentric Computing",
    org: "Universiti Teknologi MARA (UiTM) Cawangan Perlis",
    description:
      "Current CGPA: 3.71. Key coursework includes Mobile Application Development, Web Development, Digital Forensics, and Network Design and Analysis.",
    type: "education" as const,
  },
  {
    period: "Aug 2024 — Sep 2024",
    title: "Production Technician (Contract)",
    org: "KOBELCO Precision Technology Sdn. Bhd. (Penang)",
    description:
      "Ensured smooth manufacturing processes and maintained strict adherence to company SOPs. Collaborated with team members to meet daily production targets efficiently.",
    type: "experience" as const,
  },
  {
    period: "Jun 2023 — Sep 2023",
    title: "Operations Specialist (Contract)",
    org: "Lumileds (Penang)",
    description:
      "Supported daily operational tasks and maintained quality control in a fast-paced environment. Demonstrated strong problem-solving skills in cross-functional teams.",
    type: "experience" as const,
  },
  {
    period: "Jul 2022 — May 2023",
    title: "Foundation in Physical Science",
    org: "Penang Matriculation College",
    description:
      "CGPA: 3.49. Key coursework: Computer Science Concepts and Java Programming. MUET: Band 4.",
    type: "education" as const,
  },
  {
    period: "Apr 2022 — Jul 2022",
    title: "Cashier",
    org: "Watikah Ilham Sdn. Bhd. (Penang)",
    description:
      "Managed daily financial transactions and accurate data entry. Provided excellent customer service and handled inquiries professionally.",
    type: "experience" as const,
  },
];

const activities = [
  {
    index: "01",
    title: "Cultural Orientation Malaysia–Indonesia Program 2025",
    role: "Delegate",
  },
  {
    index: "02",
    title: "International Competitive Programming and Multimedia Competition",
    role: "Participant",
  },
  {
    index: "03",
    title: "Computer Science Symposium",
    role: "Participant · Penang Matriculation",
  },
];

export function JourneySection() {
  return (
    <section id="journey" className="border-t border-slate-200 dark:border-slate-800">
      <div className="mx-auto w-full max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-bold sm:text-4xl">Journey & Education</h2>
        <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
          Education, work experience, and extracurricular activities that shaped
          my readiness for a software development role.
        </p>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div className="relative border-l border-slate-300 pl-8 dark:border-slate-700">
            {timeline.map((item) => (
              <article
                key={item.period + item.title}
                className="relative pb-12 last:pb-0"
              >
                <span
                  className="absolute -left-[calc(2rem+1px)] top-1.5 h-3 w-3 rounded-full border-2 border-slate-50 bg-amber-500 dark:border-slate-950 dark:bg-amber-400"
                  aria-hidden
                />
                <p className="text-sm font-medium text-amber-600 dark:text-amber-400">
                  {item.period}
                </p>
                <span className="mt-1 inline-block rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium uppercase tracking-wide text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                  {item.type === "education" ? "Education" : "Experience"}
                </span>
                <h3 className="mt-2 text-xl font-bold leading-snug sm:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-1 font-medium text-amber-600 dark:text-amber-400">
                  {item.org}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {item.description}
                </p>
              </article>
            ))}
          </div>

          <div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-slate-500 dark:text-slate-400">
                Activities & Involvement
              </h3>
              <div className="mt-2 h-0.5 w-12 bg-amber-500 dark:bg-amber-400" />
            </div>

            <ul className="space-y-4">
              {activities.map((activity) => (
                <li key={activity.index}>
                  <div className="group flex items-center gap-4 rounded-xl border border-slate-200 bg-white/80 p-4 shadow-sm transition hover:border-amber-400/50 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900/60 dark:hover:border-amber-400/40 dark:hover:bg-slate-900">
                    <span className="text-sm font-medium text-slate-400 dark:text-slate-500">
                      {activity.index}
                    </span>
                    <span
                      className="h-10 w-0.5 shrink-0 rounded-full bg-amber-500 dark:bg-amber-400"
                      aria-hidden
                    />
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-medium uppercase tracking-wide text-amber-600 dark:text-amber-400">
                        {activity.role}
                      </p>
                      <p className="mt-0.5 text-sm font-semibold leading-snug text-slate-800 dark:text-slate-100">
                        {activity.title}
                      </p>
                    </div>
                    <span
                      className="shrink-0 text-slate-400 transition group-hover:translate-x-0.5 group-hover:text-amber-500 dark:group-hover:text-amber-400"
                      aria-hidden
                    >
                      →
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
