import { useContext } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AppRoutes from './AppRoutes';
import AppContext from '../store/context';

import { LoginScreen, RegisterScreen, Languages } from '../screens';

const Stack = createNativeStackNavigator();

const Routes = () => {
  const [state] = useContext(AppContext);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {state.user ? (
          <>
            <Stack.Group>
              <Stack.Screen
                name='Translator'
                component={AppRoutes}
                options={{ headerShown: false }}
              />
            </Stack.Group>
            <Stack.Group screenOptions={{ presentaion: 'modal' }}>
              <Stack.Screen name='Languages' component={Languages} />
            </Stack.Group>
          </>
        ) : (
          <>
            <Stack.Screen name='Login' component={LoginScreen} />
            <Stack.Screen name='Register' component={RegisterScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
