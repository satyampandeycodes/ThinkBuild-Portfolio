import { useState } from 'react';
import { Mail, MapPin, Github, Linkedin, LeetCode, Copy, Check, FileText } from './Icons';
import { LINKS } from '../constants/links';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(LINKS.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section
      id="contact"
      className="py-10 sm:py-14 border-b border-slate-200 dark:border-slate-800 transition-colors"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center sm:text-left mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Let's Connect
          </h2>
          <div className="w-12 h-1 bg-indigo-600 dark:bg-emerald-500 rounded mt-2 mx-auto sm:mx-0"></div>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl">
            Feel free to connect with me for collaboration, learning opportunities and software development roles.
          </p>
        </div>

        {/* Contact Information & Channels Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 items-start">

          {/* Direct Communication Cards */}
          <div className="space-y-3.5">

            {/* Email Box */}
            <div className="p-4 sm:p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 shadow-sm flex items-center justify-between gap-3 hover:-translate-y-0.5 hover:shadow-md hover:border-indigo-500/40 dark:hover:border-emerald-500/40 transition-all duration-200">
              <div className="flex items-center gap-3 min-w-0">
                <div className="p-2 sm:p-2.5 rounded-lg bg-indigo-50 dark:bg-emerald-950/60 text-indigo-600 dark:text-emerald-400 flex-shrink-0">
                  <Mail size={18} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Email
                  </p>
                  <a
                    href={`mailto:${LINKS.email}`}
                    className="text-xs sm:text-base font-semibold text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-emerald-400 transition-colors truncate block"
                  >
                    {LINKS.email}
                  </a>
                </div>
              </div>

              <button
                onClick={copyEmailToClipboard}
                className="p-2 rounded-lg text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex-shrink-0"
                title="Copy email to clipboard"
                aria-label="Copy email"
              >
                {copiedEmail ? <Check size={18} className="text-emerald-500" /> : <Copy size={18} />}
              </button>
            </div>

            {/* Location Box */}
            <div className="p-4 sm:p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 shadow-sm flex items-center gap-3 hover:-translate-y-0.5 hover:shadow-md hover:border-indigo-500/40 dark:hover:border-emerald-500/40 transition-all duration-200">
              <div className="p-2 sm:p-2.5 rounded-lg bg-indigo-50 dark:bg-emerald-950/60 text-indigo-600 dark:text-emerald-400 flex-shrink-0">
                <MapPin size={18} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Location
                </p>
                <p className="text-xs sm:text-base font-semibold text-slate-900 dark:text-white">
                  {LINKS.location} (Open to Relocate)
                </p>
              </div>
            </div>

          </div>

          {/* Social Profiles & Resume Access */}
          <div className="p-5 sm:p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 shadow-sm flex flex-col justify-between space-y-5">
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                Online Profiles & Coding Platforms
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-5 leading-relaxed">
                Check my code repositories on GitHub, my technical network on LinkedIn, and my Data Structures problem-solving profile on LeetCode.
              </p>

              <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3">
                <a
                  href={LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 hover:border-indigo-500/40 dark:hover:border-emerald-500/40 hover:text-indigo-600 dark:hover:text-emerald-400 hover:-translate-y-0.5 hover:shadow-sm text-slate-800 dark:text-slate-100 font-medium text-xs sm:text-sm transition-all"
                >
                  <Github size={17} />
                  <span>GitHub</span>
                </a>
                <a
                  href={LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 hover:border-indigo-500/40 dark:hover:border-emerald-500/40 hover:text-indigo-600 dark:hover:text-emerald-400 hover:-translate-y-0.5 hover:shadow-sm text-slate-800 dark:text-slate-100 font-medium text-xs sm:text-sm transition-all"
                >
                  <Linkedin size={17} />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={LINKS.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 hover:border-indigo-500/40 dark:hover:border-emerald-500/40 hover:text-indigo-600 dark:hover:text-emerald-400 hover:-translate-y-0.5 hover:shadow-sm text-slate-800 dark:text-slate-100 font-medium text-xs sm:text-sm transition-all"
                >
                  <LeetCode size={17} />
                  <span>LeetCode</span>
                </a>
              </div>
            </div>

            {/* Resume Access Button */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
              <a
                href={LINKS.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 dark:bg-emerald-600 dark:hover:bg-emerald-700 hover:shadow-md hover:-translate-y-0.5 text-white font-medium text-xs sm:text-sm rounded-lg shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-emerald-500"
                aria-label="View Satyam Pandey's Resume (opens in a new tab)"
              >
                <FileText size={15} />
                <span>View Resume</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
