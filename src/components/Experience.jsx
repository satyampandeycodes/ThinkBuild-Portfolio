import { Briefcase, Calendar, MapPin } from './Icons';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-10 sm:py-14 border-b border-slate-200 dark:border-slate-800 transition-colors"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        {/* Section Heading */}
        <div className="mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Experience
          </h2>
          <div className="w-12 h-1 bg-blue-600 dark:bg-emerald-500 rounded mt-2.5"></div>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl">
            Practical development experience and industry internship roles.
          </p>
        </div>

        {/* Experience Cards with Hover Interactions */}
        <div className="space-y-5">
          {experienceData.map((exp, index) => (
            <div
              key={index}
              className="group p-6 sm:p-7 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:-translate-y-1 hover:shadow-md hover:border-blue-500/40 dark:hover:border-emerald-500/40 transition-all duration-200"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-emerald-400 transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-base font-semibold text-blue-600 dark:text-emerald-400 mt-0.5">
                    {exp.company}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-900 font-medium text-xs">
                    <Calendar size={13} />
                    {exp.status}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin size={14} />
                    {exp.location}
                  </span>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80">
                <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
