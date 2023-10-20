import { store } from '../store';
import type { PeopleState, Person, PersonDisplayedInfo } from '../store/types/people';

import { extractPersonDisplayInfos } from '../helpers';

export const peopleInfo = (): PersonDisplayedInfo[] => {
  const { people } = store.getState().people;

  return people.map((person: Person) => extractPersonDisplayInfos(person));
};

export const pageInfos = (): {
  previousPage: string | null
  nextPage: string | null
  isLoading: boolean
  error: string | null
} => {
  const peopleState: PeopleState = store.getState().people;

  const { previousPage, nextPage, isLoading, error } = peopleState;

  return { previousPage, nextPage, isLoading, error };
};
