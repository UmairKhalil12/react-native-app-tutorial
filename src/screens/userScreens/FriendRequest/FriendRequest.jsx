import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenTopBar from '../../../components/ScreenTopBar/ScreenTopBar'

const FriendRequest = ({ navigation }) => {
  return (
    <>
    <ScreenTopBar title='Friend Requests' />
      <View style={styles.friendsView} >
        <Text style={styles.textFriends} >Friend Request</Text>
      </View>
    </>
  )
}

export default FriendRequest

const styles = StyleSheet.create({
  friendsView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textFriends: {
    fontSize: 20,
    color: 'black',
    fontWeight: '400'
  }

})