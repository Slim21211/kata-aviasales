import React from 'react';

import { Header } from '../Header/header';
import { Filters } from '../Filters/filters';
import { TicketList } from '../Ticket-list/ticket-list';
import Tabs from '../Tabs/tabs';
import { Button } from '../Button/button';

import classes from './app.module.scss';

export const App = () => {
  const { main, 'main-block': mainBlock } = classes;
  return (
    <div className={main}>
      <Header />
      <div className={mainBlock}>
        <Filters />
        <div className="tickets-wrapper">
          <Tabs />
          <TicketList />
          <Button />
        </div>
      </div>
    </div>
  );
};
