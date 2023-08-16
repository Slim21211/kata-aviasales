import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { FiltersItem } from '../Filters-item/filters-item';

import classes from './filters.module.scss';

export const Filters = () => {
  const { title, wrapper } = classes;

  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters);
  console.log(filter);

  const onCheked = (id) => {
    dispatch({ type: 'SWITCH_ONE', payload: id });
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
