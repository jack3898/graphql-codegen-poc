import { useBooksQuery } from './gql/hooks.js';

export function QueryComponent(): JSX.Element {
  const { data } = useBooksQuery({
    onCompleted() {
      console.log('It completed!');
    }
  });

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1 className="text-3xl">Books</h1>
      <p>Totally not ripped from the Apollo docs.</p>
      <p>The below data is fetched from a generated query hook.</p>
      <hr className="my-4" />
      <ul>
        {data.books?.map((book) => {
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
    </>
  );
}
