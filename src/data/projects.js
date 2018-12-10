export default [
  {
    title: 'Crack in the Road',
    slug: 'crack-in-the-road',
    desc: 'Award-winning culture',
    year: {
      xl: '2010 – ',
      basic: '2017'
    },
    role: 'Founder',
    url: 'https://www.crackintheroad.com',
    type: 'embed'
  },
  {
    title: 'Simon Tegala',
    slug: 'simon-tegala',
    desc: 'Living notebook',
    year: '2018',
    role: 'JS',
    url: 'https://simontegala-flow.org/',
    type: 'embed',
    info: `Built to mark the opening of a new commission for Cambridge University by artist Simon Tegala, Flow. The site aims to bring the artist's notebook to life, taking visitors on a journey through the design process, while conveying the sense of ideas and inspiration flowing in to the design process.`,
    notes: [
      `Where possible, style changes are limited to opacity and transforms to avoid relayouts. Opacity changes only ever span between 0.01 and 0.99 to ensure these can be handled by the *compositer thread* alone`,
      `Scroll performance is maintained by keeping per-frame browser processing within the 16.66ms that 60FPS requires. Instead of attaching many scroll handlers for animations, a single *passive scroll handler* updates a number of *CSS variables* on the root element. CSS is then able to quickly recalculate transforms`,
      `Through careful use of *will-change*, preloading of larger images and management of *rendering layers*, including hoisting intensive animations to the GPU layer completely, the site avoids constant repaints when elements overlap. This ensures users maintain a high FPS, even on lower spec machines.`
    ]
  },
  {
    title: 'Proxima',
    slug: 'proxima',
    desc: '##',
    year: '2018',
    role: 'Vue',
    url: 'https://proxima.dev.theblackeyeproject.co.uk',
    type: 'embed'
  },
  {
    title: 'Sheffield Christmas Trail',
    slug: 'sheffield-christmas-trail',
    desc: 'An app for the festive season',
    year: '2018',
    role: 'Mobile',
    url: {
      'Play Store': 'https://itunes.apple.com/gb/app/bricktropolis/id1418561757?mt=8',
      'App Store': 'https://itunes.apple.com/gb/app/bricktropolis/id1418561757?mt=8'
    }
  },
  {
    title: 'Party for the People',
    slug: 'party-for-the-people',
    desc: 'Charitable ticketing',
    year: '2018',
    role: 'Rails'
  },
  {
    title: 'etiCloud',
    slug: 'eticloud',
    desc: 'Stock photo free IT',
    year: '2017',
    role: 'CSS',
    url: 'https://everythingthatis.cloud/',
    type: 'embed'
  },
  {
    title: 'Bricktropolis',
    slug: 'bricktropolis',
    desc: 'Citywide treasure hunt',
    year: '2018',
    role: 'Mobile',
    url: {
      'Play Store': 'https://itunes.apple.com/gb/app/bricktropolis/id1418561757?mt=8',
      'App Store': 'https://itunes.apple.com/gb/app/bricktropolis/id1418561757?mt=8'
    }
  },
  {
    title: 'LifeSkills',
    slug: 'lifeskills',
    desc: 'A world for young learners',
    year: '2017',
    role: 'CSS',
    url: 'https://learnaliving.co.uk/',
    type: 'embed'
  },
  {
    title: 'SDL Cloud',
    slug: 'sdl-language-cloud',
    desc: '##',
    year: '2017',
    role: 'REST'
  },
  {
    title: 'Crooked',
    slug: 'crooked-beverage-co',
    desc: 'Bringing artwork to life',
    year: '2017',
    role: 'WordPress'
  },
  {
    title: 'Unrecorded',
    slug: 'unrecorded',
    desc: 'International music',
    role: 'CSS',
    year: '2014'
  },
  {
    title: 'Measurement Dashboard',
    slug: 'pr-measurement-dashboard',
    desc: 'Business winning reporting',
    role: 'PHP',
    year: '2013'
  }
]
