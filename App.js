import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import LoggedInTabs from './screens/LoggedInTabs';

// To do: figure out what import 'react-native-gesture-handler'; is for?

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
          />
          <Stack.Screen
            name="LoggedIn"
            component={LoggedInTabs}
            options={{
              title: "Welcome to the Movie Database",
              headerStyle: { backgroundColor: 'teal', },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const Stack = createStackNavigator();
