# 07 — Compliance (`/compliance`)

**Job:** Diligence-grade trust posture page. Show certifications, per-industry compliance regimes, document library.

**Voice rules:** No em-dashes. No dot separators in body prose. Numbers in DM Sans 600 tabular-nums. No mono fonts. No client names.

**Originality:** Build original sections. Reuse only nav, footer, design tokens.

---

## Sections

1. **Top Nav** — locked.

2. **Hero** — Single-column editorial, 800px max.
   - Eyebrow: `COMPLIANCE & TRUST`
   - Headline (Cormorant 500): *Built around the rules that govern legal, medical, and financial practice.*
   - Lead (max 64ch): Compliance is not a checklist. It is the architecture. Below is our current posture, certifications in flight, and how we handle data.
   - Hairline gold rule
   - 3-up stat strip: `0` Incidents since founding · `4` Industry compliance regimes · `7 yrs` Audit log retention
   - CTA: `Request the trust pack →` (.btn-primary, opens contact form pre-filled)

3. **Posture Tiles** — Full-bleed dark `var(--ink)`. Eyebrow centered `CURRENT POSTURE`. 5-tile grid (1 row desktop, 2x3 mobile). Each tile:
   - Status indicator (gold dot for active, hairline ring for in-progress)
   - Cert/regime name (Cormorant 500, 22px)
   - Status (DM Sans 500, 11px gold)
   - Detail line (DM Sans 13px muted)

   Tiles:
   - SOC 2 Type II / In progress / Audit firm engaged Q1 2026, expected Q3 2026
   - HIPAA / Active since founding / BAA executed before any data flows
   - ABA Op. 512 / Compliant / UPL indemnification in every legal MSA
   - ISO 27001 / Aligned / Controls mapped, certification roadmap 2027
   - Cyber + E&O / Active / $5M cyber liability, $3M E&O, renewed annually

4. **Per-Industry Compliance** — 4-card grid on cream. Hairline cream-line top only.
   - **Legal** — ABA Op. 512, UPL indemnification, attorney review built into every workflow, MSA template available on request
   - **Healthcare** — HIPAA, BAA executed before data flows, PHI handling segmented from non-PHI workflows, audit log retained 7 years
   - **Financial Services** — FINRA-aware content review, SOC 2, audit trail per advisor-facing piece, retention compliant with regulatory requirements
   - **Cross-Industry** — ISO 27001 aligned, cyber liability + E&O, SSO + MFA on every internal system, vendor risk assessments per subprocessor

5. **Document Library** — 5/7 split. LEFT eyebrow `DOCUMENT LIBRARY` + headline *Available on request, signed within 48 hours.* RIGHT 8-row list. Each row: document name (DM Sans 500) + one-line description (DM Sans 13px muted) + `Request copy →` link (gold). Hairline cream-line dividers.
   - MSA Template — Master service agreement (legal practices)
   - BAA Template — Business associate agreement (healthcare)
   - DPA — Data processing agreement
   - Subprocessor List — Current vendors with data access
   - SOC 2 Readiness Letter — From audit firm, available NDA-first
   - Cyber + E&O Certificates — Insurance certificates, current
   - Privacy Policy — Public, see /privacy
   - Terms of Service — Public, see /terms

6. **Data Handling** — 3-column horizontal layout. Headline *How your data flows through Famaash.*
   - **Ingress** / Encrypted in transit (TLS 1.3) / Authenticated at every boundary / Logged with timestamp and source
   - **Storage** / Encrypted at rest (AES-256) / Segmented by client tenant / Retained per regulatory requirements
   - **Access** / SSO + MFA on every system / Role-based, least-privilege / Quarterly access review

7. **Final CTA** — Forest green banner. Eyebrow `NEED SOMETHING WE HAVEN'T PUBLISHED?` Headline *Email compliance@famaash.com.* Sub *Most requests answered same-day. NDA-first when needed.* CTA: `Email compliance team` and `Book your Audit` (ghost).

8. **Footer** — locked.

---

## Self-Review

1. ✅ No homepage sections reused
2. ✅ Posture tiles use status indicators (gold dot vs hairline ring), not generic checkmarks
3. ✅ Document Library is editorial list, not download buttons
4. ✅ Zero named clients
5. ✅ DM Sans for everything except headlines. No mono fonts.
6. ✅ Forest green + gold palette only
7. ✅ All page styles in `_shared.css` under `/* === PAGE: COMPLIANCE === */`
