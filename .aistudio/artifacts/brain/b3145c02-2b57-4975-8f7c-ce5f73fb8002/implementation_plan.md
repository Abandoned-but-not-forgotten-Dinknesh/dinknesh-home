# ድንቅነሽ (Dinkinesh) — Unified Project & Team Portal

A minimalist, editorial introductory website for the **ድንቅነሽ (Dinkinesh) — Abandoned but not Forgotten** project. It tells the story behind preserving humanity's Moon and Mars exploration heritage, introduces the team, and connects visitors directly to both live platforms: the **Kids' Edition** (`dinkinesh.netlify.app`) and the **3D Space Museum** (`dinkinesh-museum.netlify.app`).

---

## User Review & Critical Decisions

> [!IMPORTANT]
> Your Phase 1 answers shaped this plan directly. Please review the confirmed direction and one small confirmation point about team credits before we build.

- **Confirmed — Minimalist Aesthetic**: Stripped-back, gallery-grade editorial typography and generous whitespace rather than heavy 3D canvases or dashboard chrome.
- **Confirmed — Project & Team First (No Hackathon Framing)**: All pitch-deck language ("Live Pitch", "NASA Space Apps Challenge", "Validity", "Challenge Fit") is removed. The narrative centers on the project's purpose, cultural naming, planetary exhibits, open NASA data foundation, and the creators.
- **Confirmed — Simple Platform References**: Both `dinkinesh.netlify.app` and `dinkinesh-museum.netlify.app` are accessible directly from the top navigation bar and presented cleanly via two restrained editorial platform cards.
- **Confirmed — Pure Editorial Intro (No Heavy Interactive Toys)**: No embedded 3D WebGL viewer, quizzes, or artifact switchers on the intro page—keeping load speed instant and reading calm.
- **Open Confirmation — Team Roster & Roles**: From the public project repository (`Abandoned-but-not-forgotten-Dinknesh/Dinknesh`), we found contributors **Biniyam D. Dawit** (`@biniyamdmk`), **Hawlet Romedan** (`@Hawli-geeeeez`), and **@CodeWith-Aziz**. We will include these three contributors with clean, editable role titles (e.g., Architecture & 3D Engineering, Curatorial Story & Kids Experience, Design & Frontend Systems) plus a mission statement—let us know if you'd like specific titles, full names, or extra team members added.

---

## 1. Overview & Core Concept

