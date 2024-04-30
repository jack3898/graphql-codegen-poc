import { useAppStore } from '@/store/appStore.js';

export function MessageOfTheDay(): JSX.Element {
  const motd = useAppStore((store) => store.messageOfTheDay);

  return <>{motd}</>;
}
