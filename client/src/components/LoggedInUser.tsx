import { type LoggedInUser } from '@/graphql/generated-hooks.js';
import { useAppStore } from '@/store/appStore.js';

export function LoggedInUser(): JSX.Element {
  const user = useAppStore((cur) => cur.loggedInUser);
  const setUser = useAppStore((cur) => cur.setUser);

  return <LoggedInUserView user={user} setUser={setUser} />;
}

export function LoggedInUserView({
  user,
  setUser
}: {
  user: LoggedInUser | null;
  setUser: (user: LoggedInUser) => void;
}): JSX.Element {
  if (!user) {
    return <strong>Logging in...</strong>;
  }

  return (
    <>
      <strong>
        Logged in as: {user.name} ({user.occupation?.toLocaleLowerCase()})!
      </strong>
      <br />
      <button
        className="border bg-slate-200 p-2"
        onClick={() => {
          setUser({
            id: crypto.randomUUID(),
            name: 'Another name',
            __typename: 'LoggedInUser',
            occupation: 'Developer again'
          });
        }}
      >
        Log in as someone else for some reason
      </button>
    </>
  );
}
