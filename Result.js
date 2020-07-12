import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  result: { padding: 20 },
})

const Result = props => (
  <View style={styles.result}>
    <Text>{props.movie.Title}</Text>
    <Text>{props.movie.Year}</Text>
  </View>
)

Result.propTypes = {
  movie: PropTypes.object
}

export default Result