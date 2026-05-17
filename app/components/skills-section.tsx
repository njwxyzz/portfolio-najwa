const skillGroups = [
  {
    title: "Proficient",
    skills: ["Flutter", "Dart", "Firebase", "GitHub", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Familiar",
    skills: [
      "PHP",
      "Laravel",
      "Java",
      "HTML",
      "CSS",
      "JavaScript",
      "REST APIs",
    ],
  },
  {
    title: "Soft Skills",
    skills: [
      "Problem-Solving",
      "Teamwork",
      "Adaptability",
      "Cross-cultural Communication",
    ],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="border-t border-slate-200 dark:border-slate-800">
      <div className="mx-auto w-full max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-bold sm:text-4xl">Skills</h2>
        <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
          Technical stack and strengths aligned with mobile and web development
          roles.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900/60 dark:shadow-none"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wide text-purple-600 dark:text-purple-300">
                {group.title}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700 dark:bg-slate-800 dark:text-slate-200"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-slate-500 dark:text-slate-400">
          Languages: Bahasa Melayu (Native) · English (Intermediate) · MUET Band
          4
        </p>
      </div>
    </section>
  );
}
