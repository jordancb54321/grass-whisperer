export type WebsiteResource = {
  title: string;
  organisation: string;
  url: string;
  description: string;
  sourceType: string;
  commercial?: boolean;
};

export type VideoResource = {
  title: string;
  channel: string;
  url: string;
  duration: string;
  description: string;
};

export type UtilityResource = {
  title: string;
  organisation: string;
  url: string;
  description: string;
};

export const websiteResources: WebsiteResource[] = [
  {
    title: 'Lawns advice hub',
    organisation: 'Royal Horticultural Society',
    url: 'https://www.rhs.org.uk/lawns',
    description: 'The strongest all-round reference for creating a lawn, routine maintenance, common problems and lower-input alternatives.',
    sourceType: 'UK gardening charity',
  },
  {
    title: 'How to care for your lawn',
    organisation: "BBC Gardeners' World Magazine",
    url: 'https://www.gardenersworld.com/how-to/maintain-the-garden/how-to-care-for-your-lawn/',
    description: 'A concise illustrated overview of mowing, feeding, aerating, repairing edges and dealing with bare patches.',
    sourceType: 'Editorial publication',
  },
  {
    title: 'Lawn-care advice and diary',
    organisation: 'Lawnsmith',
    url: 'https://www.lawnsmith.co.uk/lawn-care-advice/',
    description: 'Detailed UK seasonal advice, a monthly lawn diary and practical explanations from a specialist lawn retailer.',
    sourceType: 'Commercial source',
    commercial: true,
  },
  {
    title: 'Lawn-care knowledge hub',
    organisation: 'Love The Garden',
    url: 'https://www.lovethegarden.com/uk-en/lawn-care',
    description: 'A broad, well-organised library covering monthly jobs, weeds, moss, feeding, repair and lawn establishment.',
    sourceType: 'Commercial source',
    commercial: true,
  },
  {
    title: 'Help and advice',
    organisation: 'The Grass People',
    url: 'https://thegrasspeople.com/help-advice/',
    description: 'Accessible articles, seed-selection help and seasonal guidance from a UK seed and fertiliser supplier.',
    sourceType: 'Commercial source',
    commercial: true,
  },
];

export const videoResources: VideoResource[] = [
  {
    title: 'How to care for your lawn in autumn',
    channel: 'RHS — Royal Horticultural Society',
    url: 'https://www.youtube.com/watch?v=w_dsoOCWy0E',
    duration: '16:29',
    description: 'A useful long-form demonstration of scarification, aeration, topdressing and overseeding, with chapters for each job.',
  },
  {
    title: 'How to remove moss from a lawn',
    channel: 'RHS — Royal Horticultural Society',
    url: 'https://www.youtube.com/watch?v=_2hrfemLDGg',
    duration: '1:49',
    description: 'A short visual explanation of moss removal and the lawn conditions that allow moss to return.',
  },
  {
    title: 'Beginners guide to overseeding a lawn',
    channel: 'Premier Lawns',
    url: 'https://www.youtube.com/watch?v=u5SpSR3yyEk',
    duration: '8:02',
    description: 'A practical UK demonstration covering mowing, seed-to-soil contact, aeration and simple overseeding methods.',
  },
  {
    title: 'Winter lawn care: mowing, moss and aeration',
    channel: 'Lawn Association',
    url: 'https://www.youtube.com/watch?v=DxtmESJOaZ0',
    duration: '20:35',
    description: 'A detailed discussion of what winter lawn work is useful, what can wait and how conditions should change the plan.',
  },
];

export const utilityResources: UtilityResource[] = [
  {
    title: 'Soilscapes map viewer',
    organisation: 'Cranfield University LANDIS',
    url: 'https://www.landis.org.uk/soilscapes/',
    description: 'Explore the likely soil type, drainage and texture around a site in England and Wales before diagnosing a lawn problem.',
  },
  {
    title: 'UK weather forecast',
    organisation: 'Met Office',
    url: 'https://www.metoffice.gov.uk/weather/forecast/uk',
    description: 'Check rainfall, temperature and drying conditions before seeding, feeding, watering or applying a treatment.',
  },
  {
    title: 'Find your water supplier',
    organisation: 'Water UK',
    url: 'https://www.water.org.uk/customers/find-your-supplier',
    description: 'Identify the local water company, then check its current hosepipe restrictions and water-saving guidance.',
  },
];
