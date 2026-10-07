import { useState } from 'react';
import { Menu, X, Sun, Moon, FileText } from './Icons';
import { LINKS } from '../constants/links';

export default function Navbar({ darkMode, setDarkMode }) {
  // Mobile menu toggle state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Navigation items mapping to section IDs (Home is omitted as logo links to #home; Achievements includes Leadership)
  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  // Helper to close mobile menu after clicking a link
  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-white/95 dark:bg-[#0b0f17]/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo & Name */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-emerald-500 rounded-md py-1"
          >
            <span className="w-9 h-9 rounded-lg bg-indigo-600 dark:bg-emerald-600 text-white font-bold flex items-center justify-center text-sm tracking-wider shadow-sm group-hover:bg-indigo-700 dark:group-hover:bg-emerald-500 transition-colors">
              SP
            </span>
            <span className="font-semibold text-slate-900 dark:text-white text-base tracking-tight group-hover:text-indigo-600 dark:group-hover:text-emerald-400 transition-colors">
              Satyam Pandey
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-2.5 py-1.5 rounded-md hover:text-indigo-600 dark:hover:text-emerald-400 hover:bg-slate-100 dark:hover:bg-slate-800/70 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop Right Actions: Dark Mode Toggle & View Resume */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-emerald-500 transition-colors"
              aria-label="Toggle dark mode"
              title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} />}
            </button>

            {/* View Resume Button */}
            <a
              href={LINKS.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs sm:text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-emerald-600 dark:hover:bg-emerald-700 rounded-lg shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-emerald-500"
              aria-label="View Satyam Pandey's Resume (opens in a new tab)"
            >
              <FileText size={15} />
              <span>View Resume</span>
            </a>
          </div>

          {/* Mobile/Tablet Controls: Dark Toggle + Hamburger Menu */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-emerald-500"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0b0f17] px-4 pt-3 pb-5 space-y-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={handleNavClick}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-indigo-600 dark:hover:text-emerald-400 transition-colors"
            >
              {item.name}
            </a>
          ))}

          <div className="pt-3 mt-2 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2">
            <a
              href={LINKS.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleNavClick}
              className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-emerald-600 dark:hover:bg-emerald-700 rounded-lg shadow-sm transition-colors"
              aria-label="View Satyam Pandey's Resume (opens in a new tab)"
            >
              <FileText size={16} />
              <span>View Resume</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
