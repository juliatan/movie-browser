import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { movie } from '../mockData';
import ListMovies from '../ListMovies'
import { fetchMovies } from '../api';

class SearchScreen extends React.Component {
  state = {
    movies: null,
    searchTerm: '',
  }

  componentDidMount () {
    this.getResults(this.state.searchTerm)
  }

  getResults = async (searchTerm) => {
    const results = await fetchMovies(searchTerm)
    this.setState({ movies: results})
  }

  handleSearchTermChange = searchTerm => {
    this.setState({searchTerm})
  }

  render() {
    // imported via useNavigation above. Needed to access navigation property onPress
    // note below code no longer works due to nested navigation - need to fix
    const { navigation } = this.props;

    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => alert('pressed a button')} title="Add a new movie" />
      ),
    });

    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Enter movie name"
          value={this.state.searchTerm}
          onChangeText={this.handleSearchTermChange}
        />
        <Button
          title="Search"
          onPress={() => this.getResults(this.state.searchTerm)}
        />
        <Button
          title="Details"
          onPress={() => navigation.navigate('Details', {movie: this.state.movies[0]} )}
        />
        <ListMovies movies={this.state.movies} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SearchScreen;