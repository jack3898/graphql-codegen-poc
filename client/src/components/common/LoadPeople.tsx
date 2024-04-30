import { useCallback } from 'react';
import { Button } from '../atom/button.js';
import { useAppStore } from '@/store/appStore.js';

export function LoadPeopleButton(): JSX.Element {
  const addPerson = useAppStore((store) => store.addPerson);

  const addPeople = useCallback(() => {
    addPerson('standard', { id: 1, name: 'standard 1' });
    addPerson('moderator', { id: 2, name: 'mod 1' });
    addPerson('admin', { id: 3, name: 'admin 1' });
    addPerson('standard', { id: 4, name: 'standard 2' });
  }, [addPerson]);

  return <Button onClick={() => addPeople()}>Load people</Button>;
}
