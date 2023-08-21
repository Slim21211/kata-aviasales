import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { toggleFilter, setAllFilters, clearAllFilters } from '../../Actions/checkbox-actions';

import classes from './filters.module.scss';

export const Filters = () => {
  const {
    title,
    wrapper,
    check,
    'check-box': checkBox,
    'check-input': checkInput,
    name,
    'wrapper-item': wrapperItem,
  } = classes;

  const dispatch = useDispatch();
  const filters = useSelector((state) => state.ticketReducer.filters);

  const onCheked = (filter) => {
    if (filter === 'all') {
      if (!filters.all) {
        dispatch(setAllFilters());
      } else {
        dispatch(clearAllFilters());
      }
    } else {
      if (filter === 'withoutStops' && filters.oneStop && filters.twoStops && filters.threeStops) {
        dispatch(toggleFilter('all'));
      }
      if (filter === 'oneStop' && filters.withoutStops && filters.twoStops && filters.threeStops) {
        dispatch(toggleFilter('all'));
      }
      if (filter === 'twoStops' && filters.withoutStops && filters.oneStop && filters.threeStops) {
        dispatch(toggleFilter('all'));
      }
      if (filter === 'threeStops' && filters.withoutStops && filters.oneStop && filters.twoStops) {
        dispatch(toggleFilter('all'));
      }

      dispatch(toggleFilter(filter));
    }
  };

  return (
    <div className={wrapper}>
      <h3 className={title}>Количество пересадок</h3>
      <div className={wrapperItem}>
        <label className={check}>
          <input checked={filters.all} className={checkInput} type="checkbox" onChange={() => onCheked('all')} />
          <span className={checkBox}></span>
          <span className={name}>Все</span>
        </label>
      </div>
      <div className={wrapperItem}>
        <label className={check}>
          <input
            checked={filters.withoutStops}
            className={checkInput}
            type="checkbox"
            onChange={() => onCheked('withoutStops')}
          />
          <span className={checkBox}></span>
          <span className={name}>Без пересадок</span>
        </label>
      </div>
      <div className={wrapperItem}>
        <label className={check}>
          <input
            checked={filters.oneStop}
            className={checkInput}
            type="checkbox"
            onChange={() => onCheked('oneStop')}
          />
          <span className={checkBox}></span>
          <span className={name}>1 пересадка</span>
        </label>
      </div>
      <div className={wrapperItem}>
        <label className={check}>
          <input
            checked={filters.twoStops}
            className={checkInput}
            type="checkbox"
            onChange={() => onCheked('twoStops')}
          />
          <span className={checkBox}></span>
          <span className={name}>2 пересадки</span>
        </label>
      </div>
      <div className={wrapperItem}>
        <label className={check}>
          <input
            checked={filters.threeStops}
            className={checkInput}
            type="checkbox"
            onChange={() => onCheked('threeStops')}
          />
          <span className={checkBox}></span>
          <span className={name}>3 пересадки</span>
        </label>
      </div>
    </div>
  );
};
