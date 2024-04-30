import { type Person, useAppStore } from '@/store/appStore.js';

export function PeopleList(): JSX.Element {
  const standardPeople = useAppStore((store) => store.people.standard);
  const moderatorPeople = useAppStore((store) => store.people.moderator);
  const adminPeople = useAppStore((store) => store.people.admin);

  return <PeopleListView standard={standardPeople} mods={moderatorPeople} admins={adminPeople} />;
}

export function PeopleListView({
  standard,
  mods,
  admins
}: {
  standard: Person[];
  mods: Person[];
  admins: Person[];
}): JSX.Element {
  return <>{JSON.stringify({ s: standard, m: mods, a: admins })}</>;
}
