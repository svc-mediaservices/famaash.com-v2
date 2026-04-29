# 05 — Case Studies (`/case-studies`)

**Job:** Editorial index of cross-industry case studies. Visitor filters by industry to find relevant proof.

**Voice rules:** No em-dashes. No dot separators in body prose. Numbers in DM Sans 600 tabular-nums. No mono fonts. Named clients permitted on this page (this is the explicit case-study surface).

**Originality:** Build original sections. Reuse only nav, footer, design tokens.

---

## Sections

1. **Top Nav** — locked.

2. **Hero** — Single-column editorial, 800px max width.
   - Eyebrow: `CASE STUDIES`
   - Headline (Cormorant 500): *Outcomes measured in their own systems, not ours.*
   - Lead (max 64ch): Selected engagements across four industries. Numbers from client systems, attribution audited quarterly.
   - Hairline gold rule
   - 3-up stat strip: `5` Featured engagements · `4` Industries · `200+` Total engagements to date

3. **Industry Filter Bar** — Sticky horizontal pill row directly below hero. DM Sans 500, 11px, 0.18em tracking, uppercase. Squared 2px radius pills with 1px hairline border.
   - Pills: `ALL` · `PERSONAL INJURY` · `HEALTHCARE` · `FINANCIAL SERVICES` · `MANAGEMENT CONSULTING`
   - Active state: gold border, gold text
   - Hover: gold border brightens, 2px lift
   - Filter behavior: client-side, fades non-matching cards to opacity 0 then removes from grid

4. **Case Study Grid** — 3-column responsive grid (1 col mobile, 2 col tablet, 3 col desktop). Each card:
   - Top: industry tag (DM Sans 500, gold, 11px)
   - Headline (Cormorant 500, 24px, max 6 words)
   - One-line outcome lead (DM Sans 14px)
   - Key metric (DM Sans 600, 36px) + label (DM Sans 500, 11px)
   - Client name + city (DM Sans 13px muted)
   - `Read case study →` (DM Sans 500, gold, hairline underline)
   - Card style: cream background, 1px gold gilt top, 1px hairline border on remaining sides, 32px padding, hover lifts 2px

   Cards:
   - **Personal Injury · Sarofiem & Antoun · Jersey City NJ** — *How a 3-attorney NJ firm became #1 in AI search.* Metric: +47% RETAINERS Q-OVER-Q
   - **Personal Injury · Vasquez Injury Law · Clifton NJ** — *From $9,200 CPSC to $3,140 in two quarters.* Metric: 66% CPSC REDUCTION
   - **Healthcare · Meridian Health Partners · NJ/PA** — *Cutting referral response from 14 hours to 22 minutes.* Metric: $11M ATTRIBUTED REVENUE / Q
   - **Financial Services · Hartwell Capital Partners · Greenwich CT** — *$340M new AUM in twelve months.* Metric: 4× ADVISOR CONVERSION
   - **Management Consulting · Two Tier-1 strategy firms · Anonymized** — *Cutting analyst hours 40% on partner-led case teams.* Metric: 200+ ENGAGEMENTS ANALYZED

5. **Coverage Note** — Single-line editorial below grid (DM Sans, max 70ch, centered, muted). *Five featured. Most engagements remain confidential by contract. We can describe scope and outcomes under NDA on the audit call.*

6. **Final CTA** — Forest green banner. Eyebrow `WORK WITH FAMAASH`. Headline *See what Famaash would build for you.* CTA: `Book your Audit` and `See our approach` (ghost).

7. **Footer** — locked.

---

## Self-Review

1. ✅ No homepage sections reused
2. ✅ Filter bar functional, client-side filtering
3. ✅ Card style consistent with design system (gold gilt top, hairline border, hover lift)
4. ✅ Named clients permitted (this is the case study surface)
5. ✅ DM Sans for all eyebrows, labels, numbers. Cormorant only for headlines. No mono fonts.
6. ✅ Forest green + gold palette only
7. ✅ All page styles in `_shared.css` under `/* === PAGE: CASE STUDIES === */`
