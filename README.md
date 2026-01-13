# ZENVYRA TECH — React + Vite Website

A professional, animated multi-page website built with React + Vite and Tailwind CSS. This repository contains multiple implementations; the actively maintained frontend and the one you should run and deploy is the `client/` directory (React + Vite).

## 🚀 Features

- **Dark-mode futuristic design** with Electric Cyan accent color
- **Smooth animations** with Framer Motion
- **Custom cursor** and scroll progress indicator
- **Fully responsive** design
- **SEO optimized** with react-helmet-async via a reusable `Seo` component
- **Contact form** with validation (Formspree)
- **Static site build** with Vite for production

## 📁 Project Structure

```
ZenvyraTech/
├── backend/              # Primary Express.js API server
├── server/               # Alternative API server (legacy)
├── frontend/             # Alternative React implementation (legacy)
└── client/               # Active React + Vite frontend (use this)
    ├── src/
    │   ├── components/  # Reusable components (Seo.jsx lives here)
    │   ├── pages/       # Page components
    │   ├── App.jsx      # Main app component
    │   └── main.jsx     # Entry point (HelmetProvider)
    └── public/          # Static assets (sitemap.xml, robots.txt, images)
```

## 📦 Prerequisites
- Node.js (v16 or higher)
- npm

## Backend (API)
1. Navigate to the `backend` folder and follow the README there.

## Frontend (client) — Setup & Run
The active React app is in `client/`.

1. Install dependencies (run once):
```powershell
cd client
npm install
```

2. Start development server (HMR):
```powershell
npm run dev
```
Open the URL printed by Vite (usually `http://localhost:5173`).

3. Build for production:
```powershell
npm run build
```

4. Preview the production build locally (serves `dist/`):
```powershell
npm run preview
```

## 🔐 Admin Setup
(If using the backend API) Follow the backend README to create admin users and manage content.

## 📚 API Endpoints
(See backend README for full details. Typical endpoints include `/api/blogs`, `/api/projects`, and `/api/contact`.)

## 🎨 Design & Assets
- Color palette, typography, and component styles are defined with Tailwind CSS.

## 📝 Scripts (client)
From the `client/` directory:
```bash
npm run dev      # Start Vite dev server
npm run build    # Build production assets into dist/
npm run preview  # Serve production build locally
```

## 🚀 Deployment (Vercel recommended)
Recommended Vercel settings (important):
- Root Directory: `client`
- Install Command: `npm ci` (or `npm install`)
- Build Command: `npm run build`
- Output Directory: `dist`

Important: I added `client/vercel.json` to rewrite all routes to `index.html` (prevents 404s on refresh). Also added `client/public/sitemap.xml` and `client/public/robots.txt` for SEO.

After deploying on Vercel, add your custom domain (e.g., `www.zenvyratech.in`) and follow the DNS steps so canonical URLs match production.

## 🌐 SEO Implementation
- Route-level SEO is implemented via `react-helmet-async` and a reusable `Seo` component at `client/src/components/Seo.jsx`.
- Each page sets its own unique `<title>`, meta description, canonical URL, Open Graph tags and Twitter tags.
- `index.html` contains only global defaults; all route-level metadata is injected dynamically per page (SPA-safe).
- `client/public/sitemap.xml` contains canonical URLs for the main routes and `client/public/robots.txt` points to the sitemap.

## ✅ Post-deploy checks
1. Visit production URL and open DevTools → Elements → `<head>` to confirm per-route metadata.
2. Test deep links (e.g., `/about`, `/blog/<slug>`) and refresh — they should not 404.
3. Use Facebook Sharing Debugger and Twitter Card Validator for social previews.

## 📄 License
© 2026 Zenvyra Solutions. All rights reserved.

## 👤 Author
**Abhishek**  
Founder & Digital Engineer  
Zenvyra Tech
