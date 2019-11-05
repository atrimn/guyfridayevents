import React from 'react'
import {View, StyleSheet} from 'react-native'
import {Thumbnail, Text} from 'native-base'

export default props => {
  return (
    <View style={styles.container}>
      <Thumbnail
        large
        style={styles.profilePicture}
        source={{
          uri:
            'https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-1/p160x160/60790112_10214472230105343_8906543629552582656_n.jpg?_nc_cat=108&_nc_oc=AQk7czF3juaBxGp87svK4iv8vavV9Yh44JLOGDrbJU0FkA_DTdqkMevQX607auWkY0I&_nc_ht=scontent-lga3-1.xx&oh=7758c79e9563d856a78ef6832e8427ac&oe=5E517F4D',
        }}></Thumbnail>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    marginTop: 100,
    marginVertical: 8,
    borderRadius: 10,
    width: '100%',
    position: 'relative',
    backgroundColor: 'rgba(240,240,240,0.7)',
  },
  profilePicture: {
    position: 'absolute',
    top: -30,
    left: 20,
    backgroundColor: 'red',
    alignSelf: 'center',
  },
})
