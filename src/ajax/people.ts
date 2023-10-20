import axios from 'axios';
import type { AxiosResponse } from 'axios';

import { PEOPLE } from '../constants/apis/people';

export const get = async (page: string): Promise<AxiosResponse> => {
  const url: string = [PEOPLE, page].join('');

  return await axios.get(url);
};
