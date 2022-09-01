// actions

const ACTIONS = {
  SET_LOADING: 'SET_LOADING',
  SET_USER: 'SET_USER',
};

// action creators

const setLoading = (status) => {
  console.log('SET LOADING: ', status);
  return {
    type: ACTIONS.SET_LOADING,
    payload: status,
  };
};

const setUser = (user) => {
  console.log('SET USER: ', user);
  return {
    type: ACTIONS.SET_USER,
    payload: user,
  };
};

export { setLoading, setUser };
export default ACTIONS;
