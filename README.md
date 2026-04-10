# OK Capy — Under Construction

A shared under-construction page used across the [OK Capy](https://okcapy.xyz) system. Deployed as a holding page for any project within the okcapy umbrella that is actively being built.

## Structure

```
under-construction/
├── src/
│   ├── assets/       # images
│   ├── public/       # favicons & manifest, served at /
│   ├── index.html
│   └── style.css
├── package.json
└── pnpm-lock.yaml
```

## Dev

```bash
pnpm install
pnpm dev
```

Opens a live-reloading server at `http://localhost:5173`. CSS changes apply instantly via HMR; HTML changes trigger a full reload.

## Icons

Brand icons are sourced from [Simple Icons](https://simpleicons.org/) via the `simple-icons` npm package. Icons are injected directly into the HTML at build time using `vite-plugin-html` — no client-side JS required.

Favicons were generated with [Real Favicon Generator](https://realfavicongenerator.net/) and live in `src/public/`. Vite serves this directory at `/` so the paths in the HTML require no changes.