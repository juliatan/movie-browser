import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';

// const Result = props => (
//   <View style={styles.result}>
//     <Text>{props.movie.Title}</Text>
//     <Text>{props.movie.Year}</Text>
//   </View>
// )
// NOTE: changed to function to enable navigation hook
const Result = (props) => {
  const navigation = useNavigation(); // navigation hook

  return (
    <TouchableOpacity
      style={styles.result}
      onPress={() => navigation.navigate('Details', { movie: props.movie })}
    >
      <Text>{props.movie.Title}</Text>
      <Text>{props.movie.Year}</Text>
    </TouchableOpacity>
  );
};

Result.propTypes = {
  movie: PropTypes.object,
};

const styles = StyleSheet.create({
  result: { padding: 20 },
});

export default Result;
