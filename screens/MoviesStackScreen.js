import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from './SearchScreen';
import DetailScreen from './DetailScreen';

const MoviesStack = createStackNavigator();

const MoviesStackScreen = () => (
  <MoviesStack.Navigator>
    <MoviesStack.Screen
      name="Search"
      component={SearchScreen}
      options={{
        headerShown: false,
      }}
    />
    <MoviesStack.Screen
      name="Details"
      component={DetailScreen}
      // note route.params comes from onPress of Result component
      options={({ route }) => ({
        title: `${route.params.movie.Title} - Details`,
        headerStyle: { backgroundColor: 'orange' },
      })}
    />
  </MoviesStack.Navigator>
);

export default MoviesStackScreen;
