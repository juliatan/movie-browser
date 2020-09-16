import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { login } from '../api';

export default class LoginScreen extends React.Component {
  state = {
    username: 'username',
    password: 'password',
    errorMessage: '',
  };

  authenticate = async () => {
    if (
      this.state.username === 'username' &&
      this.state.password === 'password'
    ) {
      this.props.navigation.navigate('LoggedIn');
    } else {
      this.setState({ errorMessage: 'Wrong details' });
    }
  };

  // commenting out due to CORS error
  // authenticate = async () => {
  //   try {
  //     const success = await login(this.state.username, this.state.password)
  //     this.props.navigation.navigate('LoggedIn')
  //   } catch (err) {
  //     const errorMessage = err.message
  //     this.setState({errorMessage: errorMessage})
  //   }
  // }

  handleUsernameChange = (username) => {
    this.setState({ username });
    // same as:
    // this.setState({username: username})
  };

  handlePasswordChange = (password) => {
    this.setState({ password });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>{this.state.errorMessage}</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={this.state.username}
          onChangeText={this.handleUsernameChange}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={this.state.password}
          onChangeText={this.handlePasswordChange}
        />
        <Button color="#5f9ea0" title="Log in" onPress={this.authenticate} />
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
  input: {
    borderWidth: '1px',
    borderColor: 'cadetblue',
    borderRadius: '8px',
    padding: '10px',
    width: '50%',
    marginBottom: '10px'
  },
  error: {
    color: 'red',
  }
});
