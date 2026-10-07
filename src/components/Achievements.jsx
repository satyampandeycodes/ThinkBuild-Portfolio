import { LeetCode, Award, Rocket, Users } from './Icons';
import { achievementsData, leadershipData } from '../data/portfolioData';

export default function Achievements() {
  const getEventIcon = (index) => {
    switch (index) {
      case 0:
        return <Rocket size={20} className="text-indigo-600 dark:text-emerald-400" />;
      case 1:
        return <Award size={20} className="text-indigo-600 dark:text-emerald-400" />;
      case 2:
        return <Users size={20} className="text-indigo-600 dark:text-emerald-400" />;
      default:
        return <Users size={20} className="text-indigo-600 dark:text-emerald-400" />;
    }
  };

  return (
    <section
      id="achievements"
      className="py-10 sm:py-14 border-b border-slate-200 dark:border-slate-800 transition-colors"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        {/* Section Heading (without uppercase eyebrow word) */}
        <div className="mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Achievements & Leadership
          </h2>
          <div className="w-12 h-1 bg-indigo-600 dark:bg-emerald-500 rounded mt-2.5"></div>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl">
            Key milestones in competitive programming, academic performance, and leadership activities.
          </p>
        </div>

        {/* Key Milestones */}
        <div className="mb-8">
          <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-4">
            Key Milestones & Academics
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {achievementsData.map((item, index) => (
              <div
                key={index}
                className="group p-5 sm:p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:-translate-y-1 hover:shadow-md hover:border-indigo-500/40 dark:hover:border-emerald-500/40 transition-all duration-200"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-indigo-50 dark:bg-emerald-950/60 text-indigo-600 dark:text-emerald-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                    {index === 0 ? <LeetCode size={24} /> : <Award size={24} />}
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-emerald-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs font-semibold text-indigo-600 dark:text-emerald-400 uppercase tracking-wider mt-1">
                      {item.subtitle}
                    </p>
                    <p className="text-base text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership & Activities */}
        <div>
          <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-4">
            Leadership & Extracurricular Activities
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {leadershipData.map((item, index) => (
              <div
                key={item.title}
                className="group p-5 sm:p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm flex flex-col justify-between hover:-translate-y-1 hover:shadow-lg hover:border-indigo-500/40 dark:hover:border-emerald-500/40 transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3.5">
                    <span className="p-2.5 rounded-lg bg-indigo-50 dark:bg-emerald-950/60 group-hover:scale-110 transition-transform duration-200">
                      {getEventIcon(index)}
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                      {item.role}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-emerald-400 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
