import { useLoggedInUserQuery, type LoggedInUser } from '@/graphql/generated-hooks.js';
import { MessageOfTheDay } from './MessageOfTheDay.js';

export function LoggedInUser(): JSX.Element {
  const { data } = useLoggedInUserQuery();

  return <LoggedInUserView user={data?.loggedInUser} />;
}

export function LoggedInUserView({ user }: { user?: LoggedInUser | null }): JSX.Element {
  if (!user) {
    return <strong>Logging in...</strong>;
  }

  return (
    <>
      <strong>
        Logged in as: {user.name} ({user.occupation?.toLocaleLowerCase()})!
      </strong>
      <p>
        Message of the day: <MessageOfTheDay />
      </p>
    </>
  );
}
