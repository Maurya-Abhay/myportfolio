# Portfolio Static SPA

A clean, responsive portfolio SPA built with React + TypeScript + Vite. The visual direction follows the approved reference: polished light/dark modes, strong hero, profile card, featured project cards, skills, timeline, education, contact section, and project details modal.

## Data is separated

Content is intentionally split into independent JSON files:

```text
src/data/
├── profile.json
├── projects.json
├── skills.json
├── experience.json
├── education.json
├── achievements.json
└── site.json
```

Edit these JSON files to change portfolio content. UI components are kept separate from content.

## Structure

```text
portfolio-static/
├── public/
│   ├── profile.svg
│   └── favicon.svg
├── src/
│   ├── components/
│   ├── data/
│   ├── hooks/
│   ├── lib/
│   ├── pages/
│   ├── sections/
│   ├── types/
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Run

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

No database or runtime API is required. The portfolio is a static SPA.

For project screenshots, set `image` in `src/data/projects.json` to a public image URL. Leave it empty to use the built-in UI preview fallback.
