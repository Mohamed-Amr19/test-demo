# Repo blueprint

Use this as the default implementation plan before generating code.
Adjust only when the user asks.

## Stack
- Vite
- React
- Tailwind CSS
- optional motion library only when motion is central to the design

## Suggested structure
```text
src/
  app/
    App.jsx
    routes.js
  components/
    layout/
    navigation/
    sections/
    ui/
  content/
    site.en.js
    site.ar.js
  hooks/
    useLocale.js
  lib/
    direction.js
  pages/
    HomePage.jsx
    AboutPage.jsx
    ProductsPage.jsx
    ServicesPage.jsx
    ContactPage.jsx
  styles/
    globals.css
```

## Content model
Keep content in locale objects.
Example categories:
- navigation
- hero
- trust
- products
- services
- process
- work/proof
- about
- contact
- footer

## i18n behavior
- maintain a current locale state
- derive document direction from locale
- avoid hardcoding direction-sensitive spacing in many places
- centralize direction helpers when possible

## Styling behavior
- use a premium spacing scale
- give sections distinct visual pacing
- use typography hierarchy aggressively but tastefully
- keep surfaces, borders, and shadows restrained

## Motion behavior
- use motion on entrances, transitions, and premium interaction cues
- avoid excessive looping animation
- keep fallbacks acceptable if motion is later simplified in tall stack

## Vercel readiness
- keep build standard and dependency-light
- avoid custom server assumptions
- ensure package scripts are predictable

## Tall migration notes
Keep the architecture close to what a future blade/component migration would want:
- prop-driven sections
- locale content separated from rendering logic
- simple page composition
- no unnecessary app-shell complexity
