import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Result from '../Result';

const DetailScreen = ({ route, navigation }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{route.params.movie.Title}</Text>
    <Text style={styles.year}>Released in: {route.params.movie.Year}</Text>
    <Image
      style={styles.poster}
      source={{
        uri: route.params.movie.Poster
      }}
    />
    {/* <Result movie={route.params.movie} /> */}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: '2rem',
    marginBottom: '20px'
  },
  year: {
    marginBottom: '40px',
    fontSize: '1.5rem'
  },
  poster: {
    width: '150px',
    height: '200px'
  }
});

export default DetailScreen;
