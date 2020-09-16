import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Result from './Result';

// react-native requires the argument to be called 'item'. Subbing 'movie' in doesn't work
// See https://reactnative.dev/docs/flatlist
const renderItem = ({ item }) => {
  return (
    <Result movie={item} />
  );
};

// this is a nice one liner alternative if Result took separate properties for Title and Year say
// const renderItem = ({item}) => <Result {...item} />

const ListMovies = props => 
  <FlatList style={styles.flatlist}
    renderItem={renderItem}
    data={props.movies}
    keyExtractor={(movie) => movie.imdbID} 
    key={(movie) => movie.imdbID} 
    onEndReachedThreshold={0.5}
    onEndReached={props.loadMoreMovies}
  />

ListMovies.propTypes = {
  movies: PropTypes.array,
}

const styles = StyleSheet.create({
  flatlist: {
    flex: 1,
    backgroundColor: 'cyan',
  },
});

export default ListMovies;