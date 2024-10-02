import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from "./styles"
import ScreenTopBar from '../../../components/ScreenTopBar/ScreenTopBar'
import Icon from 'react-native-vector-icons/Ionicons';
import FacebookButton from '../../../components/FacebookButton/FacebookButton';

const Notifications = ({ navigation }) => {
  const notifications = [
    {
      id: 1,
      message: 'Friend 3 has birthday today',
      picture: require("../../../assets/images/group1.jpg"),
      time: '2h ago',
      status: false
    },
    {
      id: 2,
      message: 'Friend 1 posted 2 links',
      picture: require('../../../assets/images/friend1.jpg'),
      time: '14h ago',
      status: true
    },
    {
      id: 3,
      message: 'Friend 1 commented on friend post',
      picture: require('../../../assets/images/friend1.jpg'),
      time: '5h ago',
      status: true
    },
    {
      id: 4,
      message: "Friend 2 shared friend 1's post",
      picture: require("../../../assets/images/friend2.jpg"),
      time: '1d',
      status: false
    },
    {
      id: 5,
      message: 'Friend 2 commented on your profile photo',
      picture: require("../../../assets/images/friend2.jpg"),
      time: '2d',
      status: false
    },
    {
      id: 6,
      message: 'Friend 3 had birthday yesterday',
      picture: require("../../../assets/images/group2.jpg"),
      time: '2d',
      status: true
    }
  ]

  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 30 }} >
      <ScreenTopBar title='Notifications' />
      <Text style={styles.notificationHeadingText} >Earlier</Text>
      <View style={styles.notificationView}>
        {notifications?.map((notification) => {
          return (
            <TouchableOpacity key={notification.id} style={notification?.status ? styles.notificationDivRead : styles.notificationDiv}>
              <View style={styles.notificationSubDiv} >
                <Image source={notification.picture} style={styles.notificationDp} />
                <View style={styles.notificationTextDiv}>
                  <Text style={styles.notificationText} >{notification.message}</Text>
                  <Text style={styles.notificationTimeText} >{notification.time}</Text>
                </View>
              </View>

              <Icon name='ellipsis-horizontal' size={20} color='grey' />

            </TouchableOpacity>
          )
        })}
        <FacebookButton text='See Previous Notifications' />
      </View>

    </ScrollView>
  )
}

export default Notifications

