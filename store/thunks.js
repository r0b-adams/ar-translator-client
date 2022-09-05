import { setItemAsync, deleteItemAsync } from 'expo-secure-store';

import api from '../utils/api';
import { TOKEN_KEY } from '../utils/helpers';
import { setLoading, setUser, setLanguages } from './actions';

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
