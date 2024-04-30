import { produce } from 'immer';
import { useEffect } from 'react';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

export type Person = {
  id: number;
  name: string;
};

export type Role = 'admin' | 'standard' | 'moderator';

interface AppStore {
  people: Record<Role, Person[]>;
  addPerson: (role: Role, person: Person) => void;
}

export const useAppStore = create<AppStore>()(
  immer((set) => ({
    people: {
      standard: [],
      moderator: [],
      admin: []
    },
    addPerson: (role, person): void =>
      set((state) => {
        state.people[role].push(person);
      })
  }))
);

// I would necessarily recommend making an app this way, it's just a POC of zustand re-render performance
// I.e., when we update the user, only the components that read user data should re-render.
// Zustand should then not re-render components that read books data
export function useBootstrapApp(): void {
  const addPerson = useAppStore((store) => store.addPerson);

  useEffect(() => {
    (async (): Promise<void> => {
      await sleep();
      addPerson('standard', { id: 1, name: 'standard 1' });
      await sleep();
      addPerson('moderator', { id: 2, name: 'mod 1' });
      await sleep();
      addPerson('admin', { id: 3, name: 'admin 1' });
      await sleep();
      addPerson('standard', { id: 4, name: 'standard 2' });
    })();
  }, [addPerson]);
}

function sleep(): Promise<void> {
  return new Promise<void>((res) => {
    setTimeout(() => res(), 5000);
  });
}
