import { Award, Calendar } from './Icons';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section
      id="education"
      className="py-10 sm:py-14 border-b border-slate-200 dark:border-slate-800 transition-colors"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        {/* Section Heading */}
        <div className="mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Education
          </h2>
          <div className="w-12 h-1 bg-indigo-600 dark:bg-emerald-500 rounded mt-2.5"></div>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl">
            Formal computer science education and academic qualifications.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-2 sm:ml-4 space-y-6">
          {educationData.map((edu, index) => (
            <div key={index} className="relative pl-6 sm:pl-8">

              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[7px] sm:-left-[9px] top-2 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-indigo-600 dark:bg-emerald-500 border-2 sm:border-4 border-white dark:border-slate-950"></div>

              {/* Education Card with Hover Effect */}
              <div className="group p-5 sm:p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:-translate-y-1 hover:shadow-md hover:border-indigo-500/40 dark:hover:border-emerald-500/40 transition-all duration-200">

                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-emerald-400 transition-colors">
                      {edu.degree}
                    </h3>
                    <p className="text-sm font-semibold text-indigo-600 dark:text-emerald-400 mt-0.5">
                      {edu.institution}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                      <Calendar size={13} />
                      {edu.period}
                    </span>
                    <span className="inline-flex items-center gap-1 px-3 py-0.5 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-emerald-950/60 text-indigo-700 dark:text-emerald-300 border border-indigo-200 dark:border-emerald-900">
                      <Award size={13} />
                      {edu.score}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                  {edu.description}
                </p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
