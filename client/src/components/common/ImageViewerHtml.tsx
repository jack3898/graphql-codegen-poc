import { type Image, useLoggedInUserQuery } from '@/graphql/generated-hooks.js';
import { type MutableRefObject, useCallback, useEffect, useRef, useState } from 'react';
import { Button } from '../atom/button.js';
import { scrollToPercentage, getScrollPercentage } from '@/utils/scrollUtils.js';
import { useInView } from 'react-intersection-observer';

export function ImageViewerHtml(): JSX.Element {
  const ref = useRef<HTMLDivElement | null>(null);
  // I used a ref as using state causes scroll jank due to CONSTANT rerenders
  // Maybe this could be fixed in the future
  const scrollPercentRef = useRef(0);
  const [scale, setScale] = useState(2);
  const { data } = useLoggedInUserQuery();

  const scrollTo = useCallback((percent: number): void => {
    if (ref.current) {
      scrollToPercentage(percent, ref.current);
    }
  }, []);

  useEffect(() => {
    scrollTo(scrollPercentRef.current);
  }, [scale, scrollTo]);

  return (
    <div className="flex h-full flex-col gap-2">
      <div className="shrink">
        <Button onClick={() => setScale((cur) => cur + 0.3)} className="mr-2 size-6 p-0">
          -
        </Button>
        <Button onClick={() => setScale((cur) => cur - 0.3)} className="size-6 p-0">
          +
        </Button>
      </div>
      <div
        ref={ref}
        className="flex grow flex-col items-center gap-8 overflow-auto"
        onScroll={() => {
          if (ref.current) {
            scrollPercentRef.current = +getScrollPercentage(ref.current).toFixed(0);
          }
        }}
      >
        {ref && (
          <>
            {data?.loggedInUser?.records.map((record) => (
              <Img parentRef={ref} record={record} scale={scale} key={record.id}></Img>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

function Img({
  parentRef,
  record,
  scale
}: {
  parentRef: MutableRefObject<HTMLElement | null>;
  record: Image;
  scale: number;
}): JSX.Element {
  const [ref, inView] = useInView({
    root: parentRef.current
  });

  return (
    <img
      ref={ref}
      id={`image-${record.id}`}
      key={record.id}
      src={inView ? record.url : ''}
      width={record.width / scale}
      height={record.height / scale}
      className="rounded shadow"
    ></img>
  );
}
