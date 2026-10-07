import { Calendar, MapPin, ExternalLink } from './Icons';
import { experienceData } from '../data/portfolioData';
import thinkbuildLogo from '../assets/ThinkBuild.png';
import { LINKS } from '../constants/links';

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
          <div className="w-12 h-1 bg-indigo-600 dark:bg-emerald-500 rounded mt-2.5"></div>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl">
            Practical development experience and industry internship roles.
          </p>
        </div>

        {/* Experience Cards with Hover Interactions */}
        <div className="space-y-5">
          {experienceData.map((exp, index) => (
            <div
              key={index}
              className="group p-6 sm:p-7 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:-translate-y-1 hover:shadow-md hover:border-indigo-500/40 dark:hover:border-emerald-500/40 transition-all duration-200"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-3.5 sm:gap-4">
                  {/* Company Logo Badge */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-700/80 bg-slate-50 dark:bg-slate-800 p-2 flex items-center justify-center flex-shrink-0 shadow-xs group-hover:scale-105 group-hover:border-indigo-500/40 dark:group-hover:border-emerald-500/40 transition-all duration-300">
                    <img
                      src={thinkbuildLogo}
                      alt={`${exp.company} Logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-emerald-400 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-base font-semibold text-indigo-600 dark:text-emerald-400 mt-0.5">
                      {exp.company}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-900 font-medium text-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <Calendar size={13} />
                    {exp.status}
                  </span>
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/80 text-xs">
                    <MapPin size={13} />
                    {exp.location}
                  </span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80">
                <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {exp.description}
                </p>
              </div>

              {/* Technologies Used & Project Link */}
              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/60 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-2">
                  {['React', 'Vite', 'Tailwind CSS', 'Responsive UI'].map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {LINKS.thinkBuildHomepage && (
                  <a
                    href={LINKS.thinkBuildHomepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-emerald-400 hover:underline"
                  >
                    <span>View Internship Project</span>
                    <ExternalLink size={13} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

