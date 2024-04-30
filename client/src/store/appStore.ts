import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

export type Person = {
  id: number;
  name: string;
};

export type Role = 'admin' | 'standard' | 'moderator';

interface AppStore {
  messageOfTheDay: string;
  setMessageOfTheDay: (message: string) => void;
  people: Record<Role, Person[]>;
  totalPeople: () => number;
  addPerson: (role: Role, person: Person) => void;
}

export const useAppStore = create<AppStore>()(
  immer((set, get) => ({
    people: {
      standard: [],
      moderator: [],
      admin: []
    },
    messageOfTheDay: '',
    setMessageOfTheDay: (message: string): void => {
      set((state) => {
        state.messageOfTheDay = message;
      });
    },
    totalPeople: (): number => {
      const people = get().people;

      return people.admin.length + people.moderator.length + people.standard.length;
    },
    addPerson: (role, person): void =>
      set((state) => {
        state.people[role].push(person);
      })
  }))
);
