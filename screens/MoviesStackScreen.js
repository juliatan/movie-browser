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
      // To do: this no longer works - figure out how to connect it
      options={{
        title: "Welcome to the Movie Database",
        headerStyle: { backgroundColor: 'teal', },
        tabBarLabel: 'Movies!!'
      }}
    />
    <MoviesStack.Screen
      name="Details"
      component={DetailScreen}
      // note route.params comes from onPress button in Home screen
      // To do: this no longer works - figure out how to connect it
      options={( {route} ) => ({ 
        title: `${route.params.movie.Title} - Details`,
        headerStyle: { backgroundColor: 'orange'}
      })}
    />
  </MoviesStack.Navigator>
)

export default MoviesStackScreen