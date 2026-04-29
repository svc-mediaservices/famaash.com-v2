# 03 — About (`/about`)

**Job:** Convince a diligence-grade visitor (managing partner, COO, procurement) that Famaash has the operating depth, leadership credentials, and 13-year provenance to be trusted as an operating partner across all four industries.

**Voice rules:** No em-dashes. No dot separators in body prose. Numbers in DM Sans 600 tabular-nums. No mono fonts. Named clients only in Section 7 (Clients We Serve), since this is the diligence surface where naming is appropriate.

**Originality:** Build original sections. Reuse only nav, footer, design tokens.

---

## Sections

1. **Top Nav** — locked.

2. **Hero** — 5/7 split.
   - LEFT (cols 2-6): Eyebrow `THIRTEEN YEARS, FOUR INDUSTRIES`. Headline (Cormorant 500, optical break) *The operating partner built for operators.* CTA: `Book your Audit`.
   - RIGHT (cols 7-12): Long-form opening paragraph. Cormorant 500 lead sentence: *Famaash was founded in 2013 by operators who'd run growth at McKinsey, BCG, and three of the four Big Four advisory practices.* Then DM Sans body: 200 words covering origin as B2B marketing firm for enterprise clients, expansion into talent and engineering when clients said the problem was operations underneath, today positioned as operating partner for plaintiff PI law firms with practices in healthcare, financial services, and management consulting.

3. **Founding Chronology** — Vertical 5-phase timeline (NOT cards). Each row: Roman numeral (Cormorant 500 gold, 48px), phase name + years, body paragraph, outcome line right-aligned. Hairline cream-line dividers.
   - I. 2013–2015 / Origin / Founded as a B2B marketing firm serving enterprise consulting and Big Four practices. First client was a Tier-1 strategy firm. / *The first invoice paid for the second hire.*
   - II. 2015–2018 / Engineering arrives / Added engineering practice when a healthcare client asked us to build the product, not just the campaign. First production system shipped to a regional health system. / *Marketing campaigns turned into operating systems.*
   - III. 2018–2021 / Talent practice opens / Launched talent practice (EOR staffing) when financial services clients asked for embedded teams. / *We stopped competing with agencies, started competing with consulting firms.*
   - IV. 2021–2024 / The PI specialization / Acquired anchor PI client. Built UPL-safe AI intake from first principles. Quarterly CPSC reporting becomes the standard practice deliverable. / *We found the industry that needed every practice we run.*
   - V. 2024–present / The operating partner model / Reorganized around four industry practices. Cross-trained every practitioner on industry-specific compliance regimes. SOC 2 Type II underway. / *Operating partner became the only label that fit.*

4. **Leadership** — 4-card editorial grid. Each card: square photo placeholder (or initials avatar in cream), name (Cormorant 500), role (DM Sans 500), prior credentials list (DM Sans 13px), one paragraph bio. Cards have hairline cream-line top only, no full borders.
   - Founder/CEO — McKinsey + BCG, 14 years operating
   - Head of Practice (Personal Injury) — AmLaw 100 firm, ABA-track
   - Head of Practice (Healthcare/Financial Services/Consulting) — Big Four advisory
   - Head of Engineering & AI — Top-tier tech (Stripe, Anthropic, Google background)

5. **By the Numbers** — Full-bleed dark `var(--ink)`. Eyebrow centered `BY THE NUMBERS`. 5 stat tiles in a row. Each tile: number (DM Sans 600, ~64px), label (DM Sans 500, 11px, 0.18em tracking, gold), sub-line (DM Sans 13px muted).
   - 13 / YEARS OPERATING / Same operators since founding
   - 200+ / ENGAGEMENTS / Across four industries
   - $1.4B / CLIENT REVENUE INFLUENCED / Across all engagements
   - 4 / INDUSTRY PRACTICES / Personal Injury, Healthcare, Financial Services, Management Consulting
   - 0 / UPL INCIDENTS / Since the day we started

6. **Compliance Posture** — Editorial 4-card grid on cream. Hairline cream-line top only.
   - Legal / ABA Op. 512, UPL indemnification, attorney review built into every legal MSA
   - Healthcare / HIPAA, BAA on request, SOC 2 Type II underway, PHI segmented from non-PHI
   - Financial / FINRA-aware content review, SOC 2, audit trail per piece, regulatory retention
   - Cross-industry / ISO 27001 aligned, $5M cyber liability + $3M E&O, SSO + MFA on every internal system

7. **Clients We Serve** — Two-column layout on cream. Headline *A portfolio that earns its restraint.* Sub *Most of our clients are confidential by contract. Below is who has agreed to be named, alongside tier descriptors of those who have not.*
   - LEFT (Named, with permission): Sarofiem & Antoun · Vasquez Injury Law · Delgado Trial Group · Brennan & Hayes · Patel & Garcia · Meridian Health Partners · Continuum Specialty Group · Hartwell Capital Partners · Coastal Federal
   - RIGHT (Anonymized tier descriptors): Two Tier-1 strategy firms · Three Big Four advisory practices · A 220-person specialty consultancy · Two AmLaw 100 firms · A multi-family office with $940M AUM · A four-hospital regional health system · A regional telehealth platform across six states

8. **Final CTA** — Forest green banner. Eyebrow `WORK WITH FAMAASH`. Headline *Find out what an operating partner looks like for your firm.* CTA: `Book your Audit` and `See our approach` (ghost).

9. **Footer** — locked.

---

## Self-Review

1. ✅ No homepage sections reused (no LIVE INTAKE dashboard, no testimonial stack, no SLA tiles, no vendor diagram)
2. ✅ Founding Chronology uses 5 distinct phases with outcome lines (not generic timeline)
3. ✅ Named clients appear ONLY in Section 7 (Clients We Serve) — this is the explicit naming surface
4. ✅ DM Sans for all eyebrows, labels, numbers. Cormorant only for headlines and prose. No mono fonts.
5. ✅ Forest green + gold palette only
6. ✅ All page styles in `_shared.css` under `/* === PAGE: ABOUT === */`
