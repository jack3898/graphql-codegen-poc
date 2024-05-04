import { type Image, useLoggedInUserQuery } from '@/graphql/generated-hooks.js';
import { useAppStore } from '@/store/appStore.js';
import { scale } from '@/utils/scale.js';

export function UserImageScroller(): JSX.Element {
  const { data } = useLoggedInUserQuery();
  const zoomMultiplier = useAppStore((store) => store.zoomMultiplier());

  return <UserImageScrollerView images={data?.loggedInUser?.records} zoom={zoomMultiplier} />;
}

export function UserImageScrollerView({
  images,
  zoom
}: {
  images?: Image[];
  zoom: number;
}): JSX.Element {
  if (!images) {
    return <></>;
  }

  return (
    <>
      {images.map((img) => {
        const { width, height } = scale(img.width, img.height, zoom);

        return (
          <img
            className="rounded object-cover shadow-lg"
            key={img.id}
            src={img.url}
            width={width}
            height={height}
            style={{
              minWidth: width,
              minHeight: height,
              width,
              height
            }}
          />
        );
      })}
    </>
  );
}
