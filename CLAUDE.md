# White Rabbit Accelerator — Project Context for Claude

## What This Project Is
A static HTML website for a rural small-town accelerator based in Ashland, Oregon (Rogue Valley). Stack: vanilla HTML/CSS/JS, Google Apps Script backend, Google Sheets for form data. No build step, no framework.

---

## Business Model — Key Decisions

### Equity Model: "Community Stake" (Participation Interest)
WRA does NOT take actual equity (LLC membership units or stock) at signing. Instead, founders grant a **Community Stake — a contractual right to 3% of the company's equity value**. No units or shares are issued at signing.

**Why:** Most cohort participants are LLCs. Actual equity ownership creates K-1 tax filing obligations for founders (they'd have to add WRA to their tax filings). Keeping it as a contractual right means WRA is a "service provider with a success fee" — no tax paperwork until a trigger event.

### Trigger Events (when the 3% converts to real money)
1. **Liquidity Event** — sale, merger, or IPO: WRA receives 3% of net proceeds.
2. **VC/C-Corp conversion** — company converts to raise institutional VC: WRA receives 3% of post-money shares.
3. **Revenue Milestone** — company hits $150k+ cumulative gross revenue within 36 months of Demo Day: WRA requests a flat **$10,000 Success Fee**, which fully extinguishes the agreement.

**Trigger priority clause:** The first Trigger Event to occur takes precedence and satisfies all obligations under the section. If multiple triggers occur simultaneously, WRA elects which applies. This prevents disputes when e.g. a founder hits $150k revenue and raises $50k grants in the same month.

**Why Revenue Milestone matters:** Most rural/local businesses (food, tourism, agriculture, services) will never sell or raise VC. Without this trigger, WRA would get $0 from a founder who builds a successful $150k/year local business unless they voluntarily buy back. This is the realistic exit for most cohort companies.

### Vesting
- **1.5%** vests at Demo Day completion.
- **1.5%** vests on the earlier of: (a) $5,000 cumulative gross revenue, or (b) $50,000+ external funding raised — within **24 months** of Demo Day.
- If neither milestone met in 24 months: second 1.5% is forfeited.

### Partial Buyback Option (Up to 2%)
Founder can repurchase up to **2% of the 3% Community Stake** within 2 years of Demo Day at fixed prices: **$10,000 in Year 1** (within 12 months of Demo Day), **$20,000 in Year 2** (12–24 months after Demo Day). The remaining **1% is retained by WRA permanently** — WRA must elect in writing to release it. This protects WRA's upside in companies that scale significantly.

**Why WRA keeps 1% permanently:** Prevents founders who succeed at scale from fully buying out WRA's interest. The tiered pricing also rewards early buybacks and discourages founders from waiting to see how things play out.

**Zombie protection:** If a startup fails or stagnates without a trigger event, WRA has no ongoing liability as an equity holder. The contract sits dormant. No dissolution paperwork needed.

### Mentor Compensation — Internal to WRA
Founders deal only with WRA. The internal split of any proceeds or buyback fees to mentors is managed solely by program directors based on hours logged + founder ratings. Founders are not exposed to mentor complexity.

**Internal Payout Policy (documented in mentor agreement):**
- All proceeds from the 3% Community Stake split **50% WRA / 50% qualifying Mentor Pool**
- A mentor **qualifies** by: (a) logging 20+ hours with that startup, AND (b) maintaining a minimum **3/5 founder rating**
- Distribution within the qualifying pool is proportional using the formula: **Hours × Rating**
- Example: 30 hrs × 4 rating = 120 pts; 20 hrs × 5 rating = 100 pts. Each mentor's share = their points ÷ total pool points.
- Mentors below the 20-hour or 3/5 rating threshold receive zero — not a partial amount.

**Hour minimum:** 20 hours per startup (≈ 1.5 hrs/week over 14 weeks). Lowered from 25 to avoid penalizing busy local professionals and prevent log-padding. Framed as a "Give First" reward, not a job metric.

**Confidential founder ratings:** Founder feedback/ratings are shared only with Program Directors — never with mentors. Protects honest feedback when mentors are prominent community figures (e.g. bank VPs, major business owners).

**No direct claim against founders:** Mentors have no direct legal claim against any founder or startup. The Community Stake is held solely by WRA. Both the founder agreement and mentor agreement state this explicitly. Closes the "designated mentors" legal exposure.

**Mentor pool rules:**
- Cap: ~10 mentors per cohort
- Minimum: 20 hours + 3/5 rating per startup for any equity eligibility
- Allocation formula: Hours × Rating (proportional)
- Vesting mirrors the startup's milestones

### Application Fee
- **$500 non-refundable** once spot is confirmed and onboarding begins.
- **Refundable** if founder is not accepted after the interview phase.
- Purpose: filters out wantrepreneurs; covers operations (Zoom, venue, coffee, shared resources).

### Why This Is NOT a SAFE
WRA's instrument resembles a SAFE (Simple Agreement for Future Equity) superficially but is meaningfully different — **do not call it a SAFE.**

| Feature | SAFE | WRA Community Stake |
|---|---|---|
| Consideration | Cash invested | Services rendered |
| Conversion trigger | Next priced equity round only | Sale, VC round, OR revenue milestone |
| Vesting | None | Yes (milestone-based) |
| Buyback option | No | Yes (up to 2% of 3%; $10k Y1 / $20k Y2; 1% non-buyable) |
| Revenue trigger | No | Yes ($150k cumulative) |
| Designed for | VC-track startups | Rural LLCs, most never raise VC |

**Why it matters:**
1. **Securities exposure** — SAFEs are regulated financial instruments with a precise legal definition. Misusing the term could attract unnecessary regulatory scrutiny in Oregon.
2. **Founder confusion** — Founders who know what a SAFE is will expect YC-standard terms (valuation cap, discount rate, next-round conversion). WRA's instrument doesn't work that way.

**Correct terminology:** "Community Stake," "participation interest," or "contractual right to equity value." Never "SAFE," "equity grant," or "phantom equity." The current agreement language is accurate — keep it as-is.

---

## Legal Considerations (Flagged — Action Required)
- **Attorney review required** before anyone signs: have an Oregon-licensed attorney review equity grant language, vesting triggers, and the Revenue Milestone Cash Right. Cost ~$500–2k.
- **Equity type**: The "Community Stake" / participation interest model avoids K-1s, but the exact instrument type should be confirmed with counsel.
- **Cap table tool**: Consider Carta (free under $1M) as a program resource for founders who do eventually take on investors.

---

## Website Files Reference
| File | Purpose |
|------|---------|
| `index.html` | Main landing page — program overview, phases, resources |
| `founder-agreement.html` | Founder participation agreement (equity terms live here) |
| `mentor-agreement.html` | Mentor participation agreement |
| `founder-application.html` | Cohort application form |
| `founder-onepager.html` | Demo Day leave-behind builder |
| `business-baseline.html` | Week 2–3 baseline measurement form |
| `email-sequence.html` | 20 email templates |
| `demoday-runofshow.html` | Demo Day event script & logistics |
| `checklist.html` | 80+ task master checklist |
| `js/form-submission.js` | All form submissions → Google Apps Script → Google Sheets |

---

## Program Timeline
- Applications open: April 7, 2026
- Cohort start: May 5, 2026
- Program length: **14 weeks** (not 16 — May 5 to Aug 8 is exactly 14 weeks; all agreement language updated to reflect this)
- Demo Day: August 8, 2026 (Saturday)
- Post-cohort quarterly meetings: Nov 2026, Feb 2027, May 2027, Aug 2027
- Vesting milestone window: 24 months post-Demo Day (by August 2028)
- Buyback / Revenue Milestone window: 2 years / 36 months post-Demo Day respectively (by Aug 2028 / Aug 2029)
