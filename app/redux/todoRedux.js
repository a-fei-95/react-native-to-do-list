/*
  The redux controller
*/

'use strict';

const types = {
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  TOGGLE_ITEM_COMPLETED: 'TOGGLE_ITEM_COMPLETED',
}

const initialState = {
  items: ['Click to remove', 'Learn React Native', 'Write Code', 'Ship App'],
}

export const actionCreators = {
  addItem: (item) => {
    return {type: types.ADD_ITEM, item: item};
  },
  removeItem: (index) => {
    return {type: types.REMOVE_ITEM, index: index};
  }
}

export const reducer = ( state = initialState, action ) => {
  const { items } = state;
  const { type, item, index } = action;

  switch( type ) {
    case types.ADD_ITEM:
    return { ...state, items: [item, ...items] }
    case types.REMOVE_ITEM:
    return { ...state, items: items.filter((item, i) => return i != index) }
    default: {
      return state;
    }
  }
}
