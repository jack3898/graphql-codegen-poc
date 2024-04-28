import { useAppStore, type BookUnion } from '@/store/appStore.js';

export function BooksList(): JSX.Element {
  const books = useAppStore((cur) => cur.books);
  const addBook = useAppStore((cur) => cur.addBook);

  return (
    <>
      <BooksListView books={books} />
      <AddBookButton addBook={addBook} />
    </>
  );
}

export function BooksListView({ books }: { books: BookUnion[] }): JSX.Element {
  return (
    <ul>
      {books.map((book) => {
        switch (book?.__typename) {
          case 'LongBook':
            return (
              <li key={book.id} className="mb-4">
                <h2>
                  <strong>{book.title} (long book!)</strong>
                  <small>{book.whyitslong}</small>
                </h2>
                <p>By {book.author}</p>
              </li>
            );
          case 'NormalBook':
            return (
              <li key={book.id} className="mb-4">
                <h2>
                  <strong>{book.title} (short book)</strong>
                </h2>
                <p>By {book.author}</p>
              </li>
            );
        }
      })}
    </ul>
  );
}

function AddBookButton({ addBook }: { addBook: (book: BookUnion) => void }): JSX.Element {
  return (
    <button
      className="border bg-slate-200 p-2"
      onClick={() =>
        addBook({
          id: Math.random(),
          author: crypto.randomUUID(),
          title: crypto.randomUUID(),
          __typename: 'NormalBook'
        })
      }
    >
      Add a book
    </button>
  );
}
