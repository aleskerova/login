export function createReducer(handlers, initialState) {
  return function reducer(state = initialState, action) {
    if (Reflect.has(handlers, action.type)) {
      return handlers[action.type](state, action);
    }
    return state;
  };
}
