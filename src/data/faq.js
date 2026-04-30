// FAQ items. Plain English for now; can be moved to translations later.
// Grouped so the FAQ page can render category headings.

export const faqGroups = [
  {
    id: 'general',
    title: 'General',
    items: [
      {
        q: 'Where are you located?',
        a: '14 Tigran Mets Avenue, central Yerevan, five minutes from Republic Square.',
      },
      {
        q: 'Do you offer trial classes?',
        a: 'Yes, every program offers a free trial class for new students.',
      },
      {
        q: 'How big are the classes?',
        a: 'Eight to twelve children per group, with one lead teacher and an assistant for younger ages.',
      },
    ],
  },
  {
    id: 'enrolment',
    title: 'Enrolment',
    items: [
      {
        q: 'When do enrolment windows open?',
        a: 'Three times a year, September, January, and May. Mid-term joins are sometimes possible if there is a place open.',
      },
      {
        q: 'How do I sign up for a trial class?',
        a: 'Send a message through the contact page. We will suggest a time that fits your schedule.',
      },
      {
        q: 'Can my child attend more than one program?',
        a: 'Yes, most families combine two programs. We help build a weekly schedule that does not overload anyone.',
      },
    ],
  },
  {
    id: 'pricing',
    title: 'Pricing and policies',
    items: [
      {
        q: 'How much do classes cost?',
        a: 'Pricing depends on the program and the number of sessions per week. We share a printed price list at your first visit.',
      },
      {
        q: 'Do you offer sibling discounts?',
        a: 'Yes, the second child in a family attends at a reduced rate. The third is free.',
      },
      {
        q: 'What happens if my child misses a class?',
        a: 'Missed classes can be made up within the same term, subject to space in another group at the same level.',
      },
    ],
  },
  {
    id: 'programs',
    title: 'Programs and curriculum',
    items: [
      {
        q: 'Will my child be tested?',
        a: 'We do a gentle assessment three times a year, never as a graded test, always as a conversation through games. Parents see a written report.',
      },
      {
        q: 'Do you run summer programs?',
        a: 'Yes, two-week intensives in July and August across English, robotics, gymnastics, and theatre. Registration opens in May.',
      },
      {
        q: 'Are parents allowed to watch a class?',
        a: 'Yes for the first session, and once per term after that. We have found that consistent observation can change a child\u2019s behaviour, so we balance access with calm.',
      },
    ],
  },
  {
    id: 'logistics',
    title: 'Logistics',
    items: [
      {
        q: 'Do you offer transportation?',
        a: 'Not directly, but we partner with a trusted local driver service for families who need it. Ask us for details.',
      },
      {
        q: 'Is the building accessible?',
        a: 'Yes, the ground floor is fully accessible, and we have a lift to the upstairs studios. Please tell us in advance if your child has specific needs.',
      },
      {
        q: 'Can grandparents pick up my child?',
        a: 'Of course. Add them to the pickup list at enrolment, or send a message before the class.',
      },
    ],
  },
]

export const allFaqs = faqGroups.flatMap((g) =>
  g.items.map((item) => ({ ...item, group: g.title }))
)
