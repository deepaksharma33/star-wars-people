import type { Dispatch } from 'redux';

import * as People from '../../ajax/people';

import { GET_PEOPLE, GET_PEOPLE_FAILURE, GET_PEOPLE_SUCCESS } from '../../constants/actions/people';

export const getPeople = (page: string, dispatch: Dispatch): void => {
  dispatch({ type: GET_PEOPLE });

  People.get(page)
    .then((res) => {
      dispatch({ type: GET_PEOPLE_SUCCESS, data: res.data });
    })
    .catch((err) => {
      dispatch({ type: GET_PEOPLE_FAILURE, data: err.response.data });
    });
};
