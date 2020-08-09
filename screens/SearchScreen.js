import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { movie } from '../mockData';
import ListMovies from '../ListMovies';
import { fetchMovies } from '../api';

class SearchScreen extends React.Component {
  state = {
    movies: null,
    searchTerm: '',
    pageNumber: 1,
    maxPages: null
  }

  clearOldResults = () => {
    this.setState({
      movies: null,
      searchTerm: '',
      pageNumber: 1,
      maxPages: null
    })
  }

  getResults = async (searchTerm, pageNumber) => {
    try {
      const response = await fetchMovies(searchTerm, pageNumber)
      const results = response.results
      const totalResults = response.totalResults

      this.setState({ 
        movies: pageNumber === 1 ? results : [...this.state.movies, ...results],
        maxPages: (totalResults/10) + 1 // 10 results per page
      })
    } catch (err) {
      console.error('API error')
    }
  }

  loadMoreMovies = () => {
    if (this.state.pageNumber <= this.state.maxPages) {
      this.getResults(this.state.searchTerm, this.state.pageNumber + 1)
      this.setState({
        pageNumber: this.state.pageNumber + 1
      })
    }
  }

  handleSearchTermChange = searchTerm => {
    this.setState({searchTerm})
  }

  render() {
    // imported via useNavigation above. Needed to access navigation property onPress
    const { navigation } = this.props;

    // no longer used since I disabled header bar
    // navigation.setOptions({
    //   headerRight: () => (
    //     <Button onPress={() => alert('pressed a button')} title="Add a new movie" />
    //   ),
    // });

    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Enter movie name"
          value={this.state.searchTerm}
          onChangeText={this.handleSearchTermChange}
        />
        <Button
          title="Clear old results"
          onPress={() => this.clearOldResults()}
        />
        <Button
          title="Search"
          onPress={() => this.getResults(this.state.searchTerm, this.state.pageNumber)}
        />
        <ListMovies movies={this.state.movies} loadMoreMovies={this.loadMoreMovies} />
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