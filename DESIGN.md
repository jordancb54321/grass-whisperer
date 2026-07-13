---
version: alpha
name: Grass Whisperer
description: A calm British lawn field guide with editorial authority, documentary photography and practical language.
colors:
  primary: "#173F2C"
  forest-deep: "#102E21"
  moss: "#24583F"
  grass: "#D8EB77"
  signal: "#B33A2B"
  signal-hover: "#8F2C21"
  paper: "#F1EFE5"
  paper-muted: "#E3E2D7"
  white: "#FFFEF8"
  ink: "#183126"
  muted: "#56645A"
  line: "#BBC5BC"
typography:
  display-xl:
    fontFamily: Newsreader
    fontSize: 6.25rem
    fontWeight: 600
    lineHeight: 0.94
    letterSpacing: "-0.05em"
  heading-lg:
    fontFamily: Newsreader
    fontSize: 4.25rem
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.04em"
  heading-md:
    fontFamily: Newsreader
    fontSize: 2.75rem
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  body-lg:
    fontFamily: DM Sans
    fontSize: 1.125rem
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "0em"
  body-md:
    fontFamily: DM Sans
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0em"
  label:
    fontFamily: DM Sans
    fontSize: 0.6875rem
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "0.14em"
rounded:
  none: 0px
  small: 2px
  image: 14px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  section: 104px
components:
  button-primary:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.white}"
    typography: "{typography.body-md}"
    rounded: "{rounded.small}"
    padding: 12px
    height: 48px
  button-primary-hover:
    backgroundColor: "{colors.signal-hover}"
    textColor: "{colors.white}"
  button-secondary:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.small}"
    padding: 12px
    height: 48px
  navigation-active:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.white}"
    rounded: "{rounded.small}"
    padding: 8px
  field-note:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.white}"
    rounded: "{rounded.none}"
    padding: 24px
  information-panel:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: 24px
  footer:
    backgroundColor: "{colors.forest-deep}"
    textColor: "{colors.white}"
    rounded: "{rounded.none}"
    padding: 24px
  eyebrow:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.moss}"
    typography: "{typography.label}"
  seasonal-highlight:
    backgroundColor: "{colors.grass}"
    textColor: "{colors.primary}"
    rounded: "{rounded.none}"
    padding: 16px
  muted-surface:
    backgroundColor: "{colors.paper-muted}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: 24px
  supporting-copy:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.muted}"
    typography: "{typography.body-md}"
  divider:
    backgroundColor: "{colors.line}"
    textColor: "{colors.ink}"
    height: 1px
---

## Overview

Grass Whisperer is a field guide for ordinary British lawns. It should feel informed, calm and observant, not like an ecommerce brand selling a perfect green carpet. The site borrows the clarity of a horticultural handbook and the warmth of an independent gardening magazine.

The working principle is **Observe first. Treat second.** Every design and editorial decision should help a reader identify a condition, understand its cause and choose the smallest useful intervention.

The design has three recognisable traits:

1. Forest green and warm paper establish authority without looking clinical.
2. Newsreader gives headings an editorial voice; DM Sans keeps instructions and data easy to scan.
3. Documentary lawn photography shows real weather, tools, texture and imperfect gardens.

## Colors

- **Forest (`#173F2C`)** is the main brand colour for navigation, large sections and key rules.
- **Forest deep (`#102E21`)** is reserved for the footer and the darkest image overlays.
- **Moss (`#24583F`)** supports labels and quieter interactions.
- **Grass (`#D8EB77`)** marks seasonal information, notes and useful highlights. It is not a button colour.
- **Signal (`#B33A2B`)** is the only high-emphasis action colour. Use it for the primary button, the active navigation item and keyboard focus. It should occupy little of the page.
- **Paper (`#F1EFE5`)** is the default canvas. **White (`#FFFEF8`)** separates reading surfaces without introducing bright digital white.
- **Ink (`#183126`)** is the default text colour. **Muted (`#56645A`)** is for supporting copy and remains readable on paper.

