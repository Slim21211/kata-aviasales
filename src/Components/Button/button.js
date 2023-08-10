import React from 'react';

import classes from './button.module.scss';

export const Button = () => {
  const { 'show-tickets': showTickets } = classes;
  return <button className={showTickets}>Показать еще 5 билетов!</button>;
};
