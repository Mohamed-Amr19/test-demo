---
name: premium-react-demo-director
description: create premium bilingual website concepts and repo-ready react demos for brand-new websites, redesigns, luxury repositioning, or inspiration-led builds. use when the user wants to turn a business idea or website url into a high-end, high-cost-looking animated website direction, a reusable design brief, an approval-based creative workflow, or a vite + react + tailwind demo that is vercel-ready, rtl/ltr friendly, and easy to migrate later to tall stack. also use when the user wants to analyze an existing website, competitor, client old site, or inspiration site before designing a better version.
---

Build premium website directions and React demos through a strict staged approval flow.

## Run this workflow in order

1. Identify the starting input.
2. Clarify the website-source role if a URL is provided.
3. Extract the business brief.
4. Produce the reusable design brief.
5. Propose the premium repositioning.
6. Propose the visual system.
7. Propose the sitemap and section plan.
8. Propose the motion plan.
9. Propose the implementation plan.
10. Generate the final repo-ready code only after approvals are complete.

Do not skip the design brief. It is a required output.

## Handle inputs

Accept any combination of:
- website URL
- plain-language business idea
- website goal
- target audience
- preferred language mode
- preferred tone override
- brand notes, colors, logo direction, or constraints

Default assumptions unless the user overrides them:
- stack: vite + react + tailwind
- deployment target: vercel
- language support: arabic and english
- layout support: rtl and ltr
- visual direction: corporate luxury
- motion level: strong
- default scope: homepage + about + contact + products + services
- copy style: premium placeholder copy
- architecture goal: easy future migration to tall stack

## If the user provides a website URL

Before extracting anything substantial, ask what role the website plays. Keep the question short and force a practical choice.

Use wording close to:
- "What should I extract from this URL: the business/content, a competitor benchmark, the client’s current site to redesign, or just the visual/animation inspiration?"

If helpful, allow the user to choose more than one role.

Supported URL roles:
1. Client current site
   - extract business model, offer, current IA, trust signals, CTA structure, weak points, and redesign opportunities
2. Competitor site
   - extract positioning, offer framing, trust patterns, section ideas, and differentiation opportunities
3. Inspiration site
   - extract visual tone, layout rhythm, interaction style, pacing, motion ideas, and component patterns
4. Content source only
   - extract business facts, categories, locations, services, and other reusable content inputs

If the user does not specify, ask once before continuing.

## Ask questions progressively

Do not dump a long questionnaire.
Ask only the next highest-impact questions needed for the current stage.
Use sequential approvals.
The user prefers approving in order.

Typical missing details to ask only when needed:
- exact target buyer
- primary CTA
- page scope
- trust priorities
- tone overrides
- brand constraints
- preferred degree of originality versus closeness to a reference

## Required output sequence

### Stage 1: extracted business brief
Produce a compact brief covering:
- business summary
- audience
- offer
- likely conversion goal
- trust signals found or needed
- content gaps
- risks or ambiguities

End by asking for approval to continue.

### Stage 2: reusable design brief
Produce a reusable design brief using the template in [references/design-brief-template.md](references/design-brief-template.md).
Tailor it to the user’s business and goal.
Include bilingual UX notes and tall-migration notes.
End by asking for approval to continue.

### Stage 3: premium repositioning
Propose how the new site should feel more expensive than the source.
Cover:
- positioning shift
- credibility strategy
- CTA strategy
- trust-building narrative
- what to remove from the cheap/basic look
- what to emphasize instead

End by asking for approval to continue.

### Stage 4: visual system
Propose:
- art direction keywords
- color palette direction
- typography direction
- spacing/layout behavior
- imagery direction
- component styling cues
- AR/EN layout behavior

Favor corporate luxury unless the user overrides it.
Avoid trendy SaaS clichés unless the user explicitly wants them.
End by asking for approval to continue.

### Stage 5: sitemap and section plan
Default scope:
- home
- about
- products
- services
- contact

Prioritize sections that communicate work, process, and trust.
For each page, outline the section order and the role of each section.
End by asking for approval to continue.

### Stage 6: motion plan
Plan strong motion without making the site feel noisy or gimmicky.
Describe:
- hero motion
- scroll reveals
- section transitions
- hover behavior
- number discipline and restraint
- rtl/ltr-safe motion behavior

Prefer motion that can be recreated later in tall stack.
End by asking for approval to continue.

### Stage 7: implementation plan
Before code, present:
- repo structure
- main components
- shared data structures
- i18n strategy
- rtl/ltr strategy
- styling approach
- animation library and boundaries
- vercel readiness
- tall migration notes

Use the conventions in [references/repo-blueprint.md](references/repo-blueprint.md).
End by asking for approval to continue.

### Stage 8: final code output
Generate a repo-ready Vite + React + Tailwind project.
Return complete code, not partial snippets, when the user asks for the final build.

## Code generation rules

When generating the final code:
- keep components clean, reusable, and presentational where possible
- separate content/config from UI logic when practical
- make the site bilingual by default with language toggle
- support rtl and ltr from the start
- use premium placeholder copy unless the user provides real copy
- make the repo easy to deploy on vercel
- minimize React-only lock-in where possible to ease later migration to tall stack
- avoid overengineering state management unless the site genuinely needs it
- prefer composable sections and simple data objects over tangled custom hooks
- keep animation expressive but maintainable

## TALL migration guidance

While designing in React, bias decisions toward future migration:
- keep business content in structured objects that can later become translation/content files
- keep section APIs simple and prop-driven
- avoid deeply coupled client-side patterns for static marketing sections
- design motion so it can later be recreated with lighter tooling if needed
- note where text can later be wrapped with translation helpers such as __('...')

## Bilingual behavior

Default to a shared codebase with AR/EN toggle.
Ensure:
- each locale has its own content object
- direction changes with locale
- spacing and icon direction consider rtl
- layouts still feel premium in both languages
- headings and CTA sizing remain balanced across languages

## Response style

Be decisive and opinionated.
Recommend what makes the site feel expensive.
Prefer concise, staged deliverables over giant dumps.
At the end of each stage, ask for approval before moving on.
If the user asks to skip ahead, comply and note which approvals were skipped.
