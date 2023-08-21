import React from 'react';

import classes from './ticket-in.module.scss';

export const TicketIn = ({ originIn, destinationIn, durationIn, stopsIn, takeOffTimeIn, landingTameIn }) => {
  const { wrapper, item, 'item-title': itemTitle, 'item-value': itemValue } = classes;
  return (
    <div className={wrapper}>
      <div className={item}>
        <div className={itemTitle}>{`${originIn} – ${destinationIn}`}</div>
        <div className={itemValue}>{`${takeOffTimeIn} - ${landingTameIn}`}</div>
      </div>
      <div className={item}>
        <div className={itemTitle}>В пути</div>
        <div className={itemValue}>{durationIn}</div>
      </div>
      <div className={item}>
        <div className={itemTitle}>
          {!stopsIn.length
            ? 'Без пересадок'
            : `${stopsIn.length} пересадки` && stopsIn.length === 1
            ? `${stopsIn.length} пересадка`
            : `${stopsIn.length} пересадки`}
        </div>
        <div className={itemValue}>{`${stopsIn}`}</div>
      </div>
    </div>
  );
};