Do not introduce additional greens for decoration. Seasonal guide colours may appear as narrow article rules, never as large branded surfaces.

## Typography

Newsreader is the display face. Use it for page titles, section headings, pull quotes and prominent numbers. Its scale should feel like a printed gardening feature, but headings must wrap naturally rather than forcing dramatic one-word lines.

DM Sans is the utility face. Use it for body text, navigation, buttons, metadata, captions and tables. Body copy should normally sit between 16px and 18px with generous line height.

Eyebrows use DM Sans at 11px, bold, uppercase and widely tracked. They organise real information such as a guide category, section number or season. Do not add decorative labels that say nothing.

Avoid centred body copy beyond short introductions. Long-form articles should keep a readable measure of roughly 65–75 characters.

## Layout

The desktop content width is 1180px inside a 1320px outer frame. Use a twelve-column mental model with a minimum 24px gutter. Sections normally have 96–110px vertical padding; mobile sections use 64–72px.

Prefer editorial composition over card grids:

- Use ruled indexes for large collections of guides.
- Use cards only when photography or a genuinely separate object benefits from a contained surface.
- Mix one large feature with smaller supporting stories rather than repeating equal tiles.
- Use thin rules and spacing before shadows.
- Keep one deliberate asymmetric element per page, usually the hero image or a featured field note.

The mobile layout must preserve the order of information. Do not hide descriptions that are needed to choose between guides.

## Elevation & Depth

The interface is predominantly flat. Separate layers with colour, borders and spacing. Avoid floating glass panels, diffuse shadows and gradients on UI surfaces.

Photography may use a dark green gradient overlay to protect white text. Small ambient shadows are acceptable only for transient controls such as the mobile navigation panel.

## Shapes

Most interface elements have square corners or a 2px functional radius. Documentary images may use a 14px radius when they stand alone; image-led story panels remain square to preserve the publication-like grid.

The three-blade grass mark is the primary symbol. Keep the blade proportions and upward direction intact. Do not place it inside decorative circles or combine it with generic leaf icons.

## Components

### Buttons

The primary button uses signal red with white text. There should normally be one primary action in a section. Hover and pressed states darken the red; focus adds a visible signal-red outline.

Secondary actions use a transparent or paper background with a forest border. Hover inverts to forest with white text. Links within prose remain underlined.

### Navigation

Desktop navigation is short: Guides, Calendar and About, followed by one signal-red “Start here” action. The active page must use both colour and shape, not colour alone. The mobile menu repeats the same hierarchy with 48px touch targets.

### Guide indexes

Guide indexes are ruled rows with a number, category, title, description, reading time and arrow. On hover, the row shifts slightly and its reading surface becomes white. Avoid turning every guide into an identical rounded card.

### Field notes

Field notes are image-led editorial stories. Use a restrained dark overlay, a short category label and no more than two sentences. Photography must remain the dominant element.

### Practical notes

Advice callouts use forest with white text and a grass-coloured label. They should contain a specific caution or field observation, not repeat the paragraph above.

## Do's and Don'ts

### Do

- Write for UK weather, soil and water restrictions.
- Explain why a method works and when it is inappropriate.
- Use real, licensed photography with meaningful captions and local attribution.
- Show ordinary lawns, worn edges, tools in use, seed heads, soil and seasonal conditions.
- Provide symptom-led and task-led routes into the same guide library.
- Date substantial advice and keep structured data consistent with visible content.
- Meet WCAG AA contrast, preserve keyboard focus and respect reduced motion.

### Don't

- Promise a perfect lawn or describe grass as “lush” without a specific reason.
- Use fake reviews, fabricated experts, affiliate-style product rankings or countdown urgency.
- Fill the homepage with equal rounded cards.
- Use AI-generated lawns, hyper-saturated stock imagery or impossible striping.
- Add decorative icons, badges or labels without an informational job.
- Use signal red as a large background or general decoration.
