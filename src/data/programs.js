// Program metadata. The visible labels (title, summary) are loaded from
// next-intl messages — this file holds non-translated structure: slug,
// hero image, ordering, schedule data, and tone color.

export const programs = [
  {
    slug: 'gymnastics',
    image: '/images/hero-gymnastics.png',
    accent: 'coral',
    schedule: [
      { level: 'Beginners', days: 'Mon · Wed', time: '16:00 - 17:00', age: '4-7' },
      { level: 'Beginners', days: 'Tue · Thu', time: '17:30 - 18:30', age: '4-7' },
      { level: 'Intermediate', days: 'Mon · Wed · Fri', time: '17:00 - 18:15', age: '7-11' },
      { level: 'Intermediate', days: 'Tue · Thu · Sat', time: '11:00 - 12:15', age: '7-11' },
      { level: 'Advanced', days: 'Mon · Tue · Thu · Fri', time: '18:30 - 20:00', age: '11-16' },
      { level: 'Open practice', days: 'Saturday', time: '14:00 - 16:00', age: 'All' },
    ],
  },
  {
    slug: 'development',
    image: '/images/hero-development.png',
    accent: 'sand',
    schedule: [],
  },
  {
    slug: 'english',
    image: '/images/hero-english.png',
    accent: 'indigo',
    schedule: [
      { level: 'Starter', days: 'Mon · Wed', time: '16:00 - 17:15', age: 'up to 8' },
      { level: 'Elementary', days: 'Tue · Thu', time: '17:30 - 18:45', age: 'up to 10' },
      { level: 'Pre-Intermediate', days: 'Mon · Thu', time: '18:00 - 19:15', age: 'up to 10' },
      { level: 'Intermediate', days: 'Tue · Fri', time: '18:30 - 20:00', age: 'up to 12' },
      { level: 'Conversation Club', days: 'Saturday', time: '11:00 - 12:30', age: 'open' },
    ],
  },
  {
    slug: 'theatre',
    image: '/images/hero-theatre.png',
    accent: 'plum',
    schedule: [],
  },
  {
    slug: 'school-prep',
    image: '/images/hero-school-prep.png',
    accent: 'sand',
    schedule: [],
  },
  {
    slug: 'robotics',
    image: '/images/hero-robotics.png',
    accent: 'indigo',
    schedule: [],
  },
]

export const programSlugs = programs.map((p) => p.slug)

// next-intl key for each program (handles "school-prep" → "schoolPrep")
export const programKeys = {
  gymnastics: 'gymnastics',
  development: 'development',
  english: 'english',
  theatre: 'theatre',
  'school-prep': 'schoolPrep',
  robotics: 'robotics',
}