- **What It Does**: Serves as the unified front door for the **ድንቅነሽ (Dinkinesh)** project—explaining why spacecraft left behind on the Moon and Mars deserve living stories, introducing the cultural meaning of *ድንቅነሽ* ("You are wonderful" in Amharic, echoing the 3.2-million-year-old Ethiopian *Australopithecus* fossil *Lucy* and NASA's Lucy asteroid target), cataloging the five featured missions across two worlds, crediting the team and NASA Open Data sources, and routing visitors to the right platform.
- **Target Audience**: First-time visitors, educators, parents, space enthusiasts, and collaborators discovering the project who want to understand what Dinkinesh is, who built it, and which experience to launch next.
- **Key Value**: Unifies two distinct web experiences—a playful guided voyage for children and a dark-space 3D exhibition for enthusiasts—under one calm, permanent project home.

### Reference Template Study (Real Minimalist Web Templates)

To anchor the visual direction in proven minimalist museum and editorial patterns, we evaluated three real-world Webflow/Framer templates:

| Template | Ecosystem | Core Minimalist Pattern | How We Adapt It for ድንቅነሽ |
| :--- | :--- | :--- | :--- |
| **Galerie Holm / Ovelle Holm** (Webestica) | Framer / Webflow | Warm gallery paper whitespace, delicate hairline rules, large quiet artifact framing | Adopted as our **primary visual rhythm**—letting spacecraft photography and bilingual *ድንቅነሽ* typography breathe |
| **Vertical** (Omakase Design) | Framer | High-contrast serif + grotesque pairing, calm long-form monograph chapters | Adopted for our **narrative cadence**—pacing Origin → Platforms → Exhibits → Team cleanly |
| **Modo** | Webflow / Framer | Restrained asymmetric grid with crisp institutional captions and curatorial bios | Adopted for the **Exhibits Index & Team Ledger**—structured rows with tabular years and roles |

---

## 2. User Experience & Visual Design

### Key User Flows (Zero-State to Launch)

1. **Arrival & Immediate Orientation**: Visitor lands on a serene, full-width editorial hero featuring the Ethiopic-Latin wordmark (`ድንቅነሽ · Dinkinesh`), the core thesis (*"Every machine we left behind on the Moon and Mars still has a story."*), and quiet, immediate access to both platforms in the top navigation bar.
2. **Reading the Project Story**: Scrolling moves through four uncrowded chapters separated by generous whitespace and 1px hairline rules:
   - **01. The Name & Idea**: Why *ድንቅነሽ* ("You are wonderful" in Amharic / *Lucy*) bridges human heritage on Earth with our mechanical footsteps on other worlds, and why flat textbooks miss the human story.
   - **02. Two Ways to Explore**: Clean side-by-side platform cards referencing:
     - **Kids' Edition (`dinkinesh.netlify.app`)** — Guided by *Lucy the squirrel astronaut*, playful launch voyages, simplified stories, and space quizzes for young explorers.
     - **3D Space Museum (`dinkinesh-museum.netlify.app`)** — Deep-space 3D planetary hubs and inspectable NASA spacecraft models with mission telemetry and archival notes.
   - **03. Across Two Worlds (Exhibit & Open Data Ledger)**: A refined catalog table/list of the machines featured across the platforms—**The Moon** (Apollo 11 Descent Stage · 1969, Apollo 15 Lunar Module · 1971) and **Mars** (Viking 1 Lander · 1976, Sojourner Rover · 1997, Spirit & Opportunity Rovers · 2004, Ingenuity Helicopter · 2021)—alongside explicit credit to **NASA 3D Resources** and **NASA Science (`science.nasa.gov`)**.
   - **04. The Team & Vision**: Editorial team roster highlighting the builders behind the 3D pipeline, storytelling, and educational design, plus future goals (expanding missions, classroom adoption, and multilingual accessibility including Amharic).
3. **Platform Launch**: Clicking a nav link or either platform card opens `https://dinkinesh.netlify.app` or `https://dinkinesh-museum.netlify.app` cleanly in a new tab.

### Visual Identity & Theme (*Archival Paper Minimalism*)

- **Aesthetic Direction**: Museum monograph / white-cube exhibition catalog inspired by *Galerie Holm* and *Vertical*—calm, authoritative, and warm without futuristic neon clichés.
- **Color Palette (60-30-10 Distribution)**:
  - `--background` (60%): Warm archival paper `#FBF9F5`
  - `--surface` (30%): Soft limestone `#F3EFE6` with subtle hairline dividers `#E4DEC9`
  - `--foreground`: Deep ink charcoal `#181715` (secondary muted slate `#5E5A52`)
  - `--accent` (10%): Archival bronze `#8C6A2E` (hover `#705320`) for active links and primary platform actions
- **Typography & Hierarchy (2+1 Rule + Ethiopic Support)**:
  - *Display Serif*: `Fraunces` (editorial headlines, `text-wrap: balance`, restrained optical sizing)
  - *Body Sans*: `Plus Jakarta Sans` (16px, `1.7` line-height, `65–72ch` measure)
  - *Ethiopic Script*: `Noto Sans Ethiopic` (crisp rendering for `ድንቅነሽ`)
  - *Tabular Metadata*: `IBM Plex Mono` (`tabular-nums` for mission years, coordinates, and distances—no pill boxes, separated cleanly by `·`)
- **Top Bar Contract (Single-Row, 3 Zones)**:
  - *Zone 1 (Brand)*: `ድንቅነሽ` wordmark (single line, no subtitle badges)
  - *Zone 2 (Nav Links)*: `Story`, `Platforms`, `Exhibits`, `Team` (4 single-line links)
  - *Zone 3 (Platform Links / Primary Action)*: Direct single-line link to `3D Museum` / `Kids' Edition` (keeping header minimal and strictly one row, with a clean mobile menu toggle on small screens)
- **Visual Assets**: Custom-generated museum-grade editorial imagery (an archival lunar surface hardware study and a quiet Martian horizon study) plus clean typographic/SVG fallbacks so no broken images ever appear.
- **Interactive Feedback & Motion**: Subtle compositor-only fade/translate reveals (`<= 200ms` hover settle, `prefers-reduced-motion` compliant), zero arrival popups, and zero decorative pulsing dots or code-comment prefixes.

---

## 3. Key Product Decisions & Trade-Offs

- **Decision 1 — Warm Archival Paper (`#FBF9F5`) vs. Dark Space Canvas (`#0B0C10`)**:
  - *Chosen Approach*: Warm archival paper light mode inspired by *Galerie Holm*.
  - *Why*: `dinkinesh-museum.netlify.app` is already a dark-space 3D canvas and `dinkinesh.netlify.app` is bright and playful for kids. A light, serene editorial monograph sits neutrally between both—reading like a real museum publication about the project and team while avoiding repeating the dark 3D hub UI.
  - *Alternatives Considered*: Matching the dark `#0B0C10` museum palette; passed over because dark-mode landing pages can feel like a duplicate of the 3D museum rather than an inviting project & team home.
- **Decision 2 — Pure Static Curated Architecture vs. Backend CMS**:
  - *Chosen Approach*: Structured TypeScript content modules rendered in a static React SPA.
  - *Why*: An introductory project and team site requires zero database latency, instant load times, and rock-solid reliability with external Netlify links.
  - *Alternatives Considered*: Adding a database or headless CMS; unnecessary overhead for a focused editorial site.
- **Decision 3 — Unified Mission Catalog Across Both Platforms**:
  - *Chosen Approach*: List all 6 iconic missions represented across the two sites (Apollo 11, Apollo 15, Viking 1, Sojourner, Spirit & Opportunity, Ingenuity) with simple text indicators showing which platform features each.
  - *Why*: The Kids' site features Viking 1 while the 3D Museum features Sojourner alongside the shared Apollo/MER/Ingenuity exhibits—acknowledging both accurately builds complete trust.

---

## 4. Technical Architecture & Content Flow

```
┌────────────────────────────────────────────────────────────────────────┐
│                     Unified Project Data Modules                       │
│  [ Project Narrative ]  [ Platform Links ]  [ Exhibits ]  [ Team ]     │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│                       Editorial Page Shell (App)                       │
│                                                                        │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │ Top Navigation Bar (Brand · Story / Platforms / Exhibits / Team) │  │
│  └──────────────────────────────────────────────────────────────────┘  │
│                                                                        │
│  ┌───────────────────────┐   ┌──────────────────────────────────────┐  │
│  │ 01. Editorial Hero    │   │ 02. Origin & Meaning (ድንቅነሽ / Lucy)  │  │
│  │ Thesis + Imagery      │──▶│ Ethiopic heritage + Storytelling why │  │
│  └───────────────────────┘   └──────────────────────────────────────┘  │
│                                                                        │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │ 03. Two Platforms (Minimalist Gateway Cards)                     │  │
│  │  • Kids' Edition ───────────▶ https://dinkinesh.netlify.app      │  │
│  │  • 3D Space Museum ─────────▶ https://dinkinesh-museum.netlify.app│ │
│  └──────────────────────────────────────────────────────────────────┘  │
│                                                                        │
│  ┌───────────────────────┐   ┌──────────────────────────────────────┐  │
│  │ 04. Exhibits & Open   │   │ 05. Team & Future Roadmap            │  │
│  │ Data Ledger (Moon/Mars│   │ Contributors, Roles & Quiet Footer   │  │
│  └───────────────────────┘   └──────────────────────────────────────┘  │
└────────────────────────────────────────────────────────────────────────┘
```

### Interactive Component & State Mapping

- **Navigation & Smooth Section Scroll**: Header links (`Story`, `Platforms`, `Exhibits`, `Team`) smoothly scroll to anchored sections; mobile viewports toggle a lightweight slide-down navigation drawer with accessible focus handling and `Escape` key dismissal.
- **External Platform Launchers**: Both platform cards and header action links open `https://dinkinesh.netlify.app` and `https://dinkinesh-museum.netlify.app` with safe `target="_blank" rel="noopener noreferrer"` attributes and clear hover underline/arrow motion.
- **Exhibits Ledger Filtering (Optional Minimal Filter)**: Quiet text-tab filter (`All Worlds` / `Moon` / `Mars`) allowing visitors to scan the planetary hardware index without cluttering the page.
- **Resilient Media Slots**: Generated editorial photography components include `onError` fallback rendering to a clean limestone architectural frame with caption text so layout integrity holds under any network state.
