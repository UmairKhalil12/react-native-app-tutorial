import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FriendRequest = () => {
  return (
    <View style = {styles.friendsView} >
      <Text style = {styles.textFriends} >FriendRequest</Text>
    </View>
  )
}

export default FriendRequest

const styles = StyleSheet.create({
  friendsView : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textFriends : {
    fontSize: 20,
    color: 'black',
    fontWeight : '400'
  }

})