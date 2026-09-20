# Veriq reuse notes

Use these notes when a new client website is commissioned. Carry forward implementation patterns and acceptance checks; develop its visual design and content for that client. Nothing here is a starter package.

## Source and scope

- Repository: `VeriqDigital/sparkle-and-shine` only; no other repositories or employer assets inspected.
- Default branch verified on 2026-09-20 with `git ls-remote --symref origin HEAD`: **Main**.
- Source SHA: `2988c624ebd369fd84ddd9131f8d3fa48ecbbe5a` (remote HEAD, local HEAD, and local `origin/Main` matched). Working tree was clean before extraction.
- Read [instructions](../../AGENTS.md), [README](../../README.md), [scripts](../../package.json), configuration, public pages/components, local data, and Sanity infrastructure. `CLAUDE.md` points to `AGENTS.md`.
- This is source inspection, not a fresh browser/accessibility certification or delivery test. No live CMS, delivery, or deployed-site checks were performed. The only remote verification was GitHub branch metadata. Documentation links and change scope were checked locally; no executable examples are included.

## Verified boundaries

| Boundary | Implementation evidence |
| --- | --- |
| Fictional portfolio concept | [Footer](../../components/layout/Footer.tsx), [contact page](../../app/contact/page.tsx), and [site description](../../config/site.ts) disclose the fiction and fictional phone number. This is not evidence of an operating business. |
| Quote has no delivery | [LeadModal](../../components/layout/LeadModal.tsx), `handleSubmit`, prevents submission, advances steps, then resets the form and sets `complete`. Completion explicitly says nothing was sent, stored, or booked. No form API, email, analytics, persistence, or logging path was found. |
| Public content is local | [Services page](../../app/services/page.tsx), [ServicesSection](../../components/sections/ServicesSection.tsx), [FAQ](../../components/sections/FAQ.tsx), and shared components use local data/configuration plus component literals. |
| Sanity is disconnected from marketing | [Root layout](../../app/layout.tsx) does not mount `SanityLive`; public pages/components do not import `getServices` or `sanityFetch`. [Studio route](../../app/studio/%5B%5B...tool%5D%5D/page.tsx) still mounts `NextStudio`. Disconnected marketing does not mean Studio is offline. |
| Indexing restrictions are deliberate | [Layout metadata](../../app/layout.tsx) sets noindex/nofollow, including Googlebot noimageindex; [robots route](../../app/robots.ts) disallows `/`; [Next config](../../next.config.ts) applies `noindex, nofollow, noarchive, nosnippet, noimageindex` headers to all paths. No LocalBusiness JSON-LD source was found. |

## Small source map

### 1. Identity and content entry points

**Source:** [config/site.ts](../../config/site.ts), [data/faq.ts](../../data/faq.ts), [data/services.ts](../../data/services.ts).

**Does / useful when:** Shares contact links, navigation, communities, FAQ entries, and service records across a small site. Useful even without a CMS.

**Project-specific / limits:** All values and claims belong to this concept. Configuration is only partial: [Brand](../../components/ui/Brand.tsx), [Navbar](../../components/layout/Navbar.tsx), [Footer](../../components/layout/Footer.tsx), [Hero](../../components/sections/Hero.tsx), [LocationSection](../../components/sections/LocationSection.tsx), and page metadata contain literals. Changing `siteConfig` alone cannot rebrand the site.

**Before reuse:** Search pages/components/data/config for old identity, locations, phone formats, image paths, and claims; approve replacements with the client. Keep the organizational approach, not the content or logo.

### 2. Presentation data shared by multiple views

**Source:** `DemoService` in [data/services.ts](../../data/services.ts); consumers in [services page](../../app/services/page.tsx), [ServicesSection](../../components/sections/ServicesSection.tsx), [Footer](../../components/layout/Footer.tsx), and [LeadModal](../../components/layout/LeadModal.tsx).

**Does / useful when:** One service record supplies details, anchor IDs, footer links, and quote preselection. A presentation type gives a future data adapter a clear target.

**Project-specific / limits:** Cleaning fields and imagery are specific. Home assumes `services[0]` exists, has hardcoded featured copy, and uses a slug-keyed `serviceNotes` map; the services page says six services. The type alone does not make content interchangeable or runtime-valid.

