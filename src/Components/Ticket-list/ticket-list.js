import React from 'react';
import { useSelector } from 'react-redux';

import { Card } from '../Card/card';

export const TicketList = () => {
  let id = 1;
  const tickets = useSelector((state) => state.ticketReducer);

  const formatPrice = (price) => {
    return price.toLocaleString('ru-RU');
  };

  const setTakeOffTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });
  };

  const formatDuration = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}ч ${mins}м`;
  };

  const setLandingTame = (dateString, minutes) => {
    console.log(new Date(dateString));
    const takeOff = new Date(dateString).getTime();
    const landing = new Date(takeOff + minutes * 60000);
    console.log(landing);
    return landing.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });
  };

  const components = tickets.tickets.map((item, index) => {
    const { price, carrier, segments } = item;
    const {
      origin: originIn,
      destination: destinationIn,
      duration: durationIn,
      date: dateIn,
      stops: stopsIn,
    } = segments[0];
    const {
      origin: originBack,
      destination: destinationBack,
      duration: durationBack,
      date: dateBack,
      stops: stopsBack,
    } = segments[1];
    while (index <= 4) {
      return (
        <Card
          priceValue={formatPrice(price)}
          codeIATA={carrier}
          key={id++}
          originIn={originIn}
          destinationIn={destinationIn}
          durationIn={formatDuration(durationIn)}
          stopsIn={stopsIn}
          takeOffTimeIn={setTakeOffTime(dateIn)}
          landingTameIn={setLandingTame(dateIn, durationIn)}
          originBack={originBack}
          destinationBack={destinationBack}
          durationBack={formatDuration(durationBack)}
          stopsBack={stopsBack}
          takeOffTimeBack={setTakeOffTime(dateBack)}
          landingTameBack={setLandingTame(dateIn, durationBack)}
        />
      );
    }
  });

  if (!tickets.tickets.length && tickets.error) {
    return <div style={{ marginBottom: 20, textAlign: 'center' }}>Something has gone wrong... Try again later!</div>;
  }
  if (!tickets.tickets.length) {
    return <div style={{ marginBottom: 20, textAlign: 'center' }}>Loading...</div>;
  } else {
    return <>{components}</>;
  }
};
