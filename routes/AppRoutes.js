import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeScreen, MainScreen, SettingsScreen } from '../screens';
import { HomeIcon, CameraIcon, SettingsIcon } from '../components';

const Tab = createBottomTabNavigator();

const AppRoutes = () => {
  return (
    <Tab.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          tabBarIcon: HomeIcon,
        }}
      />

      <Tab.Screen
        name='Camera'
        component={MainScreen}
        options={{
          headerShown: false,
          tabBarIcon: CameraIcon,
        }}
      />

      <Tab.Screen
        name='Settings'
        component={SettingsScreen}
        options={{
          tabBarIcon: SettingsIcon,
        }}
      />
    </Tab.Navigator>
  );
};

export default AppRoutes;
