module.exports = [
  {
    title: 'Random Studio',
    slug: false,
    desc: 'Experience design studio.',
    year: '2019-',
    role: 'Experiential',
    url: false
  },
  {
    title: 'Black Eye Project',
    slug: false,
    desc: 'Sheffield based Creative agency',
    year: '2017-19',
    role: 'Developer',
    url: false
  },
  {
    title: 'Sheffield Christmas Trail',
    slug: 'sheffield-christmas-trail',
    desc: 'Festive retail experience',
    year: '2018',
    role: 'Mobile',
    mobile: true,
    info: [
      `Commissioned by the City of Sheffield's retail development group, the Christmas Trail app brought to life a series of local characters in order to guide children on a treasure hunt across the city – and increase footfall.`,
      `Ran from 24th November – 24th December 2018`
    ],
    notes: [
      `Sub-3kb static SVG loaded synchronously for instant visual response. Full animation data loaded asynchronously from local HTTP daemon, then swapped in seamlessly. Prevents delayed page load times on slower devices.`,
      `Instant remote deployment of hot fixes to all users over HTTP, bypassing App Store, and installed on app resume to avoid impacting users who are actively doing trail.`
    ],
    url: {
      'Play Store': 'https://play.google.com/store/apps/details?id=io.blackeye.christmastrail',
      'App Store': 'https://itunes.apple.com/gb/app/sheffield-christmas-trail/id1436841953'
    },
    images: [
      'intro', 'list', 'clue', 'hint', 'scan', 'success'
    ]
  },
  {
    title: 'Bricktropolis',
    slug: 'bricktropolis',
    desc: 'Interactive LEGO models',
    year: '2018',
    role: 'Mobile',
    url: {
      'Play Store': 'https://play.google.com/store/apps/details?id=io.blackeye.bricktropolis',
      'App Store': 'https://itunes.apple.com/gb/app/bricktropolis/id1418561757'
    },
    mobile: true,
    info: [
      `Bricktropolis saw 21 Lego replicas of world monuments erected across the City of Sheffield, between 4th – 17th August 2018.`,
      `App was commissioned for visitors to log their progress, get background information on each model, and take advantage of retail offers.`,
      `Featured nationally on BBC News.`
    ],
    technology: [
      'Built in Vue.js with Cordova wrapper',
      'Firebase for realtime backend',
      'Reactive Vuexfire bindings for instant client data alterations',
      'Local HTTP demon to stream map tiles from disk without data connection'
    ],
    images: [
      'map', 'log', 'monument'
    ]
  },
  {
    title: 'Simon Tegala',
    slug: 'simon-tegala',
    desc: 'Living notebook',
    year: '2018',
    role: 'CSS',
    url: 'https://simontegala-flow.org/',
    info: `Commissioned for the launch of a new sculpture on Cambridge University campus, Flow, by artist Simon Tegala. The site bring the artist's notebook to life, taking visitors on a journey through the design process, while conveying the sense of ideas and inspiration flowing in to the design process.`,
    notes: [
      `All CSS animations rely on opacity and transform to avoid re-layouts. Further, elements only ever animate alpha values between 0.01 and 0.99 to ensure handled by compositor thread.`,
      `Single, passive scroll handler event adjusts a number of CSS variables on root element, to ensure per-frame Javascript processing is within 16.66ms budget that 60fps requires. CSS calc() then handles manipulations of elements on page.`,
      `Careful management of rendering layers to avoid repaints on element overlap, hoisting intensive animations to GPU layer and offering browser optimisation hints via will-change.`
    ],
    images: ['1', '2', '3', '4']
  },
  {
    title: 'Ticket Bank',
    slug: false,
    desc: 'MVP to support third sector',
    year: '2017',
    role: 'Vue'
  },
  {
    title: 'Party for the People',
    slug: 'party-for-the-people',
    desc: 'Charitable ticketing',
    year: '2017',
    role: 'Rails',
    info: [
      `Party for the People (and its sister site, Tickets for Good) are comprehensive event management and ticketing platforms, built and maintained in Ruby on Rails.`,
      `Customers can purchase tickets, add on products, and donate to charity securely; promoters can create and manage event listings, manage their finances, and even use a iOS/Android app to scan users tickets on the door.`
    ],
    technology: [
      'Ruby on Rails for core system',
      'Heroku for hosting and load balancing',
      'Nativescript for iOS/Android ticket scanning apps',
      'Swagger for REST API documentation'
    ],
    url: {
      'Party for the People': 'https://tickets.partyforthepeople.org/',
      'Tickets for Good': 'https://events.ticketsforgood.co.uk/'
    },
    images: [
      'home', 'event', 'checkout', 'admin', 'tickets'
    ]
  },
  {
    title: 'Crack in the Road',
    slug: 'crack-in-the-road',
    desc: 'Award-winning culture',
    year: '2017',
    role: 'Vue',
    url: 'https://www.crackintheroad.com',
    info: [
      `Crack in the Road is an independent music and culture site, founded in 2010 and active until 2017.`,
      `Winner of the ROTD music industry award for Best Website in 2012, and shortlisted for Blog of the Year by Ticketmaster in 2014.`,
      `Everyone involved was great.`
    ],
    images: ['cover', 'home', 'single']
  },
  {
    title: 'LifeSkills',
    slug: 'lifeskills',
    desc: 'A world for young learners',
    year: '2017',
    role: 'CSS',
    url: 'https://learnaliving.co.uk/',
    info: [
      `A more modern and engaging website, to help a European Union funded charity better connect young talent with vocational opportunities – and businesses with the information they need to host them.`,
      `Large proportion of audience from poor or disadvantaged backgrounds, therefore key requirement to ensure good performance and user experience on older and lower spec devices.`
    ],
    notes: [
      `Established a 2.5s page load budget for an average 3G connection. All visuals had to be vector or CSS based, with line complexity simplified as much as possible to reduce file size.`,
      `Ongoing maintenance handled by non-technical inhouse team, therefore every page element and all content had to be exposed to a bespoke WordPress CMS backend.`
    ],
    images: [
      'home', 'menu', 'course', 'employers'
    ]
  }
]
