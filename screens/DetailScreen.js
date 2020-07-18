import 'react-native-gesture-handler';
// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Result from '.././Result'

const DetailScreen = ({ route, navigation }) => (
  <View style={styles.container}>
    <Text>{route.params.movie.Title}</Text>
    <Result movie={route.params.movie} />
    {/* <StatusBar style="auto" /> */}
  </View>
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
