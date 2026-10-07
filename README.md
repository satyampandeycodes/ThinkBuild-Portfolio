# Satyam Pandey - Personal Portfolio

A clean, modern, and professional portfolio website for **Satyam Pandey**, an **Aspiring Java Backend Developer** and Computer Science & Engineering undergraduate at Sandip University, Nashik.

Built with **React**, **Vite**, and **Tailwind CSS**. Designed specifically with simple, beginner-friendly functional components that are easy to explain, maintain, and expand.

---

## 🚀 Quick Start (Running Locally)

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173`.

3. **Build for production:**
   ```bash
   npm run build
   ```
   The production-ready assets will be created in the `dist/` directory.

---

## 🛠️ Tech Stack

- **Framework:** React 19 (Functional Components, Hooks)
- **Tooling & Bundler:** Vite
- **Styling:** Tailwind CSS (with class-based Dark / Light theme support)
- **Language:** JavaScript (ES Modules, beginner-friendly JSX)
- **Deployment Platform:** Vercel

---

## 📁 Project Structure

```text
ThinkBuild-Portfolio/
├── public/
│   ├── favicon.svg          # Browser tab icon
│   └── resume.pdf           # Uploaded resume (downloadable via /resume.pdf)
├── src/
│   ├── assets/
│   │   └── profile.jpg      # Professional profile photograph
│   ├── components/
│   │   ├── Navbar.jsx       # Sticky navbar with mobile drawer & theme toggle
│   │   ├── Hero.jsx         # Introduction, photo, call-to-actions, tech pills
│   │   ├── About.jsx        # Authentic student bio & key statistics
│   │   ├── Skills.jsx       # 6 technical categories (no fake percentages)
│   │   ├── Experience.jsx   # ThinkBuild internship details
│   │   ├── Projects.jsx     # ThinkBuild Homepage & BookMyShow Backend API
│   │   ├── Education.jsx    # Sandip University & Schooling timeline
│   │   ├── Achievements.jsx # LeetCode 210+ problems & 8.64 CGPA
│   │   ├── Leadership.jsx   # NASA Hackathon, Tech Charades, Rojgar Mahakumbh
│   │   ├── Contact.jsx      # Direct email with 1-click copy & socials
│   │   ├── Footer.jsx       # Copyright and profile links
│   │   └── Icons.jsx        # Lightweight, self-contained SVG icon components
│   ├── constants/
│   │   └── links.js         # Centralized file for all social & resume links
│   ├── data/
│   │   └── portfolioData.js # Structured data for skills, projects, and education
│   ├── App.jsx              # Root component with dark mode state & localStorage
│   ├── index.css            # Tailwind directives and clean typography
│   └── main.jsx             # React DOM entry point
├── index.html               # SEO metadata, title, and Google Fonts (Inter)
├── tailwind.config.js       # Tailwind configuration with class-based dark mode
├── package.json
└── vite.config.js
```

---

## 🔗 How to Update Links and Google Drive Resume

All external URLs and contact details are centralized in:
📂 **[`src/constants/links.js`](file:///d:/ThinkBuild/ThinkBuild-Portfolio/src/constants/links.js)**

To update your Google Drive resume link:
1. Open `src/constants/links.js`.
2. Update `resumeUrl` with your public shareable Google Drive link.

```javascript
export const LINKS = {
  github: "https://github.com/satyampandeycodes",
  linkedin: "https://www.linkedin.com/in/satyam-pandey-87b190337",
  leetcode: "https://leetcode.com/u/Satyampandeysp06",
  email: "satyampandey.sp18@gmail.com",
  location: "Nashik, Maharashtra",
  thinkBuildHomepage: "https://think-build-home-page.vercel.app/",
  resumeUrl: "https://drive.google.com/file/d/10VuxLJ5XX1Dj91YwR4SvQnyZvNBesaGS/view?usp=drivesdk",
  resumePdf: "/resume.pdf",
};
```

---

## 🌐 Deploying to Vercel

1. Push this project repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/satyampandeycodes/portfolio.git
   git push -u origin main
   ```
2. Log in to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Select your repository and click **Deploy**.
   - Build Command: `npm run build` (detected automatically)
   - Output Directory: `dist` (detected automatically)
4. Your portfolio, resume download (`/resume.pdf`), and profile picture will work immediately!

---

## 🎯 Key Design Highlights

- **Serious & Authentic:** Looks like a genuine computer science engineering student portfolio without AI gimmicks (no neon glow, no particle clouds, no fake statistics).
- **Dark & Light Mode:** Toggle smoothly with state preserved across refreshes in `localStorage`.
- **Responsive:** Tested across desktop (1440px), tablet (768px), and mobile (375px) with zero horizontal scrolling.
- **Accurate Project Representation:**
  - **ThinkBuild Homepage:** Highlighted with **Live Demo** button.
  - **BookMyShow Backend API:** Explicitly labeled as a **Backend API Service** with **View Code** (no fake live demo).
