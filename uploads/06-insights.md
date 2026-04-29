# 06 — Insights (`/insights`)

**Job:** Editorial blog/research index. Original benchmarks, operating notes, industry-specific analysis. Visitor filters by industry or content type.

**Voice rules:** No em-dashes. No dot separators in body prose. Numbers in DM Sans 600 tabular-nums. No mono fonts. No client names anywhere except where explicitly attributed within an article.

**Originality:** Build original sections. Reuse only nav, footer, design tokens.

---

## Sections

1. **Top Nav** — locked.

2. **Hero** — Single-column editorial, 800px max width.
   - Eyebrow: `INSIGHTS`
   - Headline (Cormorant 500): *Research, benchmarks, and operating notes from the field.*
   - Lead (max 64ch): Original research from Famaash engagements. Industry-specific operating benchmarks. Field notes from operators.
   - CTA: `Subscribe to The Famaash Quarterly →`

3. **Featured Article** — Editorial 5/7 split, large surface.
   - LEFT (cols 2-6): Featured article cover image (or abstract gold/forest illustration if no image), 4:5 aspect ratio, 1px hairline gold frame.
   - RIGHT (cols 7-12): Category tag (DM Sans 500 11px gold), Cormorant 500 36px headline *The 73% problem: how AI search is rewriting law firm marketing.* DM Sans excerpt (3-4 sentences, max 70ch). Author name + date (DM Sans 13px muted). `Read full article →` link.

4. **Filter Bar** — Sticky pill row. Two groups separated by hairline divider.
   - Industry: `ALL` · `PERSONAL INJURY` · `HEALTHCARE` · `FINANCIAL SERVICES` · `MANAGEMENT CONSULTING`
   - Type: `OPERATING NOTES` · `BENCHMARKS` · `RESEARCH`
   - Pills: squared 2px radius, 1px hairline border. Active: gold border + gold text. Multi-select within type, single-select within industry.

5. **Article Grid** — 3-column responsive grid (1 col mobile, 2 col tablet, 3 col desktop). Each card:
   - Category tag (DM Sans 500 gold, 11px)
   - Headline (Cormorant 500, 22px, max 8 words)
   - Excerpt (DM Sans 14px, 3 lines max, max 60ch)
   - Author + date (DM Sans 13px muted)
   - Card style: cream background, 1px hairline cream-line top only, 28px padding, hover lifts 2px and top hairline brightens to gold

   Sample articles (6):
   - PI · *The 73% problem: how AI search is rewriting law firm marketing.* / Field analysis of generative search citation share / Famaash Research Team / Apr 2026
   - Healthcare · *Why referral response time predicts patient lifetime value.* / 18-month study across 12 specialty groups / Famaash Healthcare Practice / Mar 2026
   - Financial Services · *Compliance content that doesn't read like compliance.* / FINRA-aware drafting frameworks / Famaash FS Practice / Mar 2026
   - Management Consulting · *The analyst-augmentation playbook.* / What 200 engagements taught us / Famaash Consulting Practice / Feb 2026
   - PI · *Cost per signed case, the only marketing metric that matters.* / Why CPL and CPC fail PI economics / Famaash Research Team / Feb 2026
   - Operating Notes · *What we tell every firm in week one.* / Notes from anchor-client onboardings / Founder's desk / Jan 2026

6. **Newsletter CTA** — Forest green banner. Eyebrow `THE FAMAASH QUARTERLY`. Headline *One email per quarter. Original benchmark data. Written for managing partners.* Email input + `Subscribe →` button (gold border, cream button). Trust line: *No spam. One quarterly email. Unsubscribe in one click.*

7. **Footer** — locked.

---

## Self-Review

1. ✅ No homepage sections reused
2. ✅ Filter bar dual-axis (industry + type), functional
3. ✅ Featured article in editorial 5/7 split, distinct from grid cards
4. ✅ DM Sans for all eyebrows, labels, dates. Cormorant only for headlines. No mono fonts.
5. ✅ Forest green + gold palette only
6. ✅ All page styles in `_shared.css` under `/* === PAGE: INSIGHTS === */`
