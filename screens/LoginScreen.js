import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const LoginScreen = ({ route, navigation }) => (
  <View style={styles.container}>
    <Button
      title="Click here to log in"
      onPress={() => navigation.navigate('LoggedIn' )}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoginScreen
