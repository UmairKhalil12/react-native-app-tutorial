import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { scale } from 'react-native-size-matters';


const FriendRequestBubbles = () => {
    return (
        <View style={styles.friendRequestBubbleDiv} >
            <Text style={styles.friendReqBubble}>
                <Icon name="ellipse" size={15} style={styles.onlineDot} />
                {' '}
                2 Online
            </Text>
            <Text style={styles.friendReqBubble} >Suggestions</Text>
            <Text style={styles.friendReqBubble} >Your Friends</Text>
        </View>
    )
}

export default FriendRequestBubbles

const styles = StyleSheet.create({
    friendRequestBubbleDiv: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '95%',
        margin: scale(10),
    },
    friendReqBubble: {
        padding: scale(10),
        backgroundColor: '#DCDCDC',
        color: 'black',
        borderRadius: scale(50),
        flexDirection: 'row',
        alignItems: 'center',
    },
    onlineDot: {
        fontSize: scale(10),
        color : 'green'
    }
})