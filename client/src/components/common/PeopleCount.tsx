import { useAppStore } from '@/store/appStore.js';

export function PeopleCount(): JSX.Element {
  const count = useAppStore((store) => store.totalPeople());

  return <>{count}</>;
}
