import {
  type LoggedInUser,
  useBooksQuery,
  type LongBook,
  type NormalBook,
  useLoggedInUserLazyQuery
} from '@/gql/generated-hooks.js';
import { useEffect } from 'react';
import { create } from 'zustand';

export type BookUnion = NormalBook | LongBook;

interface AppStore {
  books: BookUnion[];
  loggedInUser: LoggedInUser | null;
  setBooks: (books: BookUnion[]) => void;
  setUser: (user: LoggedInUser | undefined | null) => void;
}

export const useAppStore = create<AppStore>()((set) => ({
  books: [],
  loggedInUser: null,
  setBooks: (books): void =>
    set((current) => ({
      ...current,
      books: books ? books : []
    })),
  setUser: (user): void =>
    set((current) => ({
      ...current,
      loggedInUser: user || null
    }))
}));

// I would necessarily recommend making an app this way, it's just a POC of zustand re-render performance
// I.e., when we update the user, only the components that read user data should re-render.
// Zustand should then not re-render components that read books data
export function useBootstrapApp(): void {
  const { setBooks, setUser } = useAppStore((cur) => ({
    setBooks: cur.setBooks,
    setUser: cur.setUser
  }));

  useBooksQuery({
    onCompleted(data) {
      if (data.books) {
        setBooks(data.books);
      }
    }
  });

  const [fetchUser] = useLoggedInUserLazyQuery({
    onCompleted(data) {
      setUser(data.loggedInUser);
    }
  });

  useEffect(() => {
    const interval = setInterval(() => {
      fetchUser();
    }, 1000);

    return (): void => clearInterval(interval);
  }, [fetchUser]);
}
