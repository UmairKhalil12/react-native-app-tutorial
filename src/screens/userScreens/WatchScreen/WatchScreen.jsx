import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const WatchScreen = () => {
  return (
    <View style = {styles.watchView}>
      <Text style = {styles.watchText} >WatchScreen</Text>
    </View>
  )
}

export default WatchScreen

const styles = StyleSheet.create({
  watchView : {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center'
  },
  watchText : {
    fontSize : 20,
    fontWeight : '400',
    color : 'black'
  }
})