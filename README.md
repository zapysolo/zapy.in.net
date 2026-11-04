# Nikhil Patil — Portfolio

Portfolio site built with Next.js App Router, React, TypeScript, and Tailwind CSS. The project is configured for a static export and deploys to GitHub Pages.

## Requirements

- Node.js 22.12 or newer
- npm

## Development

```sh
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build and preview

```sh
npm run typecheck
npm run build
```

The static site is generated in `out/`. To preview the static export locally, run `python3 -m http.server 3000 --directory out`.

## Routes and content

- `/` — home, about, and contact sections
- `/projects/` — project index and generated project detail pages
- `/blog/` — blog index and generated blog detail pages
- `src/data/projects.ts` and `src/data/blog.ts` — project and blog content

GitHub Pages deployment is handled by `.github/workflows/static.yml`. The static export includes the custom-domain `CNAME` file from `public/`.
