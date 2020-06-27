import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { movie } from './mockData';
import Result from './Result'

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
      <View style={styles.container}>
        <TextInput
          placeholder="Search"
          value={this.state.searchTerm}
          onChangeText={this.handleSearchTermChange}
        />
        <Result movie={this.state.movie} />
        <StatusBar style="auto" />
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
