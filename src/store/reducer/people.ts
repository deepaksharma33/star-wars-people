import type { AnyAction } from 'redux';

import {
  GET_PEOPLE_SUCCESS,
  GET_PEOPLE_FAILURE,
  SORT_PEOPLE_DATA,
  GET_PEOPLE
} from '../../constants/actions/people';

import type { PeopleState } from '../types/people';

import { sortPeopleByMass } from '../../helpers';

const initialState = {
  people: [],
  error: null,
  nextPage: null,
  previousPage: null,
  isLoading: false
};

const people = (
  state: PeopleState = initialState,
  action: AnyAction
): PeopleState => {
  const { type, data } = action;

  switch (type) {
    case GET_PEOPLE: {
      return {
        ...state,
        isLoading: true
      };
    }
    case GET_PEOPLE_SUCCESS: {
      const { next, previous, results } = data;

      return {
        ...state,
        isLoading: false,
        previousPage: previous,
        nextPage: next,
        error: null,
        people: results
      };
    }
    case GET_PEOPLE_FAILURE: {
      const { detail: errorMessage } = data;

      return {
        ...state,
        isLoading: false,
        error: errorMessage
      };
    }
    case SORT_PEOPLE_DATA: {
      return {
        ...state,
        people: sortPeopleByMass(state.people)
      };
    }
    default:
      return state;
  }
};

export default people;
