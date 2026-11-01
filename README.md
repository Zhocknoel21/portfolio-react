# Portfolio (React + Vite)

## Run locally
    npm install
    npm run dev

## Add your images
Copy your old `assets/` folder contents into `public/assets/`
(hero.png, profile.png, gmail.jpg, github.webp, facebook.png).

## Deploy to GitHub Pages
    npm run deploy

This builds the site and publishes `dist/` to the `gh-pages` branch.
In the repo: Settings → Pages → Source: "Deploy from a branch" → `gh-pages` / root.
`base` in vite.config.js must equal your repo name (`/portfolio-2--SALE/`).

## Edit content
Everything (text, skills, projects, links) is in `src/data/portfolio.js`.
