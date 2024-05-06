import { useLoggedInUserQuery } from '@/graphql/generated-hooks.js';

export function ImageViewerHtml(): JSX.Element {
  const { data } = useLoggedInUserQuery();

  return (
    <div className="flex flex-col items-center gap-8">
      {data?.loggedInUser?.records.map((record) => (
        <img key={record.id} src={record.url} width={record.width} height={record.height}></img>
      ))}
    </div>
  );
}
