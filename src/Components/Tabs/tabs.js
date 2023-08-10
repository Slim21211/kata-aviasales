import React from 'react';

import classes from './tabs.module.scss';

export const Tabs = () => {
  const { active, wrapper, item } = classes;
  return (
    <div className={wrapper}>
      <div className={`${item} ${active}`}>Самый дешевый</div>
      <div className={item}>Самый быстрый</div>
      <div className={item}>Оптимальный</div>
    </div>
  );
};
