# Pawbiotics.us

Beginner-friendly pet health website built with **Next.js + TypeScript + Tailwind CSS**.

This version is now upgraded for:
- SEO and NLP-friendly page structure
- Google AI Overview-friendly formatting
- Local SEO pages for US cities
- Programmatic routes for scalable content
- Reusable schema and FAQ components

---

## 1) Quick Start

```bash
npm install
npm run dev
```

Open: `http://localhost:3000`

Other useful command:
- `npm run build` -> tests production build

---

## 2) New Programmatic Routes

These dynamic routes are already live:

- `app/vets/[city]/page.tsx` -> `/vets/houston-tx`
- `app/dogs/probiotics/[condition]/page.tsx` -> `/dogs/probiotics/diarrhea`
- `app/cats/health/[condition]/page.tsx` -> `/cats/health/itchy-skin`
- `app/health-conditions/[condition]/page.tsx` -> `/health-conditions/food-allergy`

Each route can generate many pages using `generateStaticParams()`.

---

## 3) Reusable SEO Components

### `components/seo/SEOPageTemplate.tsx`
Main page template with:
- H1
- Intro paragraph (NLP-friendly)
- Quick answer section (AI Overview style)
- Keyword variations block
- Reusable content sections
- FAQ section
- JSON-LD schema output

### `components/seo/FAQ.tsx`
Reusable FAQ UI component.

### `components/seo/Schema.tsx`
Reusable schema generators:
- FAQ schema
- LocalBusiness schema (vet city pages)
- Article schema (health/content pages)

---

## 4) Where to Plug Real Content Later

Use these files:

- `lib/programmatic-content.ts`
  - Replace starter text with CMS/API/database content.
  - Expand `sampleCitySlugs` and `sampleConditionSlugs`.
  - Add real data lookup by city/condition.

- `lib/seo.ts`
  - Utility helpers and shared SEO types.

In short:
- If you want to scale to 100+ pages, add more slugs/data in one place.
- Routes and template already support that scale.

---

## 5) Current SEO Strategy in This Starter

- Clean semantic headings (`h1`, `h2`, `h3`)
- Natural keyword variations in body sections
- Quick answers + bullet points for AI extraction
- Structured FAQ content
- JSON-LD for better search understanding
- Static generation for fast page speed

---

## 6) Updated Folder Structure (important files)

```txt
app/
  layout.tsx
  page.tsx
  vets/[city]/page.tsx
  dogs/probiotics/[condition]/page.tsx
  cats/health/[condition]/page.tsx
  health-conditions/[condition]/page.tsx

components/
  Header.tsx
  Footer.tsx
  seo/
    SEOPageTemplate.tsx
    FAQ.tsx
    Schema.tsx

lib/
  seo.ts
  programmatic-content.ts
```

---

## 7) Notes

- This is a **structure-first** setup (not final medical content).
- Replace placeholder text with reviewed content before publishing widely.
- Keep veterinary/medical claims reviewed by a professional.
