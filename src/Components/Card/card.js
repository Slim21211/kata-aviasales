import React from 'react';

import { TicketIn } from '../Ticket-in/ticket-in';
import { TicketBack } from '../Ticket-back/ticket-back';

import classes from './card.module.scss';

export const Card = () => {
  const { wrapper, title, price } = classes;
  return (
    <div className={wrapper}>
      <div className={title}>
        <div className={price}>13 400 P</div>
        <img src="#" alt="logo"></img>
      </div>
      <TicketIn />
      <TicketBack />
    </div>
  );
};
