import api from '../utils/api';

import { setItemAsync, deleteItemAsync } from 'expo-secure-store';

import { setLoading, setUser, setLanguages } from './actions';

import { TOKEN_KEY } from '../utils/helpers';

export const getUser = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const { data } = await api.getUser();
    if (data.profile) dispatch(setUser(data.profile));
  } catch (error) {
    console.error(error.message);
    dispatch(setUser(null));
    await deleteItemAsync(TOKEN_KEY);
  } finally {
    dispatch(setLoading(false));
  }
};

export const register = (credentials) => async (dispatch) => {
  try {
    dispatch(setLoading(true));

    const { data } = await api.register(credentials);

    console.log(data);

    if (data.token) {
      api.setAuthHeader(data.token);
      await setItemAsync(TOKEN_KEY, data.token);
    }

    if (data.profile) {
      dispatch(setUser(data.profile));
    }
  } catch (error) {
    console.error(error.message);
    dispatch(setUser(null));
    await deleteItemAsync(TOKEN_KEY);
  } finally {
    dispatch(setLoading(false));
  }
};

export const login = (credentials) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const { data } = await api.login(credentials);

    if (data.error) {
      console.error(data.error);
    }

    if (data.token) {
      api.setAuthHeader(data.token);
      await setItemAsync(TOKEN_KEY, data.token);
    }

    if (data.profile) {
      dispatch(setUser(data.profile));
    }
  } catch (error) {
    console.error(error.message);
    dispatch(setUser(null));
    await deleteItemAsync(TOKEN_KEY);
  } finally {
    dispatch(setLoading(false));
  }
};

export const logout = () => async (dispatch) => {
  try {
    await api.logout();
  } catch (error) {
    console.error(error.message);
  } finally {
    dispatch(setUser(null));
    await deleteItemAsync(TOKEN_KEY);
  }
};

export const getLanguages = () => async (dispatch) => {
  try {
    const { data } = await api.getLanguages();
    if (data) dispatch(setLanguages(data));
  } catch (error) {
    console.error(error.message);
  }
};
