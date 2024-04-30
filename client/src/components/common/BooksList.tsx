import { type LongBook, type NormalBook, useBooksQuery } from '@/graphql/generated-hooks.js';

type BookUnion = LongBook | NormalBook;

export function BooksList(): JSX.Element {
  const { data } = useBooksQuery();

  return <BooksListView books={data?.books} />;
}

export function BooksListView({ books }: { books?: BookUnion[] | null }): JSX.Element {
  if (!books) {
    return <p>Loading...</p>;
  }

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
