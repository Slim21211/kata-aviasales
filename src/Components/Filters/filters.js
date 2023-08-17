import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { FiltersItem } from '../Filters-item/filters-item';
import { swithOne } from '../../actions';

import classes from './filters.module.scss';

export const Filters = () => {
  const { title, wrapper } = classes;

  const dispatch = useDispatch();
  const filter = useSelector((state) => state.checkboxReducer.filters);

  const onCheked = (id) => {
    dispatch(swithOne(id));
  };

  const components = filter.map((item) => {
    const { title, id, isActive } = item;
    return <FiltersItem title={title} key={id} isActive={isActive} onCheked={() => onCheked(id)} />;
  });

  return (
    <div className={wrapper}>
      <h3 className={title}>Количество пересадок</h3>
      <ul>{components}</ul>
    </div>
  );
};
