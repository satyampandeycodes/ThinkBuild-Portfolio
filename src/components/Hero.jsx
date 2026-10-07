import { Github, Linkedin, LeetCode } from './Icons';
import profileImg from '../assets/profile.jpg';
import { LINKS } from '../constants/links';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-[calc(100vh-4rem)] flex items-center py-12 sm:py-16 border-b border-slate-200 dark:border-slate-800 transition-colors"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        {/* Main Hero Flex / Grid */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-14">

          {/* Left Column: Intro & Call to Actions */}
          <div className="flex-1 text-center lg:text-left min-w-0">

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
              {personalInfo.name}
            </h1>

            <h2 className="text-xl sm:text-2xl font-semibold text-indigo-600 dark:text-emerald-400 mt-3">
              {personalInfo.role}
            </h2>

            <p className="mt-5 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              B.Tech Computer Science student at Sandip University, Nashik, focused on Core Java, Spring Boot, REST APIs, MySQL, and Data Structures & Algorithms.
            </p>

            {/* Clean Action Buttons with Hover Effects */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#projects"
                className="w-full sm:w-auto text-center px-7 py-3 bg-indigo-600 hover:bg-indigo-700 dark:bg-emerald-600 dark:hover:bg-emerald-700 hover:shadow-md hover:-translate-y-0.5 text-white font-medium text-base rounded-lg shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-emerald-500"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto text-center px-7 py-3 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 hover:shadow-md hover:-translate-y-0.5 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 font-medium text-base rounded-lg shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-emerald-500"
              >
                Contact Me
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-center lg:justify-start gap-6">
              <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                Profiles
              </span>
              <a
                href={LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm sm:text-base font-medium text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-emerald-400 hover:-translate-y-0.5 transition-all"
              >
                <Github size={18} />
                <span>GitHub</span>
              </a>
              <a
                href={LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm sm:text-base font-medium text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-emerald-400 hover:-translate-y-0.5 transition-all"
              >
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </a>
              <a
                href={LINKS.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm sm:text-base font-medium text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-emerald-400 hover:-translate-y-0.5 transition-all"
              >
                <LeetCode size={18} />
                <span>LeetCode</span>
              </a>
            </div>

          </div>

          {/* Right Column: High-Res Profile Photograph with Hover Zoom */}
          <div className="flex-shrink-0">
            <div className="group w-64 h-80 sm:w-72 sm:h-96 lg:w-80 lg:h-[26rem] xl:w-88 xl:h-[28rem] rounded-2xl overflow-hidden border-2 border-slate-200 dark:border-slate-800 shadow-md hover:shadow-xl hover:border-indigo-500/40 dark:hover:border-emerald-500/40 bg-white dark:bg-slate-900 p-1.5 transition-all duration-300">
              <div className="w-full h-full rounded-xl overflow-hidden bg-slate-50 dark:bg-slate-800 flex items-center justify-center">
                <img
                  src={profileImg}
                  alt="Satyam Pandey"
                  className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-110"
                />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

