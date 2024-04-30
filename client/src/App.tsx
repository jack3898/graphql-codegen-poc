// No matter how deep in the files we are, we have the `@` alias
// For easy access to our generated hooks
// I know it's redundant here, but in a large project this could keep things tidier
import { useCallback } from 'react';
import { Button } from './components/atom/button.js';
import { Card } from './components/atom/card.js';
import { BooksList } from './components/common/BooksList.js';
import { LoggedInUser } from './components/common/LoggedInUser.js';
import { Layout } from './components/layout/Layouts.js';
import { useAppStore } from './store/appStore.js';
import { PeopleList } from './components/common/PeopleList.js';
import { PeopleCount } from './components/common/PeopleCount.js';
import { LoadPeopleButton } from './components/common/LoadPeople.js';

export function App(): JSX.Element {
  const addMotd = useAppStore((store) => store.setMessageOfTheDay);

  const login = useCallback(() => {
    fetch('http://localhost:3000/login', { credentials: 'include' });
  }, []);

  const logout = useCallback(() => {
    fetch('http://localhost:3000/logout', { credentials: 'include' });
  }, []);

  return <AppView login={login} logout={logout} addMotd={addMotd} />;
}

function AppView({
  login,
  logout,
  addMotd
}: {
  login: () => void;
  logout: () => void;
  addMotd: (message: string) => void;
}): JSX.Element {
  return (
    <div className="w-full p-2">
      <Layout.BentoFull
        leftPanel={
          <Card className="h-full bg-slate-100">
            <Card.Body>
              <h1 className="text-3xl">Books</h1>
              <BooksList />
            </Card.Body>
          </Card>
        }
        centralPanel={
          <Card className="h-full bg-slate-100">
            <Card.Body>
              <p>Hello!</p>
              <p>
                Click the "Load people" button to populate this complex object in the store! And the
                footer should update too with an updated count. POC of the store being used across
                the app in an delocalised manner.
              </p>
              <br />
              <PeopleList />
              <br />
              <br />
              <LoadPeopleButton />
              <br />
              <br />
              <Button onClick={() => addMotd("Ya doin' great!")}>
                Add a motivational message of the day 😀
              </Button>
              <br />
            </Card.Body>
          </Card>
        }
        rightPanel={
          <Card className="h-full bg-slate-100">
            <Card.Body>
              <LoggedInUser />
            </Card.Body>
          </Card>
        }
        lowerPanel={
          <Card className="h-full bg-blue-50">
            <Card.Body>
              <Button className="mr-3" onClick={login}>
                Login
              </Button>
              <Button onClick={logout}>Logout</Button>
              <br />
              People loaded: <PeopleCount />
            </Card.Body>
          </Card>
        }
      />
    </div>
  );
}
