import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { movie } from '../mockData';
import Result from '../Result'
import { fetchMovies } from '../api';

class SearchScreen extends React.Component {
  state = {
    movie: movie,
    searchTerm: '',
  }

  componentDidMount () {
    this.getResults()
  }

  getResults = async () => {
    const result = await fetchMovies()
    console.log(result[0])
    this.setState({ movie: result[0]})
  }

  handleSearchTermChange = searchTerm => {
    this.setState({searchTerm})
  }

  render() {
    // imported via useNavigation above. Needed to access navigation property onPress
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
          onPress={() => navigation.navigate('Details', {movie: this.state.movie} )}
        />
        <Result movie={this.state.movie} />
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