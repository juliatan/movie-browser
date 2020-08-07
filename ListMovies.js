import React from 'react';
import { FlatList } from 'react-native';
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

const ListMovies = props => <FlatList renderItem={renderItem} data={props.movies} keyExtractor={(movie) => movie.imdbID} />

ListMovies.propTypes = {
  movies: PropTypes.array,
}

export default ListMovies;