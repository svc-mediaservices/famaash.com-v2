# 21 — Compliance Detail & Legal Pages

Six standalone editorial pages. All use the same locked nav, footer, and editorial layout. Minimal hero, document-style body.

**Voice rules:** No em-dashes. No dot separators in body prose. DM Sans for everything except headlines. Forest green + gold. No mono fonts.

**Originality:** Build originals. Reuse only nav, footer, design tokens.

---

## Shared Page Pattern (applies to all 6 below)

1. **Top Nav** — locked.
2. **Hero** — single column, 800px max width, deliberately spare. Eyebrow + Cormorant 500 H1 + lead + last-updated date right-aligned (DM Sans 500, 11px tracking).
3. **Body** — long-form editorial, 720px max width, Cormorant 500 H2s, DM Sans body, hairline gold rules between major sections, sticky table of contents on desktop left rail (DM Sans 500, 11px tracking, IntersectionObserver-driven active state).
4. **Footer** — locked.

---

## 21a — SOC 2 (`/compliance/soc2`)

- Eyebrow: `SOC 2 TYPE II`
- Headline: *Our trust posture, in detail.*
- Status banner (cream-2 strip below hero): `STATUS · IN PROGRESS · EXPECTED Q3 2026`
- Sections: Scope of audit, controls mapped, audit firm, readiness letter (downloadable on request), timeline to certification, what changes for clients on certification.
- CTA banner: `Request the readiness letter →` opens contact form pre-filled

## 21b — HIPAA (`/compliance/hipaa`)

- Eyebrow: `HIPAA POSTURE`
- Headline: *Built around HIPAA. Not retrofitted.*
- Sections: BAA template overview, PHI handling architecture (diagram showing segmented data flows), audit logging (7-year retention), incident response (60-day notification SLA), state privacy law overlays (CMIA, SHIELD, HB 300).
- CTA banner: `Request the BAA template →`

## 21c — Privacy (`/privacy`)

- Eyebrow: `PRIVACY POLICY`
- Headline: *How we handle your data.*
- Standard privacy policy in editorial layout. Sections: Information we collect, How we use it, Sharing and disclosure, Cookies and tracking, Your rights (CCPA, GDPR), Data retention, Security measures, Changes to this policy, Contact.

## 21d — Terms (`/terms`)

- Eyebrow: `TERMS OF SERVICE`
- Headline: *The terms you agree to by using this site.*
- Standard terms. Sections: Acceptance of terms, Use of the site, Intellectual property, Disclaimers, Limitation of liability, Indemnification, Governing law, Changes to terms, Contact.

## 21e — MSA (`/msa`)

- Eyebrow: `MASTER SERVICE AGREEMENT`
- Headline: *The framework that governs every Famaash engagement.*
- Sections: Scope of services, Service-level commitments (5 SLAs), Service credits, UPL indemnification (legal), BAA addendum (healthcare), FINRA addendum (financial), Confidentiality, IP ownership, Term and termination, Pricing, Change orders, Dispute resolution.
- CTA banner: `Request a redlined version →`

## 21f — BAA (`/baa`)

- Eyebrow: `BUSINESS ASSOCIATE AGREEMENT`
- Headline: *Executed before any PHI flows.*
- Sections: HIPAA-required provisions, Permitted uses and disclosures, Safeguards, Subcontractors, Breach notification (60-day SLA), Term and termination, Effect of termination on PHI.
- CTA banner: `Request a redlined version →`

---

## Self-Review (all 6)

1. ✅ Same locked nav and footer
2. ✅ Sticky TOC on desktop left rail
3. ✅ Editorial document style, NOT a marketing layout
4. ✅ DM Sans for everything except headlines and document H2s. No mono fonts.
5. ✅ Forest green + gold palette only
6. ✅ All styles in `_shared.css` under `/* === PAGE: COMPLIANCE SOC2 === */`, `/* === PAGE: COMPLIANCE HIPAA === */`, `/* === PAGE: PRIVACY === */`, `/* === PAGE: TERMS === */`, `/* === PAGE: MSA === */`, `/* === PAGE: BAA === */`
