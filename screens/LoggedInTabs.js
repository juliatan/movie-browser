import 'react-native-gesture-handler';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StackActions } from '@react-navigation/native';
import SettingsScreen from './SettingsScreen';
import MoviesStackScreen from './MoviesStackScreen';

const Tab = createBottomTabNavigator();

// To do: how to force Database click to always show SearchScreen first, not DetailsScreen? -> apparently not possible in v5
// https://github.com/react-navigation/react-navigation/issues/8583

const LoggedInTabs = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Database') {
          iconName = focused ? 'ios-tv' : 'md-tv';
        } else if (route.name === 'Settings') {
          iconName = focused ? 'ios-settings' : 'ios-settings';
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}

    tabBarOptions={{
      activeTintColor: 'teal',
      inactiveTintColor: 'gray',
    }}

  >
    <Tab.Screen name="Database" component={MoviesStackScreen} />
    <Tab.Screen name="Settings" component={SettingsScreen} />
  </Tab.Navigator>
)

export default LoggedInTabs