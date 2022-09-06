import { ACTIONS } from './actions';

export const initialState = {
  init: true,
  fetching: false,
  user: null,
  languages: null,
  selectedLanguage: { code: 'en', name: 'English' },
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_INIT:
      return { ...state, init: action.payload };

    case ACTIONS.SET_FETCHING:
      return { ...state, fetching: action.payload };

    case ACTIONS.SET_USER:
      return { ...state, user: action.payload };

    case ACTIONS.SET_LANGUAGES:
      return { ...state, languages: action.payload };

    case ACTIONS.SET_SELECTED_LANGUAGE:
      return { ...state, selectedLanguage: action.payload };

    default:
      return state;
  }
};

export default reducer;
