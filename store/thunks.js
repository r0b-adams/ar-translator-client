import api from '../utils/api';
import { setLoading, setUser } from './actions';

const handleErr = (err) => {
  console.err(err);
  dispatch(setUser(null));
};

export const getUser = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
  } catch (err) {
    handleErr(err);
  } finally {
    dispatch(setLoading(false));
  }
};

const register = (credentials) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
  } catch (err) {
    handleErr(err);
  } finally {
    dispatch(setLoading(false));
  }
};

const login = async (credentials) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
  } catch (err) {
    handleErr(err);
  } finally {
    dispatch(setLoading(false));
  }
};

const logout = async () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
  } catch (err) {
    handleErr(err);
  } finally {
    dispatch(setLoading(false));
  }
};
