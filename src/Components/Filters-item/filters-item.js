import React from 'react';

import classes from './filters-item.module.scss';

export const FiltersItem = ({ title, isActive, onCheked }) => {
  const { check, 'check-box': checkBox, 'check-input': checkInput, name, wrapper } = classes;

  return (
    <div className={wrapper}>
      <form onSubmit={(e) => console.log(e)}>
        <label className={check}>
          <input checked={isActive} className={checkInput} type="checkbox" value={title} onChange={onCheked} />
          <span className={checkBox}></span>
          <span className={name}>{title}</span>
        </label>
        <button type="submit"></button>
      </form>
    </div>
  );
};
