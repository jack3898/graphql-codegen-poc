import { type Image, useLoggedInUserQuery } from '@/graphql/generated-hooks.js';

export function UserImageScroller(): JSX.Element {
  const { data } = useLoggedInUserQuery();

  return <UserImageScrollerView images={data?.loggedInUser?.records} />;
}

export function UserImageScrollerView({ images }: { images?: Image[] }): JSX.Element {
  if (!images) {
    return <></>;
  }

  return (
    <>
      {images.map((img) => (
        <img
          className="rounded shadow-lg"
          key={img.id}
          src={img.url}
          width={img.width}
          height={img.height}
        />
      ))}
    </>
  );
}
