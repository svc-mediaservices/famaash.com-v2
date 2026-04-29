# 04 — Our Approach (`/approach`)

**Job:** Convince a diligence-grade visitor that Famaash's methodology, principles, and accountability model differ from agencies and consulting firms in ways that matter.

**Voice rules:** No em-dashes. No dot separators in body prose. Numbers in DM Sans 600 tabular-nums. No mono fonts. No client names anywhere.

**Originality:** Build original sections. Reuse only nav, footer, design tokens.

---

## Sections

1. **Top Nav** — locked.

2. **Hero** — Single-column editorial, 800px max width, deliberately spare.
   - Eyebrow: `OUR APPROACH`
   - Headline (Cormorant 500, optical break): *Operating partner, not vendor.*
   - Lead (max 64ch): We don't sell features. We sell outcomes measured in your systems, not ours. We don't onboard everyone. We don't compete on price. We compete on cost-per-outcome, and we report it quarterly.
   - Hairline gold rule below lead
   - 3-up stat strip (no cards, hairline cream-line dividers): `13 yrs` Operating · `4` Industry practices · `200+` Engagements
   - CTA: `Book your Audit`

3. **Five Principles** — 5-row editorial chronology (NOT cards). Each row: large Roman numeral (Cormorant 500 gold, 56px), principle title (Cormorant 500 28px), body paragraph (DM Sans 400, max 70ch). Hairline cream-line dividers.
   - I. We are selective by design / We onboard a limited number of clients per quarter. We turn down firms who want a vendor instead of a partner. We turn down firms whose compliance posture doesn't match ours. We turn down firms whose growth ambitions are smaller than our floor.
   - II. We measure ourselves by your numbers / Cost per signed case. Cost per booked patient. Cost per AUM dollar. Cost per pursuit won. We report quarterly, in your systems, against your benchmarks. If we can't move the metric, we tell you.
   - III. We codify our promises / Five SLAs in every MSA. Service credits issued automatically when missed, no email needed. UPL indemnification for legal practices. BAA executed before any data flows for healthcare. SOC 2 Type II underway.
   - IV. Every engagement gets a named operator / The same person, every quarter, every call, every report. Not a "team." A person. Their name is in your contract.
   - V. We don't compete on price / We are not the cheapest. We are the most capable. If price is your decision criterion, we are the wrong choice, and we'll tell you that on the audit call.

4. **The Engagement Model** — Full-bleed dark `var(--ink)`. Eyebrow centered `THE ENGAGEMENT MODEL`. Headline *The first ninety days. Without surprises.* Lead about most agency onboardings dragging for months while Famaash hits live operations by Day 30 and quarterly reporting by Day 90.
   4-phase editorial chronology (I. II. III. IV.) with phase numerals, days range, title, deliverables list (3 per phase), outcome line. Generic enough to apply across industries (not PI-specific).
   - I. Days 1–7 / The Audit / Audit of operational baseline, cost-per-outcome modeled, vendor consolidation map drafted / *You see exactly what's broken before you commit.*
   - II. Days 8–30 / Foundations / Tracking installed, integrations live, first staff placements certified and onboarded, brand and content baseline locked / *The plumbing is in. Things are quiet for the right reason.*
   - III. Days 31–60 / Activation / Live operations, daily review for first thirty days, paid spend optimized to outcome metric / *The dashboard is alive. You finally see your firm.*
   - IV. Days 61–90 / Compounding / First quarterly cost-per-outcome report shipped, replacement bench fully ready, attribution model stabilized / *The firm runs lighter than it has in years.*

5. **The Compliance Spine** — Editorial 4-card grid on cream. Hairline cream-line top only.
   - Legal Practice / ABA Op. 512 / UPL indemnification / Attorney review built in
   - Healthcare / HIPAA / BAA on request / SOC 2 Type II underway / PHI segmentation
   - Financial Services / FINRA-aware content / SOC 2 / Audit trail per piece
   - Cross-Industry / ISO 27001 aligned / $5M cyber + $3M E&O / SSO + MFA / Quarterly subprocessor review

6. **Why Firms Switch** — 5/7 split. LEFT pull-quote (Cormorant 500 gold, max 24ch): *Most firms come to Famaash after the third agency disappointment.* RIGHT 4-paragraph editorial: the agency cycle (12-month contract, vague reporting, partner can't see what was actually delivered), the consulting cycle (slide decks, quarterly check-ins, no operational depth), why operating partner is the third option, what makes the model work.

7. **Final CTA** — Forest green banner. Eyebrow `THE FIT CONVERSATION`. Headline *See if Famaash is right for your firm.* CTA: `Book your Audit` and `Read case studies` (ghost). Trust strip: `30-MINUTE CALL · NDA-FIRST · NO COMMITMENT`.

8. **Footer** — locked.

---

## Self-Review

1. ✅ No homepage sections reused
2. ✅ Five Principles distinct from any homepage section
3. ✅ Engagement Model is generic across all 4 industries (not PI-specific)
4. ✅ Zero named clients on this page
5. ✅ DM Sans for all eyebrows, labels, numbers. Cormorant only for headlines and prose. No mono fonts.
6. ✅ Forest green + gold palette only
7. ✅ All page styles in `_shared.css` under `/* === PAGE: APPROACH === */`
