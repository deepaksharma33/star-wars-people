import React from 'react';
import { useNavigate } from 'react-router-dom';
import type { Dispatch, SetStateAction, FC } from 'react';

import './index.css';

interface Props {
  pageRoute: string
  currentPage: string
  previousPage: string | null
  nextPage: string | null
  onPageUpdate: Dispatch<SetStateAction<string>>
}

const NavigationButtons: FC<Props> = (props) => {
  const navigate = useNavigate();

  const { currentPage, previousPage, nextPage, pageRoute, onPageUpdate } = props;

  const updatePageNumber = (page: number | string): void => {
    if (page !== 0) {
      onPageUpdate(page.toString());
      navigate([pageRoute, page].join(''));
    }
  };

  return (
    <div className='navigation_wrapper'>
      <button
        disabled={previousPage === null}
        className='primary_button navigation_prev'
        onClick={() => { updatePageNumber(parseInt(currentPage) - 1); }}>
        <span>Previous</span>
      </button>
      <button
        disabled={nextPage === null}
        className='primary_button navigation_next'
        onClick={() => { updatePageNumber(parseInt(currentPage) + 1); }}>
        <span>Next</span>
      </button>
    </div>
  );
};

export default NavigationButtons;