**Before reuse:** Check unique stable slugs, ordering, every consumer, empty lists, missing images/alt text, and changed service counts. See [CMS recipe](recipes.md#2-a-cms-adapter-boundary-with-explicit-missing-fields).

### 3. Shared quote entry and keyboard interactions

**Source:** [LeadProvider](../../components/layout/LeadProvider.tsx), [useLeadModal](../../components/layout/useLeadModal.ts), [QuoteButton](../../components/ui/QuoteButton.tsx), [LeadModal](../../components/layout/LeadModal.tsx), [dialogFocus](../../components/layout/dialogFocus.ts), [Navbar](../../components/layout/Navbar.tsx). Supporting examples: [tabbed checklist](../../components/sections/CleaningChecklist.tsx), [FAQ buttons](../../components/sections/FAQ.tsx), and [CSS](../../app/globals.css).

**Does / useful when:** Multiple CTAs open one flow with optional service preselection. Native dialogs, focus cleanup, Escape handling, scroll locking, labeled fields, and step validation are useful interaction references. Tabs implement roving focus and arrow/Home/End keys; FAQ exposes expanded state.

**Project-specific / limits:** The flow, fields, styles, and 1100px menu breakpoint are specific. Focus containment uses a limited selector, not a general dialog library. FAQ IDs assume a single instance. There is no request state machine or delivery implementation.

**Before reuse:** Carry necessary hidden/focus/overflow CSS behavior, then test the new layout and controls with keyboard and mobile browsers. Check resize-to-desktop focus, repeated open/close, and changed content. Follow [quote recipe](recipes.md#1-one-quote-flow-many-entry-points).

### 4. Review indexing in three places

**Source:** [app/layout.tsx](../../app/layout.tsx), [app/robots.ts](../../app/robots.ts), [next.config.ts](../../next.config.ts); route metadata in [about](../../app/about/page.tsx), [services](../../app/services/page.tsx), and [contact](../../app/contact/page.tsx).

**Does / useful when:** Makes metadata, crawler rules, and response headers separate review points for demo, preview, and production.

**Project-specific / limits:** Restrictions here are unconditional, not an environment switch. No explicit canonical URL, `metadataBase`, sitemap, or redirect configuration exists. These controls are not access control. Nested metadata can replace inherited fields; inspect final output after edits.

**Before reuse:** Specify the next project's environment policy and verify HTML, headers, and robots output together. Keep this concept restricted. Use the [launch checklist](rebrand-and-launch-checklist.md) for future production decisions.

### 5. Schema, query, normalization, and rendering are distinct

**Source:** [service schema](../../sanity/schemaTypes/service.ts), [schema registration](../../sanity/schemaTypes/index.ts), [query/normalizer](../../sanity/lib/services.ts), [image builder](../../sanity/lib/image.ts), [live utilities](../../sanity/lib/live.ts), [client](../../sanity/lib/client.ts), [environment](../../sanity/env.ts), [Studio config](../../sanity.config.ts), [structure](../../sanity/structure.ts), and [CLI config](../../sanity.cli.ts).

**Does / useful when:** The unused query helper requests published services, rejects malformed records, and normalizes optional values. Useful as a boundary-review example if a client actually needs CMS editing.

**Project-specific / limits:** It returns `Service[]`, not `DemoService[]`; the connecting adapter does not exist. Errors and empty content both become `[]`; import-time environment failures are outside the fetch catch. Studio requires project/dataset variables; existing environment values must not become another client's defaults.

**Before reuse:** Complete the [field coverage recipe](recipes.md#2-a-cms-adapter-boundary-with-explicit-missing-fields), decide error/empty behavior and content refresh, and provision client-owned access. Do not reconnect this demo.

## Setup and rights

[package.json](../../package.json) provides `dev`, `build`, `start`, and `lint`; no test script. The source uses Next 16.2.9, React 19.2.4, Tailwind 4, strict [TypeScript](../../tsconfig.json), and [Next ESLint rules](../../eslint.config.mjs). Read the installed Next docs required by `AGENTS.md` before implementation; this review consulted the local metadata and robots guides. Dependency/configuration copying is not a reuse requirement.

Keep Veriq's source attribution. No repository-wide code license or image provenance/license record was found in tracked files; resolve rights before copying code or assets. Do not transfer identities, testimonials, claims, secrets, or concept photos into a generic starter. If reusing either bundled font, retain its author attribution and complete SIL OFL: [Manrope](../../app/fonts/Manrope-LICENSE.txt), [Plus Jakarta Sans](../../app/fonts/Plus-Jakarta-Sans-LICENSE.txt). The site's colors, compositions, logo, and hero are not kit components.
