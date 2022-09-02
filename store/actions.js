// actions

export const ACTIONS = {
  SET_LOADING: 'SET_LOADING',
  SET_USER: 'SET_USER',
  SET_LANUAGES: 'SET_LANUAGES',
  SET_SELECTED_LANGUAGE: 'SET_SELECTED_LANGUAGE',
};

// action creators

export const setLoading = (status) => {
  return {
    type: ACTIONS.SET_LOADING,
    payload: status,
  };
};

export const setUser = (user) => {
  return {
    type: ACTIONS.SET_USER,
    payload: user,
  };
};

export const setLanguages = (languages) => {
  return {
    type: ACTIONS.SET_LANUAGES,
    payload: languages,
  };
};

export const setSelectedlanguage = (language) => {
  return {
    type: ACTIONS.SET_SELECTED_LANGUAGE,
    payload: language,
  };
};
