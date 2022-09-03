import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import { HomeScreen, MainScreen, SettingsScreen } from '../screens';

const Tab = createBottomTabNavigator();

const AppRoutes = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
      }}
    >
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <FontAwesome
                name='home'
                size={24}
                color={focused ? '#108CC6' : 'black'}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name='Camera'
        component={MainScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name='camera-sharp'
              size={24}
              color={focused ? '#108CC6' : 'black'}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Settings'
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name='settings'
              size={24}
              color={focused ? '#108CC6' : 'black'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppRoutes;
