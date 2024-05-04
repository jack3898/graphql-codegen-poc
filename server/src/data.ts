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
    { id: 1, url: 'https://picsum.photos/1080/1920', width: 1080, height: 1920 },
    { id: 2, url: 'https://picsum.photos/1080/1920', width: 1080, height: 1920 },
    { id: 3, url: 'https://picsum.photos/1080/1920', width: 1080, height: 1920 },
    { id: 3, url: 'https://picsum.photos/1080/1920', width: 1080, height: 1920 },
    { id: 3, url: 'https://picsum.photos/1080/1920', width: 1080, height: 1920 },
    { id: 3, url: 'https://picsum.photos/1080/1920', width: 1080, height: 1920 },
    { id: 3, url: 'https://picsum.photos/1080/1920', width: 1080, height: 1920 }
  ]
};
