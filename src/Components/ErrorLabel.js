import React from 'react'
import {View, StyleSheet} from 'react-native'
import {Text} from 'native-base'

export default ({error}) => {
  if (!error) {
    return null
  }
  return (
    <View style={styles.errorContainer}>
      <Text style={styles.errorText}>{error}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  errorContainer: {
    backgroundColor: 'rgba(255,0,0, 0.7)',
    borderRadius: 2,
    paddingVertical: 4,
  },
  errorText: {
    color: 'white',
    fontWeight: '600',
    textAlign: 'center',
  },
})
