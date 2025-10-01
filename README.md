<p align="center">
  <img src="public/placeholder-logo.svg" alt="Trading Patterns Logo" width="120">
</p>

<h1 align="center">Trading Patterns</h1>

A modern Next.js 14 application for a multi-mode trading platform featuring eKYC verification, solo and team trading modes, broker API integrations, and a rich component library.

## Features
- eKYC verification (Aadhaar/PAN) with real-time processing
- Solo and Team trading modes
- Broker API integrations (e.g., Zerodha, AngelOne, Upstox)
- Strategy tester and analytics
- Compliance and audit trails
- Mobile-friendly responsive UI

## Tech Stack
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Radix UI + shadcn/ui components
- lucide-react icons

## Getting Started (Quick)

1. Install dependencies:
   - npm install

2. Run the development server:
   - npm run dev
   - Open http://localhost:3000 in your browser

3. Build for production:
   - npm run build

4. Start the production server:
   - npm run start

5. Lint the project:
   - npm run lint

## How to Run (Step-by-Step)

1) Prerequisites
- Node.js 18+ (LTS recommended)
- npm 9+ (or pnpm 8+)
- Git (optional, for cloning)

2) Get the code
- Option A: Clone the repository
  - git clone https://github.com/gautamk1512/Trading-Patterns.git
  - cd Trading-Patterns
- Option B: If the code is already on your machine
  - cd c:\Users\gauta\OneDrive\Desktop\TradingPlatform

3) Install dependencies
- npm install
- Optional: pnpm install (if you prefer pnpm)

4) Start the development server
- npm run dev
- Open http://localhost:3000

5) Build for production
- npm run build

6) Run the production build
- npm run start

7) Lint the project (optional)
- npm run lint

8) Environment variables (optional)
- No environment variables are required to run the demo locally.
- If you later integrate broker APIs or external services, create a .env.local file at the project root and add keys there. Never commit secrets.

9) Troubleshooting
- Port 3000 already in use:
  - npm run dev -- -p 3001
  - Then open http://localhost:3001
- Node version mismatch:
  - Install/update Node.js LTS from https://nodejs.org
- Clean install if errors occur:
  - Delete node_modules and lock files (package-lock.json / pnpm-lock.yaml)
  - Reinstall: npm install

10) Using pnpm instead of npm (optional)
- Install dependencies: pnpm install
- Dev server: pnpm dev
- Build: pnpm build
- Start: pnpm start
- Lint: pnpm lint

## Project Structure
- app/ — Next.js App Router pages and layouts
- components/ — UI and feature components
- public/ — static assets (logo and images live here)
- styles/ — global styles

## Scripts (package.json)
- dev: Start the Next.js development server
- build: Create a production build
- start: Start the production server
- lint: Run ESLint

## Branding
This project has been updated to use the name "Trading Patterns" in the navigation and across key sections. Logo file: public/placeholder-logo.svg

## License
Copyright © 2024 Trading Patterns. All rights reserved.