import { type LoggedInUser } from '@/gql/generated-hooks.js';
import { useAppStore } from '@/store/appStore.js';

export function LoggedInUser(): JSX.Element {
  const user = useAppStore((cur) => cur.loggedInUser);

  return <LoggedInUserView user={user} />;
}

export function LoggedInUserView({ user }: { user: LoggedInUser | null }): JSX.Element {
  if (!user) {
    return <strong>Logging in...</strong>;
  }

  return (
    <strong>
      Logged in as: {user.name} ({user.occupation?.toLocaleLowerCase()})!
    </strong>
  );
}
