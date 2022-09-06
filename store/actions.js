// actions

export const ACTIONS = {
  SET_INIT: 'SET_INIT',
  SET_FETCHING: 'SET_FETCHING',
  SET_USER: 'SET_USER',
  SET_LANGUAGES: 'SET_LANGUAGES',
  SET_SELECTED_LANGUAGE: 'SET_SELECTED_LANGUAGE',
};

// action creators

export const setInit = (status) => {
  console.log(ACTIONS.SET_INIT, status);
  return {
    type: ACTIONS.SET_INIT,
    payload: status,
  };
};

export const setFetching = (status) => {
  console.log(ACTIONS.SET_FETCHING, status);
  return {
    type: ACTIONS.SET_FETCHING,
    payload: status,
  };
};

export const setUser = (user) => {
  console.log(ACTIONS.SET_USER, user);
  return {
    type: ACTIONS.SET_USER,
    payload: user,
  };
};

export const setLanguages = (languages) => {
  console.log(ACTIONS.SET_LANGUAGES);
  return {
    type: ACTIONS.SET_LANGUAGES,
    payload: languages,
  };
};

export const setSelectedlanguage = (language) => {
  console.log(ACTIONS.SET_SELECTED_LANGUAGE, language);
  return {
    type: ACTIONS.SET_SELECTED_LANGUAGE,
    payload: language,
  };
};
