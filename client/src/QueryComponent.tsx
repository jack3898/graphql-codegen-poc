import { useBooksQuery } from "./gql/hooks.js";

export function QueryComponent() {
  const { data } = useBooksQuery();

  return (
    <>
      <h1 className="text-3xl">Books</h1>
      <p>Totally not ripped from the Apollo docs.</p>
      <p>The below data is fetched from a generated query hook.</p>
      <hr className="my-4" />
      <ul>
        {data?.books?.map((book) => (
          <li key={book?.id} className="mb-4">
            <h2>
              <strong>{book?.title}</strong>
            </h2>
            <p>By {book?.author}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
