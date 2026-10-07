import { personalInfo } from '../data/portfolioData';
import { LINKS } from '../constants/links';

export default function About() {
  const quickFacts = [
    { label: "Academic Standing", value: "8.64 / 10 CGPA", sub: "Sandip University, Nashik" },
    { label: "LeetCode Milestone", value: "210+ Problems Solved", sub: "Data Structures & Algorithms" },
    { label: "Primary Direction", value: "Java Backend Development", sub: "Spring Boot, JPA & MySQL" },
    { label: "Current Location", value: "Nashik, Maharashtra", sub: "Open to Relocate for Internships" },
  ];

  return (
    <section
      id="about"
      className="py-10 sm:py-14 border-b border-slate-200 dark:border-slate-800 transition-colors"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        {/* Section Heading */}
        <div className="mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            About Me
          </h2>
          <div className="w-12 h-1 bg-indigo-600 dark:bg-emerald-500 rounded mt-2.5"></div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

          {/* Paragraph Narrative */}
          <div className="lg:col-span-7 space-y-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {personalInfo.about.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}

            <div className="pt-3 border-t border-slate-200 dark:border-slate-800/80 flex flex-col sm:flex-row flex-wrap gap-4 text-sm font-medium">
              <span className="text-slate-700 dark:text-slate-300">
                <strong className="text-slate-900 dark:text-white font-semibold">Email: </strong>
                <a href={`mailto:${LINKS.email}`} className="text-indigo-600 dark:text-emerald-400 hover:underline break-all">
                  {LINKS.email}
                </a>
              </span>
            </div>
          </div>

          {/* Clean Facts Grid with Hover Interactions */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {quickFacts.map((fact, index) => (
              <div
                key={index}
                className="group p-4 sm:p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:-translate-y-1 hover:shadow-md hover:border-indigo-500/40 dark:hover:border-emerald-500/40 transition-all duration-200 cursor-default"
              >
                <p className="text-xs font-semibold text-slate-400 dark:text-slate-400 uppercase tracking-wider">
                  {fact.label}
                </p>
                <p className="text-lg font-bold text-slate-900 dark:text-white mt-1 group-hover:text-indigo-600 dark:group-hover:text-emerald-400 transition-colors">
                  {fact.value}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  {fact.sub}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
