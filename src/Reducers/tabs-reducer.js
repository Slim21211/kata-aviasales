const defaultState = {
  tabs: [
    { title: 'Самый дешевый', id: 1, isActive: true },
    { title: 'Самый быстрый', id: 2, isActive: false },
    { title: 'Оптимальный', id: 3, isActive: false },
  ],
};

export const tabsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'CHANGE_TAB':
      return {
        ...state,
        tabs: state.tabs.map((item) =>
          item.id === action.payload
            ? Object.assign({}, { title: item.title, id: item.id, isActive: !item.isActive })
            : Object.assign({}, { title: item.title, id: item.id, isActive: false })
        ),
      };
    default:
      return state;
  }
};
