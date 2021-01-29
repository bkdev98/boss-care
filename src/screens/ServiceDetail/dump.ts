export const DETAIL = {
  address: {
    name: 'Veterinary clinic "Alden-Vet"',
    location: '141 N Union Ave, Los Angeles, CA',
  },
  biography: `
    <p>Alekseenko Vasily Vasilyevich, born in 1974 Master of Veterinary Medicine Leading doctor Veterinary clinic "Alden-Vet" Specialization: clinical diagnostics, surgery vet, dentist.</p>
    <h4>Education</h4>
    <p>Before entering the agricultural Academy he worked at the department of surgery of the veterinary faculty (1991-1992). He graduated from the Faculty of Veterinary Medicine of NAU in 1997. He defended his thesis at the Department of Surgery on the topic: "Surgery on the urinary organs of cats." Scientific advisor prof. Borisevich V.B. In 1998 graduated from the Magistracy.</p>
    <h4>Professional experience</h4>
    <ul>
      <li>Repeated participant and winner of the International Conferences, reports on the topic: “Iatrogenic pathology in urology”, “Foreign bodies of the gastrointestinal tract in small domestic animals”</li>
      <li>From 1998 to 2001, he was the chief physician of the Equus veterinary medicine clinic.</li>
      <li>Constantly increases the level of his qualifications, attending international conferences, congresses, workshops on veterinary services for small pets.</li>
      <li>Since 2006, the leading doctor of veterinary care "UCCA". At the same time, she continues to conduct reception at the Equus veterinary medicine clinic, where he has been working since 1997.</li>
    </ul>
    <h4>Personal information</h4>
    <p>Candidate master of sports in equestrian sport (dressage). Favorite breed of dog is German Shepherd. He is married, has two children: daughter Alika and son Timur.</p>
  `,
  firstVisitPrice: 20,
  rating: 4.9,
  totalReview: 125,
  reviews: [
    {
      id: '1',
      user: {
        id: '1',
        name: 'Ann & Leo',
        avatar: 'https://i.imgur.com/xRFLTaf.png',
      },
      comment:
        'Thank you very much! Great clinic! The dog was limping, X-rayed, prescribed quality treatment. Dog of fights! Excellent specialists!',
      rating: 5,
      createdAt: new Date(2019, 2, 26),
    },
    {
      id: '2',
      user: {
        id: '2',
        name: 'Monica & Mickey',
        avatar: 'https://i.imgur.com/wkXWpzd.png',
      },
      comment:
        'Yesterday he brought her old woman (Cocker, 15 years old) for testing and ultrasound. Everything was done perfectly, the attitude is super cool and professional!',
      rating: 5,
      createdAt: new Date(2019, 2, 3),
    },
  ],
};
