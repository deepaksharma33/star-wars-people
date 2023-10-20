import React from 'react';
import type { FC } from 'react';

import './index.css';

interface Props {
  page: string | number
}

const PageNumber: FC<Props> = (props: Props) => {
  return <span className='page_number'>Page No:&nbsp;{ props.page }</span>;
};

export default PageNumber;
