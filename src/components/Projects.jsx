import { ExternalLink, Github, CheckCircle, Server } from './Icons';
import thinkbuildImg from '../assets/thinkbuild-preview.png';
import bookmyshowLogo from '../assets/bookmyshow-logo.png';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="projects" className="py-10 sm:py-14 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        {/* Section Heading */}
        <div className="mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Featured Projects
          </h2>
          <div className="w-12 h-1 bg-blue-600 dark:bg-emerald-500 rounded mt-2.5"></div>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl">
            Real development work showcasing responsive front-end engineering and production-grade Java backend architecture.
          </p>
        </div>

        {/* TWO PROJECT CARDS WITH REAL PROJECT IMAGES & ZOOM HOVER */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">

          {/* PROJECT 1: THINKBUILD HOMEPAGE */}
          <div className="group flex flex-col justify-between rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-blue-500/40 dark:hover:border-emerald-500/40 transition-all duration-300">

            <div>
              {/* Project Image Preview with Zoom */}
              <div className="relative aspect-video w-full overflow-hidden bg-slate-950 border-b border-slate-200 dark:border-slate-800">
                <img
                  src={thinkbuildImg}
                  alt="ThinkBuild Homepage Project Preview"
                  className="w-full h-full object-cover object-top group-hover:scale-105 hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-600 text-white shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                    Live Deployed
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-emerald-400">
                    Web Development
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    Internship Project
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-emerald-400 transition-colors">
                  ThinkBuild Homepage
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                  Responsive homepage project developed during my internship at ThinkBuild, featuring mobile-first layout and modern UI components.
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {['React', 'Vite', 'Tailwind CSS'].map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Highlights */}
                <div className="space-y-2 mb-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Key Highlights:
                  </h4>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle size={15} className="text-blue-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>Developed responsive layout optimized for mobile and desktop screens</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={15} className="text-blue-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>Implemented clean, modular React component architecture</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={15} className="text-blue-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>Deployed live on Vercel platform</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="p-5 sm:p-6 pt-0 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap items-center gap-3">
              <a
                href="https://think-build-home-page.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 dark:bg-emerald-600 dark:hover:bg-emerald-700 hover:shadow-md hover:-translate-y-0.5 rounded-lg shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-emerald-500"
              >
                <ExternalLink size={15} />
                <span>Live Demo</span>
              </a>
              <a
                href="https://github.com/satyampandeycodes"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 hover:shadow-sm hover:-translate-y-0.5 border border-slate-300 dark:border-slate-700 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-emerald-500"
              >
                <Github size={15} />
                <span>GitHub Profile</span>
              </a>
            </div>

          </div>

          {/* PROJECT 2: BOOKMYSHOW BACKEND API (No View Code option as requested) */}
          <div className="group flex flex-col justify-between rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-blue-500/40 dark:hover:border-emerald-500/40 transition-all duration-300">

            <div>
              {/* Project Image Preview (Logo Header) with Matching Zoom */}
              <div className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-rose-950 via-slate-950 to-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-center p-6">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden shadow-xl border border-white/10">
                  <img
                    src={bookmyshowLogo}
                    alt="BookMyShow Ticket Logo"
                    className="w-full h-full object-cover group-hover:scale-110 hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute top-3 right-3">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/90 text-white shadow-sm">
                    <Server size={12} />
                    Backend API Service
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 pb-6 sm:pb-7">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-rose-600 dark:text-rose-400">
                    Java Backend Development
                  </span>
                  <span className="text-xs text-amber-600 dark:text-amber-400 font-medium">
                    Non-deployed API
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-emerald-400 transition-colors">
                  BookMyShow Backend API
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                  Movie ticket booking backend developed using Spring Boot and layered architecture, focusing on transaction integrity and race condition prevention.
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {['Java', 'Spring Boot', 'Spring Data JPA', 'MySQL', 'Maven'].map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Highlights */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Key Highlights:
                  </h4>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle size={15} className="text-blue-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>Engineered Controller → Service → Repository → DTO layered architecture</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={15} className="text-blue-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>Enforced atomic booking workflows with @Transactional execution and ACID guarantees</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={15} className="text-blue-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>Centralized exception handling via @RestControllerAdvice delivering standardized ApiError</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
