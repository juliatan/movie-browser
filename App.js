import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
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
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                title: "Welcome to the Movie Database",
                headerStyle: {
                  backgroundColor: 'teal',
                },
                
              }}
            />
            <Stack.Screen
              name="Details"
              component={DetailScreen}
              options={( {route} ) => ({ title: `${route.params.movieTitle} - Details` })}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </AppContext.Provider>
    );
  }
}

const Stack = createStackNavigator();

const HomeScreen = ({ route, navigation }) => (

  navigation.setOptions({
    headerRight: () => (
      <Button onPress={() => alert('pressed a button')} title="Add a new movie" />
    ),
  }),
  
  <AppContext.Consumer>

    {(stateObject) => (
      <View style={styles.container}>
        <TextInput
          placeholder="Enter movie name"
          value={stateObject.searchTerm}
          onChangeText={stateObject.handleSearchTermChange}
        />
        <Button
          title="Search"
          onPress={() => navigation.navigate('Details', {movieTitle: stateObject.movie.Title} )}
        />
        <Result movie={stateObject.movie} />
        {/* <StatusBar style="auto" /> */}
      </View>
    )}
  </AppContext.Consumer>
);

const DetailScreen = ({ route, navigation }) => (
  <AppContext.Consumer>
    {(stateObject) => (
      <View style={styles.container}>
        <Text>{route.params.movieTitle}</Text>
        {/*<Result movie={stateObject.movie} />
         <StatusBar style="auto" /> */}
      </View>
    )}
  </AppContext.Consumer>
);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
