import { Github, Linkedin, LeetCode } from './Icons';
import { LINKS } from '../constants/links';

export default function Footer() {
  return (
    <footer className="py-8 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">

        <p className="text-sm text-slate-500 dark:text-slate-400 text-center sm:text-left">
          © 2026 Satyam Pandey. Built with React and Tailwind CSS.
        </p>

        <div className="flex items-center gap-5 text-slate-500 dark:text-slate-400">
          <a
            href={LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-emerald-400 transition-colors"
            aria-label="GitHub profile"
            title="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href={LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-emerald-400 transition-colors"
            aria-label="LinkedIn profile"
            title="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={LINKS.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-emerald-400 transition-colors"
            aria-label="LeetCode profile"
            title="LeetCode"
          >
            <LeetCode size={18} />
          </a>
        </div>

      </div>
    </footer>
  );
}
