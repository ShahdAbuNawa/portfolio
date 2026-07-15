# Shahd Abu Nawa — Portfolio

A dark-navy, glassmorphic developer portfolio built with React, Vite, and Framer Motion.

## Run it

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Before you deploy — fill these in

The instructions asked for **no placeholders except images and personal links you haven't provided**. Everything from your resume is in, but a few things need your input:

1. **Links** — `src/data/profile.js` → `links.linkedin`, `links.github`, `links.portfolio` are all `'#'`. Also update the GitHub/demo links inside `src/data/projects.js` for AIMOPS, Space Haven, and Kidzy.
2. **Resume file** — the Download Resume button points to `/resume.pdf`. Drop your actual resume PDF into `public/resume.pdf`.
3. **Photo** — the hero currently shows your initials in a glowing circle instead of a photo. To add a real photo, replace the placeholder `<span>` in `src/components/sections/Hero.jsx` (`styles.portrait` block) with an `<img>` tag pointing to a photo in `src/assets/`.
4. **Honors** — your resume doesn't state Latin/graduation honors, so I left `education.honors` as `null` in `src/data/profile.js` rather than assume. Set it to a string (e.g. `'Graduated with Honors'`) if that applies to you.
5. **Testimonials** — `src/data/testimonials.js` has 3 placeholder cards. Swap in real quotes when you have them, or remove the section from `src/pages/Home.jsx`.
6. **OG image** — add `public/og-image.png` (1200×630) for nice social-media link previews.
7. **Case study links** — the "Case Study" button on each featured project currently expands an in-page detail panel (architecture, features, lessons learned) rather than linking out — that's intentional since you don't have separate case-study pages yet, but you can wire it to a real route later if you want dedicated pages per project.

## Notes on content decisions

- **Kidzy** is labeled "Team Project" (built and presented with a team), separate from **AIMOPS**, which is labeled "Graduation Project" — matching how you described them.
- The Udacity capstone bullet lists Python and JavaScript only (dropped C++ per your note).
- AIMOPS gets the deepest showcase per your brief: purpose, architecture, frontend features (dashboard, forecasting, campaigns, i18n/RTL, charts), and lessons learned — expand its "Case Study" button to see it.

## Structure

```
src/
  components/
    layout/     — Navbar, Footer, CursorGlow, ScrollProgress, ScrollToTop, LoadingScreen
    sections/   — Hero, About, Skills, Experience, Projects, Certifications, Education, Achievements, Testimonials, Contact
    ui/         — Button, GlassCard, SectionTitle, Badge/Tag, SocialIcons, Timeline, ProjectCard, SkillCard
  pages/        — Home, NotFound
  hooks/        — useActiveSection, useScrollProgress, usePrefersReducedMotion
  data/         — profile, skills, experience, projects, testimonials (all your resume content, editable)
  constants/    — nav links
  styles/       — tokens.css (design system), global.css
```

## Design system

Dark navy + deep blue gradients, glassmorphism, soft glow accents — tokens live in `src/styles/tokens.css` if you want to adjust the palette or type scale later.
