# Santosh Kulkarni — Personal Website Spec

> Single source of truth for the site. Review and edit this before we build.

---

## 1. Overview

A polished, single-page personal website that serves as Santosh Kulkarni's
professional home base — something to link from LinkedIn, GitHub, and an email
signature. The vibe is **warm & personal** (light theme), conveying a senior,
trustworthy data & AI executive who is also hands-on and approachable.

- **Primary goal:** Professional presence — a credible, polished hub.
- **Secondary:** Showcase experience, skills, characteristics, and a few GitHub projects.
- **Audience:** Senior executives, recruiters, peers, collaborators.

---

## 2. Design Direction

| Aspect | Decision |
|---|---|
| Vibe | Warm & personal — approachable, human, but executive-grade |
| Theme | Light & warm (cream/off-white background, warm accents) |
| Structure | Single-page scroll with sticky top nav + smooth scrolling |
| Photo | Yes — real headshot in the hero |
| Framework | Next.js (App Router) |
| Hosting | Vercel (one-click later) |

### Color palette (proposed — tweakable)

| Token | Hex | Use |
|---|---|---|
| Background | `#FBF7F0` | Page background (warm cream) |
| Surface | `#FFFFFF` | Cards |
| Ink / text | `#2B2622` | Primary text (warm near-black) |
| Muted text | `#6B6259` | Secondary text |
| Accent (primary) | `#C75D3C` | Terracotta — buttons, links, highlights |
| Accent (secondary) | `#7A8B6F` | Sage — tags, subtle accents |
| Accent (warm) | `#E0A458` | Amber — small highlights |
| Border | `#EFE6D8` | Hairlines, card borders |

### Typography

- **Headings:** a warm serif (e.g. *Fraunces* or *Source Serif*) for personality.
- **Body:** a clean humanist sans (e.g. *Inter*) for readability.
- Generous line-height and whitespace; rounded corners (12–16px) on cards.

### Motion

- Subtle fade/slide-in on scroll for each section.
- Smooth-scroll nav links. Keep it tasteful, not flashy.

---

## 3. Page Structure (single-page sections)

Sticky top nav: **About · Experience · Skills · Projects · Connect** + a
"Download Resume" button on the right.

### 3.1 Hero
- Greeting + name: "Hi, I'm Santosh Kulkarni."
- Tagline (see Content §4).
- One-line positioning sub-tagline.
- Headshot photo (rounded, warm framing).
- Location: **Columbus, OH**.
- Primary CTAs: **Get in touch** (→ email) and **Download résumé**.
- Quick social row: LinkedIn · GitHub · Email.

### 3.2 About
- 2–3 short paragraphs in a warm first-person voice (draft below).
- Optional small "quick facts" strip: 20+ yrs experience · Data & AI ·
  Cloud modernization · Columbus, OH.

### 3.3 Experience
- Vertical timeline, most recent first.
- Each entry: company, title, dates, 2–4 punchy bullet highlights (impact-first,
  metrics retained from résumé).
- Roles to include:
  1. **Travelers Insurance** — Sr. Director, Data Engineering (Corp Tech — Finance, HR & Legal) · 2022–Present
  2. **Nationwide Insurance** — Sr. Consultant/Director, IT Applications · 2020–2022
  3. **Nationwide Insurance** — Senior Manager · 2018–2020
  4. **Nationwide Insurance** — Senior Technology Lead · 2012–2018
- Collapsed "Earlier experience" line: Nationwide (Lead Developer),
  Toyota Motor Manufacturing (Applications Developer), State Farm (Applications Developer).

### 3.4 Skills & Strengths
Two parts:
- **Core strengths / characteristics** (chips or cards): Enterprise Data Strategy,
  AI & Advanced Analytics, Cloud Modernization, Executive Performance Management &
  KPIs, Digital Transformation Leadership, C-Suite Data Storytelling, High-Performing
  Team Leadership, Responsible AI, Cost-to-Serve Optimization, Agile Delivery.
- **Technical skills** (grouped, tagged):
  - Cloud: AWS, OCI, Azure, IBM
  - GenAI: Claude, ChatGPT, AWS Bedrock, Watson X, Windsurf
  - Programming: Java, Spring Boot, Python, SQL, Perl
  - Data/ELT: Glue, dbt, Azure Data Factory, Databricks, Informatica, OCI DI
  - Warehouse/BI: Snowflake, Teradata, Oracle, MDM, Tableau, Looker, Qlik
  - APIs: REST, GraphQL
  - SaaS: Workday HCM, Ariba, Oracle FCM, Workday FCM, PeopleSoft, Concur, Fieldglass
- **Certifications** (small badges): Databricks Certified Data Engineer Associate,
  AWS Certified, Snowflake SnowPro Advanced Architect.
- **Education** line: M.S. Data Analytics (SNHU) · B.E. Computer Science (Karnataka University).

### 3.5 Projects (from GitHub)
Featured project cards (title, description, language tag, GitHub link):
1. **GenAI Experiments** — Hands-on GenAI tooling and experiments. *(Python)*
2. **Data Engineering** — Data engineering practice: pipelines & patterns. *(Python)*
3. **PySpark Experiments** (`pythony_sparky`) — Distributed data processing notebooks. *(Jupyter)*
4. **Copilot Demo** — GenAI / Copilot-assisted development demo. *(Python)*

