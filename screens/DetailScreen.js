import 'react-native-gesture-handler';
// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import Result from './Result'

// NEXT STEP - HOW TO GET StateObject to show up here?
const DetailScreen = ({ route, navigation }) => (
  // <AppContext.Consumer>
    // {(stateObject) => (
      <View style={styles.container}>
        <Text>{route.params.movieTitle}</Text>
        {/*<Result movie={stateObject.movie} />
         <StatusBar style="auto" /> */}
      </View>
    // )}
  // </AppContext.Consumer>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default DetailScreen
