import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { movie } from '.././mockData';
import Result from '.././Result'
import { useNavigation } from '@react-navigation/native';



class HomeScreen extends React.Component {
  state = {
    movie: movie,
    searchTerm: '',
  }

  handleSearchTermChange = searchTerm => {
    this.setState({searchTerm})
  }


  render() {
  const { navigation } = this.props;
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
        {/* <StatusBar style="auto" /> */}
      </View>
    );
  }
}

// const HomeScreen = ({ route, navigation }) => (
//   navigation.setOptions({
//     headerRight: () => (
//       <Button onPress={() => alert('pressed a button')} title="Add a new movie" />
//     ),
//   }),
  
//   <AppContext.Consumer>

//     {(stateObject) => (
//       <View style={styles.container}>
//         <TextInput
//           placeholder="Enter movie name"
//           value={stateObject.searchTerm}
//           onChangeText={stateObject.handleSearchTermChange}
//         />
//         <Button
//           title="Search"
//           onPress={() => navigation.navigate('Details', {movie: stateObject.movie} )}
//         />
//         <Result movie={stateObject.movie} />
//         {/* <StatusBar style="auto" /> */}
//       </View>
//     )}
//   </AppContext.Consumer>
// );

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
// export default withNavigation(HomeScreen);