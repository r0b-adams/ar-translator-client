import { useReducer } from 'react';

const useReducerWithThunks = (reducer, initialState) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const thunkDispatch = (action) => {
    typeof action === 'function' ? action(dispatch) : dispatch(action);
  };

  return [state, thunkDispatch];
};

export default useReducerWithThunks;
