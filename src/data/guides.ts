export type GuideSection = { heading: string; paragraphs: string[]; bullets?: string[]; tip?: string };
export type Guide = {
  slug: string; title: string; shortTitle: string; description: string; eyebrow: string;
  readTime: string; updated: string; intro: string; colour: string;
  image?: string; imageAlt?: string; imageCredit?: string;
  imageWidth?: number; imageHeight?: number; sections: GuideSection[];
};

export const guides: Guide[] = [
  {
    slug: 'grass-seed', title: 'Choosing grass seed for a British lawn', shortTitle: 'Grass seed', eyebrow: 'Start with the right plant', readTime: '8 min read', updated: '13 July 2026', colour: '#d8eb77',
    image: '/images/seed.webp', imageAlt: 'Close-up of seed heads on a blade of grass', imageCredit: 'Simon Heck · CC BY-SA 3.0', imageWidth: 800, imageHeight: 600,
    description: 'A practical UK guide to lawn seed mixtures, sowing rates, soil preparation and germination for hard-wearing, shaded and ornamental lawns.',
    intro: 'The best seed is not the most expensive bag. It is the mixture that matches your light, soil and the way your lawn is actually used.',
    sections: [
      { heading: 'Know what is in the mixture', paragraphs: ['Most lawn seed is a blend. Perennial ryegrass germinates quickly and tolerates feet, children and pets. Red fescues have finer leaves and cope with lower fertility. Browntop bent creates a dense, fine surface but asks for closer mowing and more attention. Smooth-stalked meadow-grass spreads by underground stems and repairs well once established, but germinates slowly.'], bullets: ['Hard-wearing family lawn: ryegrass-led mixture', 'Shade: red and hard fescues with some bent; avoid expecting success in deep, dry shade', 'Fine ornamental lawn: fescue and bent, with little or no ryegrass', 'Drought-prone site: hard fescue and deep-rooting cultivars'] },
      { heading: 'When and how much to sow', paragraphs: ['Early autumn is usually the easiest sowing window in the UK: soil is warm, rain is more reliable and weed pressure is falling. Spring is the second choice, once soil has warmed. Seed needs contact with moist soil—not a burial.'], bullets: ['New lawn: normally 30–40 g/m²; follow the pack rate', 'Overseeding: normally 20–30 g/m²', 'Rake to a fine, firm tilth and remove stones', 'Split the seed in half and sow in two directions for even coverage', 'Lightly rake, firm with feet or a roller, then water with a fine rose'], tip: 'Do not add extra seed “for luck”. Crowded seedlings compete, stretch and become more disease-prone.' },
      { heading: 'Germination without guesswork', paragraphs: ['The upper centimetre of soil must stay consistently damp until seedlings establish. On a dry day that can mean several light waterings; in cool damp weather it may mean none. Ryegrass may show in 7–14 days, while fescues and meadow-grass can take considerably longer.'], bullets: ['Use a fine spray so seed is not displaced', 'Keep people and pets off the area', 'Make the first cut when most grass reaches roughly 7–8 cm', 'Use sharp blades and remove no more than one third'] }
    ]
  },
  {
    slug: 'fertiliser', title: 'Lawn fertiliser, explained without the hype', shortTitle: 'Fertiliser', eyebrow: 'Feed the soil, not the calendar', readTime: '9 min read', updated: '13 July 2026', colour: '#f0b45a',
    description: 'Understand NPK, seasonal lawn feeds, application rates, iron and safe fertiliser use for healthy UK lawns.',
    intro: 'Fertiliser can improve colour and density, but more is never automatically better. Diagnose first, measure the area, then apply only what the lawn needs.',
    sections: [
      { heading: 'Read the NPK label', paragraphs: ['The three headline numbers show the percentage by weight of nitrogen, phosphate and potash. Nitrogen drives leafy growth and colour. Phosphate supports roots but is often already adequate in established soil. Potash supports stress and disease tolerance. The analysis matters more than the marketing name.'], bullets: ['Spring/summer feeds usually contain more nitrogen', 'Autumn feeds use less nitrogen and relatively more potassium', 'Iron can darken turf and suppress moss, but it is not a complete feed', 'Slow-release nitrogen feeds steadily and reduces growth surges'] },
      { heading: 'Apply accurately', paragraphs: ['Measure the lawn rather than guessing. Multiply length by width for simple rectangles and split irregular lawns into sections. Calibrate a spreader on a small known area. Apply granules to dry foliage, then water them in if the label requires it.'], bullets: ['Never exceed the labelled rate', 'Use two half-rate passes at right angles for even coverage', 'Brush spills off paving immediately', 'Keep products in original packaging away from children and pets'], tip: 'Striping, scorching and sudden growth usually point to uneven or excessive application—not a need for another product.' },
      { heading: 'A sensible annual approach', paragraphs: ['A typical lawn may need a measured spring feed when active growth starts, an optional lighter summer feed only if moisture is available, and a low-nitrogen autumn feed. A soil test every few years is more useful than habitually adding phosphorus.'], bullets: ['Do not feed drought-stressed or frozen grass', 'Delay feeding newly germinated grass until it has been cut several times unless the seed-bed product says otherwise', 'Leave unfed areas under observation before escalating treatment'] }
    ]
  },
  {
    slug: 'watering', title: 'Watering a lawn deeply—and less often', shortTitle: 'Watering', eyebrow: 'Build deeper roots', readTime: '7 min read', updated: '13 July 2026', colour: '#8dc8c2',
    image: '/images/watering.webp', imageAlt: 'Garden sprinkler throwing arcs of water over green plants', imageCredit: 'Kumaravel · CC BY 2.0', imageWidth: 720, imageHeight: 480,
    description: 'Learn when, how deeply and how often to water established turf and new seed in the UK while avoiding waste and shallow roots.',
    intro: 'Established lawns usually benefit from infrequent, thorough watering. New seed is the exception: it needs the surface kept damp while it germinates.',
    sections: [
      { heading: 'Established turf', paragraphs: ['Water when the lawn shows real stress: footprints remain visible, leaves lose their spring and colour shifts towards blue-grey. Early morning is the best time because evaporation is lower and leaves dry quickly afterwards.'], bullets: ['Aim to wet the root zone, not just the leaves', 'Check depth with a trowel after watering', 'Use straight-sided containers to compare sprinkler coverage', 'Allow the surface to dry between waterings to encourage deeper rooting'], tip: 'Avoid a little water every evening. It favours shallow roots and keeps leaves wet during disease-friendly hours.' },
      { heading: 'New seed and new turf', paragraphs: ['Seed beds need frequent, gentle moisture in the top layer until germination. As roots develop, reduce frequency and increase the amount each time. Newly laid turf needs immediate, even watering through the turf into the soil below, with special attention to edges.'], bullets: ['Never create puddles or wash seed into drifts', 'Lift a corner of new turf to check moisture beneath it', 'Reduce watering once the turf resists being lifted', 'Follow temporary use restrictions during drought'] },
      { heading: 'Make water go further', paragraphs: ['Mow slightly higher during dry periods, fix compaction in autumn or spring, and add organic matter when renovating poor soil. A dense lawn shades its own soil. Watering cannot compensate indefinitely for a compacted, shallow or badly drained root zone.'] }
    ]
  },
  {
    slug: 'levelling-a-lawn', title: 'How to level a bumpy lawn without burying it', shortTitle: 'Levelling', eyebrow: 'Smooth, do not smother', readTime: '10 min read', updated: '13 July 2026', colour: '#d6a57a',
    image: '/images/levelling.webp', imageAlt: 'Old metal lawn roller resting beneath trees in an Essex garden', imageCredit: 'Acabashi · CC BY-SA 4.0', imageWidth: 650, imageHeight: 975,
    description: 'A step-by-step guide to diagnosing and levelling bumps, hollows and settlement in an established lawn with topdressing or turf repair.',
    intro: 'Small ripples can be corrected gradually. Deep hollows, active subsidence and buried rubble need diagnosis before another layer of soil goes on top.',
    sections: [
      { heading: 'Find the cause first', paragraphs: ['Probe soft depressions and watch them after rain. Settlement over old roots, poor construction, mole activity, leaking drains and compacted service trenches need different remedies. Mark high and low spots after mowing short enough to read the surface.'], bullets: ['Check whether hollows hold water', 'Look for ongoing animal activity', 'Do not conceal drainage or subsidence problems with topsoil', 'Check for cables and pipes before deep excavation'] },
      { heading: 'Topdress shallow unevenness', paragraphs: ['For minor dips, apply a dry, compatible sandy loam topdressing in thin layers while grass is growing strongly. Work it into the canopy with a lute, stiff broom or the back of a rake, leaving leaf tips clearly visible. Repeat later rather than smothering the grass.'], bullets: ['Mow and scarify lightly if the surface is thatchy', 'Fill no more than roughly 10–15 mm in one pass', 'Brush material off leaves', 'Water if conditions are dry', 'Overseed thin areas with a matching seed mixture'], tip: 'Builders’ sharp sand alone can create layers and change the root zone. Use a blended topdressing compatible with your soil.' },
      { heading: 'Repair deeper hollows and bumps', paragraphs: ['For a local hollow, cut turf on three sides, fold it back, add and firm screened topsoil, then relay at the surrounding height. For a bump, lift the turf and remove soil beneath it. Large-scale regrading is best done during renovation, not by repeatedly burying the existing surface.'], bullets: ['Firm in stages to reduce future settlement', 'Keep replaced turf moist until rooted', 'Use a long straightedge to check progress', 'A heavy roller does not permanently flatten poorly prepared soil and can worsen compaction'] }
    ]
  },
  {
    slug: 'mowing', title: 'Mowing for denser, healthier grass', shortTitle: 'Mowing', eyebrow: 'The highest-impact habit', readTime: '6 min read', updated: '13 July 2026', colour: '#b7d96d',
    image: '/images/mowing.webp', imageAlt: 'Tractor mowing a broad green lawn in the English countryside', imageCredit: 'Richard Croft · CC BY-SA 2.0', imageWidth: 640, imageHeight: 427,
    description: 'UK lawn mowing guidance covering cutting height, the one-third rule, stripes, clippings and seasonal technique.',
    intro: 'Good mowing is not about cutting as short as possible. Consistent cuts at an appropriate height encourage density and leave enough leaf to power the roots.',
    sections: [
      { heading: 'Height and frequency', paragraphs: ['For many general lawns, a height around 25–40 mm is practical, with more height in shade, heat or drought. Fine ornamental turf can be lower only when grass species, surface and maintenance support it.'], bullets: ['Remove no more than one third of the leaf in one cut', 'Raise the deck when grass is stressed or growth slows', 'Alternate direction to reduce ruts and leaning', 'Avoid mowing waterlogged, frosted or drought-brittle turf'] },
      { heading: 'Blades, clippings and stripes', paragraphs: ['Sharp blades cut cleanly; blunt blades tear and leave pale tips. Small, evenly distributed clippings can return nutrients when growth is modest. Collect heavy clumps, diseased material and autumn leaves. Stripes are simply light reflecting from grass bent in opposite directions by a rear roller.'], tip: 'A clean mower deck and a freshly sharpened blade usually improve appearance more than a new lawn treatment.' }
    ]
  },
  {
    slug: 'aeration-and-compaction', title: 'Aeration and compacted soil', shortTitle: 'Aeration', eyebrow: 'Give roots room to breathe', readTime: '7 min read', updated: '13 July 2026', colour: '#c8b28b',
    description: 'Identify lawn compaction and choose solid-tine or hollow-tine aeration at the right time for UK soil conditions.',
    intro: 'Compaction squeezes out air, slows drainage and limits roots. Aeration works when the tool and timing match the problem.',
    sections: [
      { heading: 'Recognise compaction', paragraphs: ['Persistent puddling, hard ground, sparse grass on traffic routes and a screwdriver that is difficult to push into moist soil are useful clues. Waterlogging can also result from deeper drainage problems, so do not assume every wet lawn only needs spikes.'] },
      { heading: 'Choose the operation', paragraphs: ['Solid tines make holes with little disruption and can help routine gas exchange. Hollow tines physically remove cores and are more effective for genuine surface compaction, but create debris and need recovery time. Spiking very wet clay can smear and seal hole walls.'], bullets: ['Aerate when soil is moist but not saturated', 'Work in spring or early autumn while grass can recover', 'Make multiple passes over compacted routes', 'Topdress after hollow tining to keep channels open'], tip: 'Rolling and aerating are opposites. Do not routinely roll a lawn you are trying to decompact.' }
    ]
  }
];

export const getGuide = (slug: string) => guides.find((guide) => guide.slug === slug);
