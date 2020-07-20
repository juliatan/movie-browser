import 'react-native-gesture-handler';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SettingsScreen from './SettingsScreen';
import MoviesStackScreen from './MoviesStackScreen';

const Tab = createBottomTabNavigator();

// To do: how to force Database click to always show SearchScreen first, not DetailsScreen?
// To do: Icons for tabs

const LoggedInTabs = () => (
  <Tab.Navigator>
    <Tab.Screen name="Database" component={MoviesStackScreen} />
    <Tab.Screen name="Settings" component={SettingsScreen} />
  </Tab.Navigator>
)

export default LoggedInTabs