(Descriptions to be confirmed/refined; "View all on GitHub →" link to profile.)

### 3.6 Connect / Footer
- Friendly closing line ("Let's build something / Let's talk").
- Buttons: **Email** (santosh.sk2005@gmail.com), **LinkedIn**, **GitHub**, **Download résumé**.
- Small footer: © 2026 Santosh Kulkarni · built with Next.js.

---

## 4. Content

### Tagline (hero) — DRAFT, please confirm
> **Data & AI executive turning enterprise complexity into measurable impact.**

Sub-tagline draft:
> 20+ years leading data engineering, AI, and cloud modernization across financial
> services and insurance — Columbus, OH.

### About — DRAFT (warm, first person)
> I'm a data and AI leader with more than two decades of helping large
> organizations turn messy, sprawling data into trusted insight — and trusted
> insight into real business outcomes. I've spent my career at the intersection of
> technology and strategy: modernizing analytics, scaling cloud platforms, and
> building the kind of governed, reliable data foundations that executives can
> actually make decisions on.
>
> What I care about most is impact. Whether it's standing up AI-driven budgeting
> and forecasting, migrating dozens of mission-critical applications to the cloud,
> or restructuring teams to remove key-person risk, I measure success in dollars
> saved, time-to-insight gained, and the confidence people have in their numbers.
>
> I lead large engineering organizations, but I stay close to the craft — I still
> love experimenting with GenAI tooling, data pipelines, and new ways to make data
> work harder. If you're looking to modernize how your business uses data and AI,
> I'd love to talk.

### Why hire me / differentiators (optional callout)
- Executive who still builds — bridges C-suite strategy and hands-on engineering.
- Track record of multi-million-dollar efficiencies and measurable KPIs.
- Deep across financial services & insurance, cloud (AWS/Azure/OCI/IBM), and GenAI.

---

## 5. Assets Needed

| Asset | Status | Notes |
|---|---|---|
| Headshot photo | **Provided** (park photo) | Save to `public/santosh.jpg`. May lightly crop to a friendly portrait framing. |
| Résumé PDF | **Provided** | Save to `public/Santosh-Kulkarni-Resume.pdf`, linked from "Download résumé" buttons. |
| LinkedIn URL | https://www.linkedin.com/in/santoshkulkarnicmh/ | |
| GitHub URL | https://github.com/santoshsk2005 | |
| Email | santosh.sk2005@gmail.com | |
| Phone | (309) 750-9292 | **Confirm:** include on site or keep private? Default = omit. |
| Domain | TBD | Default to a Vercel `*.vercel.app` URL until a custom domain is chosen. |

> Action: drop the photo and résumé PDF into the project's `public/` folder (or
> tell me the filenames) so I can wire them in. Placeholders used until then.

---

## 6. Tech Plan

- **Framework:** Next.js (App Router, TypeScript), static-exportable single page.
- **Styling:** Tailwind CSS with the warm palette as theme tokens. (Lightweight,
  no heavy UI library.)
- **Fonts:** `next/font` (Fraunces + Inter).
- **Animation:** small in-house intersection-observer fade-ins (or Framer Motion
  if we want more polish).
- **Structure:**
  ```
  app/
    layout.tsx          # fonts, metadata, global wrapper
    page.tsx            # assembles all sections
    globals.css         # theme tokens
  components/
    Nav.tsx
    Hero.tsx
    About.tsx
    Experience.tsx
    Skills.tsx
    Projects.tsx
    Connect.tsx
    Footer.tsx
  data/
    site.ts             # all content (experience, skills, projects) in one editable file
  public/
    santosh.jpg
    Santosh-Kulkarni-Resume.pdf
  ```
- **Content in one place:** all text/experience/skills/projects live in `data/site.ts`
  so you can edit copy without touching components.
- **SEO:** title, description, Open Graph tags, favicon.
- **Accessibility:** semantic HTML, good contrast, keyboard-friendly nav.
- **Responsive:** mobile-first; nav collapses to a simple menu on small screens.
- **Deploy:** Vercel. Custom domain optional later.

---

## 7. Open Questions / Confirmations

1. **Tagline & About copy** — approve the drafts in §4, or tweak the voice?
2. **Phone number** — show on the site or keep private? (Default: private.)
3. **Project descriptions** — confirm the four featured repos and their one-liners;
   want any added/removed (e.g. include `mermaids`)?
4. **Domain** — do you own/want a custom domain (e.g. santoshkulkarni.com)?
5. **Dark mode toggle** — you chose light-only; want me to leave room to add a
   toggle later? (Default: light only for now.)
6. **Animations** — tasteful subtle (default) or keep it fully static?

---

## 8. Build Phases

1. Scaffold Next.js + Tailwind + fonts + theme tokens.
2. Build layout, nav, and section shells with content from `data/site.ts`.
3. Style each section (Hero → Connect) to the warm spec.
4. Wire in photo + résumé assets.
5. Polish: animations, responsive passes, SEO/meta, accessibility.
6. Deploy to Vercel.
