import React from 'react';
import { connect } from 'react-redux';

import { changeTab } from '../../Actions/actions';

import classes from './tabs.module.scss';

const Tabs = ({ tabs, changeTab }) => {
  const { active, wrapper, item } = classes;

  const components = tabs.map((elem) => {
    const { title, id, isActive } = elem;
    return (
      <div className={isActive ? `${item} ${active}` : `${item}`} id={id} key={title} onClick={() => changeTab(id)}>
        {title}
      </div>
    );
  });
  return <div className={wrapper}>{components}</div>;
};

const mapStateToProps = (state) => {
  return { tabs: state.tabsReducer.tabs };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeTab: (payload) => dispatch(changeTab(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
