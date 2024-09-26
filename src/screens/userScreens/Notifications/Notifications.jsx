import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Notifications = () => {
  return (
    <View style  ={styles.notificationView}>
      <Text style = {styles.textNotifications} >Notifications</Text>
    </View>
  )
}

export default Notifications

const styles = StyleSheet.create({
    notificationView : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center'
    },
    textNotifications : {
        color : 'black',
        fontSize : 20,
        fontWeight : '400'
    }
})