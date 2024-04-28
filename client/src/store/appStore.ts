import {
  type LoggedInUser,
  useBooksQuery,
  type LongBook,
  type NormalBook,
  useLoggedInUserQuery
} from '@/graphql/generated-hooks.js';
import { create } from 'zustand';

export type BookUnion = NormalBook | LongBook;

interface AppStore {
  books: BookUnion[];
  loggedInUser: LoggedInUser | null;
  setBooks: (books: BookUnion[]) => void;
  addBook: (book: BookUnion) => void;
  setUser: (user: LoggedInUser | undefined | null) => void;
}

export const useAppStore = create<AppStore>()((set) => ({
  books: [],
  loggedInUser: null,
  // We could use Immer to manage complex nested objects!
  // But I have yet to look into integrating it with Zustand
  setBooks: (books): void => set((current) => ({ ...current, books: books ? books : [] })),
  addBook: (book): void => set((current) => ({ ...current, books: [book, ...current.books] })),
  setUser: (user): void => set((current) => ({ ...current, loggedInUser: user || null }))
}));

// I would necessarily recommend making an app this way, it's just a POC of zustand re-render performance
// I.e., when we update the user, only the components that read user data should re-render.
// Zustand should then not re-render components that read books data
export function useBootstrapApp(): void {
  const setBooks = useAppStore((cur) => cur.setBooks);
  const setUser = useAppStore((cur) => cur.setUser);

  useBooksQuery({
    onCompleted(data) {
      if (data.books) {
        setBooks(data.books);
      }
    }
  });

  useLoggedInUserQuery({
    onCompleted(data) {
      setUser(data.loggedInUser);
    }
  });
}
