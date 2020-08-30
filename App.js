// import { StatusBar } from 'expo-status-bar'; <- not used in web browser, only mobile
// import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import LoginScreen from './screens/LoginScreen';
import LoggedInTabs from './screens/LoggedInTabs';
import { store, persistor } from './redux/store'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerShown: false
              }}
            >
              <Stack.Screen
                name="Login"
                component={LoginScreen}
              />
              <Stack.Screen
                name="LoggedIn"
                component={LoggedInTabs}
              />
            </Stack.Navigator>
          {/* <StatusBar style="auto" /> */}
          </NavigationContainer>
        </PersistGate>
      </Provider>
    );
  }
}

const Stack = createStackNavigator();
