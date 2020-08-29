import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { movie } from '../mockData';
import ListMovies from '../ListMovies';
// import { fetchMovies } from '../api';
import { connect } from 'react-redux';
import { returnResults } from '../redux/actions'

class SearchScreen extends React.Component {
  state = {
    // movies: null,
    searchTerm: '',
    pageNumber: 1,
    // maxPages: null
  }

  clearOldResults = () => {
    this.setState({
      movies: null,
      searchTerm: '',
      pageNumber: 1,
      maxPages: null
    })
  }

  // getResults = async (searchTerm, pageNumber) => {
  //   try {
  //     const response = await fetchMovies(searchTerm, pageNumber)
  //     const results = response.results
  //     const totalResults = response.totalResults

  //     this.setState({ 
  //       movies: pageNumber === 1 ? results : [...this.state.movies, ...results],
  //       maxPages: (totalResults/10) + 1 // 10 results per page
  //     })
  //   } catch (err) {
  //     console.error('API error')
  //   }
  // }

  getResults = async (searchTerm, pageNumber) => {
    // this invokes function in actions.js
    this.props.returnResults(searchTerm, pageNumber)
  }

  loadMoreMovies = () => {
    if (this.state.pageNumber <= this.props.maxPages) {
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
        <Text style={styles.searchError}>{ this.props.resultsErr }</Text>
        <ListMovies movies={this.props.movies} loadMoreMovies={this.loadMoreMovies} />
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
  searchError: {
    color: 'red',
  }
});

const mapStateToProps = state => ({
  movies: state.results.movies,
  // pageNumber: state.results.pageNumber,
  maxPages: state.results.maxPages,
  resultsErr: state.results.resultsErr,
})

// connect is a higher order component provided by react-redux that allows us to map the various states in the Store 
// via mapStateToProps which I've self-defined. This allows access to state vars via "this.props.xxx"
// connect also allows us to call action "returnResults" in actions.js via "this.props.returnResuls".
// The final argument below is the name of this component.

export default connect(mapStateToProps, {returnResults})(SearchScreen);