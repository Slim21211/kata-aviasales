import React from 'react';

import { FiltersItem } from '../Filters-item/filters-item';

import classes from './filters.module.scss';

export const Filters = () => {
  const { title, wrapper } = classes;
  return (
    <div className={wrapper}>
      <h3 className={title}>Количество пересадок</h3>
      <ul>
        <FiltersItem text={'Все'} />
        <FiltersItem text={'Без пересадок'} />
        <FiltersItem text={'1 пересадка'} />
        <FiltersItem text={'2 пересадки'} />
        <FiltersItem text={'3 пересадки'} />
      </ul>
    </div>
  );
};
