# 08 — Utility Pages

Three utility pages combined. Contact is the elaborate one.

**Voice rules (all 3):** No em-dashes. No dot separators in body prose. DM Sans for everything except headlines. Forest green + gold. No mono fonts. No client names.

**Originality:** Build originals. Reuse only nav, footer, design tokens.

---

## 08a — Contact (`/contact`) — ELABORATE

### Sections

1. **Top Nav** — locked.

2. **Hero** — 12-column. 5/7 split.
   - LEFT (cols 2-6): Eyebrow `GET IN TOUCH`. Headline (Cormorant 500, optical break) *Tell us what you're trying to solve.* Lead (max 60ch): For audits, book directly. For everything else, this form goes to a real person. Most messages are answered within one business day, by name.
   - RIGHT (cols 7-12): Contact details block, editorial styled.
     - Eyebrow `DIRECT LINES`
     - 4 rows separated by hairline cream-line dividers. Each row: label (DM Sans 500, 11px tracking) + value (DM Sans 600, 16px) + sub-line (DM Sans 13px muted).
       - NEW BUSINESS / hello@famaash.com / Routed to a Famaash partner within 4 business hours
       - COMPLIANCE / compliance@famaash.com / Same-day response, NDA-first when needed
       - PRESS / press@famaash.com / Routed to communications lead
       - PHONE / (XXX) XXX-XXXX / Mon-Fri, 9am-6pm ET
     - Office address block at bottom (Cormorant 500 16px firm name + DM Sans address):
       *Famaash LLC*
       Somerset, NJ
       United States

3. **Contact Form** — Full-bleed cream-2. Centered, 720px max width container.
   - Eyebrow centered: `SEND A MESSAGE`
   - Headline (Cormorant 500): *Real person on the other end. Always.*
   - Sub: One business day response is our floor, not our ceiling. Most messages are answered same-day.

   **Form fields** (3-column grid, stacks to 1 col mobile):
   - Row 1: Full Name * (text) | Work Email * (email, corporate domain validation per audit page) | Phone (tel, optional)
   - Row 2: Firm or Company * (text) | Industry (dropdown: Personal Injury Law, Healthcare, Financial Services, Management Consulting, Other) | Role (dropdown: Managing Partner, Partner, COO, CMO, Operations Lead, Marketing Lead, Other)
   - Row 3 (full width): Reason for contact (dropdown):
     - I want an audit (links to `/audit` instead of submitting form)
     - I'm exploring a partnership
     - I'm a journalist
     - I need compliance documents (BAA, MSA, DPA)
     - I'm interested in joining Famaash
     - Other
   - Row 4 (full width): Message (textarea, 6 rows, 1000 char limit, DM Sans, hairline gold border on focus)
   - Row 5: Two-column. LEFT: NDA preference checkbox (DM Sans 14px) — *I want this conversation under NDA from the start. Send me the mutual NDA template.* RIGHT: How did you hear about us? (dropdown: Referral, Search, Industry conference, Article/podcast, Direct outreach, Other)
   - Submit button row: `Send message →` (.btn-primary forest green) + supporting line right (DM Sans 13px muted): *We respond by name within one business day.*

   **Field styling (locked):**
   - Underline-style inputs (NOT boxed). Hairline cream-line bottom border.
   - On focus: forest green underline, no shadow, no glow
   - Labels above each field, DM Sans 500, 11px, 0.18em tracking, uppercase
   - Required field asterisks in gold
   - Validation: inline error in DM Sans 13px below field, red text only for blocking errors
   - Corporate email validation: same blocklist as audit page

4. **What Happens Next** — On cream. 3-column horizontal layout. Headline *What happens after you hit send.*
   - **Within 4 hours** / Your message is routed by reason / A named operator picks it up
   - **Within 1 business day** / You hear back by name / Not a generic auto-reply
   - **Within 1 week** / If we agreed to it on the first email / The deliverable, the call, or the document

5. **Office Hours & Response Times** — Full-bleed dark `var(--ink)`. 3-up tile row.
   - 9-6 ET / OFFICE HOURS / Monday through Friday
   - <1 day / RESPONSE FLOOR / By name, never auto-reply
   - 4 hrs / NEW BUSINESS SLA / Routed to a partner

6. **Final CTA** — Forest green banner. Eyebrow `OR SKIP THE FORM`. Headline *If you already know you want an audit, book it.* CTA: `Book your Audit` (cream button, gold border).

7. **Footer** — locked.

---

## 08b — Thank You (`/thank-you`)

`<meta name="robots" content="noindex">`

### Sections

1. **Top Nav** — locked.

2. **Hero** — Centered, atmospheric. Background `var(--cream)` with subtle gold radial top-center. 200px top padding.
   - Ornamental cartouche (4px gold dot + 40px hairlines L/R, 0.4 opacity)
   - Eyebrow centered: `RECEIVED`
   - Headline (Cormorant 500, optical break): *Thank you. We'll be in touch.*
   - Sub (max 64ch, centered): We've received your request. A named operator will reach out within one business day. Most audits ship a printable report within seven days of the kickoff call.
   - 3 cards (cream, hairline cream-line top only, 32px padding):
     - WHAT TO EXPECT / A 30-minute call to confirm scope
     - WHO YOU'LL HEAR FROM / A named operator, not a sales rep
     - WHEN / Within one business day
   - CTA row: `Return home` (.btn-ghost) + `Read recent insights →` (gold link)

3. **Footer** — locked.

---

## 08c — 404 (`/404`)

`<meta name="robots" content="noindex">`

### Sections

1. **Top Nav** — locked.

2. **Hero** — Centered, 200px top padding.
   - Eyebrow centered: `404 · NOT FOUND`
   - Headline (Cormorant 500): *That page doesn't exist. Or it never did.*
   - Sub (max 64ch): We may have moved it. We may have retired it. Or you may have followed a link to nowhere.
   - 3 quick-link cards (hairline cream-line top only):
     - Return home
     - Book your Audit
     - Read recent insights
   - Below cards (DM Sans 14px muted, max 60ch, centered): *If you got here from a Famaash email or document, please email compliance@famaash.com so we can fix the link.*

3. **Footer** — locked.

---

## Self-Review

1. ✅ Contact form is comprehensive (5 rows, NDA toggle, source dropdown, corporate email validation)
2. ✅ All 3 pages use locked nav and footer
3. ✅ Thank-you and 404 are noindex
4. ✅ DM Sans for everything except headlines. No mono fonts.
5. ✅ Forest green + gold palette only
6. ✅ All page styles in `_shared.css` under `/* === PAGE: CONTACT === */`, `/* === PAGE: THANK YOU === */`, `/* === PAGE: 404 === */`
