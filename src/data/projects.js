export default [
  {
    title: 'Proxima',
    slug: false,
    desc: 'In Development',
    year: 'c.2019',
    role: 'Vue',
    url: false,
    type: 'embed'
  },
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
    type: 'embed',
    info: [
      `Crack in the Road is an independent music and culture site, founded in 2010 and active until 2017.`,
      `Winner of the ROTD music industry award for Best Website in 2012, and shortlisted for Blog of the Year by Ticketmaster in 2014.`,
      `Everyone involved was great.`
    ],
    notes: [
      ``
    ]
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
    title: 'Sheffield Christmas Trail',
    slug: 'sheffield-christmas-trail',
    desc: 'An app for the festive season',
    year: '2018',
    role: 'Mobile',
    info: [
      `Commissioned by the City of Sheffield's BID group, the Christmas Trail app brings to life a series of local characters in order to guide children on a treasure hunt across the city.`,
      `Ran from 24th November – 24th December 2018`
    ],
    notes: [
      `Animated characters were front and centre, therefore used Bodymovinto export animations from Adobe After Effects as JSON data. As well as allowing native 60FPS rendering, file sizes kept significantly smaller than video/image elements.`,
      `Custom Lottie component built to instantly display a sub-3kb single frame SVG of character, then load animation asynchronously in the background, before swapping the two out seamlessly on load. Works around slow JSON loading and processing on some older devices that delayed page navigation.`,
      `Microsoft Codepush support built in to core from start, in order to allow instant deployment of hot fixes to all users – designed to handle smooth, non-intrusive installation and updates for users who may be actively doing trail`
    ],
    url: {
      'Play Store': 'https://play.google.com/store/apps/details?id=io.blackeye.christmastrail',
      'App Store': 'https://itunes.apple.com/gb/app/sheffield-christmas-trail/id1436841953'
    }
  },
  {
    title: 'Party for the People',
    slug: 'party-for-the-people',
    desc: 'Charitable ticketing',
    year: '2018',
    role: 'Rails',
    info: [
      `Party for the People (and its sister site, Tickets for Good) are comprehensive event management and ticketing platforms, built and maintained in Ruby on Rails.`,
      `Customers can purchase tickets, add on products, and donate to charity securely; promoters can create and manage event listings, manage their finances, and even use a iOS/Android app to scan users tickets on the door.`
    ],
    notes: [
      ``,
      ``
    ]
  },
  {
    title: 'Bricktropolis',
    slug: 'bricktropolis',
    desc: 'Citywide LEGO event',
    year: '2018',
    role: 'Mobile',
    url: {
      'Play Store': 'https://play.google.com/store/apps/details?id=io.blackeye.bricktropolis',
      'App Store': 'https://itunes.apple.com/gb/app/bricktropolis/id1418561757'
    }
  },
  {
    title: 'LifeSkills',
    slug: 'lifeskills',
    desc: 'A world for young learners',
    year: '2017',
    role: 'CSS',
    url: 'https://learnaliving.co.uk/',
    type: 'embed',
    info: [
      `LifeSkills is a European Union funded charity that provides vocational opportunities and education to young people across the UK.`,
      `Website redevelopment aimed to present a more modern and engaging experience to better connect young talent with vacancies, and businesses with the information they need to setup apprenticeships.`
    ],
    notes: [
      `LifeSkills works with those from poor and disadvantaged backgrounds, therefore emphasis on [progressive enhancement] to keep site usable on older and lower spec devices.`,
      `Providing such a visually rich homepage within a 2.5s [page load budget] on a 3G connection required all graphics to be vectors, with line complexity reduced via SVGO to reduce file size.`,
      `Ongoing maintenance handled by non-technical inhouse team, therefore every page element built around custom meta fields and post type relationships in order to exposed them to the WordPress CMS.`
    ]
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
    desc: 'National consumer launch',
    year: '2016',
    role: 'PHP',
    info: [
      `Brand website to accompany high-profile national launch of a new alcoholic drink.`,
      `Each product had an accompanying world created by illustrator Lisa O'Hara, which the website focused on and brought to life.`
    ]
  }
]
