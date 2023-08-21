import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { Card } from '../Card/card';
import { Button } from '../Button/button';

export const TicketList = () => {
  let id = 1;
  const tickets = useSelector((state) => state.ticketReducer.tickets);
  const filters = useSelector((state) => state.ticketReducer.filters);
  const [ticketsToShow, setTicketsToShow] = useState(5);

  const filterTickets = tickets.filter((elem) => {
    if (filters.all) {
      return true;
    }
    const stopsCount = elem.segments[0].stops.length;

    return (
      (filters.withoutStops && stopsCount === 0) ||
      (filters.oneStop && stopsCount === 1) ||
      (filters.twoStops && stopsCount === 2) ||
      (filters.threeStops && stopsCount === 3)
    );
  });

  const visibleTickets = filterTickets.slice(0, ticketsToShow);

  const showMoreTickets = () => {
    console.log(ticketsToShow);
    setTicketsToShow(ticketsToShow + 5);
  };

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
    const takeOff = new Date(dateString).getTime();
    const landing = new Date(takeOff + minutes * 60000);
    return landing.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });
  };

  const components = visibleTickets.map((item) => {
    console.log(item);
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
  });

  if (!tickets.length && tickets.error) {
    return <div style={{ marginBottom: 20, textAlign: 'center' }}>Something has gone wrong... Try again later!</div>;
  }
  if (!tickets.length) {
    return <div style={{ marginBottom: 20, textAlign: 'center' }}>Loading...</div>;
  } else {
    return (
      <>
        {!components.length ? (
          <div style={{ marginBottom: 20, textAlign: 'center' }}>No tickets with such filters...</div>
        ) : (
          components
        )}
        {!components.length ? null : <Button onClick={showMoreTickets} />}
      </>
    );
  }
};
