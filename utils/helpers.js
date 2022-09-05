import { getItemAsync } from 'expo-secure-store';

import api from './api';

export const TOKEN_KEY = 'AR_TRANSLATOR_TOKEN';

export const restoreToken = async () => {
  const token = await getItemAsync(TOKEN_KEY);
  if (token) api.setAuthHeader(token);
};
