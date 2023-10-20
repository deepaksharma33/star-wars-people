import React, { Fragment, useEffect, useState } from 'react';
import type { FC, ReactNode } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useLocation } from 'react-router-dom';

import type { store } from '../../store';

import Loader from '../../components/loader';
import PageNumber from '../../components/pageNumber';
import DisplayInfo from '../../components/displayInfo';
import NavigationButtons from '../../components/navigationButtons';

import { getPageRoute } from '../../helpers';
import { getPeople } from '../../store/actions/people';
import { pageInfos, peopleInfo } from '../../selectors/people';

import { SORT_PEOPLE_DATA } from '../../constants/actions/people';

import './index.css';

const People: FC = () => {
  const { page } = useParams();

  const location = useLocation();
  const [currentPage, setCurrentPage] = useState<string>(page!);
  const storeDispatch: typeof store.dispatch = useDispatch();

  const people = useSelector(() => peopleInfo());
  const { previousPage, nextPage, isLoading, error } = useSelector(() => pageInfos());

  const pageRoute = getPageRoute(location.pathname);

  useEffect(() => {
    getPeople(page!, storeDispatch);
  }, [currentPage]);

  const sortPeopleByMass = (): void => {
    storeDispatch({ type: SORT_PEOPLE_DATA, data: people });
  };

  const infoComponent = (): ReactNode => {
    if (error !== null) {
      return <span className='error_message'>{error}</span>;
    }

    if (isLoading) {
      return <Loader/>;
    } else {
      return <DisplayInfo infos={people} />;
    }
  };

  return (
    <Fragment>
      <button
        disabled={people.length === 0}
        className='primary_button sort_button'
        onClick={() => { sortPeopleByMass(); }}>
        Sort By Mass
      </button>
      {infoComponent()}
      <NavigationButtons
        pageRoute={pageRoute}
        currentPage={currentPage}
        previousPage={previousPage}
        nextPage={nextPage}
        onPageUpdate={setCurrentPage}
      ></NavigationButtons>
      <PageNumber page={page!}/>
    </Fragment>
  );
};

export default People;
