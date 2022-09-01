import ACTIONS from './actions';

export const initialState = {
  loading: true,
  user: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_LOADING:
      return { ...state, loading: action.payload };
    case ACTIONS.SET_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export default reducer;
