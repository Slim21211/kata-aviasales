import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import classes from './tabs.module.scss';

export const Tabs = () => {
  const { active, wrapper, item } = classes;

  const dispatch = useDispatch();
  const tabs = useSelector((state) => state.tabsReducer.tabs);

  const onChangeTab = (id) => {
    dispatch({ type: 'CHANGE_TAB', payload: id });
  };

  const components = tabs.map((elem) => {
    const { title, id, isActive } = elem;
    return (
      <div className={isActive ? `${item} ${active}` : `${item}`} id={id} key={title} onClick={() => onChangeTab(id)}>
        {title}
      </div>
    );
  });
  return <div className={wrapper}>{components}</div>;
};
