import { gql, useQuery } from "@apollo/client";

const QUERY = gql`
  query Books {
    books {
      author
      title
    }
  }
`;

export function QueryComponent() {
  const { data } = useQuery(QUERY);

  return (
    <div className="bg-slate-100 p-2 border rounded">
      <code>{JSON.stringify(data, null, 2)}</code>
    </div>
  );
}
