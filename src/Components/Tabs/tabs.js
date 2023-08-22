import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setSorting } from '../../Actions/sorting-actions';

import classes from './tabs.module.scss';

export const Tabs = () => {
  const { active, wrapper, item } = classes;

  const dispatch = useDispatch();
  const sorting = useSelector((state) => state.ticketReducer.sorting);

  const changeTab = (sorting) => {
    dispatch(setSorting(sorting));
  };

  return (
    <div className={wrapper}>
      <div className={sorting === 'cheapest' ? `${item} ${active}` : `${item}`} onClick={() => changeTab('cheapest')}>
        Самый дешевый
      </div>
      <div className={sorting === 'fastest' ? `${item} ${active}` : `${item}`} onClick={() => changeTab('fastest')}>
        Самый быстрый
      </div>
      <div className={sorting === 'optimal' ? `${item} ${active}` : `${item}`} onClick={() => changeTab('optimal')}>
        Оптимальный
      </div>
    </div>
  );
};
