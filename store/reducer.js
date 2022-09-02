import { ACTIONS } from './actions';

export const initialState = {
  loading: true,
  user: null,
  languages: null,
  selectedLanguage: { code: 'en', name: 'English' },
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_LOADING:
      return { ...state, loading: action.payload };
    case ACTIONS.SET_USER:
      return { ...state, user: action.payload };
    case ACTIONS.SET_LANUAGES:
      return { ...state, languages: action.payload };
    case ACTIONS.SET_SELECTED_LANGUAGE:
      return { ...state, selectedLanguage: action.payload };
    default:
      return state;
  }
};

export default reducer;
