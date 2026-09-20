# Rebrand and launch checklist

For the next commissioned client site. Record evidence and an owner beside each completed item; mark conditional items N/A with a reason. These are future acceptance checks, not tests performed during extraction. Source references are in the [map](README.md) and [recipes](recipes.md).

## Identity and content

- [ ] Client approves the displayed name, contact destinations, service area, offers, scope, and claims. Displayed phone text and `tel:`/`sms:` links agree; email destinations, if present, agree too.
- [ ] Search config, data, pages, components, metadata, alt text, and icons for the source identity, location, phone, and asset names. Every remaining match is intentional and reviewed; changing configuration alone is insufficient.
- [ ] All navigation and service anchors resolve; service CTAs select the matching service. Counts, ordering, featured copy, FAQ answers, and process descriptions match the actual offer.
- [ ] Each image/logo has an approved source and reuse permission recorded; crops and alt text describe the replacement asset. No concept image is presented as client work, staff, or customer results.
- [ ] Record required credits and font licenses alongside delivered assets. Resolve source-code and image licensing questions before copying; retain applicable attribution. Testimonials and business claims have client approval and supporting permission/evidence.

## Demo boundary and forms

- [ ] Decide whether each CTA is a demo, inquiry, booking, or outbound contact link. Its label and completion message describe exactly that action; a local completion screen is never delivery evidence.
- [ ] If retaining a demo, submit sample details locally and confirm no form request, storage, or booking occurs. Disclosure remains visible before and after completion. This source project must retain that behavior.
- [ ] **If implementing delivery:** agree the payload, recipient/CRM destination, server validation, allowed service values, consent wording where needed, and data retention/access owner. Earlier disabled fieldsets are included intentionally in the payload; secrets remain server-side.
- [ ] **If implementing delivery:** in the client's authorized test environment, submit a uniquely labeled sample and verify both the server result and receipt in the intended inbox/CRM. Provider acceptance alone is not inbox receipt. Confirm who monitors inquiries and when they respond.
- [ ] **If implementing delivery:** exercise invalid input, offline/network failure, timeout, server rejection, duplicate clicks, and retry. Failures preserve answers and offer a usable retry; pending blocks duplicate submission. Completion occurs only at the documented success condition, with no false booking promise.

## CMS coverage (only if commissioned)

- [ ] For every editable field, record schema field → query projection → adapter output → visible consumer. Fields intentionally unused on the website are labeled in editing instructions.
- [ ] A published edit appears in every intended consumer after the documented refresh interval; unpublished edits stay off public pages. Test empty content, missing optional fields/images, duplicate slugs, and a failed query separately.
- [ ] Client project/dataset and preview/production access are explicit. Configure and test the chosen refresh/preview mechanism; creating a schema or importing live utilities alone does not connect pages.
- [ ] Editor can complete one real edit, preview if supported, publish, and correct it using supplied instructions. Do not promise CMS control over local/component-only copy.

## URLs and environment policy

- [ ] Record production and preview origins, environment owners, and which environment may send forms/use production content. Preview must not accidentally inherit production delivery credentials.
- [ ] On the new site's local/staging production build, inspect route titles, descriptions, social metadata, favicon, and canonical URLs where applicable. No concept branding, placeholder origin, or preview hostname appears in production metadata.
- [ ] Record indexing policy per environment. Inspect final HTML robots/Googlebot tags, `robots.txt`, and `X-Robots-Tag` together, including any hosting headers. Preview remains restricted; approved public production has no unintended blocking directives. Repeat against the final host during the client's launch process.
- [ ] **If indexable:** sitemap entries, canonicals, and internal links use the approved origin and resolve to intended public pages. Studio/private routes are excluded. **If adding structured data:** values describe the real business and supported claims.
- [ ] **If replacing existing URLs:** list old → new paths, verify redirects reach the correct destination without loops, and check unknown paths return the intended 404. Do not invent a migration for a new site.

## Interaction and handoff

- [ ] Check 320px, a typical phone width, tablet, and desktop plus 200% zoom: no clipped controls or unintended horizontal scrolling. Open the mobile keyboard; dialog fields/actions remain reachable by scrolling.
- [ ] Keyboard-only: skip link reaches main content; menu and quote open/close; Tab/Shift+Tab stay within dialogs; Escape closes; focus returns to a visible logical control; background scrolling restores. Resize an open mobile menu across the desktop breakpoint.
- [ ] Quote required fields block forward progress; Back preserves answers; contact-method requirements switch correctly; each service preselects correctly; closing/reopening follows the agreed reset policy. Check visible focus, labels, and step/error announcements with a screen reader.
- [ ] **If retaining tabs/FAQ:** arrow/Home/End keys select tabs, Tab reaches the active panel, FAQ toggles announce expanded state, and repeated instances have unique IDs. Reduced-motion settings remain usable.
- [ ] Run the new project's lint/build scripts; record outcomes and unresolved issues. Source scripts are `npm run lint` and `npm run build` (`npm.cmd` on restricted PowerShell). These do not replace delivery or browser checks.
- [ ] Owner can access domain/DNS, hosting, repository, and any commissioned CMS/delivery accounts. Provide editing boundaries, publish steps, credential handoff through an approved private channel, renewal/support ownership, and a recovery contact.
- [ ] Client approves the actual preview, content/assets, form behavior, indexing policy, and outstanding exceptions. Record approver, date, release SHA, and rollback route before the separately authorized launch. This kit does not authorize a merge or deployment.
