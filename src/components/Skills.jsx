import { skillCategories } from '../data/portfolioData';

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-10 sm:py-14 border-b border-slate-200 dark:border-slate-800 transition-colors"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        {/* Section Heading */}
        <div className="mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Technical Skills
          </h2>
          <div className="w-12 h-1 bg-indigo-600 dark:bg-emerald-500 rounded mt-2.5"></div>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl">
            Proficiencies acquired through academic coursework, independent Java backend engineering, and active DSA problem-solving.
          </p>
        </div>

        {/* Skills Grid with Card & Pill Hover Interactions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="group p-5 sm:p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:-translate-y-1 hover:shadow-md hover:border-indigo-500/40 dark:hover:border-emerald-500/40 transition-all duration-200"
            >
              <h3 className="font-bold text-slate-900 dark:text-white text-base mb-3.5 pb-2.5 border-b border-slate-100 dark:border-slate-800 group-hover:text-indigo-600 dark:group-hover:text-emerald-400 transition-colors">
                {category.title}
              </h3>

              {/* Skills Tags with Hover Effect */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200/60 dark:border-slate-700/60 hover:bg-indigo-50 dark:hover:bg-emerald-950/60 hover:text-indigo-600 dark:hover:text-emerald-400 hover:border-indigo-300 dark:hover:border-emerald-700 hover:scale-105 transition-all duration-150 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
