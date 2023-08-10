import React from 'react';

import classes from './filters-item.module.scss';

export const FiltersItem = ({ text }) => {
  const { check, 'check-box': checkBox, 'check-input': checkInput, name, wrapper } = classes;
  return (
    <div className={wrapper}>
      <label className={check}>
        <input className={checkInput} type="checkbox" value={text} />
        <span className={checkBox}></span>
        <span className={name}>{text}</span>
      </label>
    </div>
  );
};
