import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeScreen, MainScreen, SettingsScreen } from '../screens';

const Tab = createBottomTabNavigator();

const AppRoutes = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name='Home' component={HomeScreen} />
      <Tab.Screen name='Main' component={MainScreen} />
      <Tab.Screen name='Settings' component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default AppRoutes;
