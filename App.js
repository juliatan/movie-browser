import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen'
import DetailScreen from './screens/DetailScreen'

export default class App extends React.Component {

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: "Welcome to the Movie Database",
              headerStyle: { backgroundColor: 'teal', },
            }}
          />
          <Stack.Screen
            name="Details"
            component={DetailScreen}
            // note route.params comes from onPress button in Home screen
            options={( {route} ) => ({ 
              title: `${route.params.movie.Title} - Details`,
              headerStyle: { backgroundColor: 'orange'}
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const Stack = createStackNavigator();