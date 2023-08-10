import React from 'react';

import classes from './ticket-back.module.scss';

export const TicketBack = () => {
  const { wrapper, item, 'item-title': itemTitle, 'item-value': itemValue } = classes;
  return (
    <div className={wrapper}>
      <div className={item}>
        <div className={itemTitle}>MOW – HKT</div>
        <div className={itemValue}>10:45 – 08:00</div>
      </div>
      <div className={item}>
        <div className={itemTitle}>В пути</div>
        <div className={itemValue}>21ч 15м</div>
      </div>
      <div className={item}>
        <div className={itemTitle}>2 пересадки</div>
        <div className={itemValue}>HKG, JNB</div>
      </div>
    </div>
  );
};
