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
  occupation: 'Developer'
};
