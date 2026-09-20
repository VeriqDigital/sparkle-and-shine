# Two implementation recipes

These are source-grounded implementation notes, not executable integrations. Apply only to a commissioned project's needs after reviewing rights and its installed framework documentation. Keep the new client's design independent.

## 1. One quote flow, many entry points

**Existing chain:** [root layout](../../app/layout.tsx) → [LeadProvider](../../components/layout/LeadProvider.tsx) / [useLeadModal](../../components/layout/useLeadModal.ts) → [QuoteButton](../../components/ui/QuoteButton.tsx) → [LeadModal](../../components/layout/LeadModal.tsx).

1. Mount one provider around the intended entry points. It holds only a nullable request with optional service slug; a request mounts one modal, and closing unmounts it. The hook detects a missing provider.
2. Pass the stable service slug from a CTA; the source [services page](../../app/services/page.tsx) passes `s.slug`, matching the modal select's option values. Generic CTAs omit it. Validate this relationship when changing the service list.
3. Preserve the dialog lifecycle: `showModal`, heading focus, step-change focus/scroll, Escape, saved body overflow, and opener focus restoration. Review [dialogFocus](../../components/layout/dialogFocus.ts) and the `[hidden]`, focus, dialog overflow, and reduced-motion rules in [globals.css](../../app/globals.css). Extract behavior with the dependencies it needs, not the site's visual theme.
4. Inactive fieldsets remain mounted but are hidden and disabled. Native validation applies to the current step and DOM values survive Back. Closing unmounts the form; finishing the demo resets it and shows explicit non-delivery text.

**Missing production contract:** `handleSubmit` is not a delivery stub that can safely gain one fetch call. `FormData(form)` excludes disabled controls: at the final step, earlier answers would be absent. First design complete answer collection (for example, explicit per-step state), validate the full payload on the server, and define pending, error, retry, duplicate-submission, and success behavior. These do not exist here. Only reset production answers after the agreed server success condition; distinguish an accepted inquiry from an actual booking.

**Acceptance:** Open from generic and service CTAs; complete/backtrack all steps; switch contact method; close via Escape/button/backdrop; reopen; verify focus and scroll restoration. For real delivery, prove every step's value reaches the authorized test destination and failures retain input. No such integration was executed for this kit.

## 2. A CMS adapter boundary with explicit missing fields

**Existing pieces:** [schema](../../sanity/schemaTypes/service.ts) → `SERVICES_QUERY` / `normalizeService` / `getServices` in [sanity/lib/services.ts](../../sanity/lib/services.ts). The chain stops at `Service[]`. Public rendering separately uses `DemoService[]` from [data/services.ts](../../data/services.ts). There is no connecting adapter.

| Presentation requirement | Existing CMS coverage | Next implementation step, if needed |
| --- | --- | --- |
| `slug`, `title` | Schema requires both; query flattens `slug.current`; normalizer rejects blank/non-string values. | Validate unique usable slugs for anchors and quote options. |
| `description` | Optional schema field; query includes it; normalizer can return null. | Decide required content, approved fallback, or omitted rendering; the presentation type currently requires a string. |
| `image` | Optional hotspot image; normalized to asset-bearing source or null. | Use [urlFor](../../sanity/lib/image.ts) to produce the renderable URL; decide crop and missing-image behavior. Current remote config allows Sanity CDN; scope hosts to the new project as needed. |
| `imageAlt` | No schema field or explicit coverage. | Add an editorial source and query/adapter mapping; distinguish descriptive and decorative uses. |
| `shortTitle`, `bestFor`, `scope`, `note` | Absent from schema and query. | Add only fields the new design needs, or explicitly retain client-approved local content. Never fabricate claims to fill the shape. |
| Ordering / identity | Query sorts by `order`, then title, and returns `_id`; neither is in `DemoService`. | Define featured-item/order behavior and stable rendering identity. |

1. Agree which fields the client edits. Trace each to every consumer: [services details](../../app/services/page.tsx), [home service section](../../components/sections/ServicesSection.tsx), [footer](../../components/layout/Footer.tsx), and [quote choices](../../components/layout/LeadModal.tsx). Home's featured copy and `serviceNotes` remain local; fetching services alone will not update them.
2. In the new project, implement a small data-boundary adapter after normalization and before rendering. Keep query-shaped data out of layout components. Decide how all consumers receive the same adapted list; the current direct local imports would need deliberate replacement.
3. Separate empty content from retrieval failure. Existing `getServices` returns `[]` for both and logs caught fetch errors. `ServicesSection` dereferences the first item without an empty guard. Environment assertions run during imports, outside that catch. Define fallback/error UI and operational visibility before connecting it.
4. Choose publishing and refresh behavior explicitly. [live.ts](../../sanity/lib/live.ts) exports live utilities, but public pages do not mount/use them. The helper requests published content with stega disabled; that is not a complete preview/editing workflow.

**Acceptance:** Use local fixtures first for valid, missing, malformed, empty, and failure cases. Later, in an authorized client CMS environment, edit each promised field and verify its intended consumer, ordering, publish boundary, and refresh timing. No CMS calls or invented working adapter are part of this extraction.
