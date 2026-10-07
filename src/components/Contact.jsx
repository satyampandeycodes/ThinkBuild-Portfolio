import { useState } from 'react';
import { Mail, Linkedin, Github, CheckCircle } from './Icons';
import { LINKS } from '../constants/links';

export default function Contact() {
  // Form input state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // Submission state: 'idle' | 'sending' | 'success' | 'error'
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission via serverless SMTP API route (/api/contact)
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Client-side validation: ensure fields are not empty
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('sending');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        // Clear the form after successful submission
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        setStatus('error');
        setErrorMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting contact form:', error);
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <section
      id="contact"
      className="py-6 sm:py-8 lg:py-10 border-b border-slate-200 dark:border-slate-800 transition-colors"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center sm:text-left mb-4 sm:mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Let's Connect
          </h2>
          <div className="w-12 h-1 bg-indigo-600 dark:bg-emerald-500 rounded mt-1.5 mx-auto sm:mx-0"></div>
          <p className="mt-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-2xl">
            Feel free to connect with me for collaboration, learning opportunities and software development roles.
          </p>
        </div>

        {/* Two-Column Grid: Left (Form) | Right (Get in Touch) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">

          {/* LEFT SIDE — CONTACT FORM */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900/50 p-5 sm:p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3.5">
              Send a Message
            </h3>

            {/* Inline Success Message */}
            {status === 'success' && (
              <div className="mb-3.5 p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs sm:text-sm flex items-center gap-2">
                <CheckCircle size={16} className="flex-shrink-0 text-emerald-600 dark:text-emerald-400" />
                <span>Message sent successfully.</span>
              </div>
            )}

            {/* Inline Error Message */}
            {status === 'error' && (
              <div className="mb-3.5 p-3 rounded-lg bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-rose-800 dark:text-rose-300 text-xs sm:text-sm">
                {errorMessage || 'Something went wrong. Please try again.'}
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="space-y-3">
              {/* Full Name & Email Address in 2 Columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-2xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1"
                  >
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Satyam Pandey"
                    className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 dark:focus:ring-emerald-500/20 focus:border-indigo-600 dark:focus:border-emerald-500 transition-colors"
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-2xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1"
                  >
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="name@example.com"
                    className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 dark:focus:ring-emerald-500/20 focus:border-indigo-600 dark:focus:border-emerald-500 transition-colors"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="contact-subject"
                  className="block text-2xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1"
                >
                  Subject <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  id="contact-subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Job Opportunity / Project Collaboration"
                  className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 dark:focus:ring-emerald-500/20 focus:border-indigo-600 dark:focus:border-emerald-500 transition-colors"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-2xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1"
                >
                  Message <span className="text-rose-500">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Write your message here..."
                  className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 dark:focus:ring-emerald-500/20 focus:border-indigo-600 dark:focus:border-emerald-500 transition-colors resize-y"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-1">
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full sm:w-auto px-5 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 dark:bg-emerald-600 dark:hover:bg-emerald-700 text-white font-medium text-xs sm:text-sm transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>

          {/* RIGHT SIDE — GET IN TOUCH */}
          <div className="lg:col-span-5 space-y-4">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1.5">
                Get in Touch
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                I'd love to hear from you. Feel free to reach out for collaboration, opportunities, or any questions.
              </p>
            </div>

            {/* Contact Options: Email, LinkedIn, GitHub */}
            <div className="space-y-2.5">

              {/* 1. Email */}
              <a
                href={`mailto:${LINKS.email}`}
                className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 hover:border-indigo-500/40 dark:hover:border-emerald-500/40 transition-colors group"
              >
                <div className="p-2 rounded-lg bg-indigo-50 dark:bg-emerald-950/60 text-indigo-600 dark:text-emerald-400 flex-shrink-0">
                  <Mail size={18} />
                </div>
                <div className="min-w-0">
                  <p className="text-2xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Email
                  </p>
                  <p className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-emerald-400 transition-colors truncate">
                    {LINKS.email}
                  </p>
                </div>
              </a>

              {/* 2. LinkedIn */}
              <a
                href={LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 hover:border-indigo-500/40 dark:hover:border-emerald-500/40 transition-colors group"
              >
                <div className="p-2 rounded-lg bg-indigo-50 dark:bg-emerald-950/60 text-indigo-600 dark:text-emerald-400 flex-shrink-0">
                  <Linkedin size={18} />
                </div>
                <div className="min-w-0">
                  <p className="text-2xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    LinkedIn
                  </p>
                  <p className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-emerald-400 transition-colors truncate">
                    Connect on LinkedIn
                  </p>
                </div>
              </a>

              {/* 3. GitHub */}
              <a
                href={LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 hover:border-indigo-500/40 dark:hover:border-emerald-500/40 transition-colors group"
              >
                <div className="p-2 rounded-lg bg-indigo-50 dark:bg-emerald-950/60 text-indigo-600 dark:text-emerald-400 flex-shrink-0">
                  <Github size={18} />
                </div>
                <div className="min-w-0">
                  <p className="text-2xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    GitHub
                  </p>
                  <p className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-emerald-400 transition-colors truncate">
                    View Repositories
                  </p>
                </div>
              </a>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}