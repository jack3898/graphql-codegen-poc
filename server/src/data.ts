import crypto from 'node:crypto';

export const books = [
  {
    id: 1,
    title: 'The Awakening',
    author: 'Kate Chopin',
    __typename: 'NormalBook'
  },
  {
    id: 2,
    title: 'City of Glass',
    author: 'Paul Auster',
    __typename: 'NormalBook'
  },
  {
    id: 3,
    title: 'Looong book',
    author: 'Idk',
    whyitslong: 'Because many pages',
    __typename: 'LongBook'
  }
];

export const user = {
  id: crypto.randomUUID(),
  name: 'Jack',
  occupation: 'Developer',
  records: [
    { id: 1, url: 'http://localhost:8000/public/1.jpg', width: 1080, height: 1920 },
    { id: 2, url: 'http://localhost:8000/public/2.jpg', width: 1080, height: 1920 },
    { id: 3, url: 'http://localhost:8000/public/3.jpg', width: 1080, height: 1920 },
    { id: 4, url: 'http://localhost:8000/public/4.jpg', width: 1080, height: 1920 },
    { id: 5, url: 'http://localhost:8000/public/5.jpg', width: 1080, height: 1920 }
  ]
};
