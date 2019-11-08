import React, {useEffect} from 'react'
import {View, StyleSheet, Dimensions, Image} from 'react-native'
// import {Thumbnail, Text} from 'native-base'

const {width, height} = Dimensions.get('window')
const imgurl = 'https://avatars3.githubusercontent.com/u/29229355?s=460&v=4'

export default props => {
  useEffect(() => {
    // console.warn(width)
  })
  return (
    <View style={styles.container}>
      <Image style={{flex: 1}} source={{uri: imgurl}} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: height * 0.15,
    width: height * 0.15,
    borderRadius: (height * 0.15) / 2,
    borderWidth: 1,
    borderColor: 'rgba(200,200,200,1)',
    overflow: 'hidden',
  },
})
