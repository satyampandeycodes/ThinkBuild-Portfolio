import { Github, Linkedin, LeetCode } from './Icons';
import profileImg from '../assets/profile.jpg';
import { LINKS } from '../constants/links';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section
      id="home"
      className="py-10 sm:py-14 border-b border-slate-200 dark:border-slate-800 transition-colors"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        {/* Main Hero Flex / Grid */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-12">

          {/* Left Column: Intro & Call to Actions */}
          <div className="flex-1 text-center lg:text-left min-w-0">

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
              {personalInfo.name}
            </h1>

            <h2 className="text-lg sm:text-xl font-semibold text-blue-600 dark:text-emerald-400 mt-2">
              {personalInfo.role}
            </h2>

            <p className="mt-4 text-base text-slate-600 dark:text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              B.Tech Computer Science student at Sandip University, Nashik, focused on Core Java, Spring Boot, REST APIs, MySQL, and Data Structures & Algorithms.
            </p>

            {/* Clean Action Buttons with Hover Effects */}
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              <a
                href="#projects"
                className="w-full sm:w-auto text-center px-6 py-2.5 bg-blue-600 hover:bg-blue-700 dark:bg-emerald-600 dark:hover:bg-emerald-700 hover:shadow-md hover:-translate-y-0.5 text-white font-medium text-sm rounded-lg shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-emerald-500"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto text-center px-6 py-2.5 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 hover:shadow-md hover:-translate-y-0.5 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 font-medium text-sm rounded-lg shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-emerald-500"
              >
                Contact Me
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-6 pt-5 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-center lg:justify-start gap-6">
              <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                Profiles
              </span>
              <a
                href={LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-emerald-400 hover:-translate-y-0.5 transition-all"
              >
                <Github size={18} />
                <span>GitHub</span>
              </a>
              <a
                href={LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-emerald-400 hover:-translate-y-0.5 transition-all"
              >
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </a>
              <a
                href={LINKS.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-emerald-400 hover:-translate-y-0.5 transition-all"
              >
                <LeetCode size={18} />
                <span>LeetCode</span>
              </a>
            </div>

          </div>

          {/* Right Column: High-Res Profile Photograph */}
          <div className="flex-shrink-0">
            <div className="w-56 h-72 sm:w-64 sm:h-80 lg:w-72 lg:h-96 rounded-2xl overflow-hidden border-2 border-slate-200 dark:border-slate-800 shadow-md bg-white dark:bg-slate-900 p-1">
              <div className="w-full h-full rounded-xl overflow-hidden bg-slate-50 dark:bg-slate-800 flex items-center justify-center">
                <img
                  src={profileImg}
                  alt="Satyam Pandey"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
