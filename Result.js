import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types'
import { useNavigation } from '@react-navigation/native';


const styles = StyleSheet.create({
  result: { padding: 20 },
})

// const Result = props => (
//   <View style={styles.result}>
//     <Text>{props.movie.Title}</Text>
//     <Text>{props.movie.Year}</Text>
//   </View> 
// )

// NOTE: changed to function to enable navigation hook
const Result = (props) => {
  const navigation = useNavigation();

  return (
    <View style={styles.result}>
      <Text onPress={() => navigation.navigate('Details', {movie: props.movie})}>{props.movie.Title}</Text>
      <Text>{props.movie.Year}</Text>
    </View>
  )
}

Result.propTypes = {
  movie: PropTypes.object
}

export default Result