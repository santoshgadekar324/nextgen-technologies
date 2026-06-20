# NextGen Technologies — Website

A complete, production-quality marketing website for NextGen Technologies, built with React, TypeScript, Vite, and Tailwind CSS.

## What's included

- **15 pages**: Home, About, Services (listing + 15 dynamic detail pages), Technologies, Portfolio (listing + 5 project detail pages), Careers (listing + 8 job detail pages with application form), Blog (listing + 7 articles), Testimonials, Contact, FAQ, 404.
- **Dark / light theme toggle** with system preference detection.
- **Data-driven content** — every service, project, job, and blog post lives in `src/data/index.ts`. Edit that one file to change site content; pages and cards regenerate automatically.
- **Animated hero** with a canvas-based network visualization (theme-aware), scroll reveal animations (Framer Motion), and smooth page transitions.
- **Working forms** (contact, job application, newsletter) with client-side validation and submit states — see "Connecting forms to a backend" below.
- **SEO basics**: per-page `<title>`/meta description updates, `robots.txt`, `sitemap.xml`, Open Graph tags.
- **Floating chat widget, WhatsApp button, cookie consent banner, back-to-top button, loading screen.**

## Getting started

```bash
npm install
npm run dev       # starts a local dev server, usually at http://localhost:5173
```

```bash
npm run build      # type-checks and builds a production bundle into dist/
npm run preview    # serves the production build locally
```

Requires Node.js 18+.

## Project structure

```
src/
  data/index.ts          # ALL site content lives here — services, projects, jobs, blog posts, testimonials, team, FAQs
  types/index.ts          # TypeScript interfaces for the data above
  context/ThemeContext.tsx
  components/
    layout/                # Navbar, Footer, page shell
    ui/index.tsx            # shared building blocks: buttons, cards, theme toggle, chat widget, cookie banner...
    home/                    # homepage-only sections (hero, stats, services overview, etc.)
    contact/                 # contact form + job application form
  pages/                    # one file per route
public/
  favicon.svg, robots.txt, sitemap.xml
```

## Editing content

Almost everything on the site is generated from `src/data/index.ts`. To add a service, add an object to the `services` array — a detail page at `/services/your-slug` is created automatically, with no new files needed. The same pattern applies to `projects`, `jobs`, and `blogPosts`.

## Connecting forms to a backend

The contact form, job application form, and newsletter signup currently simulate a submission (a short delay, then a success state) and **do not send data anywhere**. To make them functional, you have two main options:

1. **Wire them to your own backend** — replace the `setTimeout` in `ContactForm.tsx` / `ApplicationForm.tsx` with a `fetch()` call to your API (Spring Boot, Node/Express, etc.), which receives the form data, validates it server-side, stores it, and sends notification emails.
2. **Use a form-handling service** (e.g. Formspree, Resend, or a serverless function) if you don't want to stand up a backend immediately.

Resume uploads currently only capture the filename for the UI — actually persisting the uploaded file requires a backend endpoint (e.g. an S3-compatible bucket or your own file storage).

## On the original brief's full tech stack

The original spec asked for a very large set of additional infrastructure: a Java Spring Boot and Node.js backend, MySQL/PostgreSQL/MongoDB, JWT/OAuth authentication, a full admin dashboard, Docker/Kubernetes, GitHub Actions CI/CD, and multi-cloud deployment (AWS/Azure/GCP). That is a genuinely large, separate build — realistically its own project — and isn't something a frontend codebase alone can responsibly fake. This delivery focuses on a real, complete, deployable **frontend**. If you'd like, the backend, database schema, admin dashboard, and DevOps setup can be built next as their own focused pieces.

A few specific scoping calls worth knowing about:
- **Three.js / GSAP**: the brief asked for these specifically. This build uses a lightweight custom canvas animation for the hero (no extra dependency, smaller bundle, respects `prefers-reduced-motion`) and Framer Motion for scroll/UI animation. Both libraries can be added if you want true 3D or more elaborate timeline-based animation — just let me know what you have in mind and I can build it in.
- **ShadCN UI**: rather than scaffolding the full shadcn CLI setup, this build uses hand-built Tailwind components in `components/ui/` styled consistently with the brand. shadcn components can be layered in later if you want their specific primitives.
- **PWA support**: not included by default. Adding a manifest + service worker (e.g. via `vite-plugin-pwa`) is a small follow-up if needed.

## Deploying

This is a static Vite build — after `npm run build`, the `dist/` folder can be deployed to any static host (Vercel, Netlify, AWS S3 + CloudFront, Azure Static Web Apps, GitHub Pages, Nginx, etc.). No server-side rendering is required for this version.

## License

This codebase is provided for NextGen Technologies' use. Replace placeholder content (team bios, stats, testimonials, GitHub/demo links) with real information before launch.
