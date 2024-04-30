// No matter how deep in the files we are, we have the `@` alias
// For easy access to our generated hooks
// I know it's redundant here, but in a large project this could keep things tidier
import { useCallback } from 'react';
import { Button } from './components/atom/button.js';
import { Card } from './components/atom/card.js';
import { BooksList } from './components/common/BooksList.js';
import { LoggedInUser } from './components/common/LoggedInUser.js';
import { Layout } from './components/layout/Layouts.js';
import { useBootstrapApp } from './store/appStore.js';
import { PeopleList } from './components/common/PeopleList.js';

export function App(): JSX.Element {
  useBootstrapApp();

  const login = useCallback(() => {
    fetch('http://localhost:3000/login', { credentials: 'include' });
  }, []);

  const logout = useCallback(() => {
    fetch('http://localhost:3000/logout', { credentials: 'include' });
  }, []);

  return <AppView login={login} logout={logout} />;
}

function AppView({ login, logout }: { login: () => void; logout: () => void }): JSX.Element {
  return (
    <Layout.BentoFull
      leftPanel={
        <Card className="h-full">
          <Card.Body>
            <h1 className="text-3xl">Books</h1>
            <BooksList />
          </Card.Body>
        </Card>
      }
      centralPanel={
        <Card className="h-full">
          <Card.Body>
            <p>Hello!</p>
            <p>Here are some people from Zustand, inserted with Immer:</p>
            <br />
            <PeopleList />
          </Card.Body>
        </Card>
      }
      rightPanel={
        <Card className="h-full">
          <Card.Body>
            <LoggedInUser />
          </Card.Body>
        </Card>
      }
      lowerPanel={
        <Card className="h-full">
          <Card.Body>
            <Button className="mr-3" onClick={login}>
              Login
            </Button>
            <Button onClick={logout}>Logout</Button>
          </Card.Body>
        </Card>
      }
    />
  );
}
