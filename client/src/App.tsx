// No matter how deep in the files we are, we have the `@` alias
// For easy access to our generated hooks
// I know it's redundant here, but in a large project this could keep things tidier
import { useCallback } from 'react';
import { Button } from './components/atom/button.js';
import { Card } from './components/atom/card.js';
import { BooksList } from './components/common/BooksList.js';
import { LoggedInUser } from './components/common/LoggedInUser.js';
import { BentoFullLayout } from './components/layout/Layouts.js';
import { useAppStore } from './store/appStore.js';
import { PeopleList } from './components/common/PeopleList.js';
import { PeopleCount } from './components/common/PeopleCount.js';
import { LoadPeopleButton } from './components/common/LoadPeople.js';
import { H1, H2 } from './components/atom/heading.js';
import { ImageViewerToggler } from './components/common/ImageViewerToggler.js';

export function App(): JSX.Element {
  const addMotd = useAppStore((store) => store.setMessageOfTheDay);

  const login = useCallback(() => {
    fetch('http://localhost:8000/login', { credentials: 'include' });
  }, []);

  const logout = useCallback(() => {
    fetch('http://localhost:8000/logout', { credentials: 'include' });
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
    <div className="h-screen p-2">
      <BentoFullLayout
        headerPanel={
          <Card className="size-full bg-violet-100">
            <Card.Body>
              <H1 className="text-4xl">Page title</H1>
            </Card.Body>
          </Card>
        }
        leftPanel={
          <Card className="size-full w-96 overflow-auto bg-slate-100">
            <Card.Body>
              <div className="flex h-full flex-col overflow-auto">
                <div className="shrink">
                  <H2 className="text-3xl">Books</H2>
                  <BooksList />
                </div>
                <div className="grow">
                  <hr className="my-4" />
                  <p>Hello!</p>
                  <p>
                    Click the "Load people" button to populate this complex object in the store! And
                    the footer should update too with an updated count. POC of the store being used
                    across the app in an delocalised manner.
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
                </div>
              </div>
            </Card.Body>
          </Card>
        }
        centerPanel={
          <Card className="relative size-full overflow-auto bg-orange-100">
            <Card.Body className="size-full">
              <ImageViewerToggler />
            </Card.Body>
          </Card>
        }
        rightPanel={
          <Card className="size-full w-96 bg-slate-100">
            <Card.Body>
              <LoggedInUser />
            </Card.Body>
          </Card>
        }
        lowerPanel={
          <Card className="size-full bg-blue-50">
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
