import React from 'react';

import { TicketIn } from '../Ticket-in/ticket-in';
import { TicketBack } from '../Ticket-back/ticket-back';

import classes from './card.module.scss';

export const Card = ({
  priceValue,
  codeIATA,
  originIn,
  destinationIn,
  durationIn,
  stopsIn,
  takeOffTimeIn,
  landingTameIn,
  originBack,
  destinationBack,
  durationBack,
  stopsBack,
  takeOffTimeBack,
  landingTameBack,
}) => {
  const { wrapper, title, price } = classes;
  return (
    <div className={wrapper}>
      <div className={title}>
        <div className={price}>{priceValue}</div>
        <img src={`http://pics.avs.io/99/36/${codeIATA}.png`} alt="logo"></img>
      </div>
      <TicketIn
        originIn={originIn}
        destinationIn={destinationIn}
        durationIn={durationIn}
        stopsIn={stopsIn}
        takeOffTimeIn={takeOffTimeIn}
        landingTameIn={landingTameIn}
      />
      <TicketBack
        originBack={originBack}
        destinationBack={destinationBack}
        durationBack={durationBack}
        stopsBack={stopsBack}
        takeOffTimeBack={takeOffTimeBack}
        landingTameBack={landingTameBack}
      />
    </div>
  );
};
