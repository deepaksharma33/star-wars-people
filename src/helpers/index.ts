import type { Person, PersonDisplayedInfo } from '../store/types/people';
import { UNKNOWN_MASS } from '../constants/helper';

export const humanizeSnakeCase = (str: string): string =>
  str.split('_').map((w: string) => w.charAt(0).toUpperCase() + w.substring(1)).join(' ');

export const sortPeopleByMass = (people: PersonDisplayedInfo[]): PersonDisplayedInfo[] => {
  const peopleWithKnownMass: PersonDisplayedInfo[] = [];
  const peopleWithUnknownMass: PersonDisplayedInfo[] = [];

  people.forEach(person => {
    if (person.mass === UNKNOWN_MASS) {
      peopleWithUnknownMass.push(person);
    } else {
      peopleWithKnownMass.push(person);
    }
  });

  const sortedPeople = peopleWithKnownMass.sort((person1, person2) => parseInt(person1.mass) - parseInt(person2.mass));

  return sortedPeople.concat(peopleWithUnknownMass);
};

export const getPageRoute = (route: string): string =>
  route.substring(0, route.lastIndexOf('/') + 1);

export const extractPersonDisplayInfos = (person: Person): PersonDisplayedInfo => {
  const {
    name,
    height,
    mass,
    hair_color,
    skin_color,
    eye_color,
    birth_year,
    gender
  } = person;

  return {
    name,
    height,
    mass,
    hair_color,
    skin_color,
    eye_color,
    birth_year,
    gender
  };
};
