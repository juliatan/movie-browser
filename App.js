import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { movie } from './mockData';
import Result from './Result'

const AppContext = React.createContext({});

export default class App extends React.Component {
  state = {
    movie: movie,
    searchTerm: '',
  }

  handleSearchTermChange = searchTerm => {
    this.setState({searchTerm})
  }

  render() {
    return (
      <AppContext.Provider value={{...this.state, handleSearchTermChange: this.handleSearchTermChange}}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Welcome to the Movie Database" }}>
            </Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </AppContext.Provider>
    );
  }
}

const Stack = createStackNavigator();

const HomeScreen = ({ navigation, route }) => (
  <AppContext.Consumer>
    {(stateObject) => (
      <View style={styles.container}>
        <TextInput
          placeholder="Search"
          value={stateObject.searchTerm}
          onChangeText={stateObject.handleSearchTermChange}
        />
        <Result movie={stateObject.movie} />
        <StatusBar style="auto" />
      </View>
    )}
  </AppContext.Consumer>
);

{/*
function HomeScreen() {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search"
        value={this.state.searchTerm}
        onChangeText={this.handleSearchTermChange}
      />
      <Result movie={this.state.movie} />
      <StatusBar style="auto" />
    </View>
  );
}
*/}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
