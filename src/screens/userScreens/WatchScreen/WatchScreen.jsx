import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenTopBar from '../../../components/ScreenTopBar/ScreenTopBar'

const WatchScreen = ({ navigation }) => {
  return (
    <>
      <ScreenTopBar title='Video' />
      <View style={styles.watchView}>
        <Text style={styles.watchText} >WatchScreen</Text>
      </View>
    </>
  )
}

export default WatchScreen

const styles = StyleSheet.create({
  watchView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  watchText: {
    fontSize: 20,
    fontWeight: '400',
    color: 'black'
  }
})