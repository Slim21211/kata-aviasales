import React from 'react';

import classes from './ticket-back.module.scss';

export const TicketBack = ({
  originBack,
  destinationBack,
  durationBack,
  stopsBack,
  takeOffTimeBack,
  landingTameBack,
}) => {
  const { wrapper, item, 'item-title': itemTitle, 'item-value': itemValue } = classes;
  return (
    <div className={wrapper}>
      <div className={item}>
        <div className={itemTitle}>{`${originBack} – ${destinationBack}`}</div>
        <div className={itemValue}>{`${takeOffTimeBack} - ${landingTameBack}`}</div>
      </div>
      <div className={item}>
        <div className={itemTitle}>В пути</div>
        <div className={itemValue}>{durationBack}</div>
      </div>
      <div className={item}>
        <div className={itemTitle}>
          {!stopsBack.length
            ? 'Без пересадок'
            : `${stopsBack.length} пересадки` && stopsBack.length === 1
            ? `${stopsBack.length} пересадка`
            : `${stopsBack.length} пересадки`}
        </div>
        <div className={itemValue}>{`${stopsBack}`}</div>
      </div>
    </div>
  );
};
