import { useLoggedInUserQuery, type LoggedInUser } from '@/graphql/generated-hooks.js';

export function LoggedInUser(): JSX.Element {
  const { data } = useLoggedInUserQuery();

  return <LoggedInUserView user={data?.loggedInUser} />;
}

export function LoggedInUserView({ user }: { user?: LoggedInUser | null }): JSX.Element {
  if (!user) {
    return <strong>Logging in...</strong>;
  }

  return (
    <strong>
      Logged in as: {user.name} ({user.occupation?.toLocaleLowerCase()})!
    </strong>
  );
}
