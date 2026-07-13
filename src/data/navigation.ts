export type ProblemRoute = {
  symptom: string;
  detail: string;
  action: string;
  href: string;
};

export const problemRoutes: ProblemRoute[] = [
  {
    symptom: 'Thin or bare grass',
    detail: 'Choose a mixture that suits the light, soil and level of wear.',
    action: 'Repair with seed',
    href: '/guides/grass-seed/'
  },
  {
    symptom: 'A pale or hungry lawn',
    detail: 'Check growth, moisture and the NPK label before applying a feed.',
    action: 'Understand fertiliser',
    href: '/guides/fertiliser/'
  },
  {
    symptom: 'Dry, tired grass',
    detail: 'Read the signs of water stress and avoid shallow daily watering.',
    action: 'Water with purpose',
    href: '/guides/watering/'
  },
  {
    symptom: 'Bumps and hollows',
    detail: 'Find the cause, then decide between topdressing and lifting turf.',
    action: 'Level the surface',
    href: '/guides/levelling-a-lawn/'
  },
  {
    symptom: 'Ragged or weak growth',
    detail: 'Set the right cutting height and check the mower blade first.',
    action: 'Improve the cut',
    href: '/guides/mowing/'
  },
  {
    symptom: 'Hard or waterlogged soil',
    detail: 'Distinguish surface compaction from a deeper drainage problem.',
    action: 'Check compaction',
    href: '/guides/aeration-and-compaction/'
  },
  {
    symptom: 'Unsure what is growing',
    detail: 'Compare leaf texture, growth habit and the conditions each grass prefers.',
    action: 'Identify grass types',
    href: '/guides/uk-lawn-grass-types/'
  }
];

export const monthNames = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];
