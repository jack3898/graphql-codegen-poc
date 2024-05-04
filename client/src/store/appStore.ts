import { clamp } from '@/utils/clamp.js';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

export type Person = {
  id: number;
  name: string;
};

export type Role = 'admin' | 'standard' | 'moderator';

export interface AppStore {
  messageOfTheDay: string;
  people: Record<Role, Person[]>;
  zoomPercent: number;
  resetZoom: () => void;
  zoomMultiplier: () => number;
  zoomIn: (by?: number) => void;
  zoomOut: (by?: number) => void;
  setMessageOfTheDay: (message: string) => void;
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
    zoomPercent: 100,
    resetZoom(): void {
      set((state) => {
        state.zoomPercent = 100;
      });
    },
    zoomIn(by = 10): void {
      set((state) => {
        state.zoomPercent = clamp(50, 150, state.zoomPercent + by);
      });
    },
    zoomOut(by = 10): void {
      set((state) => {
        state.zoomPercent = clamp(50, 150, state.zoomPercent - by);
      });
    },
    zoomMultiplier(): number {
      return get().zoomPercent / 100;
    },
    setMessageOfTheDay(message: string): void {
      set((state) => {
        state.messageOfTheDay = message;
      });
    },
    totalPeople(): number {
      const people = get().people;

      return people.admin.length + people.moderator.length + people.standard.length;
    },
    addPerson: (role, person): void =>
      set((state) => {
        state.people[role].push(person);
      })
  }))
);
