import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenTopBar from '../../../components/ScreenTopBar/ScreenTopBar'
import styles from './styles'
import ConfirmButton from '../../../components/ConfirmButton/ConfirmButton'
import DeleteButton from '../../../components/DeleteButton/DeleteButton'
import FriendRequestBubbles from '../../../components/FriendRequestBubbles/FriendRequestBubbles'

const FriendRequest = ({ navigation }) => {
  const friends = [
    {
      id: 1,
      name: 'John',
      mutualfriends: 1,
      image: require('../../../assets/images/request1.jpg')
    },
    {
      id: 2,
      name: 'John',
      mutualfriends: 3,
      image: require("../../../assets/images/request2.jpg")
    },
    {
      id: 3,
      name: 'John',
      mutualfriends: 2,
      image: require("../../../assets/images/request3.jpg")
    },
    {
      id: 4,
      name: 'John',
      mutualfriends: 10,
      image: require("../../../assets/images/request4.jpg")
    },
    {
      id: 5,
      name: 'John',
      mutualfriends: 13,
      image: require("../../../assets/images/request5.jpg")
    },
    {
      id : 6,
      name : 'John',
      mutualfriends : 8,
      image : require("../../../assets/images/friend1.jpg")
    }
  ]

  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 30 }} >
      <ScreenTopBar title='Friend Requests' />

      <View style={styles.friendsView} >
        <FriendRequestBubbles />
        {
          friends.map((friend) => {
            return (
              <View key={friend.id} style={styles.friendReqDiv}>
                <Image source={friend.image} style={styles.friendReqDp} />
                <View style={styles.friendReqInfoDiv} >
                  <Text style={styles.friendReqName} >{friend.name}</Text>
                  <Text style={styles.friendReqMutual} >{friend.mutualfriends} mutual friends </Text>
                  <View style={styles.friendRequestBtnDiv} >
                    <ConfirmButton style={{ width: '50%' }} />
                    <DeleteButton style={{ width: '50%' }} />
                  </View>
                </View>
              </View>
            )
          })
        }
      </View>
    </ScrollView>
  )
}

export default FriendRequest

