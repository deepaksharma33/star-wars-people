import React, { Fragment } from 'react';
import type { ReactNode, FC } from 'react';

import { humanizeSnakeCase } from '../../helpers';

import './index.css';

interface Props {
  infos: any[]
}

const DisplayInfo: FC<Props> = (props: Props) => {
  const { infos } = props;

  const generateInfoRows = (info: any[]): ReactNode => {
    const entries: Array<[string, any]> = Object.entries(info);

    const header = (
      <tr>
        <th>Key</th>
        <th>Value</th>
      </tr>
    );

    const data =
      entries.map(([key, val]) => (
        <tr key={[key, val].join()}>
          <td>{humanizeSnakeCase(key)}</td>
          <td>{val}</td>
        </tr>
      ));

    return (
      <Fragment>
        {header}
        {data}
        <br></br>
      </Fragment>
    );
  };

  return (
    <table className='info_table'>
      <tbody>
        {
          infos.map(info => generateInfoRows(info))
        }
      </tbody>
    </table>
  );
};

export default DisplayInfo;
