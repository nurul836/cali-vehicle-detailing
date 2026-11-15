# GitHub Pages deployment

Planned URL: https://nurul836.github.io/cali-vehicle-detailing/

Pushes to `main` automatically build, test and deploy through `.github/workflows/pages.yml` after GitHub Pages is configured to use GitHub Actions.
The workflow sets `VITE_BASE_PATH=/cali-vehicle-detailing/` and `VITE_SITE_URL=https://nurul836.github.io/cali-vehicle-detailing`.
Known routes have generated HTML documents for direct refresh; a 404 fallback handles unknown paths.
For local development use `npm ci` and `npm run dev`; base path defaults to `/`.
The existing Sites deployment is managed separately. This repository omits its platform-specific identity.
Online form delivery remains disabled until a real backend is configured.

---

# Cali Vehicle Detailing

Complete multi-page Vite + React + TypeScript + Tailwind CSS site. Dark automotive styling, orange accents, locally hosted fonts and licensed photography. Built for GitHub and Vercel. No hosting account or remote repository has been created.

## Run locally

Requires Node.js 22+ and npm.

```sh
npm ci
npm run dev
npm test
npm run build
npm run preview
```

The development server normally uses http://localhost:5173. In restricted containers, use `npm ci --cache /tmp/cali-npm-cache`.

## Pages

- `/`: all 12 requested homepage sections
- `/about`: company introduction and care approach
- `/services`: six service summaries
- `/services/exterior-detailing`
- `/services/interior-detailing`
- `/services/full-vehicle-detailing`
- `/services/paint-correction`
- `/services/ceramic-coating`
- `/services/engine-bay-detailing`
- `/pricing`: three proposed packages with vehicle selector
- `/gallery`: category filtering, modal lightbox, labeled comparison demo
- `/contact`: contact form, phone, address, maps
- `/book`: three-step appointment request form
- `/privacy`: current data handling notice
- Unknown routes: branded not-found view

## Content and architecture

Edit verified business information, service descriptions and availability flags, package options, gallery items and FAQs in `src/config.ts`. No prices, reviews, opening hours, experience, certifications, ratings or guarantees have been invented. Services and package inclusions remain proposed options; availability must be confirmed. Business email, hours and social links are unconfirmed and not represented as working contact channels.

`src/components.tsx` holds shared navigation, gallery, comparison, maps, pricing and content components. `src/pages.tsx` composes pages. `src/forms.tsx` implements forms. `src/styles.css` defines the responsive design system, with Tailwind available for extension. `scripts/seo.mjs` generates a separate HTML document with unique metadata for all 14 routes. React Router handles navigation. `vercel.json` explicitly rewrites known routes to those documents and provides an SPA fallback. Metadata is in initial HTML; page body content is client-rendered and is not full SSR.

## Environment variables

No environment variables are required to develop or review locally.

- `VITE_SITE_URL`: production HTTPS origin, e.g. `https://actual-domain.com`, without a trailing path. Required for production sitemap, canonical URLs, absolute Open Graph image URLs and indexing. Without it, robots.txt disallows indexing and no placeholder-domain sitemap is emitted.
- `VITE_REQUEST_ENDPOINT`: optional PUBLIC HTTPS JSON POST endpoint. Leave unset until a real backend has been configured and tested. Vite variables are public; **never place an API key or private credential in them**.

Set variables in the shell or Vercel project settings before building. Client code reads Vite variables; the SEO build script reads the process environment. For local production metadata builds use `VITE_SITE_URL=https://actual-domain.com npm run build` (a `.env` file alone is not loaded by the Node SEO script).

## Forms and backend contract

**No real submission backend is configured.** Forms explicitly explain that online delivery is unavailable and direct visitors to the verified business phone. The final check produces a truthful “Nothing was sent” message. No entered data is persisted in localStorage or sent without an endpoint.

When configured, the form POSTs JSON with:

- Contact: `type: "contact"`, `name`, `email`, `phone`, `subject`, `message`, `consent`.
- Booking: `type: "appointment"`, `make`, `model`, `year`, `vehicleType`, `service`, `package`, `date`, `time`, `location`, `notes`, `name`, `phone`, `email`, `consent`.

Preferred dates use Sonoma's America/Los_Angeles calendar. Times are preferences, not availability. Requests are never guaranteed reservations. Success is displayed only after a 2xx response containing JSON `{ "success": true }`; return that response only AFTER durable storage or confirmed delivery. A failure or a 15-second timeout leaves the entries in place and shows an error. Implement server validation, rate limiting, abuse protection, appropriate CORS for the site origin, storage or transactional email, and server-only credentials. Review the privacy policy with actual provider and retention information before enabling collection. Test a real request end-to-end and verify receipt; mocked tests do not prove real delivery.

## Owner information still needed

Confirm services, package scopes and prices; business hours; service location arrangements; any mobile-service coverage; official social profiles; licensed real project photos and matching before/after pairs; authentic customer reviews; production domain; backend provider and privacy retention details. The comparison uses one stock photo with a CSS filter and is expressly a demonstration. The gallery is illustrative photography, not customer work. See ASSET-LICENSES.md.

## GitHub

Create an empty GitHub repository, then from this project directory:

```sh
git init -b main
git add .
git commit -m "Build Cali Vehicle Detailing website"
git remote add origin https://github.com/YOUR_ACCOUNT/YOUR_REPOSITORY.git
git push -u origin main
```

The lockfile is included. `.gitignore` excludes dependencies, builds and private environment files. A GitHub Actions workflow runs tests and the production build.

## Vercel

1. Import the GitHub repository into Vercel.
2. Select Vite; use `npm run build` and output directory `dist`. If importing a parent repository, set this project folder as Root Directory.
3. Set `VITE_SITE_URL` to the chosen production origin. Leave `VITE_REQUEST_ENDPOINT` unset until its backend is ready.
4. Deploy. `vercel.json` provides direct-refresh routes. Connect the custom domain in Vercel and redeploy after changing the origin.
5. Validate every route by opening it directly, refresh `/services/paint-correction`, check phone/maps links, inspect at 360px/768px/1440px, and check the browser console and images. Verify `/sitemap.xml` and `/robots.txt` after setting the origin.
6. Before enabling submissions, test successful delivery and server failures against the real backend.

## Verification and limits

Automated DOM tests cover all routes, missing routes, gallery filtering/lightbox, required appointment fields, complete multi-step request payloads, unavailable delivery, unacknowledged responses and explicit success acknowledgments. TypeScript and Vite builds are run. Local image files are decoded to verify they are valid and referenced images are checked against the build.

Browser preview tooling was unavailable in this execution environment. Actual browser appearance, mobile overflow, live Google Maps interaction and hosted Vercel refresh behavior still need browser verification. Responsive breakpoints and reduced-motion support are implemented; no claim of completed visual QA is made.
