import { useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  HomeScreen,
  LoginScreen,
  RegisterScreen,
  SplashScreen,
} from './screens';

import { useReducerWithThunks } from './hooks';
import reducer, { initialState } from './store/reducer';
import { getUser } from './store/thunks';
import AppContext from './store/context';

const { Navigator, Screen } = createNativeStackNavigator();

const App = () => {
  const [state, dispatch] = useReducerWithThunks(reducer, initialState);

  useEffect(() => {
    dispatch(getUser());
  }, []);

  if (state.loading) {
    return <SplashScreen />;
  }

  return (
    <AppContext.Provider value={[state, dispatch]}>
      <NavigationContainer>
        <Navigator>
          {state.user ? (
            <>
              <Screen name='Home' component={HomeScreen} />
            </>
          ) : (
            <>
              <Screen name='Login' component={LoginScreen} />
              <Screen name='Register' component={RegisterScreen} />
            </>
          )}
        </Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
};

export default App;
