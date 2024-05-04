import { type LongBook, type NormalBook, useBooksQuery } from '@/graphql/generated-hooks.js';
import { H3 } from '../atom/heading.js';

type BookUnion = LongBook | NormalBook;

export function BooksList(): JSX.Element {
  const { data } = useBooksQuery();

  return <BooksListView books={data?.books} />;
}

export function BooksListView({ books }: { books: BookUnion[] | null | undefined }): JSX.Element {
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
                <H3>{book.title} (long book!)</H3>
                <small>{book.whyitslong}</small>
                <p>By {book.author}</p>
              </li>
            );
          case 'NormalBook':
            return (
              <li key={book.id} className="mb-4">
                <H3>{book.title} (short book)</H3>
                <p>By {book.author}</p>
              </li>
            );
        }
      })}
    </ul>
  );
}
