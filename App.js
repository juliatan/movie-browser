// import { StatusBar } from 'expo-status-bar'; <- not used in web browser, only mobile
// import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import LoggedInTabs from './screens/LoggedInTabs';

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
      {/* <StatusBar style="auto" /> */}
      </NavigationContainer>
    );
  }
}

const Stack = createStackNavigator();
